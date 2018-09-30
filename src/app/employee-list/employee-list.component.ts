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
  public data: Employee[];
  size: number;
  rowsOnPageSet: any;
  dataFound: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.size = AppSettings.ROWS_ON_PAGE;
    this.rowsOnPageSet = AppSettings.ROWS_ON_PAGE_SET;

    this.employeeService.getValidEmployeeRecords().subscribe(
      res => {
        this.data = res;
        if(this.data.length > 0){
          this.dataFound = true;
        }
      }
    );
  }
}
