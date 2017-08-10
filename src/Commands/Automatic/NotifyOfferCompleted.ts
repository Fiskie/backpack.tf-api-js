import {Command} from "../Command"

export class NotifyOfferCompleted implements Command {
    private steamid;
    private offer;
    private message;

    constructor(steamid: string, offer: string, message: string) {
        this.steamid = steamid;
        this.offer = offer;
        this.message = message;
    }

    getMethod() {
        return "POST";
    }

    getURI() {
        return "/api/IAutomatic/IOfferDetails"
    }

    getParams() {
        return {
            steamid: this.steamid,
            offer: this.offer,
            message: this.message
        };
    }
}