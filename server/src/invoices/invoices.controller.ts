import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from '@nestjs/common';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly prismaService: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getInvoices(@Request() req) {
    return await this.prismaService.getAllInvoicesForUserId(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getInvoiceById(id: number, @Request() req) {
    return await this.prismaService.getInvoiceById(id, req.user.id);
  }
}
