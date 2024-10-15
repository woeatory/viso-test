import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Log } from './decorators/logger.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Log(AppController.name)
  getHello(): string {
    return this.appService.getHello();
  }
}
