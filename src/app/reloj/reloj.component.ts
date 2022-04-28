import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  public time: number = 0;
  public state: string = "Stopped";
  private subscription: Subscription|undefined;
  // Notifica al subscriber cada 1 segundo, hasta 5
  private crono$ = new Observable<number>(
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
        if (seconds >= 10) {
          console.log("Finishing");
          observer.complete();
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
    this.state = "Executing";
    this.subscription = this.crono$.subscribe({
      next: seconds =>  {
        console.log(`At next ${seconds}`);
        this.time = seconds;
      },
      error: (err) => {
        console.log("Error");
      },
      complete: () => {
        console.log("Finished");
        this.state = "Finished";
      }
    })
  }

  onStop(): void {
    console.log("Stopping");
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}