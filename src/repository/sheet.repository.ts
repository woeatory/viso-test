import { AuthMode, EditSheetCell } from '@prisma/client';

export abstract class SheetRepository {
  abstract addEditSheet(data: {
    authMode: AuthMode;
    oldValue: string;
    range: number;
    source: string;
    triggerUid: string;
    userEmail: string;
    value: string;
  }): Promise<any>;
  abstract readAll(): Promise<EditSheetCell[]>;

  abstract readById(id: number): Promise<EditSheetCell | null>;
}
