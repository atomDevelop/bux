import { LitElement, customElement, html } from 'lit-element';
import '../components/add';
import '../components/items';
import '../components/title';

@customElement('bux-page-main')
export class MainPage extends LitElement {
  render() {
    return html`
      <bux-title>
        <span slot="maintitle">책 읽기</span>
        <span slot="subtitle">또는 모으기</span>
      </bux-title>
      <bux-items></bux-items>
      <bux-add></bux-add>
    `;
  }
}