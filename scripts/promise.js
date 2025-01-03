// // promise(resolve,reject) 
// // ,callbacks


// // // assignment tryy catch use garera
// // let promise=new Promise((resolve,reject)=>{
// //   setTimeout(()=>{
// //     //  reject("Internal server error")
// //      resolve({
// //         data: {
// //             name:"john",
// //             email: "john@gmail.com"
// //         }
// //      })
// //   },3000);
// // })
// // async function handlePromise() {
// //   try {
// //       const result = await promise; // promise lai complete huna wait garxa
// //       console.log(result); // resolve value display garxa
// //   } catch (error) {
// //       console.log(error); // error dispaly garxa
// //   }
// // }

// // handlePromise(); // function lai call gareko

// // If else garera ni garni


// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// // .then(response=>response.json())
// // .then(data=> console.log(data))
// // .catch(error=> console.log("Fetching error",error)
// // )


// // const firstPromise =(message)=>{
// //   return new Promise((resolve)=>{
// //     setTimeout(() => {
// //       resolve( `${message}, first promise resolved `)
// //     },2000);
// //   })
// // }
// // const secondPromise =(message)=>{
// //   return new Promise((resolve)=>{
// //     setTimeout(() => {
// //       resolve( `${message},second promise resolved `)
// //     },2000);
// //   })
// // };
// // firstPromise("Hello world")
// // .then((result)=> console.log(result))
// // .catch((error)=>console.log(error))

// // secondPromise("Hello Mandeep")
// // .then((result)=> console.log(result))
// // .catch((error)=>console.log(error))


// let Success = false;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Success) {
//       resolve({
//         data: {
//           name: "Mandeep",
//           email: "mandeep@gmail.com",
//         },
//       });
//     } else {
//       reject("Internal server error");
//     }
//   }, 3000);
// });

// promise
//   .then((data) => {
//     console.log("Success:", data); // if the promise resolves
//   })
//   .catch((error) => {
//     console.error("Error:", error); // if the promise rejects
//   });

// console.log(promise);

