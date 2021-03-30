import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Avoir extends FullConjugation {
    static rule = {
        priority: 1,
        test: (verb) => verb === 'avoir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        // avoir is its own helping verb, so this function must spell out procedures that use alternate forms of avoir to avoid infinite recursion.
        const verbRoot = 'av';
        const verbRoot2 = 'aur';
        const verbRoot3 = 'ay';

        this.pastTenseHelper = helper;
        this.pastParticiple.value = 'eu';
        this.presentParticiple.value = `${ verbRoot3 }ant`;
        this.reflexive = reflexive;

        this.buildPresent(verbRoot);

        this.future = new Tenses.Future({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: 'ai', root2: verbRoot3, type: 'e', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: verbRoot2, reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot, reflexive: this.reflexive });

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: 'e', type: 'u', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: 'e', type: 'u', reflexive: this.reflexive });

        this.futureAnterior = new Tenses.Tense('Futur Antèrieur');

        this.pastConditional = new Tenses.Tense('Conditionnel Passé');

        this.past = new Tenses.Tense('Passé Composé');

        this.pluperfect = new Tenses.Tense('Plus-que-Parfait');

        this.buildSubjunctive();

        this.pastSubjunctive = new Tenses.Tense('Subjonctif Passé');

        this.pastAnterior = new Tenses.Tense('Passé Antèrieur');

        this.pluperfectSubjunctive = new Tenses.Tense('Plus-que-Parfait de Subjonctif');

        Tenses.Persons.forEach((person) => {
            this.futureAnterior[person].value = `${ this.future[person].value } ${ this.pastParticiple.value }`;

            this.pastConditional[person].value = `${ this.conditional[person].value } ${ this.pastParticiple.value }`;

            this.past[person].value = `${ this.present[person].value } ${ this.pastParticiple.value }`;

            this.pluperfect[person].value = `${ this.imperfect[person].value } ${ this.pastParticiple.value }`;

            this.pastSubjunctive[person].value = `${ this.subjunctive[person].value } ${ this.pastParticiple.value }`;

            this.pastAnterior[person].value = `${ this.simplePast[person].value } ${ this.pastParticiple.value }`;

            this.pluperfectSubjunctive[person].value = `${ this.imperfectSubjunctive[person].value } ${ this.pastParticiple.value }`;

            Tenses.TenseList.forEach((tense) => {
                this[tense][person].fullText = this[tense].generateFullText(this[tense][person], this.reflexive);
            });
        });

    }

    buildPresent(verbRoot) {
        this.present = new Tenses.Tense('Présent');
        this.present.firstPersonSingular.value = 'ai';
        this.present.secondPersonSingular.value = 'as';
        this.present.thirdPersonSingular.value = 'a';
        this.present.firstPersonPlural.value = `${ verbRoot }ons`;
        this.present.secondPersonPlural.value = `${ verbRoot }ez`;
        this.present.thirdPersonPlural.value = 'ont';
    }

    buildSubjunctive() {
        this.subjunctive = new Tenses.Tense('Subjonctif');
        this.subjunctive.firstPersonSingular.value = 'aie';
        this.subjunctive.secondPersonSingular.value = 'aies';
        this.subjunctive.thirdPersonSingular.value = 'ait';
        this.subjunctive.firstPersonPlural.value = 'ayons';
        this.subjunctive.secondPersonPlural.value = 'ayez';
        this.subjunctive.thirdPersonPlural.value = 'aient';
    }
}
