const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
//Body: entender o json
app.use(express.json())
app.use(routes)


app.listen(3333)


// 1h e 11 min do backend
