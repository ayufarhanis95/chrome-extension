let myLeads = []
const linkBtn = document.getElementById("link-btn")
const inputEl = document.getElementById("input-el")
const savedLinks = document.getElementById("saved-links")

linkBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    

})

function render(x) {
    for (let i = 0; i < x.length; i = i + 1) {
        savedLinks.innerHTML += `<li><a href='{x[i]}' target='_blank'> ${x[i]} </a></li>`
    }
    
}



