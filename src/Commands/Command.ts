export interface Command {
    /**
     * The HTTP request variable (POST, GET, PUT, etc).
     */
    getMethod(): string

    /**
     * The path to the resource, ex: /api/classifieds/IHeartBeat
     */
    getURI(): string

    /**
     * An object containing the parameters for the request.
     * If method is GET, this will be changed to a query string.
     * Otherwise, it will be used as the POST body.
     */
    getParams(): any
}