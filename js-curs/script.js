// let ferid = {
//     ad: 'ferid',
//     age: 22
// }

// const HBD  = (obj) => {
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
// const ad = ' asdddadqdaaaaq addf asfe  fd a defefdsqqaa def a'
// let count = ad.length - ad.replaceAll('a' , '').length
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


// const obj = [24,55,66,77,33,24,56]
// let sum = 0
// for(let num of obj) {
//     sum += num
// }
// console.log(sum)




// let human = {
//     ad:'ferid',
//     surname: 'hashimzada',
//     age: 18
// }

// for(let key in human) {
//     console.log(`${key} - ${human[key]}`)
// }


// let arr = ['farid', 'ay)', 'together', 6, 
// function (name) {
//     console.log(name)
// }]

// arr [arr.length - 1]('farid')


// const date = new Date()
// document.write(date)


// let sairler = [
//     {name: 'Ali', year: 1990},
//     {name: 'Farid', year: 2010},
//     {name: 'Sada', year: 1890},
// ]

// sairler.sort((a, b) => a.year - b.year)

// console.log(sairler)








// const brovaMeyveleri = [
//     {
//         name:'alma',
//         type: 'fruit'
//     },

//     {
//         name: 'armud',
//         type:'fruit'
//     },

//     {
//         name: 'tomato',
//         type: 'vegetable'
//     },

//     {
//         name: 'brocoli',
//         type: 'vegetable'
//     },

//     {
//         name: 'nar',
//         type:'fruit'
//     }
// ]

// function selectFruits(arr) {
//     return arr.filter((obj)) => obj.type === 'fruit')
// }

// let sum = 0

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//         sum += i
//     }

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

const darkMode = document.getElementById('darkMOde')
const btn = document.querySelector('button')

btn.onclick = () => {
    darkMode.classList.toggle('dark')
}



