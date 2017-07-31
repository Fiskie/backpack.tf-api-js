import {Client} from "./Client";
import {Pulse} from "./commands/Automatic/Pulse";
import {NotifyOfferCompleted} from "./commands/Automatic/NotifyOfferCompleted";

module.exports = {
    Client: Client,
    Automatic: {
        Pulse: Pulse,
        NotifyOfferCompleted: NotifyOfferCompleted,
    }
};