import { HelperVerb } from './helperVerb';

export class FutureAnterior extends HelperVerb {
    constructor(options) {
        super({
            name: 'Futur Antèrieur',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'future',
            reflexive: options.reflexive
        });
    }
}
