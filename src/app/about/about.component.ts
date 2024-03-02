import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponent],
  template: `
    <section class="about-section">
      <div class="about-container container">
        <p class="about-text">
          Definição de veganismo cunhada pela <strong>The Vegan Society</strong>:<br/>‍<br/>"O veganismo é uma filosofia e um modo de vida que procura excluir –
          <strong>tanto quanto possível e praticável</strong>
          – todas as formas de exploração e crueldade contra os animais para
          alimentação, vestuário ou qualquer outro propósito; e, por extensão,
          promove o desenvolvimento e a utilização de alternativas sem animais
          para o benefício dos animais, dos seres humanos e do ambiente. Em termos
          dietéticos, denota a prática de dispensar todos os produtos derivados
          total ou parcialmente de animais."
        </p>
        <a
          href="https://chat.whatsapp.com/Iumyxh5mmtxDnYcoRUCooL"
          target="_blank"
          rel="noopener"
          class="button"
          >Entre em contato!</a
        >
      </div>
    </section>
  `,
  styleUrl: './about.component.sass'
})
export class AboutComponent {

}
