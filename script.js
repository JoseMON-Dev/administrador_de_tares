const buton = document.querySelector("[data-form-btn]");

//** arrow function */
const createTask = (event) =>{
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

buton.addEventListener("click", createTask)
