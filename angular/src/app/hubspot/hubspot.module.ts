import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubspotRoutingModule } from './hubspot-routing.module';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
    CommonModule,
    HubspotRoutingModule
  ]
})
export class HubspotModule { }
