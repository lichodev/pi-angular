import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiTabService {

    private pageSelected$: string = "INICIO";
    public pageSetected: BehaviorSubject<string> = new BehaviorSubject(this.pageSelected$);

  constructor() { }

  setSelected(page: string) {
      this.pageSelected$ = page;
      this.pageSetected.next(this.pageSelected$);
  }

  getSelected(): string {
      return this.pageSelected$;
  }
}
