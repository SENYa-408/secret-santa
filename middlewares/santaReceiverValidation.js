const DataAccessObject = require("../utils/dao");

module.exports = async (req, res, next) => {
    try{
        const santaReceivers = await DataAccessObject.getAll("santa_receiver");
        const totalUsers = await DataAccessObject.getAll("users", { select: "id" });
    
        if(santaReceivers.length != 0){
            return res.status(400).json({
                status: "fail",
                message: "Santa-Receiver couples have already been defined"
            });
        }

        if(totalUsers.length < 3){
            return res.status(400).json({
                status: "fail",
                message: `Can't shuffle: need at least 3 players`
            });
        }

        next();
    } catch(err){
        console.error(err);
    }
}