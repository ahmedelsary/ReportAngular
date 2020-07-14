import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 reportServer: string = 'http://9.111.114.54:5050/ReportServer_SSRS';
  reportUrl: string = 'My Reports/Report1';
  showParameters: string = "true";
  // parameters: any = {
  //  "SampleStringParameter": null,
  //  "SampleBooleanParameter" : false,
  //  "SampleDateTimeParameter" : "9/1/2017",
  //  "SampleIntParameter" : 1,
  //  "SampleFloatParameter" : "123.1234",
  //  "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
  //  };

   parameters: any = {
   "Code": 120027,

    };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
}
