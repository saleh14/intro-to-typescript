import * as OptionsParser from '../OptionParser';
import { DEFAULT_ENCODER, encoders } from '../encoders';

const TEST_INPUT = 'Sufficiently complicated phrase!';

describe('OptionsParser', () => {
    it('is define', () => {
        expect(OptionsParser).toBeDefined();
    })

    it('can pass input to Options', () => {
        expect(OptionsParser.fromArg([TEST_INPUT]).input).toBe(TEST_INPUT);
    })

    it('defaults decode option to false', () => {
        expect(OptionsParser.fromArg([TEST_INPUT]).decode).toBe(false);
    })

    it('defaults correct encoding type', () => {
        expect(OptionsParser.fromArg([TEST_INPUT]).encoding).toBe(DEFAULT_ENCODER);
    })
})