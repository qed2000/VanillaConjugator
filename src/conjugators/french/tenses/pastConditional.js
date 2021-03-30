import { HelperVerb } from './helperVerb';

export class PastConditional extends HelperVerb {
    constructor(options) {
        super({
            name: 'Conditionnel Passé',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'conditional',
            reflexive: options.reflexive
        });
    }
}
