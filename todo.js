function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    ev.dataTransfer.setData("text", event.target.id);
    console.log(event);

}
function drop(event){
    console.log("drop hiilee");

}