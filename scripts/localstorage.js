// set item in local stotage

localStorage.setItem('name',"john");
localStorage.setItem('token',"123456");
localStorage.setItem("user",JSON.stringify({name:"mandeep"}))
localStorage.setItem("token",JSON.stringify({token:"token"}))

// get item in local storage
let token=localStorage.getItem('token')
let token1=JSON.parse(localStorage.getItem("token"))