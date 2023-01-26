exports.newsletter = (req, res) => {
    // valor fictício
    res.render('newsletter', {csrf: 'CSRF token goes here'})
}
exports.api = {
    newsletterSingup: (req, res) => {
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSRF token (from hidden form field): ' + req.body._csrf)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.send({ result: 'sucess'})
},
}

exports.setCurrency = (req,res) => {
    res.session.currency = req.params.currency
    return res.redirect(303, '/vacations')
}
function convertFromUSD(value, currency) {
    switch(currency) {
        case 'USD': return value * 1
        case 'GBP': return value * 0.79
        case 'BTC': return value * 0.000078
        default: return NaN
    }
}
exports.listVacation = (req, res) => {
    Vacation.find({ available: true}, (err, vacations) => {
        const currency = req.session.currency || 'USD'
        const context = {
            currency: currency,
            vacations: vacations.map(vacation => {
                return {
                    sku: vacation.sku,
                    name: vacation.name,
                    description: vacation.description,
                    inSeason: vacation.inSeason,
                    price: convertFromUSD(vacation.price, currency),
                    qty: vacation.qty
                }
            })
        }
        switch(currency){
            case 'USD': context.currencyUSD = 'selected'; break
            case 'GBP': context.currencyGBP = 'selected'; break
            case 'BTC': context.currencyBTC = 'selected'; break
        }
        res.render('vacations', context)
    })
}

exports.getVacationsApi = async (req,res) => {
    const vacations = await db.getVacations({ available: true})
    res.json(vacation)
}
exports.getVacationsBySkuApi = async (req,res) => {
    const vacations = await db.getVacationsBySku(req.params.sku)
    res.json({message: 'sucess'})
}

exports.addVacationsInSeasonListenerApi = async (req, res) => {
    await db.addVacationsInSeasonListener(req.params.sku, req.body.email)
    res.json({message: 'sucess'})
}
exports.requestDeleteVacationApi = async (req, res) => {
    const {email, notes} = req.body
    res.status(500).json({message: 'not yet implemented'})
}
