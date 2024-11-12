import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { ViewvehicleComponent } from './components/viewvehicle/viewvehicle.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ManagevehicleComponent } from './components/managevehicle/managevehicle.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'view/:id',component:ViewvehicleComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'booking',component:BookingComponent}
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'manage',component:ManagevehicleComponent},
      {path:'add',component:AddvehiclesComponent},
      {path:'orders',component:ViewordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
