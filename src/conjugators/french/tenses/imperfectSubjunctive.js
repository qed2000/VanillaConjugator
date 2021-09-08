import { Persons, Tense } from './tense.js';

export class ImperfectSubjunctive extends Tense {
    constructor(options) {
        super('Imparfait de Subjonctif');

        if (!options) {
            alert('options requires a verb root');
            return;
        }

        let endings;
        const reflexive = options.reflexive;
        const root = options.root1;
        const type = options.type;

        switch (type) {
            case '':
                endings = ['sse', 'sses', 't', 'ssions', 'ssiez', 'ssent'];
                break;
            case 'i':
                endings = ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'];
                break;
            case 'u':
                endings = ['usse', 'usses', 'ût', 'ussions', 'ussiez', 'ussent'];
                break;
            case 'in':
                endings = ['insse', 'insses', 'înt', 'inssions', 'inssiez', 'inssent'];
                break;
            default:
                endings = ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'];
        }

        Persons.forEach((person, index) => {
            this[person].value = `${ root }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
