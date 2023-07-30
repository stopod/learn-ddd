class UserId {
  constructor(readonly value: string) {
    if (value == null) throw new Error("value is null");
  }
}

class UserName {
  constructor(readonly value: string) {
    if (value == null) throw new Error("value is null");
  }
}

class User {
  constructor(userId: UserId, userName: UserName) {}

  createUser(username: UserName) {
    // userId型なので入らない
    // const user = new User(username.value, username.value);
    const userId = new UserId("sample");
    return new User(userId, username);
  }
}
