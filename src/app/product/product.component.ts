import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  // collection = [];
  elist: any = [];
  productList: any;

  constructor(private eser: ProductService) {}

  ngOnInit() {
    this.productList = this.eser.getEmpoyees();
  }
}
