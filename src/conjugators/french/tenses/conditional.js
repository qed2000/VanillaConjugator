import { Persons, Tense } from './tense';

export class Conditional extends Tense {
    constructor(options) {
        super('Conditionnel');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        const endings = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
        const reflexive = options.reflexive;
        const root = options.root1;

        Persons.forEach((person, index) => {
            this[person].value = `${ root }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
