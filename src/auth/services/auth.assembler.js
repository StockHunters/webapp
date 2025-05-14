import { User } from '../models/user.entity';

export class AuthAssembler {
  static toUser(data) {
    return new User(
      data.id,
      data.name,
      data.lastName,
      data.email,
      data.avatar
    );
  }

  static toUserList(dataList) {
    return dataList.map(data => this.toUser(data));
  }
}