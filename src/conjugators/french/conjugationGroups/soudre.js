import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Soudre extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 4); // -so-
        const verbRoot = this.getRoot(verb, 3); // -sou-
        const verbRoot2 = `${ verbRootSimple }lv`; // -solv-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }s`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }dr` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }dr` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: `${ verbRootSimple }l`, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: `${ verbRootSimple }l`, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
