import { Persons, Tense } from './tense';

export class Future extends Tense {
    constructor(options) {
        super('Futur');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        const endings = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];
        const reflexive = options.reflexive;
        const root = options.root1;

        Persons.forEach((person, index) => {
            this[person].value = `${ root }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
