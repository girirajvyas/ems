# rakuten-ems
Employee Management System(EMS) Spring Boot app

# Run Project
1. This project is part 2 of 3 repositories for rakuten-ems:  
 Git Repositories locations:  
   https://github.com/girirajvyas/rakuten-ems-helpers  
   https://github.com/girirajvyas/rakuten-ems-npm  
   https://github.com/girirajvyas/rakuten-ems-sb  
 `git clone` all above repositories in rakuten-sb folder

2. Setup Backend  
   a. go to: rakuten-ems-sb  
   b. `mvn install`  
   c. `mvn spring-boot:run` (this will start server at default 8080 port)  
   
3. Setup UI  
   a. go to: rakuten-ems-npm  
   b. `npm install`  
   c. `ng serve -o` (this will build and open the browser @ http://localhost:4200)  
  
4. Configure UI  
   You can configure the project by updating the below properties in env.js file:  
   **File location**: rakuten-ems-npm\src\config   
   **Out of the box settings**:  
   
   
	   var envs = {  
		"APPLICATION_TITLE": "Rakuten Employee Management System",
		"BASE_URL": "http://localhost:8080",
		"UPLOAD_URL": "http://localhost:8080/upload",
		"UPLOAD_MAX_SIZE": "5",
		"UPLOAD_FORMATS_ALLOWED": ".csv",
		"ROWS_ON_PAGE": 5,
		"ROWS_ON_PAGE_SET": [5,10,15]
	  }
   

5. Configure Back-end  
   You can configure the project by updating the below properties in application.properties file:  
   **File location**: rakuten-ems-sb\src\main\resources\  
   **Out of the box settings**:  
    
             rakuten.config.dateFormat=yyyy-MM-dd
             rakuten.config.uploadPath=D://temp//
             rakuten.config.departmentPattern=`^[a-zA-Z0-9\\-*_\\s]+$`

6. Exposed APIs  
   
   ```	
   a. GET  /test                            Test (to be removed)  
   b. POST /upload                          Upload .csv file containing employee data  
   c. GET  /employees                       List All Employees  
      GET  /employees?erroredRecord=false   List Only Valid Records  
      GET  /employees?erroredRecord=true    List Records that are incorrect i.e with error  
   d. GET  /employees/{id}	            Get Employee record by id  
   e. PUT  /employees/{id}                  update Employee  
   ```
   
   All the above endpoints can be quickly tested by downloading and importing PostMan collection from:  
   https://github.com/girirajvyas/rakuten-ems-helpers/tree/master/postman-collection     
     
7. Test Data  
   https://github.com/girirajvyas/rakuten-ems-helpers/tree/master/test-data  
   



# RakutenEmsNpm - Angular CLI generated

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
