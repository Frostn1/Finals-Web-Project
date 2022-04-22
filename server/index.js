const express = require("express")

const PORT = process.env.PORT || 3232
const app = express()

app.listen(PORT, () => {
    console.log(`[ Server online PORT : ${PORT}]`)
})

app.get("*", (req, res) => {
    console.log(req)
    res.send(req)
    
})

