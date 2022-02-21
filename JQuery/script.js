//----Obj 1 -----//
let $button = $('<button>Alert</button>');
$button.appendTo('body');
$button.click(function() {
    alert('Well hello, handsome!');
});
//-----Obj 2 ----//
let $txtbutton = $('#textbtn');
$txtbutton.click( function() {
    let msg = $('#textbox').val();
    alert(msg);
})

//------Obj 3 ----//
let $textdiv = $('#textcontainer');
$textdiv.hover( function() {
    this.style.backgroundColor = 'gray';
}, function() {
    this.style.backgroundColor = 'white';
})

//------Obj 4 -----//

let $para = $('#para');
$para.click( function() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

     $($para).css('color',"rgb(" + r + "," + b + "," + g + ")");
});

//----Obj 5 -----//
let $namebtn = $('#namebtn');
let $namediv = $('#namediv');
$namebtn.click( function(){
    let $span = $('<span>Eric</span>');
    $($span).appendTo($namediv);
})

//-----Obj 6 ------//

let $friends = ['Juice Lucy', 'Marco', 'Polo', 'DJ Tanner', 'Leonard Bernstein', 'Philip Glass', 'Ira Glass', 'Straight Tony', 'Crooked Tony', 'Robert'];
let $friendBtn = $('#friendbtn');
let $list = $('#friendlist');
$($friendBtn).click( function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($list);
    };
});