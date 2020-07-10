import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  profilePic : string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'White Flour', price: 50,qty: 0, profilePic:"/assets/img/speakers/flor.jpg"},
    { id: 1, name: 'Red Wheat', price: 30,qty: 0,profilePic:"/assets/img/speakers/redwheat.png" },
    { id: 2, name: 'Mishti Wheat', price: 50,qty: 0 ,profilePic:"/assets/img/speakers/flour.jpg"},
    { id: 3, name: 'White Wheat', price: 30,qty: 0 ,profilePic:"/assets/img/speakers/wheat.jpg"},
    { id: 4, name: 'Red Flour', price: 20,qty: 0,profilePic:"/assets/img/speakers/redflour.png" },
    { id: 5, name: 'Aalo Parathe', price: 100,qty: 0,profilePic:"/assets/img/speakers/aalo.jpg" },
    { id: 6, name: 'Garlic Naan', price: 50,qty: 0,profilePic:"/assets/img/speakers/naan.jpg" },
    { id: 7, name: 'Butter Kulcha', price: 40,qty: 0,profilePic:"/assets/img/speakers/kulcha.jpg" },
    { id: 8, name: 'Ghee Phulka', price: 30,qty: 0,profilePic:"/assets/img/speakers/phulka.jpg" },
    { id: 9, name: 'Masala Misi', price: 50,qty: 0,profilePic:"/assets/img/speakers/missi.jpg" }
  ];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.data;
  }
  add(a) {
    return this.http.post('http://localhost:3000/orders/add', a);
  }
  getCart() {
    return this.cart;
  }
  setproduct(p){
    this.data = p;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(index) {
    this.data[index].qty++;
  }

  decreaseProduct(index) {
    this.data[index].qty--;

  }

  removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.qty);
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart.length = 0;
  }
}
