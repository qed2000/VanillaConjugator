import * as Tenses from '../tenses/index.js';
import { VerbList } from '../verblist.js';

export class FullConjugation  {
    pastTenseHelper = 'avoir';
    pastParticiple = { value: '' };
    presentParticiple = { value: '' };
    present = {};
    future = {};
    futureAnterior = {};
    imperative = {};
    conditional = {};
    pastConditional = {};
    past = {};
    imperfect = {};
    pluperfect = {};
    subjunctive = {};
    pastSubjunctive = {};
    imperfectSubjunctive = {};
    simplePast = {};
    pastAnterior = {};
    pluperfectSubjunctive = {};

    constructor(verbIndex) {
        const verbObject = VerbList[verbIndex];
        this.infinitive = verbObject.french.name;
        this.english = verbObject.english.name;
        this.reflexive = verbObject.french.reflexive;
    }

    getRoot(verb, length) {
        return verb.substring(0, verb.length - length);
    }

    populateHelperTenses(helper, pastParticiple) {
        this.futureAnterior = new Tenses.FutureAnterior({ helper, pastParticiple, reflexive: this.reflexive });
        this.pastConditional = new Tenses.PastConditional({ helper, pastParticiple, reflexive: this.reflexive });
        this.past = new Tenses.Past({ helper, pastParticiple, reflexive: this.reflexive });
        this.pluperfect = new Tenses.Pluperfect({ helper, pastParticiple, reflexive: this.reflexive });
        this.pastSubjunctive = new Tenses.PastSubjunctive({ helper, pastParticiple, reflexive: this.reflexive });
        this.pastAnterior = new Tenses.PastAnterior({ helper, pastParticiple, reflexive: this.reflexive });
        this.pluperfectSubjunctive = new Tenses.PluperfectSubjunctive({ helper, pastParticiple, reflexive: this.reflexive });
    }

}
