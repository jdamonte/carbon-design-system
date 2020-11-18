console.log('hello world');
let name = 'james';
console.log(name);

let firstName = "James";
let lastName = "Damonte";
console.log(firstName + ' ' + lastName);

let interestRate = 1;
console.log(interestRate);

let age = 30;
let isApproved = true;

console.log(isApproved);

let selectedColor = null;


let person = {
    name: 'James',
    age: '30 '
};

//dot notation
person.name = "Joe";

//bracket

person['name'] = 'Mary';

console.log(person.name);

let selectColors = ['red', 'blue'];
selectColors[2] = 1 + 2;


console.log(selectColors.length);


//functions perform task

function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');



//function calculate
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);


let btn = document.getElementById('btn');
let lnk = document.getElementById('lnk');
let txt = document.getElementById('txt');

btn.addEventListener('click', buttonClicked);

function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);

}

lnk.addEventListener('click', linkClicked);

function linkClicked(ev) {
    ev.preventDefault();
    console.log(ev.type, ev.target, ev.currentTarget);
}

txt.addEventListener('input', ev => {
    console.log(ev.target, ev.target.value);
});
//console.dir(document);

/* console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.title);
document.title = 'my page';
console.log(document.forms[0]);
console.log(document.links); */


// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
/* var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle); */
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
/* headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'dotted 3px hotpink'; */

// GETELEMENTSBYCLASSNAME //
/* let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// // Gives error
//items.style.backgroundColor = '#f4f4f4';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
} */

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }