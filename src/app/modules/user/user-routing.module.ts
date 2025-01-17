import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [{ path: '', component: UserComponent ,} ,{ path :'orders', component:OrdersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
