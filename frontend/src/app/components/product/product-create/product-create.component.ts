
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  Product: Product = {
    name: 'Produto de teste',
    price: 125.50
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.Product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
