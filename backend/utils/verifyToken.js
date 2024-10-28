import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    }

    req.user = user; // Attach user info to the request
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // Check if user ID exists or if the user is an admin
    if (req.user && (req.user.id || req.user.role === "admin")) {
      return next(); // Proceed if user ID exists or if the user is an admin
    } else {
      return res
        .status(403)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // Check if user role is admin
    if (req.user.role === "admin") {
      return next();
    } else {
      return res
        .status(403)
        .json({ success: false, message: "You're not authorized" });
    }
  });
};
