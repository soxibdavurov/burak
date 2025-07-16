/* 
Stringdagi takroriy harflarni olib tashlash
*/

 const removeDuplicates = function (str: string): string {
  let result = "";

  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicates("Islom"));
console.log(removeDuplicates("aabbccddeeaa"));