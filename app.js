

//CALLBACK FUNCTION
// function show() {
//     console.log('hello show function')
// }

// function showcallback(callback) {
//     callback()
// } //called
// showcallback(show); //calling


// // CONSTRUCTORS
// new Array();
// new String();
// new Object();


// //FUNCTION AS CONSTRUCTOR
// function user(name , age , company , salary) {
//     this.name = name ;
//     this.age = age;
//     this.company = company;
//     this.salary = salary;
// }
// let user1 = new user("cobra", 5000 , "endoftheworld" , 0);
// let user2 = new user("vampire", 200 , "underground" , 10000000000000);
// console.log(user1);
// console.log(user2);



// //ARRAY METHODS
// var lang =["java", "css", "html", "j2ee"];
// lang.pop();
// console.log(lang);

// var lang =["java", "css", "html", "j2ee"];
// lang.shift();
// console.log(lang);

// var lang =["java", "css", "html", "j2ee"];
// lang.push("angular");
// console.log(lang);

// var lang =["java", "css", "html", "j2ee"];
// lang.unshift("javascript");
// console.log(lang);

// var lang =["java", "css", "html", "j2ee"];
// lang.splice(3,3,"bootstrap"); //use two parameter, dont use one
// //splice(position, delete number, adding elements)
// console.log(lang);// it delets as well as add new element in the same position

// var lang =["java", "css", "html", "j2ee"];
// lang.splice(3,0,"bootstrap"); //here it only add bcz number of deleting elements is 0
// console.log(lang);

// var lang =["java", "css", "html", "j2ee"];
// //traditional way
// // for(var i=0; i<lang.length; i++){
// //     console.log(lang[i]);
// // }

// // foreach method way
// lang.forEach(function(value,index,Array){
//     console.log(`${index}:${value}`);
// });


var employees = [
     {
         emp_id: 107,
    emp_name: "killer🔫",
    emp_photo:"https://cdn.pixabay.com/photo/2019/11/07/17/07/universe-4609408__340.jpg",
    emp_age: 35,
    emp_gender: "Male",
    emp_company: "Equilizer",
    emp_salary: 25000000,
    emp_designation: "contract killer",
    emp_doj: new Date('28/11/2019'),
    emp_location: "INDIA",
    emp_education: "BE"
},
 
{
    emp_id: 53,
emp_name: "Smasher😠",
emp_photo:"https://cdn.pixabay.com/photo/2017/04/24/15/25/robot-2256814__340.jpg",
emp_age: 35,
emp_gender: "Male",
emp_company: "Equilizer",
emp_salary: 25000000,
emp_designation: "contract killer",
emp_doj: new Date('28/11/2019'),
emp_location: "INDIA",
emp_education: "BE"
},

{
    emp_id: 97,
emp_name: "Nomercy⚔️",
emp_photo:"https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_960_720.jpg",
emp_age: 35,
emp_gender: "Male",
emp_company: "Equilizer",
emp_salary: 25000000,
emp_designation: "contract killer",
emp_doj: new Date('28/11/2019'),
emp_location: "INDIA",
emp_education: "BE"
},

{
    emp_id: 46,
emp_name: "Ghosty👻",
emp_photo:"https://cdn.pixabay.com/photo/2017/07/30/15/38/zombie-2554660_960_720.jpg",
emp_age: 35,
emp_gender: "Female",
emp_company: "Equilizer",
emp_salary: 25000000,
emp_designation: "Accident killer",
emp_doj: new Date('28/11/2019'),
emp_location: "INDIA",
emp_education: "BE"
}
];


//steps to display at website
var emp = [];  //first declare one empty array
employees.forEach(killersData => {
 emp.push(`
    <div class="card">
    <img src="${killersData.emp_photo} " class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${killersData.emp_name} </h5>
      <span class="badge badge-success float-right">${killersData.emp_id}
      </span>
      <hr class="hr">
      <li class="list-group-item">${killersData.emp_designation}</li>

      <li class="list-group-item">Salary : ${killersData.emp_salary}</li>
      <li class="list-group-item">location : ${killersData.emp_location}</li>
      <li class="list-group-item">education : ${killersData.emp_education}</li>
      <li class="list-group-item">age : ${killersData.emp_age}</li>
      <li class="list-group-item">company: ${killersData.emp_company}</li>
      <li class="list-group-item">gender : ${killersData.emp_gender}</li>
      <li class="list-group-item">date of joining : ${killersData.emp_doj.toString()}</li>

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
`);
});
document.getElementById('Template').innerHTML=emp;



var names = ["dragon", "godzilla", "cobra", "dino"];
var numbers = [80, 1000 ,90 ,40];
var str = "hello javascript";

var tex = names.sort();
var numberssort = numbers.sort(function(a,b) {
    return a - b;
});

var stringreverse = [...str].reverse().join("");

// names.reverse(); 
// // numbers.reverse();

// names.sort();
// numbers.sort();

// console.log(names);
// console.log(numbers);

console.log(numberssort);
console.log(stringreverse);

//with function
function username(str) {
    return [...str].reverse().join("");

}

//without function
console.log(username("jspider"));