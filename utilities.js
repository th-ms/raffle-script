const randomUseragent = require('random-useragent')
const fs = require('fs')
const randomName = require('random-name')

// Returns random User-Agent
exports.userAgent = () => {return randomUseragent.getRandom()}

// Returns random proxy from proxy array
exports.getProxy = (proxies) => {
    if (proxies.length === 0) return ''
    var rand = Math.floor(Math.random() * proxies.length)
    return proxies.splice(rand, 1)[0].trim()
}

// Returns random first or last name
exports.firstName = () => {return randomName.first()}
exports.lastName = () => {return randomName.last()}

// Returns the email for the entry to use
exports.getEmail = (emails) => {
    var rand = Math.floor(Math.random() * emails.length)
    return emails.splice(rand, 1)[0].trim()
}

function getUSShoe() {
    var sizes = [
        '4.5',
        '5',
        '5.5',
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
        '10.5',
        '11',
        '11.5',
        '12',
        '12.5',
        '13',
        '13.5',
        '14',
        //'14.5',   // Comment out sizes as needed depending upon known size availability
        //'15'
    ]
    return sizes[Math.floor(Math.random() * sizes.length)]
}

function getEUShoe() {
    // I don't really know what EU size runs are usually like for releases, so please edit if using EU sizing
    var sizes = [
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '44.5',
        '45',
        '46',
        '47',
        '48',
        //'49'  // Comment out sizes as needed depending upon known size availability
    ]
    return sizes[Math.floor(Math.random() * sizes.length)]
}

function getCustomSize() {
    // Edit sizes array to include whatever size elements you need
    var sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
    ]
    return sizes[Math.floor(Math.random() * sizes.length)]
}

exports.parseProxies = (proxies) => {
    var parsedList = []
    if (proxies[0].trim().length === 0) return []
    for (var proxy in proxies) {
        [SERVER, PORT, USER, PASSWORD] = proxies[proxy].split(':')
        parsedList.push(`http://${USER.trim()}:${PASSWORD.trim()}@${SERVER.trim()}:${PORT.trim()}`)
    }
    return parsedList
}

// Returns random shoe size
// Type 0 --> US shoe size
// Type 1 --> EU shoe size
// Type 2 --> Clothing/Misc sizing
exports.getSize = (type = 0) => {
    switch (type) {
        case 0:
            return getUSShoe()
            break
        case 1: 
            return getEUShoe()
            break
        case 2: return getCustomSize()
            break
    }
}