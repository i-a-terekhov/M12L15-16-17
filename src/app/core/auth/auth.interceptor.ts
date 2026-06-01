import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {  // Интерсептор срабатывает перед отправкой запроса на сервер
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    const authReq = req.clone({   // В reg неизменяемый объект, поэтому для манипуляций с запросом, создаем его копию
      headers: req.headers.set('authorization', authToken)
    })
    return next.handle(authReq).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log(event);                                                             // смотрим ответ от сервера
          }
        }
      })
    );
  }
}
