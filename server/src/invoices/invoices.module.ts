import { Module } from '@nestjs/common';
import { InvoiceController } from './invoices.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvoiceController],
  providers: [],
})
export class InvoiceModule {}
