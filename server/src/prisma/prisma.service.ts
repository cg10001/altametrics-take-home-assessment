import { Injectable } from '@nestjs/common';
import { Invoice, PrismaClient } from '../../prisma/client';
import { User } from '../../prisma/client';

@Injectable()
export class PrismaService {
  client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public async getAllInvoicesForUserId(userId: number) {
    const invoices = await this.client.invoice.findMany({
      where: {
        user_id: userId,
      },
    });
    return invoices;
  }

  public async getInvoiceById(
    id: number,
    userId: number,
  ): Promise<Invoice | null> {
    const invoice = await this.client.invoice.findFirst({
      where: {
        id: id,
        user_id: userId,
      },
    });
    return invoice;
  }

  public async getUserByEmail(email: string): Promise<User> {
    const user = await this.client.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });
    return user;
  }
}
