import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      { id: 1, name: 'Naim Sorker' },
      { id: 2, name: 'Tawhid' },
      { id: 3, name: 'Mohammad' },
    ];
  }

  //   get users by id
  getUsersById(id: string) {
    return {
      userId: id,
    };
  }
}
