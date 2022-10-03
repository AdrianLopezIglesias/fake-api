const express = require('express')
const app = express()
const port = 3001


app.get('/success', (req, res) => {
    res.send({ success: true })
})
app.post('/success', (req, res) => {
    res.json({ success: true })
})
app.get('/fail', (req, res) => {
    res.status(500).send("error")
})
app.post('/fail', (req, res) => {
    res.status(500).send("error")
})
app.post('/newsletter*', (req, res) => {
    console.log("newsletter post requested")
    res.json({ blogSubscription: true, newsletterSubscription: true })
})
app.get('/newsletter*', (req, res) => {
    console.log("newsletter get requested")
    res.json({ blogSubscription: true, newsletterSubscription: true })
})

app.get('/products', (req, res) => {
	let productId = req.query.ids
	res.json({ 
		status:"success",
		message:"products found",
		data:[
			{"productId":productId,
			"title":"SAINT LAURENT Suede Rock 40 Stars Ankle Boots 35 Black",
			"brand":"Saint Laurent",
			"titleWithoutBrand":"Suede Rock 40 Stars Ankle Boots 35 Black",
			"image":{"thumb":"https:\/\/stage-images.fashionphile.com\/thumb\/08d24e07f8a7ebb21d500880e49ca1fa\/4a5b59cc9096011c4019b714a74a2b3b.jpg","main":"https:\/\/stage-images.fashionphile.com\/main\/08d24e07f8a7ebb21d500880e49ca1fa\/4a5b59cc9096011c4019b714a74a2b3b.jpg","large":"https:\/\/stage-images.fashionphile.com\/large\/08d24e07f8a7ebb21d500880e49ca1fa\/4a5b59cc9096011c4019b714a74a2b3b.jpg"},
			"price":"230.00",
			"discountedPrice":"185.00",
			"quantity":138,
			"eligibleForBuyback":false,
			"eligibleForLayaway":true,
			"condition":"very_good",
			"isGiftCard":false,
			"sku":"BW",
			"madeAvailableAt":"2022-04-02 09:47:19",
			"soldAt":null,
			"shipsWith":"",
			"productCategories":[168,192,558,206,349,378,164,660,677],"subCategories":[{"id":168,"name":"Shoes"},{"id":192,"name":"Black"},{"id":558,"name":"Womens"},{"id":206,"name":"Suede Leather"},{"id":349,"name":"35"},{"id":378,"name":"Boots & Booties"},{"id":660,"name":"The Clearance Sale"},{"id":677,"name":"Our Gift to You"}],
			"isRequested":false,
			"slug":"\/p\/saint-laurent-suede-rock-40-stars-ankle-boots-35-black-684721","weight":1,"width":0,"height":0,"length":0,
			"warehouseId":54,
			"primaryCategory":"Shoes",
			"isPurchasable":true,
			"isTooNewForLayaway":false
			}
		]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

