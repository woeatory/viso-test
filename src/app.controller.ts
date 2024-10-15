import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Log } from './decorators/logger.decorator';
import { EditSheetEventDto } from './dto/edit-sheet-event.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @Log('editSheetWebhook')
  async editSheetWebhook(@Body() editSheetEventDto: EditSheetEventDto) {
    const data = {
      authMode: editSheetEventDto.authMode,
      oldValue: editSheetEventDto.oldValue,
      range: editSheetEventDto.range,
      source: editSheetEventDto.source,
      triggerUid: editSheetEventDto.triggerUid,
      userEmail: editSheetEventDto.user,
      value: editSheetEventDto.value,
    };
    this.appService.addEdit(data);
  }

  @Get('getAllEdits')
  @Log('/getAllEdits')
  async getAllEdits() {
    return await this.appService.getAll();
  }

  @Get('getById')
  @Log('/getById')
  async getById(id: number) {
    return await this.appService.getById(id);
  }
}
