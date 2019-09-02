import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
  moduleId: module.id
})
export class EmployeeSearchComponent{
  @Output()
  Search = new EventEmitter<string>();

  OnEmployeeSearch(searchTerm:string): void{
    this.Search.emit(searchTerm);
  }
  constructor() { }
}
