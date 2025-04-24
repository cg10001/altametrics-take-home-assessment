import { PrismaClient, Invoice, User, Prisma } from '../../prisma/client';
import * as bcrypt from 'bcryptjs';

function createInvoice(
  id: number,
  vendor_name: string,
  amount: number,
  due_date: string,
  description: string,
  user_id: number,
  paid: boolean,
): Invoice {
  return {
    id: id,
    vendor_name: vendor_name,
    amount: new Prisma.Decimal(amount),
    due_date: due_date,
    description: description,
    user_id: user_id,
    paid: paid,
  };
}

function createUser(
  id: number,
  email: string,
  name: string,
  password: string,
): User {
  return {
    id: id,
    email: email,
    name: name,
    password: password,
  };
}

async function main() {
  console.log('Seeding database');
  const client = new PrismaClient();
  const amazon = await client.invoice.upsert({
    where: { id: 0 },
    create: createInvoice(0, 'Amazon', 0, '09/11/23', 'Rental', 0, true),
    update: {},
  });

  const sysco = await client.invoice.upsert({
    where: { id: 1 },
    create: createInvoice(1, 'Sysco', 228.75, '09/11/23', 'Rental', 1, false),
    update: {},
  });

  const usFoods = await client.invoice.upsert({
    where: { id: 2 },
    create: createInvoice(2, 'US Foods', 0, '09/11/23', 'Rental', 2, true),
    update: {},
  });

  const retalInc = await client.invoice.upsert({
    where: { id: 3 },
    create: createInvoice(3, 'Retal Inc', 0, '09/11/23', 'Rental', 3, true),
    update: {},
  });

  const fiberOptics = await client.invoice.upsert({
    where: { id: 4 },
    create: createInvoice(
      4,
      'Fiber Optics',
      150,
      '09/11/23',
      'Rental',
      4,
      true,
    ),
    update: {},
  });

  const ikea = await client.invoice.upsert({
    where: { id: 5 },
    create: createInvoice(5, 'Ikea', 0, '09/11/23', 'Rental', 5, true),
    update: {},
  });

  const costco = await client.invoice.upsert({
    where: { id: 6 },
    create: createInvoice(6, 'Costco', 0, '09/11/23', 'Rental', 6, true),
    update: {},
  });

  const officeDepot = await client.invoice.upsert({
    where: { id: 7 },
    create: createInvoice(7, 'Office Depot', 0, '09/11/23', 'Rental', 7, true),
    update: {},
  });

  const sysco2 = await client.invoice.upsert({
    where: { id: 8 },
    create: createInvoice(8, 'Sysco', 350, '09/11/23', 'Rental', 1, false),
    update: {},
  });

  const user0 = await client.user.upsert({
    where: { id: 0 },
    create: createUser(
      0,
      'username@email.com',
      'John Doe',
      await bcrypt.hash('password', 10),
    ),
    update: {},
  });

  console.log('Finished seeding database');
}

main();
