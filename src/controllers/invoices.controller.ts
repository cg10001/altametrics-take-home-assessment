import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getInvoices() {
    console.log("testing")
    return await this.prismaService.getAllInvoices();
  }

  @Get(':id')
  async getInvoiceById(id: number) {
    console.log("testing2")
    return await this.prismaService.getInvoiceById(id);
  }
}
