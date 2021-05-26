var connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query(
            "selecto all form"
        )
    }
}


module.exports = new DB(connection);