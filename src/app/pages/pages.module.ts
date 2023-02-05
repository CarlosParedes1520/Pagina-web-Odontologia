import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LabInfoComponent } from './lab-info/lab-info.component';
import { LabServicesComponent } from './lab-services/lab-services.component';
import { TeamClinicComponent } from './team-clinic/team-clinic.component';
import { InformationComponent } from './information/information.component';
import { TeamLabComponent } from './team-lab/team-lab.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ImageSliderComponent,
    LabInfoComponent,
    LabServicesComponent,
    TeamClinicComponent,
    InformationComponent,
    TeamLabComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
