import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Lever extends FullConjugation {
    static rule = {
        priority: 10,
        test: (verb) => verb.endsWith('lever') || verb === 'acheter' || verb === 'amener' || verb === 'emmener' ||
                        verb === 'geler' || verb === 'mener' || verb === 'peser' || verb === 'achever' ||
                        verb === 'peler' || verb === 'promener'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2); // -lev-
        const midConsonant = verbRoot.substr(-1);
        const verbRoot2 = `${ this.getRoot(verb, 4) }è${ midConsonant }`; // -lèv-

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }é`;
        this.presentParticiple.value = `${ verbRoot }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot2, root2: verbRoot, type: 'eese', reflexive: this.reflexive  });

        this.future = new Tenses.Future({ root1: `${ verbRoot2 }er`, reflexive: this.reflexive  });

        this.imperative = new Tenses.Imperative({ root1: verbRoot2, root2: verbRoot, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: `${ verbRoot2 }er`, reflexive: this.reflexive  });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot, reflexive: this.reflexive  });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, root2: verbRoot, reflexive: this.reflexive  });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'a', reflexive: this.reflexive  });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'a', reflexive: this.reflexive  });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
