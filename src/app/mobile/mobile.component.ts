import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  imports: [CommonModule],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  today = new Date();
  isBeforeOrOnSept7(): boolean {
  const lastDay = new Date(2025, 8, 7); // Months are 0-indexed: 8 = September
  // Set time to end of day for inclusivity
  lastDay.setHours(23, 59, 59, 999);
  console.log(lastDay);
  return this.today <= lastDay;
}

}
