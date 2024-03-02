import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <section class="navbar-section">
      <div class="navbar-container container">
        <a href="#" class="brand-block nav-brand">
          <img
            src="assets/images/logo.png"
            width="65"
            alt="Logomarca da comunidade Friburgo Vegan"
            class="logo-img"
          />
          <h1 class="logo-title">
            FRIBURGO VEGAN
          </h1>
        </a>
        <nav class="nav-menu">
          @for (item of [
            { title: 'OBJETIVO', link: '#' },
            { title: 'AÇÕES', link: '#' },
            { title: 'APOIO', link: '#' },
            { title: 'RIFAS', link: '#' },
          ]; track item.title) {
            <a class="nav-link" [href]="item.link">
              <span>{{ item.title }}</span>
            </a>
          }
        </nav>
        <div class="menu-button">
          <div class="icon-nav-menu"></div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

}
