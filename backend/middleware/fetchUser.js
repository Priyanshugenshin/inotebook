var jwt = require('jsonwebtoken');
const my_secreate = "ilovetoplaygenshin"

const fetchuser = async(req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error:"Please Authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token,my_secreate)   
        req.user = data.user
        next()
    } catch (error) {
    res.status(401).send({error:"Please Authenticate using a valid token"})
    }
}


module.exports = fetchuser;