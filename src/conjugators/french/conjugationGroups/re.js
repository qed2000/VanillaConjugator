import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Re extends FullConjugation {
    static rule = {
        priority: 100000,
        test: (verb) => verb.endsWith('re')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2);

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }u`;
        this.presentParticiple.value = `${ verbRoot }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, type: 'ss' });

        this.future = new Tenses.Future({ root1:`${ verbRoot }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
