import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health_check.service';

@Controller('health_check')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) {}
    @Get()
    health_check(): string {
        return this.healthCheckService.health_check();
    }
}
