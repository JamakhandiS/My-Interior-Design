import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DinningComponent } from './dinning/dinning.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomInfoComponent } from './bedroom-info/bedroom-info.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'bedroom',component:BedroomComponent},
    {path:'dinning',component:DinningComponent},
    {path:'kitchen',component:KitchenComponent},
    {path:'bedroom-info',component:BedroomInfoComponent},
];
