// get form and items
let form = document.getElementById('addForm')
let itemlist = document.getElementById('items')

// apply listener on form
form.addEventListener('submit', addItem)

// apply listener on items
itemlist.addEventListener('click',delItem)

//  add item
function addItem(e){
    e.preventDefault();
    console.log('added')
    
    // get input filed value
    let value = document.getElementById('item').value
    let li = document.createElement('li')
    li.setAttribute('class','list-group-item')
    li.appendChild(document.createTextNode(value))
    
    // create del button
     let delBtn = document.createElement('button')
     delBtn.appendChild(document.createTextNode('x'))
     delBtn.setAttribute('class','btn btn-danger btn-sm float-right delete')
     
    // insert li in items
    document.getElementById('items').appendChild(li)

    // add delBtn in li
    li.appendChild(delBtn)
}

function delItem(e){
    if(e.target.getAttribute('class') == 'btn btn-danger btn-sm float-right delete'){
        if(confirm('Are you sure')){
            let parent = e.target.parentElement
            itemlist.removeChild(parent)
        }   
    }

}
