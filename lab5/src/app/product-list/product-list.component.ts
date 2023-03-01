import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, products} from "../products";
import {categories} from "../category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product: Product | undefined;
  category: categories | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }


  products = products

  ngOnInit() {
    this.reloadCategory();
  }

  reloadCategory() {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const productCategoryFromRoute = String(routeParams.get('categories'));
    // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.category === productCategoryFromRoute);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/