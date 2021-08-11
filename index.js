const rp = require('request-promise')
const Entry = require('./entry.js')
const fs = require('fs')
const { parseProxies } = require('./utilities.js')

// Reads emails and proxies from text files
const emails = fs.readFileSync('./emails.txt', 'utf8').split('\n')
const proxies = parseProxies(fs.readFileSync('./proxies.txt', 'utf8').split('\n'))
const len = emails.length // Collects length to determine entry count

for (i = 0; i < len; i++) {
    var entry = new Entry(emails, proxies)
    var proxyReq = rp.defaults({ proxy: entry.proxy })
    proxyReq({
        method: 'POST',
        url: entry.url,
        body: entry.body,
        json: true,
        headers: entry.headers,
        resolveWithFullResponse: true
    }).then((res) => {
        console.log(res.body)
        console.log(res.statusCode === 200 ? '\x1b[32mEntry Submitted\x1b[0m' : '\x1b[31mEntry Error\x1b[0m')
    }).catch((err) => {
        console.log('\x1b[31mEntry Error - Likely IP\x1b[0m')
    })
}