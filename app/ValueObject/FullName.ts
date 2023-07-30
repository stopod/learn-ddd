//  VO Value Object 値オブジェクト
export default class FullName {
  constructor(readonly firstName: string, readonly lastName: string) {
    // 性と名にルールがあっても表現は可能 ガード節
    if (firstName.length < 3) throw new Error("3文字未満制限");
  }

  equals(fullName: FullName) {
    if (this.firstName !== fullName.firstName) return false;
    if (this.lastName !== fullName.lastName) return false;
    return true;
  }
}
