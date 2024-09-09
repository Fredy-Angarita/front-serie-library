import { HttpInterceptorFn } from "@angular/common/http"
import { AuthLoginService } from "../services/auth.login.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthLoginService);
    const token = authService.getAccessToken();
    const authReq = req.clone({
        setHeaders:{
            Authorization: `Bearer ${token}`
        }
    })
    return next(authReq);
}