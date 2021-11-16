var guest_name=[];
function submit(){
    var storage=document.getElementById("name_of_student").value;
    guest_name.push(storage);
    document.getElementById("list_1").innerHTML=guest_name.toString();
}
function show(){
    var j=guest_name.join("<br>");
    document.getElementById("list_2").innerHTML=j.toString();
}
function sorting(){
    guest_name.sort();
    var i=guest_name.join("<br>");
    document.getElementById("list_3").innerHTML=i.toString();
}
function searching(){
    var srch=document.getElementById("search_name").value;
    var found=0;
    for(var k=0; k<guest_name.length; k++){
        if(srch==guest_name[k]){
            found=found+1;}
    }
    document.getElementById("list_4").innerHTML="name found:"+found+"times";
}