const form = document.querySelector("#login__form");
const loginWrapper = document.querySelector('.login__wrapper');
const todoWrapper = document.querySelector('.todo__wrapper');

const loginValues = [
  { email: "filwyd123@wp.pl", password: "image123" },
  { email: "wroclaw@wroclaw.com", password: "image123" },
];
let flag;

if(sessionStorage.getItem('_id')) {
    loginWrapper.style.display = 'none';
    todoWrapper.style.display = 'block';
} else {
    loginWrapper.style.display = 'block';
    todoWrapper.style.display = 'none';
}


const handleSubmit = (e) => {
//   e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const ID = Math.random().toString(36).substr(2, 9);

  if (
    loginValues.some((val) => val.email == email && val.password == password)
  ) {
    sessionStorage.setItem("_id", ID);
    sessionStorage.setItem("email", email);
    flag = true;
  } else {
    flag = false;
  }
};

form.addEventListener("submit", handleSubmit);
