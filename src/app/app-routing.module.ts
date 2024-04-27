import { ApplyListComponent } from './modules/currency/apply-list/apply-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { ApplyConvertionComponent } from './modules/currency/apply-convertion/apply-convertion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'currency/applyconvertion', component: ApplyConvertionComponent },
  { path: 'currency/applylist', component: ApplyListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'currency/applyconvertion' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
