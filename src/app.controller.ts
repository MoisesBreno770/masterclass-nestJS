import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { createTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {

  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: createTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);


  }
}
