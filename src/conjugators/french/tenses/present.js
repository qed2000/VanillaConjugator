import { Persons, Tense } from './tense.js';

export class Present extends Tense {
    constructor(options) {
        super('Présent');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        let endings;
        const reflexive = options.reflexive;
        const root1 = options.root1;
        const root2 = options.root2 || options.root1;
        const root3 = options.root3 || options.root1;
        const roots = [root1, root1, root1, root2, root2, root3];
        const type = options.type;

        switch (type) {
            case 'x':
                endings = ['x', 'x', 't', 'ons', 'ez', 'ent'];
                break;
            case 'ss':
                endings = ['s', 's', '', 'ons', 'ez', 'ent'];
                break;
            case 'sst':
                endings = ['s', 's', 't', 'ons', 'ez', 'ent'];
                break;
            default:
                endings = ['e', 'es', 'e', 'ons', 'ez', 'ent'];
        }

        Persons.forEach((person, index) => {
            this[person].value = `${ roots[index] }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}