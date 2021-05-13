/*
 let tsString = 'str'

 let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b)
 tsSum([1, 2, 4, 6, 10])

 const tsString1 = 'Hello'
 const tsNumber = 25

 const strOrNumber: string | number = 21
 const strOrNumber1: string | number = 'hello'

 type StringOrNumber = string | number

 const strOrNumber2: StringOrNumber = 'hello'

 type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | [] | object

 type tsArr = (number | string)
 const tsArr: (string | number)[] = [1, '2', 2]
 const tsArr2: tsArr[] = [1, 'g', 2]
 const tsArr3: Array<tsArr> = [1, 'g', 2]


 const tsNextArr: [string, number] = ['1', 2]


 type tsObj = {
     name: string,
     age: number,
     city?: string
 }

 const tsObj: { name: string, age: number} = {
     name: 'Vlad',
     age: 25
 }
 const tsObj2: tsObj = {
     name: 'Vlad',
     age: 25
 }
 interface MyFirstInterface {
     readonly name: string;
     age: number;
     city?: string;
     lastname?: string;
 }
 const tsObj3: MyFirstInterface = {
     name: 'Vlad',
     age: 25,
     lastname: 'Titarenko'
 }

 interface IndexInterface {
     [n: string]: string
 }
 const data: IndexInterface = {
     key1: 'key',
     key2: 'hi'
 }
 const val2 = data.key3

 function calculate(method: 'add' | 'sub', first: number, second: number): number {
     switch (method){
         case 'add': return first + second
         case 'sub': return first - second
     }
 }
homeWork2
 const concat = (str1: string, str2: string): string => str1 + str2;

 interface myHometaskInterface {
     howIDoIt: string;
     simeArray: (string | number)[];
     withData: [{ howIDoIt: string; simeArray: [string, number] }];
 }
 const myHometask: myHometaskInterface = {
     howIDoIt: 'fast',
     simeArray: ['bla', 'blabla', 23],
     withData: [{ howIDoIt: 'slow', simeArray: ['eh', 12] }],
 };

 interface MyArray<T> {
     [N: number]: T;
 }
*/
