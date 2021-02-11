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
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("iida");

/**
 * スプレット構文 ...
 */
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sunFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "iida"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index+1}${nameArr[index]}`)
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)
// nameArr.map((name, index) => console.log(`${index +1}番目${name}`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "iida") {
//     return name;
//   } else {
//     return `${name}です`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？　条件がtrueの時　：　条件がfalseの時
// const vall = 1 > 0? 'ture' : 'false';
// console.log(vall)

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num ==='number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう　＆＆　｜｜
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります")
// }
// if (flag1 && flag2) {
//   console.log("1か２もtrueになります")
// }

// || は左がfalseなら右を返す
const num = null;
const fee = num || "金額は未設定です";
console.log(fee);

// && は　左がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されなした";
console.log(fee2);
