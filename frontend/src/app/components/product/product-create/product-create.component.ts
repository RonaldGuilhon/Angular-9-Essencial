import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {



  constructor(
    private ProductCreatService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.ProductCreatService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
