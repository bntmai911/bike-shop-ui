import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductElement } from "../../model/product.model";

const ELEMENT_DATA: ProductElement[] = [
  { code: 1, name: "Product 1", quantity: 10, price: 10000 },
  { code: 2, name: "Product 2", quantity: 20, price: 100000 },
  { code: 3, name: "Product 3", quantity: 5, price: 23000 },
  { code: 4, name: "Product 4", quantity: 6, price: 50000 },
  { code: 5, name: "Product 5", quantity: 11, price: 90000 },
  { code: 6, name: "Product 6", quantity: 12, price: 40000 },
  { code: 7, name: "Product 7", quantity: 15, price: 110000 },
  { code: 8, name: "Product 8", quantity: 18, price: 60000 },
  { code: 9, name: "Product 9", quantity: 20, price: 70000 },
  { code: 10, name: "Product 10", quantity: 15, price: 50000 },
];

@Component({
  selector: "app-new-order",
  templateUrl: "./new-order.component.html",
  styleUrls: ["./new-order.component.scss"],
})
export class NewOrderComponent implements OnInit {
  public orderForm = new FormGroup({
    customerName: new FormControl(""),
    customerPhone: new FormControl(""),
    productList: new FormControl("", [Validators.required]),
    code: new FormControl(""),
  });

  constructor() {}

  ngOnInit(): void {}
}
