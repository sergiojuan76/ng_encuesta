import { Component, OnInit } from '@angular/core';
import { DaysService } from '../days.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days!: string | undefined;
  errorMessage!: string | undefined;

  constructor(private daysService: DaysService) { }

  ngOnInit(): void {
    console.log("Llamando API");

    this.daysService.getDays()
      .subscribe({
        next: daysReceived => {
          console.log(`Recibido ${daysReceived}`);
          this.days = daysReceived;},
        error: error => {console.log("En error handling"); this.errorMessage = "Tenemos un error"}
      });
  }
}