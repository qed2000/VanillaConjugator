import { HelperVerb } from './helperVerb.js';

export class Pluperfect extends HelperVerb {
    constructor(options) {
        super({
            name: 'Plus-que-Parfait',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'imperfect',
            reflexive: options.reflexive
        });
    }
}
