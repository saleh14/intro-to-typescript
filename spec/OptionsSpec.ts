require('source-map-support').install();
import { Options } from '../Options';

const TEST_INPUT = 'Sufficiently complicated phrase!';

describe('Options', () => {
    it('is defined', () => {
        expect(Options).toBeDefined();
    })

    it('should require input', () => {
        expect(() => new Options(undefined, undefined))
            .toThrowError('Please pass an input string to encode');
    })

    it('should require encoding argument', () => {
        expect(() => new Options(TEST_INPUT, { encoding: undefined, decode: undefined }))
            .toThrowError('Please pass a valid encoding options');
    })
})

