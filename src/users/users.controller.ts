import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string, @Query('q') q: string) {
    return this.userService.getUsersById(id, q);
  }

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
