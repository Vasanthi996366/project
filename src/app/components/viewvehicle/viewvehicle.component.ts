import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { WishlistService } from '../../services/wishlist.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrl: './viewvehicle.component.css'
})
export class ViewvehicleComponent {
vid:any;
vehicle:any;
orderedVehicle:any;
uname:any;
uaddress:any;
utime:any;
neworder:any;
constructor(private route:ActivatedRoute,private service:VehicleService,private wish:WishlistService,private router:Router,private order:OrderService){}
ngOnInit(){
  this.vid=this.route.snapshot.params['id'];
  console.log(this.vid);
  if(this.vid!=null){
    this.vehicle=this.service.getVehicleById(this.vid);
    console.log(this.vehicle)
  }
}
addtowishlist(vehicle:any){
  this.wish.addtowishlist(vehicle);
  alert("added to wishlist")
  this.router.navigateByUrl('user/wishlist')
}
openModal(vehicle:any){
  this.orderedVehicle=vehicle;
}
orderNow(){
  this.neworder={
    vehicleId:this.orderedVehicle.vehicleId,
    vehicleName:this.orderedVehicle.vehicleName,
    vehiclePrice:this.orderedVehicle.vehiclePrice,
    username:this.uname,
    address:this.uaddress,
    time:this.utime
  }
  console.log(this.neworder)
  this.order.addtoOrders(this.neworder);
  alert("order placed successfully")
  this.router.navigateByUrl('user/booking')
}
}
