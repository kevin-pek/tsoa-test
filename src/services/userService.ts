import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export class UserService {
    /**
     * 
     * @param userId
     * @returns user
     */
    public static get = async (userId: string) => {
        return await prisma.user.findUniqueOrThrow({
            where: {
                id: userId
            }
        })
    }

    /**
     * 
     * @param userBody 
     * @returns string identifier for newly created user
     */
    public static create = async (userBody: Prisma.UserCreateInput) => {
        return (await prisma.user.create({ data: userBody })).id
    }
}