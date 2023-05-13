
let input = document.querySelector(".entered-list");
let  addbutton = document.querySelector(".add-list");
let tasks = document.querySelector('.tasks');

input.onkeyup = ()=>{
    let userData = input.value;
    if(userData.trim() != 0){
        addbutton.classList.add("active")
    }else{
        addbutton.classList.remove("active")
    }
}

addbutton.addEventListener('click' , () => {
        if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p> ${input.value} </p>
        <div class="item-button">
        <i class="fa-regular fa-circle-check"></i>
        <i class="fa-regular fa-circle-xmark"></i>
        </div>`;

        tasks.appendChild(newItem);
        input.value = '';

    }else{
        alert('Please Enter a task')
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-check')) 
    {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})