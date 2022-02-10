import { Component } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { Routes } from "../../models/constants/routes";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
})
export class HomeComponent {
  constructor(private navigationService: NavigationService) { }

  gotoLoginPage() {
    this.navigationService.navigate(Routes.login);
  }
}
