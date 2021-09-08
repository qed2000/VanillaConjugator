import { HelperVerb } from './helperVerb.js';

export class PluperfectSubjunctive extends HelperVerb {
    constructor(options) {
        super({
            name: 'Plus-que-Parfait de Subjonctif',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'imperfectSubjunctive',
            reflexive: options.reflexive
        });
    }
}
