// let cart=[
//     {
//         price: 100,
//         quantity: 3,
//     },
//     {
//         price: 200,
//         quantity: 4,
//     },
//     {
//         price: 50,
//         quantity: 5,
//     },
//     {
//         price: 100,
//         quantity: 2,
//     },
// ];
// // calculate the total cost
// const total = cart
// .slice(0,2)
// .reduce((acc,curr)=> acc + curr.price * curr.quantity,0);
// console.log("total cart cost is: ",total);

// // slice ley chai index choose garna milxa

// let totalItems = cart.slice(1,3);
// console.log(totalItems);

// const courses=[
//     {
//         class: "php",
//         completedStatus: false,
//     },
//     {
//         class: "mern",
//         completedStatus: true,
//     },
//     {
//         class: "devops",
//         completedStatus: true,
//     },
//     {
//         class: "graphics",
//         completedStatus: false,
//     },
// ];
// let completed =[];
// let incomplete=[];
// for (let index = 0; index < courses.length; index++) {
//     const element = courses[index];
//     if(element.completedStatus){
//         completed.push(element.class);
//     }else{
//         incomplete.push(element.class);
//     }
// }
// console.log(completed);
// console.log(incomplete);

// let country=[
//     {
//         name:"Nepal",
//         code: "NP",

//     },
//     {
//         name:"india",
//         code: "in",

//     },
//     {
//         name:"usa",
//         code: "us",

//     },
//     {
//         name:"australia",
//         code: "au",

//     },
// ];

// function getCountryCode(countryName) {
//     let countr=country.find(c=>c.name.toLowerCase()=== countryName.toLowerCase())
//     if (countr) {
//         return countr.code;
//     } else {
//         return "Country not found";
//     }
// }
// console.log(getCountryCode("Nepal"));
// console.log(getCountryCode("Australia"));
// console.log(getCountryCode("china"));


// const getCountryCode(countryName) =>{
//     let countr=country.find(c=>c.name.toLowerCase()=== countryName.toLowerCase())
//     if (countr) {
//         return countr.code;
//     } else {
//         return "Country not found";
//     }
// }
// console.log(getCountryCode("Nepal"));
// console.log(getCountryCode("Australia"));
// console.log(getCountryCode("china"));