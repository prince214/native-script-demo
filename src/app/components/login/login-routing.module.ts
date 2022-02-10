import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { LoginComponent } from "./login.component";

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class LoginRoutingModule {}
