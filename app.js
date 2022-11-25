let express = require('express')
let app = express()

app.get('/', async (request, response) => {
    response.json({msg: "hello world"})
})

app.get('/test', async (request, response) => {
    response.json({msg: "test hello world"})
})

let server = app.listen(3000, function () {
	console.log("App listening at port 3000")
})