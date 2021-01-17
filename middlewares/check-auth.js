const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  let token;

  if (!req.headers.authorization) {
    return res.status(403).json({ message: "Not authenticated" });
  }

  try {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Not authenticated" });
    }

    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    req.data = decodedToken;
  } catch (err) {
    return res.status(403).json({ message: "Not authenticated" });
  }

  next();
};

module.exports = checkAuth;
