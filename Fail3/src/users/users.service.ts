import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { poneiMoedas: true },
    });
  }

  async findByCpf(cpf: string) {
    return this.prisma.user.findUnique({
      where: { cpf },
      include: { poneiMoedas: true },
    });
  }

  async findByTelefone(telefone: string) {
    return this.prisma.user.findFirst({
      where: { telefone },
      include: { poneiMoedas: true },
    });
  }

  async findByProfileId(profileId: string) {
    return this.prisma.user.findUnique({
      where: { profileId },
      include: { poneiMoedas: true },
    });
  }

  async updateEmail(userId: string, newEmail: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { email: newEmail },
    });
  }

  async findSubscriptionByPoneiAccount(poneiAccountId: string) {
    return this.prisma.player.subscription.findFirst({
      where: { poneiAccountId },
      include: { profile: true },
    });
  }
}
