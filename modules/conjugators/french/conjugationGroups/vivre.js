import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Vivre extends FullConjugation {
    static rule = {
        priority: 100,
        test: (verb) => verb.endsWith('vivre')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 3); // -vi-
        const verbRoot2 = `${ verbRoot }v`; // -viv-
        const verbRoot3 = `${ this.getRoot(verb, 4) }éc`; // -véc-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot3 }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot2 }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot3, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot3, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}