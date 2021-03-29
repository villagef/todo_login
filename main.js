const loginForm = document.querySelector("#login__form");
const newTaskForm = document.querySelector("#newTask__form");
const loginWrapper = document.querySelector(".login__wrapper");
const todoWrapper = document.querySelector(".todo__wrapper");
const list = document.querySelector(".list-group");


const loginValues = [
  { email: "filwyd123@wp.pl", password: "image123" },
  { email: "wroclaw@wroclaw.com", password: "image123" },
];
let flag;

if (sessionStorage.getItem("_id")) {
  loginWrapper.style.display = "none";
  todoWrapper.style.display = "block";
} else {
  loginWrapper.style.display = "block";
  todoWrapper.style.display = "none";
}

const handleLogin = () => {
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

const handleInput = (e) => {
  e.preventDefault();
  let inputValue = document.querySelector("#newTask").value;
  const ID = Math.random().toString(36).substr(2, 9);

  const item = document.createElement("label");
  item.classList.add("list-group-item");
  item.id = ID;
  item.innerHTML = `
  ${inputValue}`;

  if (inputValue == "") {
    alert("You have to type sth first.")
  } else {
    list.appendChild(item);
    document.querySelector("#newTask__form").reset();
  }

  item.addEventListener('click', (e) => {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = '#ccc'
  })

  item.addEventListener('dblclick', (e) => {
    e.target.style.textDecoration = "none";
    e.target.style.backgroundColor = 'white'
  })
  


};


const handleCheck = () => {
  const checkBox = document.querySelectorAll('.form-check-input');
  console.log(checkBox);
  
}


loginForm.addEventListener("submit", handleLogin);
newTaskForm.addEventListener("submit", handleInput);
