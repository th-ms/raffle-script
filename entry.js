const util = require('./utilities.js')

// Entry class contains all data for requests
class Entry {
    constructor(emails, proxies) {

        // Add necessary headers here
        this.headers = {
            "user-agent": util.userAgent(),
        }

        // Entry proxy is defined here
        this.proxy = util.getProxy(proxies)

        // Add body requirements here
        this.body = {
            "shoe_size": util.getSize(0), // 0-->US shoe  1-->EU shoe   2-->Custom sizing (default clothing)
            "first_name": util.firstName(),
            "last_name": util.lastName(),
            "email": util.getEmail(emails)
        }

        // Define the entry endpoint here
        this.url = "https://data-collection-server.herokuapp.com/api/submit"
    }
}

module.exports = Entry