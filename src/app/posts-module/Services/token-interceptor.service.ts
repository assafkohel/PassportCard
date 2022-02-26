import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ServerService } from './server.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector :Injector) { }


  intercept(req , next){
    let serverService = this.injector.get(ServerService)
    let tokinizedReq = req.clone(
      {
        setHeaders:{
          Authorization : `Bearer ${serverService.GetToken()}`
        }
      }
    )

    return next.handle(tokinizedReq)
  }
}
