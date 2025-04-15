
const userLogin =(req,res)=>{
    console.log(req.body);
    res.send('recived');
}

module.exports={userLogin}