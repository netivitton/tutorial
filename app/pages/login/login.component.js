"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/map");
var callAPI_services_1 = require("../services/callAPI.services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, routerExtensions, mycallAPI) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.mycallAPI = mycallAPI;
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        // this.extractData();
        this.routerExtensions.navigate(["/profile"], { clearHistory: true });
    };
    LoginComponent.prototype.extractData = function () {
        this.mycallAPI.getData()
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.html',
            styleUrls: ['login.css'],
            providers: [callAPI_services_1.CallAPI]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions, callAPI_services_1.CallAPI])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQixzREFBOEQ7QUFFOUQsaUNBQStCO0FBQy9CLGlFQUFzRDtBQVV0RDtJQVFDLHdCQUFvQixJQUFVLEVBQVMsZ0JBQWtDLEVBQVMsU0FBa0I7UUFBaEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ25HLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRSxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUNkLDhCQUFLLEdBQUw7UUFDRixzQkFBc0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUlELG9DQUFXLEdBQVg7UUFDTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTthQUNuQixTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUUsVUFBQyxLQUFLO1FBRVQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBM0JRLGNBQWM7UUFUMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsWUFBWTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsU0FBUyxFQUFDLENBQUMsMEJBQU8sQ0FBQztTQUVuQixDQUFDO3lDQVV5QixXQUFJLEVBQTJCLHlCQUFnQixFQUFvQiwwQkFBTztPQVJ4RixjQUFjLENBNEIxQjtJQUFELHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIFxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBDYWxsQVBJIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGxBUEkuc2VydmljZXNcIlxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbG9naW4nLFxuXHR0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnbG9naW4uY3NzJ10sXG5cdHByb3ZpZGVyczpbQ2FsbEFQSV1cblxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZW1haWw7XG5cdHBhc3N3b3JkO1xuXHRtZXNzYWdlO1xuXHRwdWJsaWMgaG9zdDogc3RyaW5nO1xuICAgIHB1YmxpYyB1c2VyQWdlbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgb3JpZ2luOiBzdHJpbmc7XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgbXljYWxsQVBJOiBDYWxsQVBJKSB7IFxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG4gICAgbmdPbkluaXQoKSB7IH1cbiAgICBsb2dpbigpe1xuXHRcdC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXHR9XG5cblx0XG5cblx0ZXh0cmFjdERhdGEoKSB7XG4gICAgICAgIHRoaXMubXljYWxsQVBJLmdldERhdGEoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19