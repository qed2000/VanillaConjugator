import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Savoir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 5); // -s-
        const verbRoot = `${ verbRootSimple }ai`; // -sai-
        const verbRoot2 = this.getRoot(verb, 3); // -sav-
        const verbRoot3 = `${ this.getRoot(verb, 4) }ch`; // -sach-
        const verbRoot4 = `${ this.getRoot(verb, 4) }ur`; // -saur-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }u`;
        this.presentParticiple.value = `${ verbRoot3 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: verbRoot4 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot3, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot4 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot3 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
