const DataAccessObject = require("../utils/dao");

module.exports = async (req, res, next) => {
    try{
        req.body.first_name = req.body.first_name.trim();
        req.body.second_name = req.body.second_name.trim();
        req.body.address = req.body.address.trim();
        for(index in req.body.wishlist){
            req.body.wishlist[index] = req.body.wishlist[index].trim();
        }

        const { first_name, second_name, address, wishlist } = req.body;
        const totalUsers = await DataAccessObject.getAll("users", { select: "id" });

        if(!first_name || !second_name || !address || !wishlist){
            return res.status(400).json({
                status: "fail",
                message: "first_name, second_name, address and wishlist must be defined"
            });
        }

        if(wishlist.length > 10){
            return res.status(400).json({
                status: "fail",
                message: "Wishlist must containt 10 or less wishes"
            });
        }

        if(totalUsers.length == process.env.MAX_PLAYERS){
            return res.status(400).json({
                status: "fail",
                message: "Max players limit reached"
            });
        }

        next();
    } catch(err){
        console.error(err);
    }
}