import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { APP_BASE_HREF } from '@angular/common';
import {PrimaryNavComponent} from './primary-nav/primary-nav.component';


const routes: Routes = [
  { path: '**', component: PrimaryNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
