import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Vouloir extends FullConjugation {
    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = `${ this.getRoot(verb, 6) }eu`; // -veu-
        const verbRoot2 = this.getRoot(verb, 3); // -voul-
        const verbRoot3 = `${ verbRoot }ill`; // -veuill-
        const verbRoot4 = `${ this.getRoot(verb, 4) }dr`; // -voudr-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot2 }u`;
        this.presentParticiple.value = `${ verbRoot2 }ant`;

        this.present = new Tenses.Present({ root1: verbRoot, root2: verbRoot2, type: 'x' });
        this.present.thirdPersonPlural.value = `${ verbRoot }lent`; // override

        this.future = new Tenses.Future({ root1: verbRoot4 });

        this.imperative = new Tenses.Imperative({ root1: verbRoot3, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot4 });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2 });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot3, root2: verbRoot2 });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot2, type: 'u' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot2, type: 'u' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
