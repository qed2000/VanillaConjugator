import { HelperVerb } from './helperVerb.js';

export class Past extends HelperVerb {
    constructor(options) {
        super({
            name: 'Passé Composé',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'present',
            reflexive: options.reflexive
        });
    }
}
