import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getInvoices() {
    return await this.prismaService.getAllInvoices();
  }

  @Get(':id')
  async getInvoiceById(id: number) {
    return await this.prismaService.getInvoiceById(id);
  }
}
