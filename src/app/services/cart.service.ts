import { Injectable } from '@angular/core';
import { Bikes } from '../shared/Bikes';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  constructor() { }

  addToCart(bikes: Bikes): void {
    let cartItem = this.cart.items.find(item => item.bikes.id === bikes.id)
    if(cartItem) {
      this.changeQuantity(bikes.id, cartItem.quantity + 1);
      return
    }
    this.cart.items.push(new CartItem(bikes));
  }

  removeFromCart(bikesId:number): void {
    this.cart.items =
    this.cart.items.filter(item => item.bikes.id != bikesId)
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.bikes.id === foodId)
    if(!cartItem) {
      return
    }cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart
  }
}
