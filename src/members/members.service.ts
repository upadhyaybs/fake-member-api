import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  private members: Member[] = [];
  private idSeq = 0;
  create(createMemberDto: CreateMemberDto) {
    this.members.push({
      ...createMemberDto,
      id: this.idSeq++,
    });
    return this.members.at(-1);
  }

  findAll() {
    return this.members;
  }

  findOne(id: number): Member {
    return this.members.find((member) => member.id === id);
  }

  update(id: number, updateMemberDto: UpdateMemberDto): Member {
    const i = this.members.findIndex((member) => member.id == id);
    if (i === -1) return null;
    this.members[i] = {
      ...this.members[i],
      ...updateMemberDto,
    };
    return this.members[i];
  }

  remove(id: number): Member {
    const i = this.members.findIndex((member) => member.id == id);
    if (i === -1) return null;
    const member = this.members[i];
    this.members.splice(i, 1);
    return member;
  }
}
