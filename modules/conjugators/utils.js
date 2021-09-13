export class DOMutils {
    static makeNode({ type = 'DIV', className = '', id = '', name = '', text = '', html = '', title = '' }) {
        const el = document.createElement(type);

        if (className) {
            el.setAttribute('class', className);
        }

        if (name) {
            el.setAttribute('name', name);
        }

        if (title) {
            el.setAttribute('title', title);
        }

        if (id) {
            el.id = id;
        }

        if (text) {
            el.appendChild(document.createTextNode(text));
        }

        if (html) {
            el.innerHTML = html;
        }

        return el;
    }
}