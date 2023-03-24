import { Bikes } from "./Bikes";


export class CartItem {
  constructor(bikes: Bikes) {
    this.bikes = bikes;
  }
  bikes: Bikes;
  quantity: number = 1;

  get price():number {
    return this.bikes.price * this.quantity
  }
}
