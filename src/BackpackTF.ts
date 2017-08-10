import {Client} from "./Client";
import {Pulse} from "./Commands/Automatic/Pulse";
import {NotifyOfferCompleted} from "./Commands/Automatic/NotifyOfferCompleted";

module.exports = {
    Client: Client,
    Automatic: {
        Pulse: Pulse,
        NotifyOfferCompleted: NotifyOfferCompleted,
    }
};