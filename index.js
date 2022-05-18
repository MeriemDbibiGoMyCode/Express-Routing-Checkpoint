const express = require("express");
const app = express();
const port = 5000;
const {addDate}=require('./Middleware/date')



app.use(addDate);
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/Pages/home.html")
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/Pages/contact.html")
})
app.get('/services',(req,res)=>{
    res.sendFile(__dirname+"/Pages/services.html")
})


app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("réussi");
    }
  });
  