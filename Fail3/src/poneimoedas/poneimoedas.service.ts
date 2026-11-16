import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PoneimoedasService {
  constructor(private prisma: PrismaService) {}

  async findByUserId(userId: string) {
    return this.prisma.poneiMoedas.findUnique({
      where: { userId },
      include: { 
        episodiosReproduzidos: {
          orderBy: { dataReproducao: 'desc' }
        }
      },
    });
  }

  async getPoneimoedas(userId: string) {
    const poneiMoedas = await this.prisma.poneiMoedas.findUnique({
      where: { userId },
    });
    return poneiMoedas?.quantidade || 0;
  }

  async getEpisodiosReproduzidos(userId: string) {
    const poneiMoedas = await this.prisma.poneiMoedas.findUnique({
      where: { userId },
      include: { 
        episodiosReproduzidos: {
          orderBy: { dataReproducao: 'desc' }
        }
      },
    });
    return poneiMoedas?.episodiosReproduzidos || [];
  }

  async addEpisodio(userId: string, episodioId: string, titulo: string, quantidade: number) {
    return this.prisma.$transaction(async (tx) => {
      // Verifica se o episódio já foi reproduzido
      const existingEpisodio = await tx.episodioReproduzido.findUnique({
        where: {
          poneiMoedasId_episodioId: {
            poneiMoedasId: userId,
            episodioId,
          },
        },
      });

      if (existingEpisodio) {
        throw new Error('Episódio já foi reproduzido anteriormente');
      }

      // Cria ou atualiza PoneiMoedas
      let poneiMoedas = await tx.poneiMoedas.findUnique({
        where: { userId },
      });

      if (!poneiMoedas) {
        poneiMoedas = await tx.poneiMoedas.create({
          data: {
            userId,
            quantidade,
          },
        });
      } else {
        poneiMoedas = await tx.poneiMoedas.update({
          where: { userId },
          data: {
            quantidade: {
              increment: quantidade,
            },
          },
        });
      }

      // Adiciona o episódio reproduzido
      const episodio = await tx.episodioReproduzido.create({
        data: {
          poneiMoedasId: poneiMoedas.id,
          episodioId,
          titulo,
        },
      });

      return {
        poneiMoedas,
        episodio,
      };
    });
  }

  async initializePoneiMoedas(userId: string) {
    const existing = await this.prisma.poneiMoedas.findUnique({
      where: { userId },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.poneiMoedas.create({
      data: {
        userId,
        quantidade: 0,
      },
    });
  }
}
