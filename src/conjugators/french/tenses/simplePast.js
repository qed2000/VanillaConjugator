import { Persons, Tense } from './tense';

export class SimplePast extends Tense {
    constructor(options) {
        super('Passé Simple');

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
                endings = ['s', 's', 't', 'mes', 'tes', 'rent'];
                break;
            case 'i':
                endings = ['is', 'is', 'it', 'îmes', 'îtes', 'irent'];
                break;
            case 'u':
                endings = ['us', 'us', 'ut', 'ûmes', 'ûtes', 'urent'];
                break;
            case 'in':
                endings = ['ins', 'ins', 'int', 'înmes', 'întes', 'inrent'];
                break;
            default:
                endings = ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'];
        }

        Persons.forEach((person, index) => {
            this[person].value = `${ root }${ endings[index] }`;
            this[person].fullText = this.generateFullText(this[person], reflexive);
        });
    }
}
