// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
class Router {
    constructor() {
        this.urls = {}
    }
    // Helper method for making a unique key for the given URL.
    // If the list of URL bindings ever got large, it would be quicker as a key/value lookup than looking through an array.
    // Not necessary for this challenge but I felt an urge to write it anyway lol
    private static getKey(route, method) {
        return `${route}${method}`
    }
    // Helper method called when binding already exists,
    // in which case only the callback function value is updated.
    modify(binding, callback) {
        this.urls[binding].callback = callback
    }
    // Create a new url request and callback function binding.
    bind(route, method, callback) {
        const binding = Router.getKey(route, method)

        if (binding in this.urls) {
            this.modify(binding, callback)
        }
        else {
            this.urls[binding] = {route, method, callback}
        }
    }
    // Execute the callback function for the given URL.
    runRequest(reqRoute, reqMethod) {
        const binding = Router.getKey(reqRoute, reqMethod)
        if (binding in this.urls) {
            return this.urls[binding].callback()
        }
        return "Error 404: Not Found"
    }
}