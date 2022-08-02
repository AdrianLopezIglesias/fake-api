const express = require('express')
const app = express()
const port = 3000

app.get('/success', (req, res) => {
    res.send({ success: true })
})
app.post('/success', (req, res) => {
    res.json({ success: true })
})
app.post('/newsletter*', (req, res) => {
    console.log("newsletter post requested")
    res.json({ blogSubscription: true, newsletterSubscription: true })
})
app.get('/newsletter*', (req, res) => {
    console.log("newsletter get requested")
    res.json({ blogSubscription: true, newsletterSubscription: true })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

