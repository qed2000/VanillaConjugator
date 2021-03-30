import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Aitre extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (verb) => verb.endsWith('aître') || verb.endsWith('aitre')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRootSimple = this.getRoot(verb, 5); // - , ie apparaître -> appar-
        const verbRoot = `${ this.getRoot(verb, 4) }i`; // -ai-
        const verbRoot2 = `${ verbRoot }ss`; // -aiss-

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRootSimple }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, root3: verbRoot2, type: 'sst', reflexive: this.reflexive });
        this.present.thirdPersonSingular.value = `${ verbRootSimple }aît`; // override
        this.present.thirdPersonSingular.fullText = this.present.generateFullText(this.present.thirdPersonSingular, this.reflexive); // override

        this.future = new Tenses.Future({ root1: `${ verbRootSimple }aîtr`, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRootSimple }aîtr`, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRootSimple, type: 'u', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRootSimple, type: 'u', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
