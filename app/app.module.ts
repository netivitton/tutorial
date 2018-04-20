import { NgModule, NO_ERRORS_SCHEMA,NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routes } from "./app.rouing"
import { NativeScriptRouterModule,NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [
    ModalDialogService,
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
