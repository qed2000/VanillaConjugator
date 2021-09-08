import { HelperVerb } from './helperVerb.js';

export class PastSubjunctive extends HelperVerb {
    constructor(options) {
        super({
            name: 'Subjonctif Passé',
            helper: options.helper,
            pastParticiple: options.pastParticiple,
            tense: 'subjunctive',
            reflexive: options.reflexive
        });
    }
}