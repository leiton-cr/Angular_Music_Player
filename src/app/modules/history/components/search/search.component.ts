import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  public filter: string;

  constructor() {
    this.filter = '';
  }

  ngOnInit(): void {
  }

  search(term: any): void{
    if(term.length >=3){
      this.callbackData.emit(term)
    }
    
  }

}
