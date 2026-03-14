const selectArea = document.querySelector("#selectArea");
const optionn = document.querySelectorAll(".options");
const showBtn = document.querySelector("#btn1");
const optinBox = document.querySelector("#option-group");
optionn.forEach((optionn) => {
    optionn.addEventListener("click", () => {
        selectArea.innerText = optionn.innerText;
    });
});
let turn=true;
optinBox.style.display = "none";
showBtn.addEventListener("click", () => {
    if (turn == true){
        showBtn.innerText = "Hide";
    optinBox.style.display = "flex";
    turn=false;
}else{
    optinBox.style.display = "none";
    turn=true;
}

})