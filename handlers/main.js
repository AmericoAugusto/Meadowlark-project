const fortune = require('../lib/middleware/fortune')

exports.home = (req,res) => res.render('home')

exports.about = (req, res) => {
    const fortune = fortune.getFortune()
    res.render('about', { fortune })
}