const { default: routes } = require("./routes");

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTueb";
    res.locals.routes = routes;
    next();
};
