function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block'){
          e.style.display = 'none';
           console.log(e.this);
      }
       else
          e.style.display = 'block';
    } 




var liCount = function(list_id, output) {
    console.log(list_id); //list id: list1 
    var ul = document.getElementById(list_id);
    var li = ul.getElementsByTagName('li').length;
    console.log(li); //list length: 5
    document.getElementById(output).innerHTML = '(' + li + ')'; 
}
