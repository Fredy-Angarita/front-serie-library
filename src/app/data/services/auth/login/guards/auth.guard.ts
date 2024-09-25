import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthLoginService } from "../services/auth.login.service";

export const authGuard: CanActivateFn = () =>{
    const authService = inject(AuthLoginService);
    const router = inject(Router);
    if(!authService.isAuthenticated()){
        router.navigate(['/login']);
        return false;
    } 
    return true;
}