import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe(() => {
      alert('Usuario creado con éxito!');
      this.user = { name: '', email: '' }; // Reiniciar formulario
    });
  }
}
