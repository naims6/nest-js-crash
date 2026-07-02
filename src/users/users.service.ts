import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  // get all users
  getUsers() {
    return [
      { id: 1, name: 'Naim Sorker' },
      { id: 2, name: 'Tawhid' },
      { id: 3, name: 'Mohammad' },
    ];
  }

  //   get users by id
  getUsersById(id: string, q: string) {
    return {
      userId: id,
      queryQ: q,
    };
  }

  //   create user
  createUser(data: CreateUserDto) {
    return {
      success: true,
      message: 'User Created Succesfully',
      user: {
        id: 123,
        name: data.name,
        email: data.email,
      },
    };
  }
}
