import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent, HeaderComponent],
  template: `
    <div class="header-section">
      <div class="header-container container">
        <h1 class="header-title">
          Comunidade Vegan <br/> de Nova Friburgo - RJ
        </h1>
        <div class="divider"></div>
        <div class="header-subtitle">
          Você é simpatizante da causa animal, gostaria de se informar mais a
          respeito ou está iniciando no veganismo?<br/>Seja bem-vindo(a)! Entre em contato e vamos avançar juntos nesse
          processo!
        </div>
      </div>
    </div>
  `,
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
