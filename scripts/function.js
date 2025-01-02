// let a="10";
// // let b="20";
// // console.log(a + b);

// // function xyz(name){
// //     return `Hello ${name}`;
// // }
// // const result= xyz("mandip");
// // console.log(result);

// // function add(x,y){
// //     return x+y;


// // }
// // const addvalue=add(2,4);
// // console.log(addvalue);

// // setTimeout(() => {
// //     console.log("Hello world");
    
// // },2000)
// // console.log("log from buttom");



// // function sum(...numbers) {
// //     let total =0
// //     for (let num of numbers){
// //         total +=num;
// //     }
// //     return total;
    
// // }
// // let final=sum(1,2,3);
// // console.log(final);



// // try {
// //     let firstName="Rohan"
// //     let lastName="Poudel"
// //     let fullName= firstName + " " + lastName 
// //     console.log(fullName);
    
// // } catch (error) {
// //     console.log("this is error",error.message);
    
// // }


// // Traditional function
// function add(x,y){
//     return x+y;
// }
// const addvalue1=add(2,4);
// console.log(addvalue);
// // arrow function
// const add2=add(x,y)=>{
// return x+y;
// };
// const addvalue= add(20,20);
// console.log(addvalue);


// function helloworld() {
//     let message="hello, world";
//  setTimeout(() =>{
//     console.log(message);
    
//  },3000); 
// }
// helloworld();
//  const showAlert=(type, message)=>{
//     console.log(`${type}: ${message}`);

//  };
 

//  let users=["  santosh","jasmine","ganga","mandeep","bhuwan"];
//  const signUp=(name)=>{
// const registerUser=users.find((user)=>user.trim()===name.trim())
// if (registerUser) {
//    console.log("registered user",registerUser);
//    showAlert("success","login successfull");
   
// } else {
//    console.log("Not registered user","sorry");
//    showAlert("Warning","Invalid credentials");
   
// }
//  }

//  signUp("santosh");

//  assignment lowercase use garni
// trim call garyo bani space remove garxa

 
// const showAlert = (type, message) => {
//    console.log(`${type}: ${message}`);
// };

// let users = ["  santosh", "jasmine", "ganga", "mandeep", "bhuwan"];

// const signUp = (name) => {
//    const registerUser = users.find((user) => user.trim().toLowerCase() === name.trim().toLowerCase()
//    );
//    if (registerUser) {
//        console.log("Registered user:", registerUser);
//        showAlert("success", "Login successful");
//    } else {
//        console.log("Not registered user:", "Sorry");
//        showAlert("Warning", "Invalid credentials");
//    }
// };
// signUp(" Mandeep");


const showAlert = (type, message) => {
    console.log(`${type}: ${message}`);
 };
 
 let users = ["  SANTOSH", "JASMINE"];
 
 const signUp = (name) => {
    const registerUser = users.find((user) => user.trim().toUpperCase() === name.trim().toUpperCase()
    );
    if (registerUser) {
        console.log("Registered user:", registerUser);
        showAlert("success", "Login successful");
    } else {
        console.log("Not registered user:", "Sorry");
        showAlert("Warning", "Invalid credentials");
    }
 };
 signUp(" santosh");

 