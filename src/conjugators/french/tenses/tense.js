export const Persons = [
    'firstPersonSingular',
    'secondPersonSingular',
    'thirdPersonSingular',
    'firstPersonPlural',
    'secondPersonPlural',
    'thirdPersonPlural'
];

export const TenseList = [
    'present',
    'future',
    'futureAnterior',
    'imperative',
    'conditional',
    'pastConditional',
    'past',
    'imperfect',
    'pluperfect',
    'subjunctive',
    'pastSubjunctive',
    'imperfectSubjunctive',
    'simplePast',
    'pastAnterior',
    'pluperfectSubjunctive'
];

export const Pronouns = {
    nominal: {
        firstPersonSingular: 'je',
        secondPersonSingular: 'tu',
        thirdPersonSingular: 'il/elle/on',
        firstPersonPlural: 'nous',
        secondPersonPlural: 'vous',
        thirdPersonPlural: 'ils/elles'
    },
    reflexive: {
        firstPersonSingular: 'me',
        secondPersonSingular: 'te',
        thirdPersonSingular: 'se',
        firstPersonPlural: 'nous',
        secondPersonPlural: 'vous',
        thirdPersonPlural: 'se'
    }
};

export class Tense {
    constructor(name) {
        this.name = name;
        Persons.forEach((person) => {
            this[person] = this.buildTense(Pronouns.nominal[person], Pronouns.reflexive[person]);
        });
    }

    buildTense(pronoun, reflexive) {
        return { pronoun, reflexive, value: '', fullText: '' };
    }

    generateFullText(person, reflexive) {
        if (!person.value) {
            return '';
        }

        return reflexive ? `${ person.pronoun } ${ this.liaison(person.reflexive, person.value) }` : this.liaison(person.pronoun, person.value);
    }

    liaison(part1, part2) {
        return /^[aàáâäæeèéêëiîïoôöuûü]/i.test(part2) && /^.e$/i.test(part1) ? `${ part1[0] }'${ part2 }` : `${ part1 } ${ part2 }`;
    }
}