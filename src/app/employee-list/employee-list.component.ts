import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { AppSettings } from '../shared/app.settings';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public data : any;
  size : number;
  rowsOnPageSet: any;
  employees: Employee[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.size = AppSettings.ROWS_ON_PAGE;
    this.rowsOnPageSet = AppSettings.ROWS_ON_PAGE_SET;
    console.log(this.rowsOnPageSet);
   this.employeeService.getValidEmployeeRecords().subscribe(
     res => this.data = res
   );
  }
  

}
