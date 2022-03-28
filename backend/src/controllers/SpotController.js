const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        //get the spots by a filter, which is a tech
        const { tech } = req.query;
        const spots = await Spot.find({ techs: tech });
        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        const user = User.findById(user_id);

        if(!user) {
            return res.status(400).json({ error: "User does not exist" });
        }
        const spot = await Spot.create({
            user_id: user_id,
            thumbnail: filename,
            company: company,
            price: price,
            techs: techs.split(',').map(tech => tech.trim()) //Its an array, remove spaces with trim
        });

        return res.json(spot);
    }
};