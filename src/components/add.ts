import {
  LitElement, html, customElement, property
} from 'lit-element';

@customElement('bux-add')
export class Add extends LitElement {
  @property()
  defaultValue:string = '';
  @property()
  updateCount:number = 0;
  @property()
  add(e:Event) {
    e.preventDefault();
    let updateEvent = new CustomEvent('updated', { detail: '업데이트 되었음' });
    this.dispatchEvent(updateEvent);
  }
  constructor() {
    super();
    this.addEventListener('updated', (e:CustomEventInit) => {
      this.defaultValue = e.detail;
      this.updateCount++;
    });
  }
  render() {
    return html`
    <form @submit="${this.add}">
      <input .value="${this.defaultValue}"></input>
      <input type="submit" ?disabled=${this.updateCount > 3}>
    </form>
    `
  }
}