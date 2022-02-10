import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { Routes } from "../../models/constants/routes";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "login.component.html"
})
export class LoginComponent {
  constructor(private navigationService: NavigationService) { }

  login() {
    this.navigationService.navigate(Routes.home);
  }
}
