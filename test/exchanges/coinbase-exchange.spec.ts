

import {Test, Expect} from "alsatian";
import {CoinbaseExchange} from "../../src/exchanges/coinbase-exchange";

export class CoinbaseExchangeSpec {

    @Test()
    public exampleTest() {
        const cb = new CoinbaseExchange();
        Expect(cb.coinbase)
            .toBeTruthy()
        ;
    }
}