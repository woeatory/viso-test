import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Log } from './decorators/logger.decorator';
import { EditSheetEventDto } from './dto/edit-sheet-event.dto';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Post()
  @Log(AppController.name)
<<<<<<< HEAD
  async editSheetWebhook(@Body() editSheetEventDto: EditSheetEventDto) {
    this.logger.log(editSheetEventDto);
  }
}
