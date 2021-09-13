import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Mourir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 5) }eur`; // -meur-
        const verbRoot2 = this.getRoot(verb, 2); // -mour-
        const verbRoot3 = `${ this.getRoot(verb, 4) }rt`; // -mort-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = verbRoot3;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot2 }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
