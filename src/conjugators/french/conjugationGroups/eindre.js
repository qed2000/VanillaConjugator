import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Eindre extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (ending) => ending[5] === 'indre'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbFuture = this.getRoot(verb, 2); // -ind-
        const verbRoot = this.getRoot(verb, 3); // -in-
        const verbRoot2 = `${ this.getRoot(verb, 4) }gn`; // -ign-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }t`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbFuture }r` });

        this.imperative = new Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Conditional({ root1: `${ verbFuture }r` });

        this.imperfect = new Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new ImperfectSubjunctive({ root1: verbRoot2, type: 'i' });

        this.simplePast = new SimplePast({ root1: verbRoot2, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
