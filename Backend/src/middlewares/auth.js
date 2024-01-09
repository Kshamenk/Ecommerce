

const jwt = require("jsonwebtoken")
const moment = require("moment")


function isAuth (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({message: "no tienes autorizacion"})
    }
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token)

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({message: "el Token ha expirado"}) 
    }
    req.user = payload.sub
    next()
}

module.export = isAuth