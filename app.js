
const curl =require('curl')
var option ={
    "email":"sagar.codesoftic@gmail.com",
     "password":"vikas@5080",
}

// var pp ={
//   Headers:{
//     authentication:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWNkOTE4NTNhZTVkNzZlNzQxYmE5ZjMiLCJFbWFpbCI6InZpa2FzY29kZXNvZnRpY0BnbWFpbC5jb20iLCJOYW1lIjoidmlrYXMiLCJQaG9uZW51bWJlciI6ODcwODE3OTMzOCwiaWF0IjoxNjQxODA3NzM2LCJleHAiOjE2NDE4MTEzMzZ9.Yrg7FttzaFVot6bQisV1xmZmgoohr6wkajgEwz3SZpI"
//   }
// }

// curl.getJSON('https://nameless-fortress-30211.herokuapp.com/api/customer/wallet',pp ,function(err, response, body) {
//     if(err){
//         console.log(err)
//     }else{
//        console.log(body)
//     }
//   });

curl.postJSON('https://nameless-fortress-30211.herokuapp.com/api/customer/signin',option,function(err, response, body) {
  if(err){
    console.log(err)
}else{
    console.log(body)
}
})
