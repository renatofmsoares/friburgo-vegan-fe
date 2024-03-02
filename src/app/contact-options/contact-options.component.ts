import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-options',
  standalone: true,
  imports: [ContactOptionsComponent],
  template: `
    <section class="contact-options-section">
      <div class="contact-options-container container">
        <h2>Entre em contato</h2>
        <div class="divider gray-bg"></div>
        <div class="cards-container">

          <div class="contact-option-wrapper">
            <div class="icon-wrapper">
              <img src="assets/images/map-icon.png" width="44" />
            </div>
            <h3>nos encontre pessoalmente</h3>
            <p class="contact-text">
              Consulte quando será o nosso próximo encontro presencial e venha
              participar com a gente!
            </p>
          </div>

          <div class="contact-option-wrapper">
            <div class="icon-wrapper">
              <img src="assets/images/mail-icon.png"
                width="70" />
            </div>
            <h3>Por email</h3>
            <p class="contact-text">
              <a href="mailto:friburgovegan@gmail.com?subject=Olá!"
                target="_blank"
                class="link"
                >friburgovegan&#64;gmail.com<br/>
              </a>
            </p>
          </div>

          <div class="contact-option-wrapper">
            <div class="icon-wrapper">
              <img
                src="assets/images/heart-icon.png"
                width="68"
              />
            </div>
            <h3>Nossas redes</h3>
            <a href="https://www.instagram.com/friburgovegan/"
              target="_blank"
              rel="noopener"
              class="social-wrapper">
              <img src="assets/images/instagram-icon-black.svg"
                width="14"
                alt=""
                class="social-icon"
              />
              <div
                class="social-link-text"
              >
                Instagram
              </div>
            </a>
            <a
              href="https://chat.whatsapp.com/Iumyxh5mmtxDnYcoRUCooL"
              target="_blank"
              rel="noopener"
              class="social-wrapper">
              <img src="assets/images/heart-icon.png"
                width="14" class="social-icon"/>
              <div class="social-link-text">WhatsApp</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact-options.component.sass'
})
export class ContactOptionsComponent {

}
