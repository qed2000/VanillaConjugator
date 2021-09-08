import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Ir extends FullConjugation {
    static rule = {
        priority: 100000,
        test: (verb) => verb.endsWith('ir')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2);
        const verbRoot2 = `${ verbRoot }iss`;
        const verbRoot3 = `${ verbRoot }i`;

        this.pastTenseHelper = helper;
        this.pastParticiple.value = verbRoot3;
        this.presentParticiple.value = `${ verbRoot2 }ant`;
        this.reflexive = reflexive;
        this.endings = {
            present: ['s', 's', 't', 'ons', 'ez', 'ent'],
            imperative: 's',
            imperfectSubjunctive: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent']
        };

        this.present = new Tenses.Present({ root1: verbRoot3, root2: verbRoot2, root3: verbRoot2, type: 'sst', reflexive: this.reflexive });

        this.future = new Tenses.Future({ root1: verb, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot3, root2: verbRoot2, type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verb, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot2, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'i', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'i', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);
    }
}
