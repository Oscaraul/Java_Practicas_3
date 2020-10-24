
/*
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for(let i = 0; i < cats.length; i++) {
if (i=== cats.length-1){
  info +="and " +cats[i] + '.';
}else {
  info += cats[i]+ ', ';
}

}

para.textContent = info;
*/
var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input=document.querySelector('input');
var btn = document.querySelector('button');


btn.addEventListener('click',function(){
  var searchName = input.value;
  input.value="";
  
  for(var i=0; i<contacts.length;i++){
    var splitContact = contacts[i].split(':');
    if(splitContact[0]===searchName){
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    }else {
      para.textContent = 'Contact not found.';
    }
  }
});
