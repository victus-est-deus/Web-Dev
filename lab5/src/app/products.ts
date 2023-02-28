export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categories: string
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      categories:'phone'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      categories:'phone'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      categories:'phone'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */