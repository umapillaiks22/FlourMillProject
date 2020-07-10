import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import {Router} from '@angular/router';
import { Product, CartService } from '../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
// export class CartPage  {

//   speakers: any[] = [];

//   constructor(
//     public confData: ConferenceData,
//     public router: Router) {

//   }

//   checkout(){
//     this.router.navigateByUrl('../../app/pages/chekout');
//   }
//   remove( index){

//     this.speakers.splice(index, 1);
//   }

//   incrementQty(index:number){
//     this.speakers[index].qty += 1;
//     console.log(this.speakers[index].qty);
//     }
//   decrementQty(index:number){
//     /*. if item passed then item.qty. */
//       if(this.speakers[index].qty-1 < 1){
//         this.speakers[index].qty = 0;
//         console.log('item_1-> ' + this.speakers[index].qty)
//       }
//       else{
//         this.speakers[index].qty -= 1;
//         console.log('item_2-> ' + index +  '  '+this.speakers[index].qty);
//       }
//       }

//   ionViewDidEnter() {
//     this.confData.getSpeakers().subscribe((speakers: any[]) => {
//       this.speakers = speakers;
//     });
//   }

//   ngOnInit() {
//   }

// }
export class CartPage implements OnInit {
  conferenceDate = '2020-05-07';

  cart: Product[] = [];


  constructor(private cartService: CartService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public confData: ConferenceData,
    public router: Router,
    ) { }

  ngOnInit() {
    this.cart = this.cartService.getProducts();
  }

  decreaseCartItem(index) {
    this.cartService.decreaseProduct(index);
    this.cart = this.cartService.getProducts();

  }

  increaseCartItem(index) {
    this.cartService.addProduct(index);
    this.cart = this.cartService.getProducts();

  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
  }
  submit() {
    // console.log(this.cartService.data);
    console.log(this.getCart());
    this.cartService.add(this.getCart()).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    });
    console.log(this.getTotal());
    console.log(this.count());
    // this.addstaffSer.add(this.staffForm.value).subscribe(success => {
    //   console.log(success);
    // }, error => {
    //   console.log(error);
    // });
  }
  close() {
    this.modalCtrl.dismiss();
  }
  count(){
    return this.cart.length;
  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your chakula as soon as possible',
      buttons: ['SAWA']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}

