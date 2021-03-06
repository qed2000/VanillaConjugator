import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Faillir extends FullConjugation {
    static rule = {
        priority: 100,
        test: (ending) => ending[7] === 'faillir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2); // -faill

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }i`;
        this.presentParticiple.value = `${ verbRoot }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, type: 'eese' });

        this.future = new Tenses.Future({ root1: verb });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verb });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
