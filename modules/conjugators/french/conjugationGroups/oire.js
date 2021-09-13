import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Oire extends FullConjugation {
    static rule = {
        priority: 10000,
        test: (ending) => ending[4] === 'oire'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 4); // -
        const verbRoot = `${ verbRootSimple }oi`; // -oi-
        const verbRoot2 = `${ verbRootSimple }uv`; // -uv-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: `${ verbRoot }v`, type: 'sst' });

        this.future = new Tenses.Future({ root1: `${ verbRoot }r` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }r` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: `${ verbRoot }v`, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
