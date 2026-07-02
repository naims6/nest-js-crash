import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  users = [
    { id: '1', name: 'Naim Sorker' },
    { id: '2', name: 'Tawhid' },
    { id: '3', name: 'Mohammad' },
  ];

  // get all users
  getUsers() {
    return this.users;
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

  //   update user
  updateUser(updateData: UpdateUserDto, id: string) {
    return {
      success: true,
      message: 'User updated successfully',
      updatedData: {
        id,
        ...updateData,
      },
    };
  }

  //   delete user
  deleteUser(id: string) {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      success: true,
      message: 'User deleted successfully',
    };
  }
}
