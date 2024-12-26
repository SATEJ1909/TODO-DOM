
let todos = [];

function addtodo(){
    todos.push({
        title: document.querySelector('input').value
    })
    render()
}

function deletefirsttodo(){
    todos.pop()
    render()
}

function deletelasttodo(){
    todos.slice(todos.length-1,1);
    render()
}

function createtodoComponent(todos){
    const div = document.CreateElement('div');
    const h2 = document.CreateElement('h2');
    const button = document.CreateElement('button');
    h2.innerHTMl =  todos.title;
    button.innerHTMl = 'delete';
    div.appendChild(h2);
    div.appendChild(button);
    return div;
}
//react like work
function render(){
    document.querySelector('#todos').innerHTML = '';
    for(let i=0; i<todos.length; i++){
        const element = document.querySelector(todos[i]);
        document.querySelector('#todos').appendChild(element);
    }

}