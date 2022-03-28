/*index give the list of sessions
show give a specific session
store when I want to store a session
update modify a session
destroy session */
const User = require('../models/User.js')

module.exports = {
    async store(req, res) {
        //const email = req.body.email;
        const { email } = req.body;
        let user;

        //this will create a user in mongoDB, await keyword needs to be used in a async method
        if(!await User.exists({ email }))
            user = await User.create({ email });
        else
            user = await User.find({ email });
        
        return res.json(user);
    }
}
