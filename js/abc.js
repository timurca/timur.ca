function toggle_visibility(id) {
       var hold = document.getElementById(id);
       if(hold.style.display == 'block'){
          hold.style.display = 'none';
           console.log(hold.this);
      }
       else
          hold.style.display = 'block';
    } 




var liCount = function(list_id, output) {
    console.log(list_id); //list id: list1 
    var ul = document.getElementById(list_id);
    var li = ul.getElementsByTagName('li').length;
    console.log(li); //list length: 5
    document.getElementById(output).innerHTML = '(' + li + ')'; 
}