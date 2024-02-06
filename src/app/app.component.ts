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

  ngOnInit() {
    this.fundsService.getFunds().subscribe((data: any) => {
      console.log(data);
      this.funds = data;
    });
  }
}
