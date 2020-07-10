import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { CartService } from '../../services/cart.service';
import {SpeakerListService} from '../../services/speaker-list.service';
import { ModalController, AlertController, PopoverController } from '@ionic/angular';
// import { CartPage } from '../cart/cart.page';
import { BehaviorSubject } from 'rxjs';
// import { PopOverComponent } from '../components/pop-over/pop-over.component';
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];

  showSearchbar: boolean;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  cartIsEmpty: boolean;


  constructor(public confData: ConferenceData,
    private cartService: CartService,
    private peakerlistService: SpeakerListService,
              private modalCtrl: ModalController,
              private alertDialog: AlertController,
              public popoverController: PopoverController) {

  }

  ngOnInit() {
     this.peakerlistService.getAll().subscribe(success=>{
       console.log(success);
       this.formatdata(success);
     });
    this.cart = this.cartService.getCart();
    this.cartIsEmpty = true;
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  formatdata(data){
    for(let key in data)
    {
      data[key].qty = 0;
      this.products.push(data[key])
     }
     console.log(this.products);
  }
  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    // this.animateCSS('tada');
    this.cartIsEmpty = false;
  }
  decreaseCartItem(index) {
    this.products[index].qty--;
    let p = this.products.filter(x=> x.qty != 0);
    console.log(p);
    this.cartService.setproduct(p);

   }

  increaseCartItem(index) {
    this.products[index].qty++;
    let p = this.products.filter(x=> x.qty != 0);
    console.log(p);

    this.cartService.setproduct(p);
    // this.cartService.addProduct(product);
  }


}
