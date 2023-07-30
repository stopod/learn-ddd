import FullName from "./FullName";

let greet = "こんちには";
console.log(greet);

greet = "Hello";
// 代入によって変更しているのは「変数の内容」
// 値そのものを変更しているわけではない
console.log(greet);

const fullName = new FullName("sato", "taro");
// fullName.changeLastName("kato"); // これは値の変更をしてしまっている
// FullNameはシステム固有の値を表しているVO、不変であるべき

// ---

let sampleName = new FullName("sato", "taro");
// 交換による表現は可能
sampleName = new FullName("ito", "taro");
