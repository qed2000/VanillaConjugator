import { Persons, Tense } from './tense.js';

import { ucfirst } from '../utils.js';

export class Imperative extends Tense {
    constructor(options) {
        super('Impératif');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        let ending;
        const reflexive = options.reflexive;
        const root1 = options.root1;
        const root2 = options.root2 || options.root1;
        const type = options.type;

        switch (type) {
            case '':
                ending = '';
                break;
            case 'x':
                ending = 'x';
                break;
            case 'e':
                ending = 'e';
                break;
            default:
                ending = 's';
        }

        if (reflexive) {
            this.secondPersonSingular.value = `${ ucfirst(root1) }${ ending }-toi!`;
            this.firstPersonPlural.value = `${ ucfirst(root2) }ons-nous!`;
            this.secondPersonPlural.value = `${ ucfirst(root2) }ez-vous!`;
            this.secondPersonSingular.pronoun = '';
            this.firstPersonPlural.pronoun = '';
            this.secondPersonPlural.pronoun = '';
            this.secondPersonSingular.reflexive = '';
            this.firstPersonPlural.reflexive = '';
            this.secondPersonPlural.reflexive = '';
        } else {
            this.secondPersonSingular.pronoun = `(${ this.secondPersonSingular.pronoun })`;
            this.firstPersonPlural.pronoun = `(${ this.firstPersonPlural.pronoun })`;
            this.secondPersonPlural.pronoun = `(${ this.secondPersonPlural.pronoun })`;
            this.secondPersonSingular.value = `${ ucfirst(root1) }${ ending }!`;
            this.firstPersonPlural.value = `${ ucfirst(root2) }ons!`;
            this.secondPersonPlural.value = `${ ucfirst(root2) }ez!`;
        }

        Persons.forEach((person) => {
            this[person].fullText = this[person].value ? `${ this[person].pronoun } ${ this[person].value }` : '';
        });
    }
}
