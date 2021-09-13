import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Tenir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 4); // -t-
        const verbRoot = `${ verbRootSimple }ien`; // -tien-
        const verbRoot2 = this.getRoot(verb, 2); // -ten-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot2 }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }dr` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }dr` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: `${ verbRoot }n`, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'in' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'in' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
