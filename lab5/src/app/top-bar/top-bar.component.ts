import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../category';

import { Product, products } from '../products';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  ngOnInit(): void {// First get the product category from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productCategoriesFromRoute = String(routeParams.get('CategoryCategories'));
  
    // Find the product that correspond with the categories provided in route.
    this.category = categories.find(categories => categories.category === productCategoriesFromRoute);
    
  }
  category: categories | undefined;
  constructor(
    private route: ActivatedRoute,
    
  ) { }
}
