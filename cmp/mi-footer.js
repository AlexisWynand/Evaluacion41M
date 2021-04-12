class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Aldana Ramos Axel Alexis.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
