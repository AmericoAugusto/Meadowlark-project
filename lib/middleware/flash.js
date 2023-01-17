module.exports = (req, res, next) => {
    // se houver msg flash, transfira-a ara o contexto e depois remova
    res.locals.flash = req.session.flash
    delete req.session.flash
    next()
}