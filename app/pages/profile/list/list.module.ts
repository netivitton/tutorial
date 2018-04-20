import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ListComponent } from "./list.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
export const routerConfig = [
  {
      path: "",
      component: ListComponent
  }
];

@NgModule({
  declarations: [
    ListComponent
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
export class ListModule {}