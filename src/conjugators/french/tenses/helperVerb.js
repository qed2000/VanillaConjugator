import { Avoir } from '../conjugationGroups/avoir';
import { Etre } from '../conjugationGroups/etre';
import { VerbList } from '../verblist';

import { Persons, Tense } from './tense';

let avoirIndex, etreIndex;

VerbList.forEach((verb, index) => {
    if (verb.french.name === 'avoir') {
        avoirIndex = index;
    } else if (verb.french.name === 'être' || verb.french.name === 'etre') {
        etreIndex = index;
    }
});

export class HelperVerb extends Tense {
    constructor(options) {
        super(options.name);

        if (!options) {
            alert('HelperVerb requires options');
        }

        const helper = (options.helper === 'etre') ? new Etre(etreIndex, 'avoir', false) : new Avoir(avoirIndex, 'avoir', false);
        const pastParticiple = options.pastParticiple;
        const pastTenseHelper = options.helper;
        const reflexive = options.reflexive;
        const tense = options.tense;

        Persons.forEach((person) => {
            this[person].value = `${ helper[tense][person].value } ${ pastParticiple }`;
        });

        if (pastTenseHelper === 'etre') {
            this.firstPersonSingular.value += '(e)';
            this.secondPersonSingular.value += '(e)';
            this.thirdPersonSingular.value += '(e)';
            this.firstPersonPlural.value += '(e)s';
            this.secondPersonPlural.value += '(e)s';
            this.thirdPersonPlural.value += '(e)s';
        }

        Persons.forEach((person) => {
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
