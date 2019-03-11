import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from '../../messages/message.service';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'fr-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  product: IProduct;
  errorMessage: string;
  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.getProduct(id);
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProduct(id);
      }
    );
  }

  getProduct(id: number) {
    this.productService
      .getProduct(id)
      .subscribe(
        (product: IProduct) => this.onProductRetrieved(product),
        (error: any) => (this.errorMessage = error as any)
      );
  }

  onProductRetrieved(product: IProduct) {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  saveProduct() {}

  deleteProduct() {}
}
