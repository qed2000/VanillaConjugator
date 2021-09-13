import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Naitre extends FullConjugation {
    static rule = {
        priority: 100,
        test: (verb) => verb.endsWith('naître') || verb.endsWith('naitre')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 3); // -nai-
        const verbRoot2 = `${ verbRoot }ss`; // -naiss-
        const verbRoot3 = this.getRoot(verb, 5); // -n-
        const verbRoot4 = `${ verbRoot3 }aqu`; // -naqu-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot3 }é`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }tr` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }tr` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot4, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot4, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
