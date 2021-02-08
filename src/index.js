/**
 * const,let
 */
// var val1 = "var変数名";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言"；

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き"；

// const val3 = "const再宣言"；

//constで定義したオブジェクトは変更可能
// const val4 = {
//   name: "test",
//   age: 28,
// };
// val4.name = "テスト";
// val4.addres = "ひろしま";
// console.log(val4);

//constで定義した配列は変更可能

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */

// const name = "飯田";
// const age = 23;
// //私の名前は飯田です。年齢は２３です。
// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です・"
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "iida",
//   age: 23,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}才です`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}才です`;
// console.log(message1);

// const myProfile = ['iida', 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3)

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("iida");
