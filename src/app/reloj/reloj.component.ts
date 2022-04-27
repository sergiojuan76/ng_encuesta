import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  public time: number = 0;
  public state: string = "Stopped";
  // Notifica al subscriber cada 1 segundo, hasta 5
  private crono = new Observable<number>(
    observer => {
      let start: number = (new Date()).getTime();
      let lastCount = 0;
      (function repeat() {
        let now: number = (new Date()).getTime();
        let seconds = ((now - start) / 1000 | 0);
        if (lastCount < seconds) {
          observer.next(seconds);
          lastCount = seconds;
        }
        if (seconds >= 5) {
          console.log("Finishing");
          return;
        }
        setTimeout(repeat, 100);
        })();
    });

  constructor() { }

  ngOnInit(): void {
  }

  onStart(): void {
    console.log("Starting");
    let self = this;
    this.state = "Executing";
    this.crono.subscribe({
      next(seconds: number) {
        console.log(`At next ${seconds}`);
        self.time = seconds;
      },
      error(err) {
        console.log("Error");
      },
      complete() {
        console.log("Finished");
        self.state = "Finished";
      }
    })
  }
}