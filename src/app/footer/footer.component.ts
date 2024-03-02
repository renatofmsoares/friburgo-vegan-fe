import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterComponent],
  template: `
    <footer class="footer-section">
      <div class="footer-container container">
        <img src="/assets/images/logo-cinza.png" width="43" alt="" class="footer-logo"/>
        <p class="footer-text">
          Em desenvolvimento, por Renato Soares
        </p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
