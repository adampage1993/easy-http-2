const http = new EasyHttp();

// // GET USERS
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "Adam",
  username: "adam",
  email: "adampage1993@gmail.com",
};

// // POST
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data));

// // PUT
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data));

// DELETE
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data));