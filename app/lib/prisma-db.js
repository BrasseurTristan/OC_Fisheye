import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export const getAllPhotographers = () => prisma.photographer.findMany();

export const getPhotographer = (id) =>
  prisma.photographer.findUnique({
    where: { id },
  });

export const getAllMediasForPhotographer = (photographerId) =>
  prisma.media.findMany({
    where: { photographerId },
  });

export const updateNumberOfLikes = (mediaId, newNumberOfLikes) =>
  prisma.media.update({
    where: { id: mediaId },
    data: { likes: newNumberOfLikes },
  });
