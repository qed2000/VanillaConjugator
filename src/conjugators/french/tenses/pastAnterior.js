import { HelperVerb } from './helperVerb';

export class PastAnterior extends HelperVerb {
    constructor(options) {
        super({
            name: 'Passé Antèrieur',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'simplePast',
            reflexive: options.reflexive
        });
    }
}
