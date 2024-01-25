import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../core/services/auth/auth-guard";
import {PetAdminPageComponent} from "../../core/components/pet-admin-page/pet-admin-page.component";
import {LoginPageComponent} from "../../shared/components/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'pet-admin-page',
    component: PetAdminPageComponent,
    canActivate: [AuthGuard]
  },
];

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
export class AdminRoutingModule {
}
