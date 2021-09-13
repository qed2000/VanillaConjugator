import * as Tenses from './tenses/index.js';
import * as ConjugationGroups from './conjugationGroups/index.js';
import { VerbList } from './verblist.js';

export class Conjugator {
    avoirIndex;
    etreIndex;
    ruleMap;

    constructor(name) {
        VerbList.forEach((verb, index) => {
            if (verb.french.name === 'avoir') {
                this.avoirIndex = index;
            }

            if (verb.french.name === 'être') {
                this.etreIndex = index;
            }
        });

        this.ruleMap = Object.keys(ConjugationGroups)
            .map((key) => ({ ...ConjugationGroups[key].rule, key } || {}))
            .filter((rule) => !!rule.priority)
            .sort((a, b) => a.priority - b.priority);

        this.conjugate(name);
    }

    static getVerbList() {
        return VerbList.map((verb) => ({
            identifier1: verb.identifier1,
            identifier2: verb.identifier2,
            nonEnglish: verb.french.name,
            english: verb.english.name,
            reflexive: verb.french.reflexive,
            title: `${ verb.french.reflexive ? '(se) ' : '' }${ verb.french.name }`
        }));
    }

    static getTenseList() {
        return Tenses.TenseList;
    }

    static getPersonsList() {
        return Tenses.Persons;
    }

    conjugate(name = 'être') {
        const isReflexive = /^\(se\) /.test(name);
        const nonReflexiveName = isReflexive ? name.substr(5) : name;

        let index = VerbList.findIndex((verbObj) => verbObj.french.name === nonReflexiveName && verbObj.french.reflexive === isReflexive);

        const { reflexive, name: verb } = VerbList[index].french;
        const rule = this.ruleMap.find((rule) => rule.test(verb));

        let helper = 'avoir';
        if (reflexive || verb === 'aller' || verb.endsWith('venir') || verb === 'arriver' || verb.endsWith('entrer') ||
                verb.endsWith('rentrer') || verb.endsWith('monter') || verb.endsWith('descendre') ||verb.endsWith('partir') ||
                verb.endsWith('naître') || verb.endsWith('mourir') || verb.endsWith('passer') || verb.endsWith('rester') ||
                verb.endsWith('retourner') || verb.endsWith('tomber') || verb.endsWith('sortir')) {
            helper = 'etre';
        }

        return {
            infinitive: verb,
            englishName: VerbList[index].english.name,
            helper: helper,
            tenses: new ConjugationGroups[rule.key](index, helper, reflexive)
        };
    }
}