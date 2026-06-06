//your JS code here. If required.
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if(name === "" || age === ""){
        alert("Please enter valid details.")
        return;
    }

    let myPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(Number(age)>18){
                resolve(`Welcome, ${name}. You can vote.`)
            }else{
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })

    myPromise
    .then((message) => {
        alert(message)
    })
    .catch((message)=>{
        alert(message)
    });

});
