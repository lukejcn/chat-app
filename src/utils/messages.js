const moment = require('moment')

const generateMessage = (text, username) => {
    return {
        text,
        createdAt: moment().format('H:mm'),
        username
    }
}

const generateLocationMessage = (lat, lon, username) => {
    return {
        url: `https://google.com/maps?q=${lat},${lon}`,
        createdAt: moment().format('H:mm'),
        username
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}