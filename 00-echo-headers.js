const express = require('express') // importando o express de node_modules
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000
const app = express()

app.get('/headers', (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers).map(([key, value]) => `${key}: ${value}`)
    res.send(headers.joins('\n'))
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; 
    press Ctrl + C to terminate.`
))
