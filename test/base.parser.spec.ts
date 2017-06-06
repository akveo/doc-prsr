import { BaseParser } from '../src/base-parser';
import { Calculator } from './calculator';
import * as test from "tape";



test("Math test", (t) => {
    t.equal(4, 2 + 2);
    t.true(5 > 2 + 2);

    t.end();
});