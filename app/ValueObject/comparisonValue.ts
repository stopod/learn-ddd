import FullName from "./FullName";

const nameA = new FullName("sato", "takashi");
const nameB = new FullName("sato", "takashi");

// 値オブジェクトもあくまで値なので、属性を取り出して比較するのではなく、
// 値と同じように値オブジェクト同士が比較できるようにする方が自然になる
const isCheck = nameA.equals(nameB);
console.log(isCheck);
