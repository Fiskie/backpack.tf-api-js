const Pulse = require('../dist/commonjs/commands/Automatic/Pulse').Pulse;
const NotifyOfferCompleted = require("../dist/commonjs/commands/Automatic/NotifyOfferCompleted").NotifyOfferCompleted;

const expect = require("chai").expect;
const printf = require("printf");

describe("automatic-commands", function() {
    it("Pulse / IHeartBeat", function() {
        const cmd = new Pulse("1234", "abcd");

        expect(cmd.getMethod()).to.equal("POST");
        expect(cmd.getURI()).to.equal('/api/IAutomatic/IHeartBeat');

        const params = cmd.getParams();
        expect(params.buy_orders).to.equal(true);
        expect(params.etag).to.equal("abcd");
        expect(params.steamid).to.equal("1234");
    });

    it("NotifyOfferCompleted / IOfferDetails", function() {
        const cmd = new NotifyOfferCompleted("1234", "offerid", "hello world");

        expect(cmd.getMethod()).to.equal("POST");
        expect(cmd.getURI()).to.equal('/api/IAutomatic/IOfferDetails');

        const params = cmd.getParams();
        expect(params.message).to.equal("hello world");
        expect(params.offer).to.equal("offerid");
    });
});
