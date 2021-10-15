import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { DetailpageComponent } from './detailpage/detailpage.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: '', pathMatch: 'full', redirectTo: 'principal'},
  {path: 'detail/:id', component: DetailpageComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
