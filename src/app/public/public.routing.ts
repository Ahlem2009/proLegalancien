import {  Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

// import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';



export const PublicRoutingModule: Routes = [
    // {path:"",component:HomeComponent},
    {path:"service",component:ServiceComponent},
    // {path:"cat/:nom",component:CategoriesComponent},
    {path:"categories",component:CategoriesComponent},
  ]
  
