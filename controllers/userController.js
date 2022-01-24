const DataAccessObject = require("../utils/dao");

exports.createUser = async (req, res) => {
    try{
        const { first_name, second_name, address } = req.body;
        const user_id = (await DataAccessObject.createOne("users", {
            first_name,
            second_name,
            address
        }))[0];
        const user = await DataAccessObject.getOne("users", { id: user_id });

        user.wishlist = [];
        for(const wish of req.body.wishlist){
            await DataAccessObject.createOne("wishlist", {
                wish,
                user_id
            });

            user.wishlist.push((await DataAccessObject.getOne("wishlist", { wish, user_id })));
        }

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch(err) {
        console.error(err);
    }
}

exports.getUser = async (req, res) => {
    try{
        const user = await DataAccessObject.getOne("users", { id: req.params.id });

        if(!user){
            return res.status(404).json({
                status: "fail",
                message: "User not found"
            });
        }

        user.wishlist = await DataAccessObject.getAll("wishlist", { filter: { user_id: req.params.id } });

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch(err) {
        console.error(err);
    }
}

exports.deleteAllUsers = async (req, res) => {
    try{
        await DataAccessObject.deleteAll("users");
        await DataAccessObject.deleteAll("wishlist");
        res.status(200).json({ 
            status: "success",
            message: "All users have been deleted successfully!" 
        });
    } catch(err) {
        console.error(err);
    }
}