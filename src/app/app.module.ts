import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { SummaryComponent } from './summary/summary.component';

import { PeriodComponent } from './period/period.component';
import { ReportsComponent } from './reports/reports.component';
import { ExportComponent } from './export/export.component';
import { ScriptComponent } from './script/script.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    PeriodComponent,
    ReportsComponent,
    ExportComponent,
    ScriptComponent,
    ProcessComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
