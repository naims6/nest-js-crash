import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers() {
    return [
      {
        id: 133,
        name: 'Naim Sorker',
        age: 21,
      },
      { id: 134, name: 'Naims 2', age: 25 },
      { id: 135, name: 'Naimfadf 2', age: 24 },
      { id: 136, name: 'Naimdfad 2', age: 25 },
    ];
  }

  getUserProfile(id: string) {
    return {
      id: id,
    };
  }
}
