import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Asseoir extends FullConjugation {
    static rule = {
        priority: 10,
        test: (verb) => verb.endsWith('asseoir')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 4); // -ass-
        const verbRoot = `${ verbRootSimple }ied`; // -assied
        const verbRoot2 = `${ verbRootSimple }ey`; // -assey

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }is`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'ss', reflexive: this.reflexive });

        this.future = new Tenses.Future({ root1: `${ verbRootSimple }iér`, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRootSimple }iér`, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'i', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
