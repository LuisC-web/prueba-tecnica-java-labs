import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  TransactionService,
  Transaction,
} from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.component.html',
})
export class TransactionFormComponent implements OnInit {
  transaction: Transaction = {
    user_id: 0,
    amount: 0,
    type: 'deposit',
  };

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Capturar userId de los query params
    this.route.queryParams.subscribe((params) => {
      const userId = +params['userId'];
      console.log(userId);

      if (userId) {
        this.transaction.user_id = userId;
      }
    });
  }

  onSubmit() {
    this.transactionService
      .createTransaction(this.transaction)
      .pipe(
        catchError((error) => {
          console.error('Error al registrar transacción:', error);
          alert(`Error: ${error.error.msg || 'Ocurrió un problema'}`);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        alert('Transacción registrada con éxito!');
        this.router.navigate(['/transactions'], {
          queryParams: { userId: this.transaction.user_id },
        });
      });
  }
}
