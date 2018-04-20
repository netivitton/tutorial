import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer, DrawerStateChangedEventArgs } from 'nativescript-ui-sidedrawer';
import { isIOS } from "platform";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { CallAPI } from "../services/callAPI.services"

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.html',
    styleUrls: ['profile.css'],
    providers: [CallAPI]
})

export class ProfileComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;
    ios;
    name = "เนติวิทย์"
    lastname = "ยุระพันธ์"
    pic_profile = "";
    address = "";
    introduce = "";

    editStatus = false;
    statusDrawer = true;
    status = "แก้ไข";
    constructor(private _changeDetectionRef: ChangeDetectorRef, private mycallAPI: CallAPI) {
        this.ios = isIOS;
    }

    public titleAndIcon: any = { title: "Icon", iconSource: "res://icon" };

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.extractData()

    }

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        if (this.statusDrawer) {
            this.drawer.showDrawer();
        } else {
            this.drawer.closeDrawer();
        }
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this.statusDrawer = false
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this.statusDrawer = true
    }

    extractData() {
        this.mycallAPI.getData()
            .subscribe((result) => {
                console.log(result);
                this.name = result.firstname;
                this.lastname = result.lastname;
                this.pic_profile = result.pic_profile;
                this.address = result.address;
                this.introduce = result.introduce;
            }, (error) => {

            });
    }

    action() {
        if (this.editStatus) {
            this.status = "ยืนยันข้อมูล"
            this.editStatus = true;
        } else {
            this.status = "แก้ไข"
            this.editStatus = false;
        }

    }

}