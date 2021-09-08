import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Er extends FullConjugation {
    static rule = {
        priority: 100000,
        test: (verb) => verb.endsWith('er')
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verb = this.infinitive;
        const verbRoot = this.getRoot(verb, 2);

        this.pastTenseHelper = helper;
        this.pastParticiple.value = `${ verbRoot }é`;
        this.presentParticiple.value = `${ verbRoot }ant`;
        this.reflexive = reflexive;

        this.present = new Tenses.Present({ root1: verbRoot, type: 'eese', reflexive: this.reflexive });

        this.future = new Tenses.Future({ root1: verb, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: verbRoot, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verb, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot, reflexive: this.reflexive });

        this.subjunctive = new Tenses.Subjunctive({ root1: verbRoot, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: verbRoot, type: 'a', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: verbRoot, type: 'a', reflexive: this.reflexive });

        this.populateHelperTenses(helper, this.pastParticiple.value);

        for (let conj in this.present) {
            conj = conj.replace(/gons$/, 'geons');
            conj = conj.replace(/cons$/, 'çons');
        }

        for (let conj in this.imperative) {
            conj = conj.replace(/gons$/, 'geons');
            conj = conj.replace(/cons$/, 'çons');
        }

        for (let conj in this.imperfect) {
            conj = conj.replace(/gai(s|t|ent)$/, 'geai$1');
            conj = conj.replace(/cai(s|t|ent)$/, 'çai$1');
        }

        for (let conj in this.simplePast) {
            conj = conj.replace(/ga(i|s|â.es)?$/, 'ge$1');
            conj = conj.replace(/ca(i|s|â.es)?$/, 'ça$1');
        }
    }
}
