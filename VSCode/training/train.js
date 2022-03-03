// //обработка событий

// const btn = document.querySelectorAll("button");  //*

// btn.addEventListener('mouseenter', () => {
//     console.log('click');
// });

// btn.addEventListener('click', () => {
//     alert('second click');
// });

// btn.removeEventListener(); //или options {once: true}


// link.addEventListener('click', (event) => {
//     event.preventDefault(); //в начало

//     console.log(link);
// })

// // много одинаковых элементов одинаковые методы
// //*

// btn.forEach(button => {
//     button.addEventListener('click', button.remove())
// });

// // target.addEventListener(type ('click'), listener[, options {once: true}]);

// /////////////////////

// //навигация по DOM

// //Для получения дочерних элементов:

// console.log(document.body.childNodes) //У чайлдноутс нет аналога для элемента **

// //Получаем текстовые ноды, дивы, скрипты... Также коменты и лайв сервера
// //Между <> и <> перенос строки - текстовая нода
// //Теги - элементы, невидимые переносы строк - узлы, узел и внутри элемента - <elem> node </elem>

// const firstChild = document.body.firstChild;
// const lastChild = document.body.lastChild;
// const firstChild = document.body.firstElementChild; //для элемента

// //Получение родителя выделяемого элемента:

// const parent = document.querySelector('div').parentNode; // +++ .parentNode для того, чтобы подняться на уровень вверх
// const parent = document.querySelector('div').parentElement; //для родительского элемента
// //В верстке удобно ориентироваться по дата-атрибутам 
// //Например <li data-modal = '3'></li>
// //Его получение: document.querySelector([data-modal = '3'])

// document.querySelector("[data-modal = '3']").nextElementSibling; //На следующий элемент после выделенного
// document.querySelector("[data-modal = '3']").previousElementSibling; //Предыдущий элемент

// //** 
// for (let node of document.body.childNodes){
//     if (node.nodeName === '#text'){
//         continue;
//     }
//     console.log(node)
// }

// const array = [{color: 'white', id: 2}, {color: 'black', id: 3}, {color: 'black', id: 500}]
// const output = {};

// // function arrayTransformer(array){
// //    array.map(item => {
// //     item.
// //    })
// // }
// arrayTransformer(array);
// console.log(output);

// //reduce


// const myNewArray = [].reduce(function (accumulator, current){
//     return accumulator;
// }, starting);

// var wizards = [
//     {
//       name: 'Harry Potter',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Cedric Diggory',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Tonks',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Ronald Weasley',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Hermione Granger',
//       house: 'Gryfindor'
//     }];

//     const hufflepuff = wizards.reduce(function (newArr, wizard){
//         if (wizard.house === 'Hufflepuff'){
//             newArr.push(wizard.name);
//         }
//         return newArr;
//     }, [])

//     const hufflepuffList = '<ul>'+ wizards.reduce(function(html, wizard){
//         if(wizard.house === 'Hufflepuff'){
//             html += '<li>' + wizard.name + '</li>';
//         }
//         return html;
//     }, html) + '</ul>';

//     const groupBy = function (arr, criteria){
//         return arr.reduce(function (obj, item){
//             let key = item[criteria];

//             if(!obj.hasOwnProperty(key)){
//                 obj[key] = [];
//             }
//             obj[key].push(item);
//             return obj;
//         }, {});
//     };

//     // You have an array as given:
// const arr = [{color: 'white', id: 2}, {color: 'black', id: 3}, {color: 'black', id: 500}]
// // Please write a function that will
// // transform it into object of this shape:


// const arrayTransformer = (arr) => {
//     return arr.reduce(function(obj, item, index){
//         let key = item['color'];
//         let id = item['id'];
//         let ind = item[index];
//         if(!obj.hasOwnProperty(key)){
//             obj[key] = {}
//         }
//         if(!obj[key].hasOwnProperty(id)){
//             obj[key][id] = {}
//         }
//         obj[key][id] = item
        
//         return obj
//     }, {})
// };

// console.log(arrayTransformer(arr));

// // setTimeOut и Interval 



// clientWidth ; clientHeight  //content padding - scroll

// offsetWidth; offsetHeight //content padding + scroll

// scrollHeight //full-scrolled height
// scrollWidth //width, mb with scroll - vertical scroller

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px'
// }
// )

// const scrollTop = 'a number of pixels which was passed during the scroll'
// //scrollLeft and scrollTop are editable

// box.getBoundingClientRect().top;

// //coordinates are movements in current direction (right: 50 means move to right)

// const style = window.getComputedStyle(box)
// style.display;

// //gets styles which was got automaticly (NOT INLINE STYLES)
// //inline styles are more prefer
// //by this method we can take the styles of the pseudoelements 
// //(by sending the second argument of style)

// document.documentElement.scrollTop;

// //if ..scrollTop = 0, we move to the beginning of the document

// window.scrollBy(x, y) //: this method gives us a possibility to go 
// //by the coordinates out of current place of the document

// window.scrollTo(x, y) //with this we move from the begining to inserted coordinates


// //data-modal   - if we have diff buttons and to some of them we need 
// //to give a function of creating modal window

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// const ivan = new User('Ivan', 28)

// //1) Обычная фция this = window / undefined при стрикте
//   //2) контекст у методов объекта. - сам объект
//   //3) this в конструкторах и классах - новый экземпляр объекта
//   //4)apply в массиве аругементы после контектста, bind через запятую

//   function count(num){
//       return this*num
//   }
//   const double = count.bind(2);
//   double(3)

//   btn.addEventListener('click', function(){
//       console.log(this);
//   }) // здесь this - сам элемент (почти всегда это event target) - правда так не делается(

//   const obj = {
//       num: 5,
//       sayNumber(){
//         const say = () => {
//             console.log(this)
//         }
//         say();
//       },
//   }

//   obj.sayNumber()

//   const double = a => a * 2

//   class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
//   }

//   class ColoredRectangleWithText extends Rectangle{
//     constructor(height, width, text, bgColor){
//         super(height, width);
//          //на первом месте
//          this.text = text;
//          this.bgColor = bgColor;
//     }
//     showMyProps(){
//         console.log(`Текст ${this.text}, цвет: ${this.bgColor}`)
//     }
//   }
//   const square = new Rectangle(10, 10);
//   const redRectangle = new ColoredRectangleWithText(1, 4, 'pop', 'red')
//   console.log(redRectangle.calcArea());

//   //JSON 

//   const persone = {
//       name: 'Alex',
//       tel:'+783242359'
//   }
//   console.log(JSON.parse(JSON.stringify(persone)))

//   //JSON stringify and parse can be used to deep copy

//   const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Запрос');
//         const product = {
//             name: "TV",
//             price: 2000
//         };
//         resolve(product);
//       }, 2000)
//   });

//   req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Подготовка");
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//     }).then(data => {
//         data.modify = true;
//         return data;
//   }).then((data) => {
//     console.log(data);

//   }).catch(() => {
//       console.error('Ошибка!')
//   }).finally(() => {
//       console.log('Finally')
//   })
  
//   const test = time => {
//       return new Promise(resolve => {
//           setTimeout(() => resolve(), time)
//       })
//   }

// //   test(1000).then(() => console.log('1000 ms'));
// //   test(2000).then(() => console.log('2000 ms'))

//   Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all')
//   })
//   Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('race')
//   })

//   const names = ['Masha', 'Andrew', 'Ivan', 'Pisya', 'Popa'];


// //filter

//  console.log(names.filter((item) => item.length <= 5))

//  //map

//  const answers = ['IVan', 'AAA', "HdasdFDSDDs"];

//  const mapedAnswers = answers.map((item) => {
//     return (item.slice(0, 1)).toUpperCase() + (item.slice(1)).toLowerCase();
     
     
//  })

//  console.log(mapedAnswers)
//  //0.011456023651145602
// //0.01267605633802817

// //every  && / some ||

// const some = [4, 6, "", true]
// console.log(some.every(item => typeof(item) === 'number'));

// //reduce
// const arr = [4, 5, 1, 2, 6];
//  const res = arr.reduce((sum, current) => sum + current, true)
//  console.log(res)


//  const object = {
//      ivan: 'persone',
//      ann: 'persone',
//      dog: 'animal',
//      cat: 'animal'
//  }

//  const array = Object.entries(object);
// //  const persones = array.filter(item => {
// //     return item[1] === 'persone';
// //  })

//     const persones = array.reduce((arr, item) => {
//         if(item[1] == 'persone'){
//            arr.push(item)
//         }
//         return arr
//     }, [])
//  console.log(persones)

//  localStorage.setItem('number', 5);

//  //Регулярные выражения 

//  //паттерн - то, что мы ищем

//  new RegExp('pattern', 'flags'); //не надо

//  /pattern/f

//  const ans = prompt('Enter ur name'); 

//  const reg = /n/;

//  console.log(ans.search(reg)); //получим первую позицию с найденным результатом иначе -1

//  //флаги
//  //i вне зависимости от регистра
//  //g в не зависимости от количества вхождений для search не имеет смысла
//  //m с переносами строки
//  //можно комбинировать в любой последовательности

//  ans.match(reg)
//  //с регулярными выражениями работают методы строки
//  //.match похож на search но возвращает массив: [0] - паттерн, [1] - индекс, [2] - input(сама строка),
//  // [3] - свойство groups
//  //а если был установлен флаг g - получаем массив со всеми найденными элементами!
 
// const pass = prompt('Pass');

// console.log(pass.replace(/./g, "*"))
// //replace работает с регулярными выражениями. Их можно задать в аргументы
// //. селектит все как * в css
// //чтобы найти точки, ^ & и тд нужен обратный слеш (\) - экранирование

// // console.log('12-34-56'.replace(/-/g, ':'))

// console.log(reg.test(ans)) // проверить есть ли что-то похожее на регуляр - возвращает булево знач

// //у регуляров есть классы

// const reg = /\d/ig
// // \d - цифры \D - не цифры
// // \w - слова \W - не буквы
// // \s - пробелы \S - не пробелы 
// // можно например отбросить в строке '200px' 'px'
// //можно комбинировать классы: str.match(/\w\d\w\d/i)  - попадет r2d2


// class User{
//     constructor(name, age){
//         this.name = name;
//         this._age = age;
//     }
    
//     #surname = 'Petrychenko';  //создание приватного свойства при помощи полей класса

//     say = () => {
//         console.log(`name ${this.name} ${this.#surname}, age ${this._age}`)
//     }

//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110){
//              this._age = age
//              } else {
//                  console.log('Недопустимое значение')
//              }
//     }
//     get sur() {
//         return this.#surname
//     }
//     set sur(surname) {
//         if (typeof surname === 'string' && surname.length > 2) {
//             this.#surname = surname
//         } else {
//             console.log("We can't use this surname:(")
//         }
//     }
// }
// const ivan = new User('Ivan', 27);
// ivan.age = 99;


// ivan.sur = 'Kolotov';
// ivan.say()


// //WebPack 

// //при наличии необходимости использования одних методов в других скриптах можно использовать WebPack
// //допустим:

// function myModule() {
//     this.hello = function() {
//         console.log('hello');
//     };
//     this.goodbye = function() {
//         console.log('bye');
//     };
// }
// module.exports = myModule;

// ///// другой скрипт

// const myModule = require('./main');
// const myModuleInstance = new myModule;
// myModuleInstance.hello();
// myModuleInstance.goodbye();

// //gulp планирует таски

// //при работе с заводскими настройками по d src/index.js необходимо создать файл, он
// //будет конечным звеном направления всех импортов 

// //в нынешнем стандарте есть возможность экспорта другими путями
// export let one = 1;

// let two = 2;
// export {two};  //именованный синтаксис
// export function sayHi() {
//     console.log('Hello');
// }

// import {one, two} from './main' //именованный синтаксис, деструктуризация
// //сборка осуществляется при помощи вебпэка
// import {one as first} from './main' //переименуем на месте
// import * as data from './main' // без деструктуризации, все импорт
// console.log(`${data.one}, ${data.two}`) //импортированное стало свойством переданного объекта
// data.sayHi();
// // допустим, нам надо однозначно импортировать что-то ОДНО. Помогает:
// export default function sayHi() {
//     console.log('Hello');
// }
// import sayHi from './main' // экв-но import {default as sayHi} from './main'

//<script type='module' src='./js/main.js'></script> - экспорт
//<script type='module' src='./js/script.js'></script> - импорт так же как defer - так скрипты подключаются 
//как модули и все работает - редко

/* Предположим, у нас есть блок кода, ситуативно вызывающий ошибку. В таком случае, весь дальнейший код не сработает. При этом
ошибка не всегда носит критический характер, для того, чтобы преддупредить поломку дальнейшего кода, возможно использовать конструкцию  try catch
если конструкция под трай вдаст ошибку код не поломается, а будет работать дальше, обрабатывая блок кода кэтч
*/
try {
    console.log(a)
} catch(error) {
    console.dir(error)
} finally {

}
/*
дальнейший код работает без изменений
свойства: name - Reference error (ссылочного типа) message, stack - mess at script
используем если сомневаемся, либо если к разным страницам подключен один скрипт - у нас будет ошибка
в той странице где элемнта, например нет
берем и оборачиваем в трай кетч
можно вообще не указывать в кетч
*/

/* Angular
need
-node.js must be installed to use any frame or lib
-TypeScript
-Webpack
-MVC pattern - шаблон проектирования, разделяющий на визуальную контролирующую и выполняющую части
Angular - в docs, тяжеловат
разработчики google
большие растущие приложения
*/
/*
React - Сборка приложений из пакетов
Препроцессоры - когда js комбинируется с версткой
разработчик facebook
-JSX препроцессор
-Babel - помимо полифила он переводит синтаксисы в js
-Webpack
-React - отличная дока
гибкость и микс и много вакансий
 */
/*
Vue
Кусочек верстки - кусочек скрипта - кусочек стайлов
Быстро развивается
Прост в обучении
JS native
Webpack
нода
чистый быстрый легковесный
*/
/*
Event loop 
Если задача стоит просто в потоке кода - она попадает в очередь событий и выводит стек последовательно
Если задача асинхронна, она запоминается в Веб апи и при выполнении добавляется в конец очереди
Задачи в коде блокируют выполнение других задач (и интервальных, 
    они по сути тоже являются синхронными, просто встают в очередь и запоминаются в АПИ)
    перегрузка процессора блокирует выполнение кода и операции над ним, поэтому лучше 
    трудоемкий процесс разбивать на более простые


*/

const today = new Date().getDate();

today % 2 === 0 ? console.log('Ur today dose = 1 tablett') : console.log('Today ur dose = 2 tablettes')