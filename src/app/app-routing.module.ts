import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodComponent } from './period/period.component';
import { SummaryComponent } from './summary/summary.component';
import { ExportComponent } from './export/export.component';
import { ScriptComponent } from './script/script.component';
import { ReportsComponent } from './reports/reports.component';
import { ProcessComponent } from './process/process.component';


const routes: Routes = [
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'period',
    component: PeriodComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  {
    path: 'script',
    component: ScriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }