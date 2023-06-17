//#region imports

import { Injectable } from "@angular/core";
import { CurrentRegisterInteractor } from "src/app/interactors/current-register/current-register.interactor";
import { RegisterProxy } from "src/app/models/proxies/register.proxy";
import { getErrorMessage } from "src/app/utils/functions";

//#endregion

@Injectable({
    providedIn: 'root'
})
export class CurrentRegisterService {

    //#region constructor

    constructor(
        private readonly currentRegisterInteractor: CurrentRegisterInteractor
    ) { }

    //#endregion

    //#region public methods


    public async getAllRegister(): Promise<[RegisterProxy | null, string]> {
        const { success, error } = await this.currentRegisterInteractor.getAllRegisters();

        if (!success)
          return [null, getErrorMessage(error)];

        return [success, ''];
      }

    //#endregion
}