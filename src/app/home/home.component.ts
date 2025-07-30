import { Component } from '@angular/core';
import { MobileComponent } from '../mobile/mobile.component';
import { LaptopComponent } from '../laptop/laptop.component';

@Component({
  selector: 'app-home',
  imports: [MobileComponent,LaptopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
