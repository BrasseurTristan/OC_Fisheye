'use server';

import { updateNumberOfLikes } from './prisma-db';

export async function likeMedia(mediaId, currentLikes) {
  return updateNumberOfLikes(mediaId, currentLikes + 1);
}
