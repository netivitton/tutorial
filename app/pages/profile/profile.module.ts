import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ProfileComponent } from "./profile.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
export const routerConfig = [
  {
      path: "",
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
   
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routerConfig)
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}