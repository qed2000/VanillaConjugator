import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Prendre extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 5); // -pr-
        const verbRoot = this.getRoot(verb, 2); // -prend-
        const verbRoot2 = this.getRoot(verb, 3); // -pren-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }is`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: `${ verbRoot2 }n`, type: 'ss' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: `${ verbRoot2 }n`, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
