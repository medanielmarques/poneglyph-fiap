import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/prisma';

export default async function resetUsersHearts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await prisma.userStats.updateMany({
      data: { heartsCount: 5 },
    });

    return res.status(200).send({});
  } catch (error) {
    return res.status(400).send({});
  }
}
