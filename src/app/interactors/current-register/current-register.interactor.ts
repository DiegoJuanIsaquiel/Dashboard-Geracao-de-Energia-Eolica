//#region imports

import { Injectable } from "@angular/core";
import { RegisterProxy } from "src/app/models/proxies/register.proxy";
import { AsyncResult } from "src/app/modules/http-async/models/async-result";
import { HttpAsyncService } from "src/app/modules/http-async/services/http-async.service";
import { environment } from "src/environments/environment";

//#endregion

@Injectable({
    providedIn: 'root'
})
export class CurrentRegisterInteractor {

    //#region constructor

    constructor(
        private readonly http: HttpAsyncService,
    ) { }

    //#endregion

    //#region public methods

    public async getAllRegisters(): Promise<AsyncResult<RegisterProxy>> {
        const url = environment.api;

        return await this.http.get<RegisterProxy>(`${url}`);
    }

    //#endregion

}