import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {



  constructor(private ProductCreatService: ProductService) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.ProductCreatService.showMessage('Operação executada com sucesso!')
  }

}
