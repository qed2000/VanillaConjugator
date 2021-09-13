import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Aillir extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (verb) => verb.endsWith('aillir')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 2); // -aill-
        const verbRoot = `${ verbRootSimple }i`; // -ailli-
        const verbRoot2 = `${ verbRootSimple }iss`; // -ailliss-

        this.pastTenseHelper = helper;
        this.pastParticiple.value = verbRoot;
        this.presentParticiple.value = `${ verbRoot2 }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'sst', reflexive: this.reflexive });

        this.future = new Tenses.Future({ root1: verb, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verb, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
