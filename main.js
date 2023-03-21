// get form and items and filter
let form = document.getElementById('addForm')
let itemlist = document.getElementById('items')
let fiter = document.getElementById('filter')

// apply listener on form, items, filter
form.addEventListener('submit', addItem)
itemlist.addEventListener('click',delItem)
filter.addEventListener('keyup',filterItems)

//  add item
function addItem(e){
    e.preventDefault();
    console.log('added')
    
    // get input filed value
    let value1 = document.getElementById('item').value
    let value2 = document.getElementById('item2').value
    let li = document.createElement('li')
    li.setAttribute('class','list-group-item')
    li.appendChild(document.createTextNode(value1+" "+value2))
    
    // create del button
     let delBtn = document.createElement('button')
     delBtn.appendChild(document.createTextNode('x'))
     delBtn.setAttribute('class','btn btn-danger btn-sm float-right delete')
    // insert li in items
    document.getElementById('items').appendChild(li)
    // add delBtn in li
    li.appendChild(delBtn)

    // create edit btn 
    let editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode('edit'))
    // set class 
    editBtn.setAttribute('class','btn mr-1 btn-sm float-right')
    // insert in items
        li.appendChild(editBtn)


}
 
function delItem(e){
    if(e.target.getAttribute('class') == 'btn btn-danger btn-sm float-right delete'){
        if(confirm('Are you sure')){
            let parent = e.target.parentElement
            itemlist.removeChild(parent)
        }   
    }

}

// create another input box 
let inputbox = document.createElement('input')
inputbox.setAttribute('type','text')
inputbox.setAttribute('id','item2')
inputbox.setAttribute('class','form-control mr-2 ml-2')
// set left side of existing input box 
console.log(inputbox)
let subBtn = document.getElementById('subBtn')
form.insertBefore(inputbox,subBtn)

// filter items
function filterItems(e){
    let serachValue = e.target.value.toLowerCase().trim()
    let items = document.getElementsByClassName('list-group-item')
     if(serachValue){
     Array.from(items).forEach((item) => {
        if(item.textContent.toLowerCase().includes(serachValue)){
           console.log(serachValue,item.textContent)
           item.style.display='block'
        }
        else{
            item.style.display='none'
        }
     })
    }
    else{
        for(let item of items){
            item.style.display = 'block'
         }
    }
  
}
