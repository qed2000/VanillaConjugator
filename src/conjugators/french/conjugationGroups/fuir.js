import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Fuir extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (ending) => ending[4] === 'fuir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 2); // -fu-
        const verbRoot = `${ verbRootSimple }i`; // -fui-
        const verbRoot2 = `${ verbRootSimple }y`; // -fuy-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = verbRoot;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: verb });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
