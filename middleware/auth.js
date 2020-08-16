const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res,next) {
    const token  = req.header('auth-token');

    if(!token) return res.status(401).json({msg: 'Token not found, Unauthorized'});
    
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.student = decoded;
        next();
    } catch (err) {
        res.status(400).json({msg: 'Not a valid token'})
    }
    
}

module.exports = auth;