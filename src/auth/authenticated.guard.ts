import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';

//TODO: Проверяет залогинен ли пользователь

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest()

        return request.isAuthenticated()
    }
}