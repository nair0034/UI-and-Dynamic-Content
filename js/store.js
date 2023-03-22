

const itemInput = document.getElementById('input');

const addItemBtn = document.getElementById('button');

const itemList = document.getElementById('added-items');

const feedback = document.getElementById('feedback');


function addItem() {
  
    const listItem = document.createElement('li');

    if (itemInput.value.trim() !== '') {
  
       listItem.textContent = itemInput.value;
       
       itemList.appendChild(listItem);
      
       feedback.textContent = '';
       
       itemInput.value = '';
       
       itemInput.focus();
   
    }
    
    else {
   
       feedback.textContent = 'Nothing entered!';
    
    }

}

addItemBtn.addEventListener('click', addItem);
