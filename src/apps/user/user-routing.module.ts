import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "../../shared/components/login-page/login-page.component";
import {AuthGuard} from "../../core/services/auth/auth-guard";
import {PetUserPageComponent} from "../../features/user-info/containers/pet-user-page/pet-user-page.component";
import {
  BasicOwnerInfoTableComponent
} from "../../features/user-info/components/basic-owner-info-table/basic-owner-info-table.component";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'pet-user-page',
    component: PetUserPageComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'basic-owner-info-table',
  //   component: BasicOwnerInfoTableComponent,
  //   canActivate: [AuthGuard]
  // },
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
export class UserRoutingModule {
}
