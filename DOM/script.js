//-----Obj 1---------//

addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let btnTxt = document.createTextNode('Button');
    button.appendChild(btnTxt);
    document.body.appendChild(button);

    function alertMsg(){
        alert('Well hello, handsome!')
    };
    button.addEventListener('click', alertMsg);
});

//-----Obj 2---------//

let button = document.getElementById('textbtn');
button.addEventListener('click', onClickText);

function onClickText() {
    let msg = document.getElementById('textbox').value;
    alert(msg);
}

//--- Obj 3 -------//

let div = document.getElementById('textcontainer');

    div.addEventListener('mouseenter',function() {
    div.style.backgroundColor = 'gray';
    });
    div.addEventListener('mouseleave',function() {
        div.style.backgroundColor = 'white ';
        });

//--- Obj 4 -------//
let para = document.getElementById('para');

para.addEventListener('click', function() { 
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    para.style.color = "rgb(" + r + "," + b + "," + g + ")";
});

//------Obj 5 --------//

let namebtn = document.getElementById('namebtn');

let nameDiv = document.getElementById('namediv');

namebtn.addEventListener('click', function(){
    let newSpan = document.createElement('span');
    nameDiv.appendChild(newSpan);

    let name = document.createTextNode('Eric');
    newSpan.appendChild(name);
});

//------Obj 6 -----//

let friendBtn = document.getElementById('friendbtn');
let friends = ['Toad', 'Skeeter', 'Parnassus', 'Little Tony', 'Big Tony', 'Medium Tony', 'Hortence', 'Ruby Off Rails', 'Juniper', 'Miss Cleo'];
let list = document.getElementById('friendlist');

friendBtn.addEventListener('click', function() {
    for (let i = 0; i<friends.length; i++) {
        let li = document.createElement('li');
        let friendName = document.createTextNode(friends[i]);

        li.appendChild(friendName);
        list.appendChild(li);
    }
})












