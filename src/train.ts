console.log("TRAINING STARTED");

/* Project Standards: 
  - Logging standards
  - Naming standards 
     function, method, variable => Camel case  goHome
     class => PASCAL                           MemberService
     folder => KEBAB
     css => SNAKE  
  - Error handling
*/

/* 
Traditional API
Rest API
GraphQL API


Traditional Frontend Development => BSSR => EJS (Admin)

Modern FD => SPA => REACT (Users)
*/

/* 
TASK-J

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

*/

function findLongestWord(text: string): string {
  let longest = "";
  const words = text.split(" ");
  
  for(const word of words) {
      if(word.length>longest.length) {
        longest = word;
      } 
  }

  return longest;
}

console.log(findLongestWord(`Mening yurtim O'zbekiston`));


/* TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

*/

// function majorityElement(arr: number[]): number {
//   const countMap: { [key: number]: number } = {};

//   for (let num of arr) {
//     countMap[num] = (countMap[num] || 0) + 1;
//   }

//   let maxCount = 0;
//   let majority = arr[0];

//   for (let num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majority = Number(num);
//     }
//   }

//   return majority;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 3, 3]));


/*                  TASK H-2 
Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

MASALAN: getDigits("m14i1t") return qiladi "141"
*/

// function getDigits(arr3: string): string {
//     let numbers: string = "";
//     for(let i=0; i<arr3.length; i++)
//     {
//       if(arr3[i] >= '0' && arr3[i] <= '9') {
//         numbers = numbers.concat(arr3[i]).toString();
//       }
//     }
//     return numbers;
// }

// console.log(getDigits("jhdf1kh354j32h7j"));


/*                  TASK H-1:
shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
faqat positive qiymatlarni olib string holatda return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/
// function getPositive (arr2: number[]): string {
//     let positives: string = "";
//     for(let i=0; i<arr2.length; i++) {
//       if(arr2[i]>0) {
//         positives = positives.concat(arr2[i].toString());
//       }
//     }
//     return positives;
// }

// console.log(getPositive([32,-34,-4,14,0,45,3,-4]));



/*                  TASK G:
Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.
*/

// function getHighestIndex (arr: number[]): number {
//   let engKatta = arr[0];
//   let index = 0;
//     for(let i=1; i<arr.length; i++) {
//       if(arr[i]>engKatta) {
//         engKatta = arr[i];
//         index = i;
//       }
//     }
//     return index;
// }
// let arr: Array<number> = [93,34,5,24,199];

// console.log(getHighestIndex(arr));


/*                  TASK F:
Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

// findDoublers = (str) => {
//   const letterCount = {};
  
//   for (let char of str) {
//     if (letterCount[char]) {
//       return true; 
//     }
//     letterCount[char] = 1; 
//   }
  
//   return false; 
// }

// console.log(findDoublers("qwertyuiopasd"));
// console.log(findDoublers("hello"));


/*                  TASK E:
Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"                   */

/* Version 1 */

// getReverse = (str) => {
//   let teskari = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     teskari += str[i];
//   }
//   console.log(teskari);
// }

// /* Version 2 */
// getReverse2 = (str) => {
// console.log( str.split('').reverse().join(''));
// }

// getReverse('Sokhibjon'); 
// getReverse2('Justin'); 


/*                  TASK D                   */

/* Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil 
harflardan iborat bolsa true aks holda false qaytarsin

MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;


function checkContent(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = [...str1].sort().join('');  //or str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join(''); //or str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("hello", "world")); // false
console.log(checkContent("Sohibjon", "nojbihoS")); // true

*/

/*                  TASK C   
Shunday class tuzing tuzing nomi Shop, 
va uni constructoriga 3 hil mahsulot pass bolsin, 
hamda classning 3ta methodi bolsin, biri qoldiq, 
biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); 
shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & 
shop.qabul('cola', 4) & 
shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

/* class Shop {
  constructor(non, lagmon, cola) {
    this.mahsulotlar = {
      non: non,
      lagmon: lagmon,
      cola: cola
    };
  }

  qoldiq() {
    console.log(`Hozir ${time}. Do'konda ${this.mahsulotlar.non} dona non, ${this.mahsulotlar.lagmon} kosa lag'mon,
       ${this.mahsulotlar.cola} dona cola bor.`);
  }

  sotish(mahsulot, miqdor) {
    if (this.mahsulotlar[mahsulot] >= miqdor) 
    {
      this.mahsulotlar[mahsulot] -= miqdor;
      console.log(`${time} da ${miqdor}ta ${mahsulot} sotildi.`)
    } else {
      console.log(`Soat ${time}. Do'konda yetarlicha ${mahsulot} yo'q.`);
    }
  }

  qabul(mahsulot, miqdor) {
        this.mahsulotlar[mahsulot] += miqdor;
        console.log(`Soat ${time}da do'konga ${miqdor}ta ${mahsulot} qabul qilindi.`);
      }


}

const shop = new Shop(4, 5, 2); 
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq();

*/ 


/*                  TASK B            
Shunday function tuzing, u 1ta string parametrga ega bolsin, 
hamda o`sha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// let mixWord = "skdfjlsdjf3847289361fdslkhfk2A223454";

// function countLetters(mixWord) {
//   let count = 0; 
//   for (let i = 0; i < mixWord.length; i++) {
//     if (mixWord[i] >= '0' && mixWord[i] <= '9') {
//       count++;
//     }
//   }
//   console.log(`Berilgan so'zda raqamlar soni: ${count}`);
// }

// countLetters(mixWord);

/*                  TASK A              
Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi
*/

// let word = "mexanizatsiyalshtirilgandanmisizlar"; //Sanash kerak bo'lgan so'z
// let letter = "a";

// function countLetter(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//  console.log(`${word}da ${letter} harfi ${count} ta`);
// }

// countLetter(word, letter);
// countLetter(word, "m");
// countLetter("Sokhibjon", " o");
// countLetter("James", "e");


// function countLetter2(text, letter) {
//   let count = 0;
//   for (let i of text) {
//     if (i === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter2("mexanizatsiyalshtirilgandanmisizlar", "a"));

/*                  Lesson 21                  

const advice = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xatolardan o'rganing", // 20-30
    "O'zingizga ishlashni boshlang", // 30-40
    "O'zingizni yaxshi his qiladigan ishni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling", // 60+
];

 


function maslahatBering(age, callback) {
  if (isNaN(age)) {
    callback('Iltimos, yoshni raqam sifatida kiriting', null);
  } else if (age <= 20) {
    callback(null, advice[0]);
  } else if (age <= 30) {
    callback(null, advice[1]);
  } else if (age <= 40) {
    callback(null, advice[2]);
  } else if (age <= 50) {
    callback(null, advice[3]);
  } else if (age <= 60) {
    callback(null, advice[4]);
  } else {
    callback(null, advice[5]);
  }
}

maslahatBering(25, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Natija: ${result}`);
  }
});

*/

/*                  Lesson 22                 

const advice2 = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xatolardan o'rganing", // 20-30
    "O'zingizga ishlashni boshlang", // 30-40
    "O'zingizni yaxshi his qiladigan ishni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling", // 60+
];



function maslahatBering(age, callback) {
  if (isNaN(age)) {
    callback('Iltimos, yoshni raqam sifatida kiriting', null);
  } else if (age <= 20) {
    callback(null, advice2[0]);
  } else if (age <= 30) {2
    callback(null, advice2[1]);
  } else if (age <= 40) {2
    callback(null, advice2[2]);
  } else if (age <= 50) {2
    callback(null, advice2[3]);
  } else if (age <= 60) {2
    callback(null, advice2[4]);
  } else {
    setInterval(function() {
      callback(null, advice2[5]);
    }, 1000); // 2 soniya kutish
  }
}


console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) {
    console.log("Xatolik:", err);
  } else {
    console.log(data);
  }
});
console.log("passed here 1");/



async function maslahatBering2(a) 
{
    if (typeof a !== "number") throw new Error ('Iltimos, yoshni raqam sifatida kiriting');
         else if (a <= 20) return advice2[0];
         else if (a <= 30) return advice2[1];
         else if (a <= 40) return advice2[2];
         else if (a <= 50) return advice2[3];
         else if (a <= 60) return advice2[4];
         else { 
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(advice2[5]);
                }, 2000); // 2 soniya kutish
            });
        
    }
    
}

// then/catch
console.log("passed here 0");

maslahatBering2(25).then(data =>{
    console.log("Javob:", data);
})
.catch((err) => {
    console.log("Xatolik:", err);
});
console.log("passed here 1");


// async/await

async function run() {
 let javob = await maslahatBering2(20);
 console.log(javob);
 javob = await maslahatBering2(31);
 console.log(javob);
 javob = await maslahatBering2(41);
 console.log(javob);

}

run();

  */