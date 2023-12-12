import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = "";
  price: number = 0;

  items: Item[] = [];

  constructor(private http: HttpClient, public api: ApiService) {

  }

  ngOnInit(){
    this.getData().subscribe({next: (data: any) => this.items=data});
  }

  getData(){
    //return this.api.getProducts()
    return this.http.get("assets/data.json")
  }

  addItem(text: string, price: number): void {
    if (
      text == null ||
      text.trim() == '' ||
      price == null
    ) {
      return;
    }
    this.items.push(new Item(text, price));
  }
}

export class Item {
  name: string;
  price: number;
  done: boolean;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.done = false;
  }
}
