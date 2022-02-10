import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./components/login/login.module").then((m) => m.LoginModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
