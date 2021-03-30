import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Erer extends FullConjugation {
    static rule = {
        priority: 1000,
        test: (ending) => ending[4] === 'éder' || ending[4] === 'éter' || ending[4] === 'érer' ||
                        ending[5] === 'étrer' || ending[4] === 'éler' || ending[5] === 'ébrer' || ending[4] === 'éger'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2); // -ér-
        const midConsonant = verbRoot.substr(-1);
        const verbRoot2 = `${ this.getRoot(verb, 4) }è${ midConsonant }`; // -èr-

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }é`;
        this.presentParticiple.value = `${ verbRoot }ant`;

        this.present = new Tenses.Present({ root1: verbRoot2, root2: verbRoot, type: 'eese' });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }er` });

        this.imperative = new Tenses.Imperative({ root1: verbRoot2, root2: verbRoot, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot }er` });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, root2: verbRoot });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'a' });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'a' });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
