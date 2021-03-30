import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Devoir extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (ending) => ending[8] === 'devoir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 5); // -d-
        const verbRoot = `${ verbRootSimple }oi`; // -doi-
        const verbRoot2 = `${ verbRootSimple }ev`; // -dev-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }û`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: `${ verbRoot }v`, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot2 }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: `${ verbRoot }v`, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
