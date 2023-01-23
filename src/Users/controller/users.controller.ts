import { Body, Get, JsonController, Patch, Post } from 'routing-controllers';
import UserService from '../service/user.service';
import { UserI } from '../types/user.types';

@JsonController()
export class UsersController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  @Get('/users')
  async getAll(): Promise<UserI[] | []> {
    try {
      return await this.userService.findAll();
    } catch (error: any) {
      return error.message;
    }
  }

  @Get('/users/:id')
  async getOne(id: string): Promise<UserI | null> {
    try {
      return await this.userService.findById(id);
    } catch (error: any) {
      return error.message;
    }
  }

  @Post('/users')
  async create(@Body() user: UserI): Promise<UserI> {
    try {
      const data = await this.userService.create(user);
      return data;
    } catch (error: any) {
      return error.message;
    }
  }

  @Patch('/users/:id')
  async update(
    id: string,
    @Body({ validate: true }) user: UserI
  ): Promise<UserI | null> {
    try {
      return await this.userService.update(id, user);
    } catch (error: any) {
      return error.message;
    }
  }
}
