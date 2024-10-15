import { Injectable } from '@nestjs/common';
import { SheetRepository } from './repository/sheet.repository';

@Injectable()
export class AppService {
  constructor(private readonly sheetRepository: SheetRepository) {}
  async addEdit(data: {
    authMode: any;
    oldValue: string;
    range: number;
    source: string;
    triggerUid: string;
    userEmail: string;
    value: string;
  }): Promise<void> {
    await this.sheetRepository.addEditSheet(data);
  }

  async getAll() {
    return await this.sheetRepository.readAll();
  }

  async getById(id: number) {
    return await this.sheetRepository.readById(id);
  }
}
