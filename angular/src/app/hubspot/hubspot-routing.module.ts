import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  { path: 'hubspot', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'person/index', component: IndexComponent },
  { path: 'hubspot/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HubspotRoutingModule { }
