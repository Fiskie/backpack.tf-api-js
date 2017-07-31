export class Pulse implements Command {
    private steamid;
    private etag;

    constructor(steamid: string, etag?: string) {
        this.steamid = steamid;
        this.etag = etag;
    }

    getMethod() {
        return "POST";
    }

    getURI() {
        return "/api/IAutomatic/IHeartBeat"
    }

    getParams() {
        return {
            steamid: this.steamid,
            buy_orders: true,
            etag: this.etag || null
        };
    }
}