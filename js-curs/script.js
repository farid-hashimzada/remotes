// let ferid = {
//     ad: 'ferid',
//     age: 22
// }

// const HBD = (obj) => {
//     obj.age +=  1
// }

// HBD (ferid)
// console.log(ferid.age)

// let obj = {ad: 'farid'}     //aa
// let obj2 = obj            //aa

// obj.ad = 'hashimzada'
// console.log(obj.ad)
// console.log(obj2.ad)

// function Animal (name_, nick, age, voice) {
//     this.name = name_
//     this.nick = nick
//     this.age = age
//     this.voice = voice
// }

// const bear = new Animal('intiqam', 'inti', 18, 'hahah')

// console.log(bear.name)
// console.log(bear.nick)
// console.log(bear.age)
// console.log(bear.voice)

// function Car (model, brand, year) {
//     this.model = model
//     this.brand = brand
//     this.year = year
// }

// const bmw = new Car('f-30', 'black', '2023')

// console.log(bmw.model)
// console.log(bmw.brand)
// console.log(bmw.year)

// function Farid (name, surname, age, car) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.car = car
// }

// const person = new Farid('farid', 'hashimzada', 18, 'dont yet')

// console.log(person.name)
// console.log(person.surname)
// console.log(person.age)
// console.log(person.car)

// function creatUser (name, age, nick) {
//     const obj = {
//         name,
//         age,
//         nick,
//         doing: () => {
//             console.log(`${name} is coding`)
//         }
//     }
//     return obj
// }

// const farid = creatUser('farid', 18, 'master')
// farid.doing()

// function toCapitalCase(ad) {
//   console.log(ad.replace(ad[0], ad[0].toUpperCase()))
//     return toCapitalCase
// }

// toCapitalCase('ali')

// let ad1 = new String('farid')
// let ad2 = new String('Ay)')
// if(ad1.length === ad2.length) {
//     console.log('true ')
// }
// console.log(ad.length);
// for(let i = 0; i < ad.length; i++) {
//     console.log(ad[i])
// }

// for(let i = 0; i < ad2.length; i++) {
//     console.log(ad2[i])
// }

// const ay = 'ay) farid'
// let ay1 = ay.replaceAll('a', 'A')
// console.log(ay1)

// replace() ile mentiqli mesele helli
// const ad = 'farid ay '
// let count = ad.length - ad.replaceAll('a', '').length
// console.log(count)

// slice dilimleyir
// const ad = 'farid hashimzada'
// let ay = ad.slice(0, 5)
// console.log(ay)

// sozleri ekrana cixartmaq ucun istifade olunur
// const ad = 'farid, hasimzada, ay)'
// let ay = ad.split(', ')
// console.log(ay)

// toUpperCase ucun
// function toCapitalCase(ad) {
//     console.log(ad.replace(ad[0] , ad[0].toUpperCase()))
// }

// toCapitalCase('farid')
// toCapitalCase('ay')
// toCapitalCase('together')

// nece gun yasadigimi hesablayacam
// const birthday = new Date(2000, 2, 4)
// let indi = Date.now()
// const dayCount = (indi - birthday) /1000 /60 /60 /24
// console.log(dayCount)

// const massiv = ['farid', 'ali', 'intiqam', 'nazim']

// for( let i = 0; i < massiv.length; i++) {
//     if(massiv[i].length > 4 ) {

//         console.log(massiv[i])
//     }
// }

// const arr = [24,55,66,257,33,24,56]
// let sum = 0
// for(let num of arr) {
//   sum += num
// }
// console.log(sum)
// console.log(arr)

// let human = {
//     ad:'ferid',
//     surname: 'hashimzada',
//     age: 18
// }

// for(let key in human) {
//     console.log(`${key} - ${human[key]}`)
//   }
//   console.log(human)

// let arr = ['farid', 'ay)', 'together', 6,
// function (name) {
//     console.log(name)
// }]

// arr [arr.length - 1]('farid')

// const date = new Date()
// document.write(date)

// let sairler = [
//   { name: "Ali", year: 1990 },
//   { name: "Farid", year: 2010 },
//   { name: "Sada", year: 1890 },
// ];

// sairler.sort((a, b) => a.year - b.year);
// console.log(sairler);

// const brovaMeyveleri = [
//   {
//     name: "alma",
//     type: "fruit",
//   },

//   {
//     name: "armud",
//     type: "fruit",
//   },

//   {
//     name: "tomato",
//     type: "vegetable",
//   },

//   {
//     name: "brocoli",
//     type: "vegetable",
//   },

//   {
//     name: "nar",
//     type: "fruit",
//   },
// ];

// function selectFruits(arr) {
//   return arr.filter((obj) => obj.type === "fruit");
// }

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   if(i%2===1) {
//     console.log(i)
//   }
//   sum+=i
// }

// console.log(sum);

// const nam  = 'dwqdqwdqdqdqdqwdwqdqwdq';
// for(let i = 24; i <= nam.length; i++) {
//     nam.length <=23 ? console.log('bu sert duzdur') : console.log('bu sert sehvdir')
//     console.log(nam)
// }

//switcle calculator

// const x = +prompt('eded daxil edin')
// let operator = prompt('operator daxil edin')
// const y = +prompt('eded daxil edin')
// let add = 'that case is true'

// switch(operator) {
//     case '+':
//         console.log(x + y);
//         if(x > y) {
//            console.log(`herriii ${add}  seni x`)
//         }else{
//             console.log('senki uje olmadi')
//         }
//         break;
//     case '-':
//         console.log(x-y);
//         break;
//     case '*':
//         console.log(x * y);
//         break;
//     case '/':
//         console.log(x / y)

//         default:'xais edirik eded daxil edin'
// }

// function ay(x, y) {
//     let net = x + y
//     return net
// }

// let netice = ay(5, 5)
// console.log(netice)

// let ay = (x, y) => x +y;

// console.log(ay(5,6))

// function pakize(ed1, ed2) {
//     return function (ad) {
//         console.log(`${ad} cemin budur: ${ed1 + ed2}`)
//     }
// }

// let test = pakize(10, 10)
// test('ferid')

// function pakize(ed1, ed2) {
//     return function (ad) {
//         console.log(`${ad}: the number is my best number: ${ed1 + ed2}`)
//     }
// }

// let test1 = pakize(20, 20)
// test1('master')

// function cem(ed1, ed2, callback) {
//     let netice = ed1 + ed2
//     callback(netice)
// }

// cem(15, 10, function(ay) {
//     console.log(`that is a callback function: ${ay}`)
// })

// function ay(callback) {
//     let netice = `${5 + 5}`
//     callback(netice)
// }

// ay(function(ay1) {
//     console.log(ay1)
// })

// const cemm = (a, b) => a + b

// console.log(cemm(5, 9))

// arrow function
// const kmToMl = (km) => {
//     return km * 16
// }

// console.log(kmToMl(10))

// const formalMan = (ad) => `Mr. ${ad}`

// console.log(formalMan('farid'))

// const makeFormal = (cins) => {
//     if (cins === 'k') {
//         return (ad) => `Mr. ${ad}`
//     }

//     else if(cins === 'q') {
//         return (ad) => `Mrs ${ad}`
//     }
// }

// const kisiUcun = makeFormal('k')
// const qadinUcun = makeFormal('q')

// console.log(kisiUcun('farid'))
// console.log(qadinUcun('Ay'))

//for in
// const a = {
//     name:'farid',
//     age: 18,
//     color: 'black',
//     car: 'Masaratti'
// }

// for(let key in a) {
//     console.log(`${key} - ${a[key]}`)
// }

//for of

// const neon = [
//     'farid',
//     'ay)',
//     'together'
// ]

// for(key of neon) {
//     console.log(key)
// }

// const number = +prompt('eded daxil edin')

// for(let count = 1; count <= 10; count++) {
//     const operate = number * count
//     console.log(`${number} x ${count} = ${operate}`)
// }

//vurma cedveli
// const number = +prompt('eded daxil edin')

// for(let i = 1; i <=10; i++) {
//     const operate = number * i
//     console.log(`${number} x  ${i} = ${operate}`)
// }

//referance type
// const obj = {
//     name: 'farid',
//     age: 18,
//     car: 'masaratti'
// }

// let obj2 = obj

// console.log(obj)
// console.log(obj2)

//burda 2 ni nece cxaedim prop2Takeri da prop2 ni?
// function prop2Taker(obj) {
//     console.log(obj.i)
// }

// prop2Taker({
//     'one': 1,
//     'prop2': 'two',
//     'i': 6
// })

// construktor usuluna numune hem class ile hemde function usulu ile
// class Animal {
//     constructor(name, age, color, nick) {
//         this.name = name
//         this.age = age
//         this.color = color
//         this.nick = nick
//     }

// }

// const poni = new Animal('pop', 2, 'white', 'popa')
// console.log(poni.age)

// class Girl {
//     constructor(name, age, color, nick) {
//         this.name = name
//         this.age = age
//         this.color = color
//         this.nick = nick
//     }
// }

// const ay = new Girl("ay)", 18, 'billur', 'ayim')
// const ayTwo = new Girl("farid", 18, 'person color', 'master')

// console.log(ayTwo)
// console.log(ay)

//callack function's example
// function fetchData(callback) {
//     setTimeout(() => {
//       callback('Data fetched successfully!');
//     })
//   }

//   function handleData(data) {
//     console.log(data);
//   }

//   fetchData(handleData)

// const arr = ['ferid', 'ay']

// let netice = arr.map((ad) => ad[0].toUpperCase())
// console.log(netice)

// const images = ['a', 'b', 'c', 'd', 'f', 'g']
// const randomIndex = Math.floor(Math.random() * images.length )

// console.log(images[randomIndex])
// function click() {

// }

// btn.onclick = () => {
//     if(btn.className.includes('active')) {
//         btn.className = btn.className.replace('active', '')
//     } else {
//         btn.className = 'active'
//     }
// }

// const btn = document.querySelector('button')
// const medeContainer = document.getElementById('medeContainer')

// btn.onclick = () => {
//     medeContainer.classList.toggle('dark')
// }

// const btn = document.querySelector('button')
// const body=  document.querySelector('body')
// const dark= document.getElementById('modeDark')
// btn.onclick = () => {
//     btn.classList.toggle('active')
// }

// btn.onclick = () => {
//     dark.classList.toggle('dark')
// }

// const ay = document.querySelector("p");
// const button = document.querySelector("button");
// const rootElem = document.querySelector("#root");

// const timeOut = setTimeout(() => {
//   ay.textContent = "sen meni xilas ede bilmedin ferid😢";
// }, 3000);

// button.onclick = () => {
//   clearTimeout(timeOut);
//   ay.textContent = "ay";
// };
// setTimeout(() => {
//   ay.textContent = "bilirdim";
// }, 5000);

// setTimeout(() => {
//   ay.textContent = "sen🦸‍♀️";
// }, 8000);
// setTimeout(() => {
//   ay.textContent = "mende";
// }, 9000);
// setTimeout(() => {
//   ay.textContent = "mutlu";
// }, 10000);

// let names = [
//   {
//     ad: "farid",
//     img: "Rectangle.png",
//   },

//   {
//     ad: "ay",
//     img: "Rectangle.png",
//   },

//   {
//     ad: "nadir",
//     img: "Rectangle.png",
//   },

//   {
//     ad: "sahlar",
//     img: "Rectangle.png",
//   },

//   {
//     ad: "nurane",
//     img: "Rectangle.png",
//   },
// ];
// names.forEach((user) => {
//   rootElem.innerHTML += `<p>${user.ad}</p> <img src = "../ti-amazing/all-img-Ti-academy/${user.img}" alt = "picture of${user.ad}" >`;
// });

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   tellName() {
//     console.log(`my name is ${this.name} and  ${this.age}`);
//   }
// }

// const farid = new User("farid", 18);
// farid.tellName();

// let farid1 = "hey do i somethink veri is bad";
// let ay1 = farid1.split();
// console.log(ay1);

// let sum = 0;

//textin uzunlugunu tapanda isitfade olunur
// function test(a) {
//   console.log(a.split(' ').length)
// }

// test('hello world')

// let cli =''

// while (cli ==='q') {
//     cli = prompt('eded daxil edin')
//     console.log(cli)
// }

// const anaSozu = {
//   en: 'mother',
//   az: 'ana',
//   ru: 'mam',
//   tr: 'anne'
// }
// console.log(anaSozu)

// let chose = prompt('az, ru, en, turk')

// if(chose === 'az') {
//   console.log(anaSozu.az)
// }

// function test(callback) {
//   callback(prompt("ededi daixl et zehet olmasa"));
// }

// test((soz) => {
//   console.log(soz);
// });

// function cem(a, b, c) {
//   return a + b + c;
// }

// let a = cem(4, 4, 4);

// console.log(a);

// function worldCount(cumle) {
//   console.log(cumle.split(" ").length);
// }

// worldCount("salam men hey qardas");

// const yekun = ["farid", "ay"];
// let first = yekun[0];
// let second = yekun[1];

// console.log(first);
// console.log(second);

// let human = {
//   ad: "farid",
//   age: 18,
// };

// const tree = ({ad,age, adTwo})=> {
// console.log(`your name is ${ad} and your age is ${age} }`)
// }

// tree(human)

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(({ data }) => {
//     console.log(data);
//   });

// async function show() {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(data);
// }

// show();





// const language = {
//     az: 'mama',
//     tr: 'anne',
//     en: 'mother',
// }
// let choose = prompt('az, en, tr')

// function changeLanguage() {
//     if (choose === 'az') {
//         console.log(language.az)
//     } else if (choose === 'en') {
//         console.log(language.en)
//     } else if (choose === 'tr') {
//         console.log(language.tr)
//     }else{
//         console.log('please choose any language')
//     }
// }

// changeLanguage()

// switch (choose) {
//     case 'az':
//         console.log(language.az)
//         break;
//     case 'tr':
//         console.log(language.tr)
//         break;
//     case 'en':
//         console.log(language.en)
//         break;
//     default:
//         console.log(`${language.az} please choose any laguage'`)
// }

// let hum = {
//     ad: 'farid',
//     age: 18
// }

// function checkSome({ad,age}) {
//     console.log(`my name is ${ad} and my age ${age}`)
// }

// checkSome(hum)

// let name = prompt('sahlar adivi daxil et')

// function showName(ad) {
//     console.log(`my name is ${ad}`)
// }

// let result = showName(name)
// console.log(result)

// function test(callback) {
//     callback('ay) farid')
// }

// test((farid) => {
//     document.write(farid)
// })


// let pro = prompt('en, tr, az, tr')

// let arr = {
//     az: 'ana',
//     en: 'mother',
//     tr: 'anne',
//     ru: 'mama'
// }

//                                             // console.log(arr[pro]) bu daha suretli yolda

// switch (pro) {
//     case 'en':
//         console.log(arr.en)
//         break;
//     case 'az':
//         console.log(arr.az)
//         break;
//     case 'tr':
//         console.log(arr.tr)
//         break;
//     case 'ru':
//         console.log(arr.ru)
//         break;
//     default:
//         console.log('dil daxil et')
// }
//



// in dom some example

// const h1 = document.getElementById('hed')
// const root = document.querySelector('#root')

// h1.onclick = () => {
//     // h1.style.display = 'none'
//     h1.textContent = 'ay)'
//     h1.style.cursor = 'pointer'
//     h1.style.textAlign = 'center'
// }

// let adlar = ['farid', 'ay', 'pakize',]

// adlar.forEach(element => root.innerHTML += `<p>${element}</p>`);






//javaScript task than codeBubb
//locigal operator
//one
// const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100

// console.log(isEqualTo100(100, 0))
// console.log(isEqualTo100(0, 100))

// console.log(isEqualTo100(10, 90))
// console.log(isEqualTo100(50, 50))



//two
//burda elementin extension -ni gotururuk

// const getFileExtension = (str) => { return str.slice(str.lastIndexOf("."))}
// console.log(getFileExtension('index.html'))


//three
//burda elifba sirasindaki novbeti herfi gotururuk
// const moveCharsForward = (str) =>
//     str
//         .split('')
//         .map(char => String.fromCharCode(char.charCodeAt
//             (0) + 2))
//         .join('');

// console.log(moveCharsForward('ay)'))


//fourth
//js date den istifade
// const formatDate = (date = new Date()) => {
//     const days = date.getDate()
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     return `${days}/${month}/${year}`
// }
// console.log(formatDate())


//fiveth
//bu taskda turnery operator ile sert veririk
// const addNew = (str) =>
//     str.indexOf('New!') === 0 ? str : `New! ${str}`;

//     console.log(addNew('New! Offers'))


// const obj = {
//     name: 'farid',
//     age: 18,
//     fovorite: 'fanarbahce'
// }

// const arr = ['farid', 'ay', 'fanarbahce']

// const myArray = arr.map((item) => {
//     return item.toUpperCase()              
// })

// console.log(myArray)

// const concat = arr.concat('ay')
// console.log(concat)

// const arr = ["apple", "banana", "orange"];

// const myArray = arr.map((item) => {
//   return item.toUpperCase();
// });

// console.log(myArray); // Output: ["APPLE", "BANANA", "ORANGE"]



// bu code senin nece gun yasadigivi hesablayir Fidan

// const birthday = new Date(1998, 10, 7)
// let indi = Date.now()
// const dayCount = (indi - birthday) / 1000 / 60 / 60 / 24

// console.log(dayCount)

let arr = ['Nadir', 'Shalar', 'Farid', 'Nurane']

let changeArr = arr.push('Aysel')
console.log(changeArr)

console.log(arr)

let forEach = arr.forEach((item) => {
    console.log(item.toUpperCase().slice(1, 3).concat('faird'))
})

let humans = [
    { name: 'farid', age: 18 },
    { name: 'Arda', age: 25 },
    { name: 'Fidan', age: 24 },
    { name: 'Aysel', age: 24 }
]

let SortForYear = humans.sort((a, b) => a.age - b.age)
console.log(SortForYear)

let ForSortName = humans.sort((a, b) => a.name > b.name ? 1 : -1)
console.log(ForSortName)

let ForFindName = humans.find(({name}) => name[0]==='A')
console.log(ForFindName)


// this function return data
// function data() {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         const result = document.createElement('h4');
//         result.textContent = JSON.stringify(data);
//         document.body.appendChild(result);
//         return data; // Return the data for further chaining
//       })
//       .then(data => {
//         const filteredData = data.filter(item => item.name.startsWith('C'));
//         console.log(filteredData); // Log the filtered data
//       })
//       .catch(error => {
//         console.error(error); // Handle any errors that occur during the fetch request
//       });
//   }
  
//   data();
  


// function data() {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     return fetch(url)
//       .then(res => res.json())
//       .then(data => data.filter(item => item.name.startsWith('C')));

//   }
  
//   data()
//     .then(filteredData => console.log(filteredData))
//     .catch(error => console.error(error));
  


//prop2Taker functions
// function prop2Taker(obj) {
//     return obj['one']
// }

// let taker=prop2Taker({'one': 1, 'prop-2':2})
// console.log(taker)

const coders = [101,102,103,104,105,106]
let mathCoders = coders.map(function(code) {
    return `mth${code}`
})

console.log(mathCoders)