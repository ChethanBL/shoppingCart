import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from '../service/shopService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showoverlay: boolean = false;
  selected_products: any;
  a: any;
  cart = [];
  searchText = "";
  menu = [
    {
      p_name: 'Mango',
      p_id: 2,
      p_cost: 50,
      p_availability: 1,
      p_details: 'Farmed at Selam',
      p_category: 'Tamilnadu',
      img: 'https://images.hindustantimes.com/img/2021/06/25/550x309/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg',
    },
   
    {
      p_name: 'Bananna',
      p_id: 3,
      p_cost: 5,
      p_availability: 0,
      p_category: 'fruits',
      img: 'data:image/jpeg;base64,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',
    },
    {
      p_name: 'apple',
      p_id: 3,
      p_cost: 5,
      p_availability: 0,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
      p_category: 'Premium',
    },
    {
      p_name: 'Orange',
      p_id: 4,
      p_cost: 25,
      p_availability: 1,
      p_details: 'from Nagpur',
      p_category: 'Premium',
      img: 'https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    },
];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private shopServiceService: ShopServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  additem(item) {
    this.showoverlay = true;
    item['quantity'] = 1;
    item['final_price'] = item.p_cost;
    this.a = item.p_cost;
    this.selected_products = item;
  }

  decrementQty(item) {
    console.log('item', item);
    if (item.quantity - 1 < 1) {
      // item.quantity = 1;
      item.quantity = 1;
      // this.deleteItem();
    } else {
      item.quantity--;
    }
    this.computeCartTotal(item.quantity);
  }

  incrementQty(item) {
    console.log('item', item);
    item.quantity++;
    this.computeCartTotal(item.quantity);
  }

  computeCartTotal(quantity) {
    this.selected_products.final_price =
      quantity * parseFloat(this.selected_products.p_cost);
    this.a = this.selected_products.final_price.toFixed(2);
    this.changeDetectorRef.detectChanges();
  }
  additemtocart(cartitem) {
    this.cart.push(cartitem);
    this.shopServiceService.cart.next(this.cart);
    this.showoverlay=false;
  }
  gotoCart() {
   let cart= this.shopServiceService.cart.value;
   if(cart.length>0)
   { 
     this.router.navigate(['/cart'])
   }
  }
}
