import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  productList: any = [ 
    { ProuctID: "101", ProductName: "Laptop", Price: 12500 },
    { ProuctID: "102", ProductName: "Printer", Price: 77000 },
    { ProuctID: "103", ProductName: "Pendrive", Price: 95000 },
    { ProuctID: "104", ProductName: "Mobile", Price: 873655 },
  ];



  getEmpoyees() {
    return this.productList;
  }


}
