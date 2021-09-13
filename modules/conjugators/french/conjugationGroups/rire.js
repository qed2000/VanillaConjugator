import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Rire extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 3); // -r
        const verbRoot = this.getRoot(verb, 2); // -ri
        const verbRoot2 = this.getRoot(verb, 1); // -rir

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }i`;
        this.presentParticiple.value = `${ verbRoot }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, type: 'sst' });

        this.future = new Tenses.Future({ root1: verbRoot2 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot2 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
