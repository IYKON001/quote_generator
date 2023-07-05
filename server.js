const express = require("express");
const quote = require("./quote_bank")
const cors = require("cors")
require("dotenv").config();

const server = express();
server.use(cors());

//ROUTES
server.get("/generate-quote", (req, res) => {
    res.status(200).send({
        status: 'success',
        results: quote.length,
        data: {
            quote,
        }
    })
})

server.get("/generate-quote/:id", (request, response) => {

    

    if(request.params.id * 1 > quote.length){
        console.log(quote.length)
        return response.status(404).send({
            status: 'failed',
            message: 'invaild id'
        })
        
    } else {
        const id = request.params.id * 1;
        const quotes = quote.find((dog) => dog.id === id)
    
        response.status(200).send({
        status: 'success',
        data: {
            quote: quotes,
        }
        })
    }


});


//listening
server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT}`))







