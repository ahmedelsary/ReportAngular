import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //http://9.111.114.54:5555/ReportServer_SSRS
  reportServer: string = 'http://9.111.114.54:5050/ReportServer_SSRS';
  reportUrl: string = 'Reports/Report1';
  showParameters: string = "true";
  parameters: any = {
   "SampleStringParameter": null,
   "SampleBooleanParameter" : false,
   "SampleDateTimeParameter" : "9/1/2017",
   "SampleIntParameter" : 1,
   "SampleFloatParameter" : "123.1234",
   "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
   };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
}
