import { Injectable } from '@angular/core';

declare var AppExtention: any;

declare var BodyInit: any;

function _window(): any {
    // return the global native browser window object
    return window;
}
function _demo(): any {
    // return the global native browser window object
    return AppExtention;
}

function _bodyInit(): any {
    // return the global native browser window object
    return BodyInit;
}


@Injectable({ providedIn: 'root' })
export class BrowserBridgeService {
    get nativeWindow(): any {
        return _window();
    }
    get nativeExtra(): AppExtention {
        return _demo();
    }
    get body(): BodyInit {
        return _bodyInit();
    }
}
export interface AppExtention {

    initGoogleMaps: void;
    showNotification(color: number, valign: string, halign: string, text: string): void;
    closeNavOnItemClick();
}

export interface BodyInit {
    init(): void;
    toggleSideBar(): void;
}
