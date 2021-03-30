import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Oir extends FullConjugation {
    static rule = {
        priority: 10000,
        test: (verb) => verb.endsWith('oir')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const vRoot = this.getRoot(verb, 2);
        const verbRoot = `${ vRoot }i`;
        const verbRoot2 = `${ vRoot }y`;
        const verbRoot3 = this.getRoot(verb, 3);

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot3 }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot3 }err` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot3 }err` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot });

        this.subjunctive.firstPersonPlural.value = `${ verbRoot2 }ons`; // override

        this.subjunctive.secondPersonPlural.value = `${ verbRoot2 }ez`; // override

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot3, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot3, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
