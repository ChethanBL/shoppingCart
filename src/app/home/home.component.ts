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
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
    },
    {
      p_name: 'Mango',
      p_id: 2,
      p_cost: 50,
      p_availability: 1,
      p_details: 'Farmed at Selam',
      p_category: 'Tamilnadu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
    },
    {
      p_name: 'Bananna',
      p_id: 3,
      p_cost: 5,
      p_availability: 0,
      p_category: 'fruits',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
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
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
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
