import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Valoir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 4) }u`; // -vau-
        const verbRoot2 = this.getRoot(verb, 3); // -val-
        const verbRoot3 = `${ this.getRoot(verb, 4) }ill`; // -vaill-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot2 }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'x' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }dr` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 'x', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }dr` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot3, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
