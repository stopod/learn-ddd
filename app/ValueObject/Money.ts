// ふるまいを持った値オブジェクト
export default class Money {
  constructor(readonly amount: number, readonly currency: string) {
    if (currency == null) throw new Error("currency is null");
  }

  add(money: Money) {
    if (money == null) throw new Error("money is null");
    if (this.currency !== money.currency)
      throw new Error("通貨単位が異なります");

    return new Money(this.amount + money.amount, this.currency);
  }

  // お金に出来ないことはかけない
  // multiply(money: Money) {...}

  // あるとしたら金利の計算、これなら振る舞いをかける
  multipy(rate: number) {
    return new Money(this.amount * rate, this.currency);
  }
}

// 加算
const myMoney = new Money(1000, "JPY");
const yourMoney = new Money(500, "JPY");
const result = myMoney.add(yourMoney);
console.log(result);
