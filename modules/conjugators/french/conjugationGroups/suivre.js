import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Suivre extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 3); // -sui-
        const verbRoot2 = `${ verbRoot }v`; // -suiv-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot2 }i`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot2 }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
