import { Injectable } from '@nestjs/common';
import { SheetRepository } from '../sheet.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthMode, EditSheetCell } from '@prisma/client';

@Injectable()
export class PrismaSheetRepository extends SheetRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async addEditSheet(data: {
    authMode: AuthMode;
    oldValue: string;
    range: number;
    source: string;
    triggerUid: string;
    userEmail: string;
    value: string;
  }) {
    const { authMode, oldValue, range, source, triggerUid, userEmail, value } =
      data;
    await this.prismaService.editSheetCell.create({
      data: { authMode, oldValue, range, source, triggerUid, userEmail, value },
    });
  }

  async readAll(): Promise<EditSheetCell[]> {
    return await this.prismaService.editSheetCell.findMany();
  }

  async readById(id: number): Promise<EditSheetCell | null> {
    return await this.prismaService.editSheetCell.findFirst({
      where: { id: id },
    });
  }
}
