import UserId from "./UserId";
import UserName from "./UserName";

/**
 * ユーザークラス Entity
 */
export default class User {
  private readonly userId: UserId;
  private username: UserName;

  constructor(username: UserName) {
    if (username == null) throw new Error("username is null");

    const id = new UserId("0000000000");

    this.userId = id;
    this.username = username;
  }
}

const user = new User(new UserName("sato"));
console.log(user);
