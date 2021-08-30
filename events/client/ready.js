const mongoose = require("mongoose")
const {
    mongooseConnectionString,
    prefix
} = require('../../config.json')

module.exports = async (client) => {
    console.log(`Connected to: [ ${client.user.tag} ] | PID: ${process.pid} | Total Commands: ${client.commands.size}`)
    client.user.setPresence({
        status: "dnd",
        activities: [{
            name: `${prefix}help | ${client.users.cache.size} users`,
            type: 'WATCHING'
        }]
    })

    /* connects to mongo db */
    mongoose.connect(mongooseConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        keepAlive: true,
    }).then(console.log("Mongoose has successfully connected!"))
};