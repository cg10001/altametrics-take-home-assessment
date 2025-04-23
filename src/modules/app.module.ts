import { Module } from '@nestjs/common';
import { InvoiceController } from 'src/controllers/invoices.controller';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [],
  controllers: [InvoiceController],
  providers: [PrismaService],
})
export class AppModule {}
