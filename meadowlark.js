const express = require('express') // importando o express de node_modules
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000
const app = express()
const fortune = require('./lib/fortune')

// configura o view engine handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.get('/', (req,res) => res.render('home')) // get para adicionar rota. A função que eu forneci será chamada quando a rota for acionada
   
app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
})
// get para adicionar rota. A função que eu forneci será chamada quando a rota for acionada

app.use(express.static(__dirname + '/public'))

//página 404 personalizada
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})
// página 500 personalizada
app.use((err, req, res, next) => { //middleware
    console.log(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; 
    press Ctrl + C to terminate.`
))