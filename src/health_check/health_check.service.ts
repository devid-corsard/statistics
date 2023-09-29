import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
    health_check(): string {
        return 'Ok';
    }
}
