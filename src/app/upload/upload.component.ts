import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../shared/app.settings';
import { EmployeeService } from '../employee-list/employee.service';
import { ExcelService } from '../shared/excel.service';
import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  afuConfig : any;
  uploadUrl: string;
  maxSize: string;
  formatsAllowed: string;
  erroredData : Employee[] = [];

  constructor(private employeeService: EmployeeService,
  private excelService: ExcelService) {   }

  ngOnInit() {
    // Configurable Property from env.js
    this.uploadUrl = AppSettings.UPLOAD_URL;
    this.maxSize = AppSettings.UPLOAD_MAX_SIZE;    
    this.formatsAllowed = AppSettings.UPLOAD_FORMATS_ALLOWED;
    this.afuConfig = {
      formatsAllowed: this.formatsAllowed,
      maxSize: this.maxSize,
      uploadAPI: {
        url: this.uploadUrl
      }
    };
    
    // fetch errored data
    this.employeeService.getErroredEmployeeRecords().subscribe(
      res => this.erroredData = res
     );
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.erroredData, 'ErroredData');
 }

}
