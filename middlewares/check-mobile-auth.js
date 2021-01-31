const jwt = require("jsonwebtoken");
const MobileUser = require("../models/mobile");

const checkMobileAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "Not authenticated" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const device_id = req.headers.device_id;

    if (!token) {
      return res.status(403).json({ message: "Not authenticated" });
    }

    const decodedToken = jwt.verify(token, process.env.APP_SECRET);

    let deviceIsMatch;
    try {
      deviceIsMatch = await MobileUser.findOne({
        where: {
          id: decodedToken.id,
          device_id: device_id,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(403).json({ message: "Not authenticated" });
    }

    if (!deviceIsMatch || (deviceIsMatch.device_id !== device_id)){
      return res.status(403).json({ message: "Not authenticated" });
    };

    req.data = decodedToken;
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Not authenticated" });
  }

  next();
};

module.exports = checkMobileAuth;
