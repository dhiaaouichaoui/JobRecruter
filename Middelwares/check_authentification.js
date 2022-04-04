const jwt = require('jsonwebtoken');
const SECRET = process.env.APP_SECRET;

function check_auth(req,res,next){
    try {
        const token = req.headers['authorization'];
        if(!token){
            return res.status(403).json({message: 'no token'});
        }
        const decord = jwt.verify(token,SECRET);
        return res.status(200).json({
            message: 'auth',
            data: decord,
        });
        next();
    } catch (error) {
        return res.status(404).json({message: 'auth failed'});  
    }
}
module.exports = check_auth;