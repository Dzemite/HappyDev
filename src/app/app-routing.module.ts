import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigResolver } from './resolvers/config.resolver';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [
    //   AuthGuard
    // ],
    resolve: {
      config: ConfigResolver
    },
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
