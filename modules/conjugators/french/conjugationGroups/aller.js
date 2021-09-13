import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Aller extends FullConjugation {
    static rule = {
        priority: 1,
        test: (verb) => verb === 'aller'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2);
        const pastParticiple = `${ verbRoot }é`;

        this.pastTenseHelper = helper;
        this.pastParticiple.value = pastParticiple;
        this.presentParticiple.value = `${ verbRoot }ant`;
        this.reflexive = reflexive;

        this.buildPresent(verbRoot);

        this.future = new Tenses.Future({ root1: 'ir', reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: 'va', root2: 'all', type: '', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: 'ir', reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: 'aill', reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'a', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'a', reflexive: this.reflexive });

        this.populateHelperTenses(helper, pastParticiple);
    }

    buildPresent(verbRoot) {
        this.present = new Tenses.Tense('Présent');
        this.present.firstPersonSingular.value = 'vais';
        this.present.secondPersonSingular.value = 'vas';
        this.present.thirdPersonSingular.value = 'va';
        this.present.firstPersonPlural.value = `${ verbRoot }ons`;
        this.present.secondPersonPlural.value = `${ verbRoot }ez`;
        this.present.thirdPersonPlural.value = 'vont';
    }
}
