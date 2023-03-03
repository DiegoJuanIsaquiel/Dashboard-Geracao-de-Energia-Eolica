import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class ScrollService {
    //#region Constructor

    constructor(private router: Router) { }

    //#endregion

    //#region Public Methods

    public scrollToElementById(id: string) {
        const element = this.getElementById(id);
        this.scrollToElement(element);
    }

    public scrollToElement(element: HTMLElement | null) {
        element!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    //#endregion

    //#region Private Methods

    private getElementById(id: string): HTMLElement | null {
        const element = document.getElementById(id);
        return element;
    }

    //#endregion
}
