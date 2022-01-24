const DataAccessObject = require("../utils/dao");
const shuffle = require("../utils/shuffle");

exports.createSantaReceiver = async (req, res) => {
    try{
        const santasArr = await DataAccessObject.getAll("users", { select: "id" });
        const receiversArr = await DataAccessObject.getAll("users", { select: "id" });
        const santaReceiversArr = [];
        shuffle(receiversArr);

        for(let i = 0; i < santasArr.length; i++){
            const santaReceiver = {
                santa_id: santasArr[i].id,
                receiver_id: receiversArr[i].id
            }

            await DataAccessObject.createOne("santa_receiver", santaReceiver);

            santaReceiversArr.push(santaReceiver);
        }

        res.status(200).json({
            status: "success",
            data: {
                santa_receivers: santaReceiversArr
            }
        });
    } catch(err) {
        console.error(err);
    }
}

exports.getSantaReceiver = async (req, res) => {
    try{
        const santaReceiver = await DataAccessObject.getOne("santa_receiver", { santa_id: req.params.santa_id });

        if(!santaReceiver){
            return res.status(404).json({
                status: "fail",
                message: "Santa-Receiver couple with that id was not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                santaReceiver
            }
        });
    } catch(err) {
        console.error(err);
    }
}

exports.deleteAllSantaReceivers = async (req, res) => {
    try{
        await DataAccessObject.deleteAll("santa_receiver");
        res.status(200).json({ 
            status: "success",
            message: "All Santa-Receiver couples have been deleted successfully!" 
        });
    } catch(err) {
        console.error(err);
    }
}