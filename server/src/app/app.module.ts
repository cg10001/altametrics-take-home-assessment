import { Module } from '@nestjs/common';
import { InvoiceModule } from '../invoices/invoices.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [InvoiceModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
