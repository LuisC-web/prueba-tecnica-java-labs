import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {
  TransactionService,
  Transaction,
} from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  userId!: number;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Captura userId de los query params
    this.route.queryParams.subscribe((params) => {
      this.userId = +params['userId'] || 0;
      if (this.userId) {
        this.loadTransactions();
      }
    });
  }

  loadTransactions() {
    this.transactionService
      .getTransactionsByUser(this.userId)
      .subscribe((data) => {
        this.transactions = data;
      });
  }
}
