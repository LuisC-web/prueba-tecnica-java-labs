import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Banco App</a>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/users">Usuarios</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
