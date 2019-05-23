import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorPageModule' },
  { path: 'map-offline', loadChildren: './map-offline/map-offline.module#MapOfflinePageModule' },
  { path: 'form/list', loadChildren: './form-list/form-list.module#FormListPageModule' },  
  { path: 'form/new', loadChildren: './admin/form-edit/form-edit.module#FormEditPageModule' },
  { path: 'form/:uuid', loadChildren: './form/form.module#FormPageModule' },
  { path: 'form/:form_uuid/question/:position', loadChildren: './question/question.module#QuestionPageModule' },
  { path: 'form/:form_uuid/results', loadChildren: './form-results/form-results.module#FormResultsPageModule' },
  { path: 'form/:form_uuid/edit', loadChildren: './admin/form-edit/form-edit.module#FormEditPageModule' },
  { path: 'practitioner/:uuid', loadChildren: './practitioner/practitioner.module#PractitionerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
