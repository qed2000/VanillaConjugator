import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Courir extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (ending) => ending[6] === 'courir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2); // -cour
        const verbRoot2 = `${ verbRoot }r`;

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }u`;
        this.presentParticiple.value = `${ verbRoot }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, type: 'sst' });

        this.future = new Tenses.Future({ root1: verbRoot2 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot2 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
