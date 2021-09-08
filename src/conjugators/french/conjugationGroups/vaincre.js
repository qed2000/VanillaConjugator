import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Vaincre extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 3); // -vain-
        const verbRoot = this.getRoot(verb, 2); // -vainc-
        const verbRoot2 = `${ verbRootSimple }qu`; // -is-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'ss' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
