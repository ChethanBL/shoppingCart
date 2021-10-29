import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from '../service/shopService.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  total_amount = 0
  cartItems= [
      // {
      //   p_name: 'Mango',
      //   p_id: 2,
      //   p_cost: 50,
      //   p_availability: 1,
      //   p_details: 'Farmed at Selam',
      //   p_category: 'Tamilnadu',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
      //   quantity: 1,
      //   final_price: 50,
      // },
      // {
      //   p_name: 'Mango',
      //   p_id: 2,
      //   p_cost: 50,
      //   p_availability: 1,
      //   p_details: 'Farmed at Selam',
      //   p_category: 'Tamilnadu',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
      //   quantity: 1,
      //   final_price: 50,
      // },
      // {
      //   p_name: 'Bananna',
      //   p_id: 3,
      //   p_cost: 5,
      //   p_availability: 0,
      //   p_category: 'fruits',
      //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWNy_N0brCqwkjZ5xom3niFRPPizLX8PXlAVzfSXnIDdWr2RM6S03QYEn2eXycSAg7Zs&usqp=CAU',
      //   quantity: 1,
      //   final_price: 5,
      // }
    ]

  constructor(private shopServiceService: ShopServiceService,
    public router :  Router) {}

  ngOnInit() {
    this.shopServiceService.cart.subscribe((val) => {
      if (val.length > 0) {
        this.cartItems = val;
        this.cartItems.forEach(element => {
          this.total_amount += element.final_price
        });
        console.log('this.cartItems', this.cartItems);
      }
    });
  }

  cancel(){
    this.router.navigate(['/home'])
  }
}
