import { base64encoder } from "./base64encode";
import { urlencoder } from "./urlencoder";

const ENCODER_B64 = 'base64';
const ENCODER_URL = 'url';



export const DEFAULT_ENCODER = ENCODER_B64;

export const encoders = {
    [ENCODER_B64]: base64encoder,
    [ENCODER_URL]: urlencoder
};