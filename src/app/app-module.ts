import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {AppComponent} from "./app-component";
import {routing} from "../app-routes";
import "hammerjs";
import "gsap";
import "gsap/CSSPlugin";
import "gsap/Draggable";
import "gsap/TweenLite";
import "gsap/ScrollToPlugin";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

declare global {
    interface JQueryStatic {
        base64: any;
        knob: any;
        gradientPicker: any;
        timepicker: any;
        contextmenu: any;
        index: any;
    }
}

@Component({
    selector: 'app-root',
    template: `
        <h1>Hi filipesilva</h1>
    `,
})
export class AppComp {


}



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        Ng2Bs3ModalModule,
        HttpModule,
        routing,
    ],
    declarations: [AppComp],
    bootstrap: [AppComp]
})

export class AppModule {
    constructor() {
    }
}

