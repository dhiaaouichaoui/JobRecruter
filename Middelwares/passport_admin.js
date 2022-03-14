const { Strategy, ExtractJwt } = require("passport-jwt");
const passport = require("passport");
const SECRET = process.env.APP_SECRET;
const User = require("../Models/User");
const res = require("express/lib/response");

var options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

passport.use(
  new Strategy(options, async ({ id }, done) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        //return  new Error("User not found.");
        return done(null, user);
      }

      if (user.role === "admin") {
        return done(null, user);
      } else {
        /* throw new Error("User not admin."); */

        done(null, false);
      }
    } catch (error) {
      done(null, error.message);
    }
  })
);
