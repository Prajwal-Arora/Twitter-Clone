const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect('mongodb+srv://admin:admin@tc0.ppf3d.mongodb.net/tcdb?retryWrites=true&w=majority')
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("Error " + err);
        })
    }
}

module.exports = new Database();
