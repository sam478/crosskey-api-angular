import { Component, OnInit } from '@angular/core';
import { FundsService } from './funds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funds: any[] = []; 
  constructor(private fundsService: FundsService) {}

  //interface för response?
  ngOnInit() {
    this.fundsService.getFunds().subscribe({
      next: (response: any) => {
        this.funds = response[0].data;
      },
      error: (error) => {
        console.error('Error fetching funds:', error);
      }
    });
  }
}
