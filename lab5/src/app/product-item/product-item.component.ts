import { Component, OnInit, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(product:Product ): void {
    product.like++;

  }

  // DeleteProduct(product:Product): void {
  //   const index = this.product.indexOf(product);
  //   if (index !== -1) {
  //     this.product.splice(index, 1);
  //   }
  // }

}