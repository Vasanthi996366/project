import { Component, viewChild } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private wish:WishlistService){}
  len:any
ngDoCheck(){
  this.len=this.wish.getLengthofwishlist();
}
}
