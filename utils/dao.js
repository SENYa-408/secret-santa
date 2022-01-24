const knex = require("../db/db");

class DataAccessObject {
    createOne = async (Table, obj) => {
        try{
            return await knex(Table).insert(obj);
        } catch(err) {
            console.error(err);
        }
    }
    getAll = async (Table, options) => {
        try{
            if(!options) return await knex(Table).select("*");
            if(options.filter && options.select) return await knex(Table).where(options.filter).select(options.select);
            if(options.filter) return await knex(Table).where(options.filter).select();
            if(options.select) return await knex(Table).select(options.select);
        } catch(err) {
            console.error(err);
        }
    }
    getOne = async (Table, options) => {
        try{
            return await knex(Table).where(options).first();
        } catch(err) {
            console.error(err);
        }
    }
    deleteAll = async (Table) => {
        try{
            return await knex(Table).del();
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = new DataAccessObject();