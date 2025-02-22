import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Transaction {
  id?: number;
  user_id: number;
  amount: number;
  type: 'deposit' | 'withdrawal';
  created_at?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:4040/transactions'; // Ajusta según tu backend

  constructor(private http: HttpClient) {}

  getTransactionsByUser(userId: number): Observable<Transaction[]> {
    return this.http
      .get<{ Transactions: Transaction[] }>(`${this.apiUrl}/${userId}`)
      .pipe(
        map((response) => response.Transactions) // Extrae solo Transactions
      );
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }
}
