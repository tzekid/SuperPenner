import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MissionComponent} from './mission/mission.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: "**", component: PagenotfoundComponent},

];
