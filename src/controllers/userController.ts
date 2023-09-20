import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from "tsoa";
import { UserService } from "../services/userService";
import { User, Prisma} from "@prisma/client";


@Route("user")
export class UserController extends Controller {
    @SuccessResponse("200", "Ok")
    @Get("{userId}")
    public async getUser(
        @Path() userId: string,
        @Query() name?: string
    ): Promise<User> {
        return UserService.get(userId);
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createUser(
        @Body() requestBody: Prisma.UserCreateInput
    ): Promise<void> {
        UserService.create(requestBody);
        return;
    }
}
