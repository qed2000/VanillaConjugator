import * as Tenses from '../tenses/index.js';

import { FullConjugation } from './fullConjugation.js';

export class Etre extends FullConjugation {
    static rule = {
        priority: 1,
        test: (verb) => verb === 'etre' || verb === 'être'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        const verbRoot = 'ét';
        const pastParticiple = `${ verbRoot }é`;

        this.infinitive = 'être';
        this.pastParticiple.value = pastParticiple;
        this.pastTenseHelper = helper;
        this.presentParticiple.value = `${ verbRoot }ant`;
        this.reflexive = reflexive;

        this.buildPresent();

        this.future = new Tenses.Future({ root1: 'ser', reflexive: this.reflexive });

        this.imperative = new Tenses.Imperative({ root1: 'soi', root2: 'soy', type: 's', reflexive: this.reflexive });

        this.conditional = new Tenses.Conditional({ root1: 'ser', reflexive: this.reflexive });

        this.imperfect = new Tenses.Imperfect({ root1: verbRoot, reflexive: this.reflexive });

        this.buildSubjunctive();

        this.imperfectSubjunctive = new Tenses.ImperfectSubjunctive({ root1: 'f', type: 'u', reflexive: this.reflexive });

        this.simplePast = new Tenses.SimplePast({ root1: 'f', type: 'u', reflexive: this.reflexive });

        this.populateHelperTenses(helper, pastParticiple);

        Tenses.Persons.forEach((person) => {
            this.present[person].fullText = `${ this.present[person].pronoun } ${ this.present[person].value }`;
            this.subjunctive[person].fullText = `${ this.subjunctive[person].pronoun } ${ this.subjunctive[person].value }`;
        });
    }

    buildPresent() {
        this.present = new Tenses.Tense('Présent');
        this.present.firstPersonSingular.value = 'suis';
        this.present.secondPersonSingular.value = 'es';
        this.present.thirdPersonSingular.value = 'est';
        this.present.firstPersonPlural.value = 'sommes';
        this.present.secondPersonPlural.value = 'êtes';
        this.present.thirdPersonPlural.value = 'sont';
    }

    buildSubjunctive() {
        this.subjunctive = new Tenses.Tense('Subjonctif');
        this.subjunctive.firstPersonSingular.value = 'sois';
        this.subjunctive.secondPersonSingular.value = 'sois';
        this.subjunctive.thirdPersonSingular.value = 'soit';
        this.subjunctive.firstPersonPlural.value = 'soyons';
        this.subjunctive.secondPersonPlural.value = 'soyez';
        this.subjunctive.thirdPersonPlural.value = 'soient';
    }
}
