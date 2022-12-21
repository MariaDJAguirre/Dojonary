var button= document.querySelector("button");

console.log(button);

function signin(element) {
    // element.style.backgroundColor = "blue"
    element.classList.add("Signin");
    console.log(signin);

}
function Singout(element) {
    element.classList.add("Signout");
    console.log(Signout);

}

function AddDefinition (element) {
    element.remove("btn");
}
function 13likes(element) {
    element.classList.add("btn");
    alert("Ninja was liked")
    // function add1() {
    // count++;
    // countElement.innerText = "The count is" + count
    console.log("13likes");
}
function 37likes(element) {
    element.classList.add("btn");
    console.log("37likes");

}