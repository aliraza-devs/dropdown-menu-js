const selectArea = document.querySelector("#selectArea");
const optionn = document.querySelectorAll(".options");
const showBtn = document.querySelector("#btn1");
const optinBox = document.querySelector("#option-group");
const showIcon = document.querySelector(".show-icon");
optionn.forEach((optionn) => {
    optionn.addEventListener("click", () => {
        selectArea.innerText = optionn.innerText;
    });
});
let turn=true;
optinBox.style.display = "none";
showBtn.addEventListener("click", () => {
    if (turn == true){
        showIcon.className = "show-icon-b";
    optinBox.style.display = "flex";
    turn=false;
}else{
    showIcon.className = "show-icon";
    optinBox.style.display = "none";
    turn=true;
}

})