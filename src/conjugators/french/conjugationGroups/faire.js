import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Faire extends FullConjugation {
    static rule = {
        priority: 10,
        test: (verb) => verb.endsWith('faire')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 4); // -f-
        const verbRoot = this.getRoot(verb, 2); // -fai-
        const verbRoot2 = `${ verbRoot }s`; // -fais-
        const verbRoot3 = `${ verbRootSimple }er`; // -fer-

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }t`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst', reflexive: this.reflexive });
        this.present.secondPersonPlural.value = `${ verbRoot }tes`; // override
        this.present.secondPersonPlural.fullText = `${ this.present.secondPersonPlural.pronoun } ${ this.present.secondPersonPlural.value }`; // override
        this.present.thirdPersonPlural.value = `${ verbRootSimple }ont`; // override
        this.present.thirdPersonPlural.fullText = `${ this.present.thirdPersonPlural.pronoun } ${ this.present.thirdPersonPlural.value }`; // override

        this.future = new Tenses.Future({ root1: verbRoot3, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });
        this.imperative.secondPersonPlural.value = `${ verbRoot }tes`; // override
        this.imperative.secondPersonPlural.fullText = `${ this.imperative.secondPersonPlural.pronoun } ${ this.imperative.secondPersonPlural.value }`; // override

        this.conditional = new Tenses.Conditional({ root1: verbRoot3, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: `${ verbRootSimple }ass`, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
