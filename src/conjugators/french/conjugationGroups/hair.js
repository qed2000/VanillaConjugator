import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Hair extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 2) }i`; // -hai-
        const verbRoot2 = `${ this.getRoot(verb, 1) }ss`; // -haïss-
        const verbRoot3 = this.getRoot(verb, 1); // -haï-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = verbRoot3;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: verb });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verb });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot3, type: '' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot3, type: '' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
