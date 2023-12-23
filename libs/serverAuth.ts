import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

export const serverAuth = async (req: NextApiRequest) => {

    const prisma = new PrismaClient()

    const session = await getSession({ req })

    if(!session?.user?.email) {
        throw new Error('Not sign in')
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if(!currentUser) throw new Error('User not sign in')

    return { currentUser }
}
