'use strict';

/*
# für ID
. für Klassen

 */
function goingdeep() {
    $('#changeme').html($('#textfuerdeneinenButton').val());
}

$('#textbutton').click(goingdeep);

$('#farbigesElement').mouseout(byeMouse);
$('#farbigesElement').mouseover(mausgehtrein);
$('#farbigesElement').dblclick(dblClick);
$('#farbigesElement').contextmenu(rightMousebutton);

$('#elementEins').load(hide());

function buttonChanger() {
    $('#elementZwei').fadeToggle("slow", function () {
        setTimeout(function () {
            $('#elementZwei').hide();
        }, 1000);
        $('#elementEins').fadeToggle("slow", function () {
            setTimeout(function () {
                $('#elementEins').show();
            }, 1000);
        });
    });
}

function hide() {
    $('#elementEins').hide();
}
function save(){
    let name = prompt("Nenne deinen Namen:");
    let color = prompt("Was ist deine Lieblingsfarbe");
    localStorage.setItem(name, color);
}
function outpoutLocalStorage(){

}
function mausgehtrein() {
    $('#farbigesElement').text('Hallo Mausi');

}

function byeMouse() {
    $('#farbigesElement').text('Bussi baba Mausi');
}

function dblClick() {
    $('#farbigesElement').text('Schneeeeeller');
}

function rightMousebutton() {
    $('#farbigesElement').text('Sicher das du auf dem rechten Weg bist? :P');
}