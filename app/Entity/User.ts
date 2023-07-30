class UserId {
  readonly value: string;
  constructor(value: string) {
    if (value == null) throw new Error("value is null");
    this.value = value;
  }
}

class User {
  private readonly userId: UserId;
  private name: string;

  constructor(name: string, userId: UserId) {
    if (name == null) throw new Error("name is null");
    if (userId == null) throw new Error("userId is null");

    this.userId = userId;
    this.name = name;
  }

  changeName(name: string) {
    if (name == null) throw new Error("name is null");
    if (name.length < 3) throw new Error("ユーザ名は3文字以上です");
    // VOは値の交換によって変更を表現していたが、Entityは属性をふるまいを通じて変更させる
    this.name = name;
  }

  equals(userId: UserId) {
    if (userId == null) throw new Error("userId is null");
    // 同一性を表す識別子だけが比較の対象となる
    if (userId.value !== this.userId.value) return false;
    return true;
  }
}
const userId = new UserId("0000000000");
const user = new User("sato", userId);
console.log(user);

user.changeName("Ito");
console.log(user);
