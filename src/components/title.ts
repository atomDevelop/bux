import { customElement, html, LitElement } from 'lit-element';

@customElement('bux-title')
export class Title extends LitElement {
  render() {
    return html`
      <h1>
        <slot name="maintitle"></slot>
        <small>
          <slot name="subtitle"></slot>
        </small>
      </h1>
    `;
  }
}