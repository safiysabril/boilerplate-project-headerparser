const getIPAddress = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const lang = req.headers['accept-language'];
    const sw = req.headers['user-agent'];

    res.json({ 
        ipaddress: ip,
        language: lang,
        software: sw
    });
};

module.exports = { getIPAddress };