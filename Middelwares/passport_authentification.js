const {Strategy,ExtractJwt } =  require('passport-jwt');
const passport = require('passport');
const SECRET = process.env.APP_SECRET;
const User = require('../Models/User');

var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
};
passport.use(
    new Strategy(options, async ({ id },done)=>{
        try {
            const user = await User.findById(id);
            if (!user){
                throw new Error('User not found');
            }
            return done(null, user);
        } catch (error) {
            done(null,error.message);
        }
    })
);