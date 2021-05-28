const express = require ("express");
const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send('hola a todos ')
})


app.listen(port, () => console.log("servidor corriendo en el puierto3000"))
