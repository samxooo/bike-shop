import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Cart;

  constructor(private cartService: CartService) {
    this.setCart()
  }


  ngOnInit(): void {

  }

  setCart() {
    this.cart = this.cartService.getCart()
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.bikes.id);
    this.setCart()
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.bikes.id, quantity);
    this.setCart()
  }
}
