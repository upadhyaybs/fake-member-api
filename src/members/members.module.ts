import { Module } from '@nestjs/common';
import { MembersService } from './service/members.service';
import { MembersController } from './controller/members.controller';

@Module({
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
