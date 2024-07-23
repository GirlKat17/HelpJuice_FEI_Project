
let UserTextH = document.getElementById("UserTextHeading");
let textDisplay = document.getElementById("HeadingDisplay");
let UserTextP = document.getElementById("UserTextParag");
let normalText= document.getElementById("normalTextDisplay")
let keyword = document.getElementById("keyword")
let keywordText = document.getElementById("keywordText")
let selectBlock = document.getElementById("select-section")

UserTextH.classList.add("active")

UserTextP.style.display = 'none'
selectBlock.style.display = 'none'
UserTextH.style.display = 'none'

document.body.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {

        if(keywordText.value == "/1"){
            keyword.textContent = keywordText.value.split('')[1];
            keyword.classList.add('keyword')

            selectBlock.style.display = 'block'
            keywordText.value = ''
            return
        }
        
        const newHeading = document.createElement("h1");
        newHeading.textContent = UserTextH.value;
        textDisplay.appendChild(newHeading);

        UserTextP.classList.add("active");
        UserTextH.classList.remove("active")

        if(UserTextH.value != ""){
            UserTextH.style.display = 'none'
             UserTextP.style.display = 'block'
        }

        UserTextH.value = "";

        const newParagraph2 = document.createElement("p");
        newParagraph2.textContent = UserTextP.value;
        normalText.appendChild(newParagraph2);
     
        if(UserTextP.value != ""){
            UserTextP.style.display = 'none'
        }

        UserTextH.value = "";
        UserTextP.value = "";
       
    }
   
}

);

function hhh(){
    selectBlock.style.display = 'none'
    keywordText.style.display = 'none'
    UserTextHeading.style.display = 'block'

}
document.getElementById('H1').addEventListener("click", hhh);
