import User from "./User";

export default class UserService {
  public exists(user: User) {
    // ユーザーの重複チェック
    return true;
  }
}
