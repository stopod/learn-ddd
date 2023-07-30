class ModelNumber {
  constructor(
    readonly productCode: string, // プロダクトコード
    readonly branch: string, // 枝番
    readonly lot: string // ロット番号
  ) {
    if (productCode == null) throw new Error("productCode is null");
    if (branch == null) throw new Error("branch is null");
    if (lot == null) throw new Error("lot is null");
  }

  toString() {
    return `${this.productCode}-${this.branch}-${this.lot}`;
  }
}

const modelNumber = new ModelNumber("a20421", "100", "1");
// 製品番号の由来が表現できる
console.log(modelNumber.toString());
