import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BikeService } from '../services/bike.service';
import { CartService } from '../services/cart.service';
import { Bikes } from '../shared/Bikes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  bikes!: Bikes;

  constructor(
    private route: ActivatedRoute,
    private bikeService: BikeService,
    private cartService: CartService,
    private router: Router) {

    this.route.params.subscribe((params: any) => {
      if(params.id)
      this.bikes = this.bikeService.getBikeById(params.id)
    })
  };

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.bikes);
    this.router.navigateByUrl('/cart')
  }

}
