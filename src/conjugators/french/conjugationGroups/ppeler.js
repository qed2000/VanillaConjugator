import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Ppeler extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (verb) => verb.endsWith('ppeler') || verb.endsWith('épeler') || verb.endsWith('nouveler')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 2) }l`; // -ppell
        const verbRoot2 = this.getRoot(verb, 2); // -ppel

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot2 }é`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'eese' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }er` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }er` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'a' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'a' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
