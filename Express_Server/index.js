const express = require("express")

const app = express()

//cria o servidor
const porta = 3001
app.listen(porta, function()){
    console.log(`Servidor rodando na porta: ${porta}`);
}

app.get("/", function(req, resp){
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body> 
                <h1>Teste Node Express /</h1>
            </body>
        </html>
        `
    )
})