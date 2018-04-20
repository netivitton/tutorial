"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var platform_1 = require("platform");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
        this.name = "เนติวิทย์";
        this.lastname = "ยุระพันธ์";
        this.statusDrawer = true;
        this.titleAndIcon = { title: "Icon", iconSource: "res://icon" };
        this.ios = platform_1.isIOS;
    }
    ProfileComponent.prototype.onIndexChanged = function (args) {
        var tabView = args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(ProfileComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.openDrawer = function () {
        if (this.statusDrawer) {
            this.drawer.showDrawer();
        }
        else {
            this.drawer.closeDrawer();
        }
    };
    ProfileComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    ProfileComponent.prototype.onDrawerOpened = function (args) {
        this.statusDrawer = false;
    };
    ProfileComponent.prototype.onDrawerClosed = function (args) {
        this.statusDrawer = true;
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ProfileComponent.prototype, "drawerComponent", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.html',
            styleUrls: ['profile.css']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRjtBQUcvRiw4REFBNEY7QUFFNUYscUNBQWlDO0FBV2pDO0lBTUksMEJBQW9CLG1CQUFzQztRQUF0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBSDFELFNBQUksR0FBRyxXQUFXLENBQUE7UUFDbEIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtRQUN0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUtiLGlCQUFZLEdBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUhuRSxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUlNLHlDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBS0QsMENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTdDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN6VCxDQUFDO0lBRUQsc0JBQUksNkNBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNTSxxQ0FBVSxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0MsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLHlDQUFjLEdBQXJCLFVBQXNCLElBQWlDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO0lBQzFCLENBQUM7SUFFTSx5Q0FBYyxHQUFyQixVQUFzQixJQUFpQztRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtJQUN6QixDQUFDO0lBdkNxQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7NkRBQUM7SUFqQnpFLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUMxQixDQUFDO3lDQVEyQyx3QkFBaUI7T0FOakQsZ0JBQWdCLENBMkQ1QjtJQUFELHVCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIsRHJhd2VyU3RhdGVDaGFuZ2VkRXZlbnRBcmdzIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdwcm9maWxlJyxcblx0dGVtcGxhdGVVcmw6ICdwcm9maWxlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsncHJvZmlsZS5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG4gICAgaW9zO1xuICAgIG5hbWUgPSBcIuC5gOC4meC4leC4tOC4p+C4tOC4l+C4ouC5jFwiXG4gICAgbGFzdG5hbWUgPSBcIuC4ouC4uOC4o+C4sOC4nuC4seC4meC4mOC5jFwiXG4gICAgc3RhdHVzRHJhd2VyID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuaW9zID0gaXNJT1M7XG4gICAgfVxuXG4gICAgcHVibGljIHRpdGxlQW5kSWNvbjogYW55ID0geyB0aXRsZTogXCJJY29uXCIsIGljb25Tb3VyY2U6IFwicmVzOi8vaWNvblwiIH07XG5cbiAgICBwdWJsaWMgb25JbmRleENoYW5nZWQoYXJncykge1xuICAgICAgICBsZXQgdGFiVmlldyA9IDxUYWJWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGluZGV4IGNoYW5nZWQhIE5ldyBpbnhlZDogXCIgKyB0YWJWaWV3LnNlbGVjdGVkSW5kZXgpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4gICAgfVxuXG4gICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcbiAgICB9XG5cbiAgICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1c0RyYXdlcikge1xuXHRcdFx0dGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuXHRcdH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXdlck9wZW5lZChhcmdzOiBEcmF3ZXJTdGF0ZUNoYW5nZWRFdmVudEFyZ3MpIHtcblx0XHR0aGlzLnN0YXR1c0RyYXdlciA9IGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgb25EcmF3ZXJDbG9zZWQoYXJnczogRHJhd2VyU3RhdGVDaGFuZ2VkRXZlbnRBcmdzKSB7XG5cdFx0dGhpcy5zdGF0dXNEcmF3ZXIgPSB0cnVlXG5cdH1cblxuXHRcbn0iXX0=