import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( 
  ) { }
  
  employees: any[];
  public LoadEmployees(filterText: string): void{
    this.employees = [
  {
    "id": 1,
    "firstName": "Rohit",
    "lastName": "singh",
    "gender": "male",
    "address": "1234 Anywhere St.",
    "city": " California ",
    "state": {
        "abbreviation": "AR",
        "name": "Arizona"
    },
    "salary":4.500,
    "joinDate":"July 2, 2015"
  },
  {
    "id": 2,
    "firstName": "Debo",
    "lastName": "Bha",
    "gender": "female",
    "address": "345 Cedar Point Ave.",
    "city": "Los Angeles ",
    "state": {
        "abbreviation": "CA",
        "name": "California"
    },
    "salary":4.100,
    "joinDate":"June 29, 2015"
  },
  {
    "id": 3,
    "firstName": "Sagarika",
    "lastName": "Saha",
    "gender": "female",
    "address": "1822 Long Bay Dr.",
    "city": " Las Vegas ",
    "state": {
        "abbreviation": "NV",
        "name": "Nevada"
    },
    "salary":4.200,
    "joinDate":"July 1, 2015"
  },
  {
    "id": 4,
    "firstName": "Cindy",
    "lastName": "Sil",
    "gender": "female",
    "address": "1822 Long Bay Dr.",
    "city": " Las Vegas ",
    "state": {
        "abbreviation": "NV",
        "name": "Nevada"
    },
    "salary":4.200,
    "joinDate":"July 1, 2015"
  },
  {
    "id": 5,
    "firstName": "Milla",
    "lastName": "Jovovich",
    "gender": "male",
    "address": "1822 Long Bay Dr.",
    "city": " Las Vegas ",
    "state": {
        "abbreviation": "NV",
        "name": "Nevada"
    },
    "salary":4.200,
    "joinDate":"July 1, 2015"
  }];

  if(filterText!=""){
    var filterEmployeeList: any[] = [];
    this.employees.forEach(emp => {
      if(emp.firstName.toLowerCase().includes(filterText)){
        filterEmployeeList.push(emp);
      }
    })
    this.employees = filterEmployeeList;
  }
}
  ngOnInit() {
    this.LoadEmployees("");
  }
  OnEmployeeSearch(searchTerm: string): void{
    this.LoadEmployees(searchTerm);
  }
}