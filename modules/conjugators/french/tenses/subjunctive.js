import { Persons, Tense } from './tense.js';

export class Subjunctive extends Tense {
    constructor(options) {
        super('Subjonctif');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        const endings = ['e', 'es', 'e', 'ions', 'iez', 'ent'];
        const reflexive = options.reflexive;
        const root1 = options.root1;
        const root2 = options.root2 || options.root1;
        const roots = [root1, root1, root1, root2, root2, root1];

        Persons.forEach((person, index) => {
            this[person].value = `${ roots[index] }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
