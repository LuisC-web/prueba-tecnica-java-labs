import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    children: [
      { path: '', component: UserListComponent },
      { path: 'new', component: UserFormComponent },
    ],
  },
  {
    path: 'transactions',
    children: [
      { path: '', component: TransactionListComponent },
      { path: 'new', component: TransactionFormComponent },
    ],
  },
  { path: '**', redirectTo: 'users' },
];
