import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Angie Zarinelli';
  itemList: string[] = ['item1', 'item2', 'item3', 'item4'];
  title = "Angie's First Angular Project";
}
