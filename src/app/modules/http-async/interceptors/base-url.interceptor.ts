//#region Imports

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAsyncConfig } from '../models/http-async.config';
import { HTTP_ASYNC_CONFIG } from '../models/injection-tokens';

//#endregion

/**
 * A classe que representa o interceptor que adiciona um url base para todas as requisições
 */
@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    @Inject(HTTP_ASYNC_CONFIG)
    @Optional()
    protected readonly config?: HttpAsyncConfig,
  ) { }

  //#endregion

  //#region Public Static Properties

  /**
   * O header que pode ser passado para desativar esse interceptor
   */
    // eslint-disable-next-line @typescript-eslint/naming-convention
  public static readonly DISABLE_HEADER: string = 'X-Disabled-BaseUrl';

  //#endregion

  //#region Public Methods

  /**
   * Método que é executado para interceptar a requisição e realizar alguma operação
   */
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.config?.baseUrl) {
      console.warn('Você incluiu o Interceptor para adicionar um url base mas deve ter esquecido de configurar o url base no módulo.');

      return next.handle(req);
    }

    if (!req.headers.get(BaseUrlInterceptor.DISABLE_HEADER))
      {req = req.clone({
        url: `${ this.config?.baseUrl }${ req.url }`,
      });}
    else {
      req = req.clone({
        headers: req.headers.delete(BaseUrlInterceptor.DISABLE_HEADER),
      });
    }

    return next.handle(req);
  }

  //#endregion

}
