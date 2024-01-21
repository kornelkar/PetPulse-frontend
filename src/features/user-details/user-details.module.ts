import { NgModule } from "@angular/core";
import { UserTableComponent } from "./components/user-table/user-table.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        UserTableComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [],
    exports: [
        UserTableComponent,
    ]
})
export class UserDetailsModule {}