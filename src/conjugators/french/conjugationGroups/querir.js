import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Querir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 4) }ier`; // -quier-
        const verbRoot2 = this.getRoot(verb, 2); // -quér-
        const verbRoot3 = `${ this.getRoot(verb, 4) }ièr`; // -quièr-
        const verbRoot4 = this.getRoot(verb, 4); // -qu-
        const verbRoot5 = `${ this.getRoot(verb, 4) }err`; // -querr-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot4 }is`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot3, type: 'sst' });

        this.future = new Tenses.Future({ root1: verbRoot5 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot5 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot3, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot4, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot4, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
