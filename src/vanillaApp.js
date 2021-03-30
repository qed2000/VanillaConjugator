import { DOMutils as Δ } from './utils';
import { Conjugator as FrenchConjugator } from './conjugators/french/conjugator';
// import { Conjugator as GermanConjugator } from './conjugators/german/conjugator';
// import { Conjugator as SpanishConjugator } from './conjugators/spanish/conjugator';
// import { Conjugator as JapaneseConjugator } from './conjugators/japanese/conjugator';

const Languages = {
    fr: { name: 'French', key: 'french', conjugator: FrenchConjugator }
    // de: { name: 'German', key: 'german', conjugator: GermanConjugator },
    // es: { name: 'Spanish', key: 'spanish', conjugator: SpanishConjugator },
    // jp: { name: 'Japanese', key: 'japanese', conjugator: JapaneseConjugator }
};

const DefaultLanguage = 'fr';

export class App {
    conjugator;
    conjugations;
    container;
    language;
    verbList;

    constructor(root, language = DefaultLanguage) {
        this.language = (Languages[language] || Languages[DefaultLanguage]);
        this.verbList = this.language.conjugator.getVerbList();
        this.tenses = this.language.conjugator.getTenseList();
        this.persons = this.language.conjugator.getPersonsList();
        this.conjugator = new this.language.conjugator();

        const section = document.getElementById(root);
        section.innerHTML = '';

        this.container = Δ.makeNode({ type: 'DIV', id: 'conjugator' });
        section.appendChild(this.container);

        this.init();

        window.addEventListener('resize', () => this.resize());
    }

    init() {
        this.buildMenu();
        this.resize();
        this.conjugate();
    }

    resize() {
        const conjugatorWidth = `${ this.container.offsetWidth - 220 }px`;
        const newHeight = `${ window.innerHeight - 100 }px`;
        this.container.style.height = newHeight;
        document.getElementsByClassName('screen')[0].style.width = conjugatorWidth;
        document.getElementsByClassName('screen')[0].style.height = newHeight;
        document.getElementsByClassName('menu')[0].style.height = newHeight;
    }

    buildMenu() {
        let firstLetter;

        const screen = Δ.makeNode({ type: 'DIV', className: 'screen' });
        const ctables = Δ.makeNode({ type: 'DIV', id: 'cTables' });
        const header = Δ.makeNode({ type: 'DIV', className: 'header' });
        const menu = Δ.makeNode({ type: 'UL', className: 'menu' });

        this.verbList.sort((a, b) => a.identifier2 < b.identifier2 ? -1 : a.identifier2 > b.identifier2 ? 1 : 0)
            .forEach((verb) => {
                if (verb.identifier2[0] !== firstLetter) {
                    const letter = Δ.makeNode({ type: 'LI', text: verb.identifier2[0].toUpperCase() });
                    menu.appendChild(letter);
                    firstLetter = verb.identifier2[0];
                }

                const linkNode = Δ.makeNode({
                    type: 'LI',
                    id: `li-${ verb.identifier2 }`,
                    className: 'link',
                    text: verb.title,
                    title: `${ verb.title } - ${ verb.english }`
                });

                linkNode.addEventListener('click', (event) => {
                    [...menu.getElementsByTagName('LI')].forEach((node) => {
                        if (node.innerHTML.length > 1) {
                            node.setAttribute('class', 'link');
                        }
                    });

                    event.target.setAttribute('class', 'link selected');

                    this.conjugations = this.conjugate(event.target.textContent);
                });

                menu.appendChild(linkNode);
            });

        screen.appendChild(header);
        screen.appendChild(Δ.makeNode({ type: 'HR' }));
        screen.appendChild(ctables);

        this.container.appendChild(menu);
        this.container.appendChild(screen);
    }

    buildTables(conjugation) {
        this.tenses.forEach((tense) => {
            this.conjugationTable(conjugation[tense], tense, conjugation.reflexive);
        });
    }

    conjugationTable(tense, tenseName, reflexive) {
        const block = Δ.makeNode({ type: 'DIV', className: `conjugationList ${ tenseName }` });
        const header = Δ.makeNode({ type: 'H1', text: tense.name });

        let body = '';
        this.persons.forEach((person) => {
            body += tense[person].fullText ? `${ tense[person].fullText }<br />` : '';
        });

        block.appendChild(header);
        block.appendChild(Δ.makeNode({ type: 'HR' }));
        block.appendChild(Δ.makeNode({ type: 'DIV', html: body }));
        document.getElementById('cTables').appendChild(block);
    }

    conjugate(name) {
        // clear the table region
        document.getElementById('cTables').innerHTML = '';

        // highlight the menu option for etre if no verb is selected
        if (!name) {
            document.getElementById('li-etre').setAttribute('class', 'link selected');
        }

        this.conjugations = this.conjugator.conjugate(name);

        // set the header for this verb
        document.getElementsByClassName('header')[0].innerHTML = `${ this.reflexive ? '(se) ' : '' }${ this.conjugations.infinitive } - ${ this.conjugations.englishName }`;

        //build out the individual conjugation tables
        this.buildTables(this.conjugations.tenses);
    }
}
