const addDate=(req,res,next)=>{
const date=new Date();
req.date=date;
const hour=date.getHours();
console.log(hour);

const day=date.getDay();
console.log(day);


if((day==0)||(day==6)||(hour<9)||(hour>17)){
    return res.send("application is not available")
}else {
    next();
}
}
module.exports={addDate}