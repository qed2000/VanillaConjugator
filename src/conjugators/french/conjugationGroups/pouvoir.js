import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Pouvoir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 6); // -p-
        const verbRoot = `${ verbRootSimple }eu`; // -peu-
        const verbRoot2 = this.getRoot(verb, 3); // -pouv-
        const verbRoot3 = `${ verbRoot }v`; // -peuv-
        const verbRoot4 = `${ this.getRoot(verb, 4) }rr`; // -pourr-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot3, type: 'x' });

        this.future = new Tenses.Future({ root1: verbRoot4 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot3, type: 'e', reflexive: this.reflexive });
        this.imperative.secondPersonSingular.value = ''; // override
        this.imperative.firstPersonPlural.value = ''; // override
        this.imperative.secondPersonPlural.value = ''; // override

        this.conditional = new Tenses.Conditional({ root1: verbRoot4 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: 'puiss' });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
