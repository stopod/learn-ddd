/**
 * ユーザー名 VO
 */
export default class UserName {
  constructor(readonly value: string) {
    if (value == null) throw new Error("value is null");
    if (value.length < 3) throw new Error("ユーザー名は3文字以上です");
  }
}
