let myLeads = []
const linkBtn = document.getElementById("link-btn")
const inputEl = document.getElementById("input-el")
const savedLinks = document.getElementById("saved-links")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


linkBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
 })

function render(x) {
    let listItems = ""
    for (let i = 0; i < x.length; i = i + 1) {
        listItems += `<li><a href='${x[i]}' target='_blank'>${x[i]}</a></li>`
    }
    savedLinks.innerHTML = listItems
    
    
}

deleteBtn.addEventListener("click",function(){
    savedLinks.innerHTML = " "
    localStorage.clear()
    myLeads = []
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
        




})

