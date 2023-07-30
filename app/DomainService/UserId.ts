/**
 * ユーザーID VO
 */
export default class UserId {
  constructor(readonly value: string) {
    if (value == null) throw new Error("value is null");
  }
}
