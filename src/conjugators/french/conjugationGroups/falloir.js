import * as Tenses from '../tenses';

import { FullConjugation } from './fullConjugation';

export class Falloir extends FullConjugation {
    static rule = {
        priority: 100,
        test: (ending) => ending[7] === 'falloir'
    };

    constructor(verbIndex, helper, reflexive) {
        super(verbIndex);

        this.reflexive = reflexive;
        this.pastTenseHelper = helper;
        this.pastParticiple.value = '';
        this.presentParticiple.value = '';

        this.present = new Tenses.Tense('Présent');
        this.present.thirdPersonSingular.value = 'faut';

        this.future = new Tenses.Tense('Futur');
        this.future.thirdPersonSingular.value = 'faudra';

        this.futureAnterior = new Tenses.Tense('Futur Antèrieur');
        this.futureAnterior.thirdPersonSingular.value = 'aura fallu';

        this.imperative = new Tenses.Tense('Impératif');
        this.imperative.thirdPersonSingular.value = '';

        this.conditional = new Tenses.Tense('Conditionnel');
        this.conditional.thirdPersonSingular.value = 'faudrait';

        this.pastConditional = new Tenses.Tense('Conditionnel Passé');
        this.pastConditional.thirdPersonSingular.value = 'aurait fallu';

        this.past = new Tenses.Tense('Passé Composé');
        this.past.thirdPersonSingular.value = 'a fallu';

        this.imperfect = new Tenses.Tense('Imparfait');
        this.imperfect.thirdPersonSingular.value = 'fallait';

        this.pluperfect = new Tenses.Tense('Plus-que-Parfait');
        this.pluperfect.thirdPersonSingular.value = 'avait fallu';

        this.subjunctive = new Tenses.Tense('Subjonctif');
        this.subjunctive.thirdPersonSingular.value = 'faille';

        this.pastSubjunctive = new Tenses.Tense('Subjonctif Passé');
        this.pastSubjunctive.thirdPersonSingular.value = 'ait fallu';

        this.imperfectSubjunctive = new Tenses.Tense('Imparfait de Subjonctif');
        this.imperfectSubjunctive.thirdPersonSingular.value = 'fallût';

        this.simplePast = new Tenses.Tense('Passé Simple');
        this.simplePast.thirdPersonSingular.value = 'fallut';

        this.pastAnterior = new Tenses.Tense('Passé Antèrieur');
        this.pastAnterior.thirdPersonSingular.value = 'eut fallu';

        this.pluperfectSubjunctive = new Tenses.Tense('Plus-que-Parfait de Subjonctif');
        this.pluperfectSubjunctive.thirdPersonSingular.value = 'eût fallu';
    }
}
