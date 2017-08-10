import {AxiosResponse} from "axios";
import {Command} from "./Commands/Command";
const axios = require("axios");

export class Client {
    private options: Options;

    constructor(options: Options = {}) {
        this.options = options;

        if (this.options.baseUri === undefined)
            this.options.baseUri = "https://backpack.tf";
    }

    async run(command: Command): Promise<AxiosResponse> {
        let params = command.getParams();

        // backpack.tf client API key
        if (this.options.apikey !== undefined)
            params.apikey = this.options.apikey;

        // user token
        if (this.options.token !== undefined)
            params.token = this.options.token;

        // Automatic client version parameter (deprecated)
        if (this.options.version !== undefined)
            params.version = this.options.version;

        const url = this.options.baseUri + command.getURI();

        return await axios({
            method: command.getMethod(),
            url: url,
            data: params
        })
    }
}

export interface Options {
    baseUri?: string,
    apikey?: string,
    token?: string,
    version?: string
}