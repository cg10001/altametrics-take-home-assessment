import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/client';

@Injectable()
export class PrismaService {
  client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public async getAllInvoices() {
    console.log("TEST")
    const invoices = await this.client.invoice.findMany();
    return invoices;
  }

  public async getInvoiceById(id: number) {
    console.log("TEST")
    const invoice = await this.client.invoice.findFirst({
      where: {
        id: id,
      },
    });
    return invoice;
  }

  public async getUserByEmail(email: string) {
    const user = await this.client.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });
    return user;
  }
}
