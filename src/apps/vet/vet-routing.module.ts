import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "../../shared/components/login-page/login-page.component";
import {AuthGuard} from "../../core/services/auth/auth-guard";
import {VetPageComponent} from "../../features/vet-page/containers/vet-page/vet-page.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'vet-page',
    component: VetPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: LoginPageComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class VetRoutingModule {
}
