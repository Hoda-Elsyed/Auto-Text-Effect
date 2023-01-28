const h1Ele = document.querySelector("h1")
const input = document.querySelector("input")
const autoTypedText = 'We Love Programming'
let index = 0;
let speed = 300 / input.value

autoTyping()

function autoTyping(){
        h1Ele.textContent += autoTypedText[index]
        index++
        if(index > autoTypedText.length){
            h1Ele.textContent= ''
            index=0
        }
            setTimeout(() => {
                autoTyping()
            }, speed);
        
} 

input.addEventListener("input", (e)=>{
    speed = 300 / e.target.value
})
