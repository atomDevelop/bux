import {
  LitElement, html, customElement, property
} from 'lit-element';

interface item {
  has:boolean,
  value:string,
  process: number
}

@customElement('bux-items')
export class Items extends LitElement {
  @property()
  items:item[] = [];
  constructor() {
    super();
    this.addEventListener('stuff-loaded', (e:CustomEventInit) => {
      this.items = e.detail;
    });
    this.loadStuff();
  }
  loadStuff() {
    let loaded = new CustomEvent('stuff-loaded', {
      detail: [
        { has: true, process: 0.5, value: '마의산' },
        { has: true, process: 0, value: '데미안' },
        { has: true, process: 0, value: '총균쇠' },
        { has: true, process: 1, value: '사피엔스' },
        { has: false, process: 1, value: '이방인' }
      ]
    });
    this.dispatchEvent(loaded);
  }
  itemTemplate(i:item) {
    return html `
      <li class="${
        i.process === 0 ? 'not-read'
        : i.process === 1 ? 'finished'
        : 'in-progress'
      }">
        ${i.value}
      </li>
    `
  }
  render(){
    return html`
    <ul>
      ${this.items.map(i => {
        return i.has ? this.itemTemplate(i) : null;
      })}
    </ul>`;
  }
}
