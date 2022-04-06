
let form=document.getElementById("userForm");

form.addEventListener("submit",(myEvent)=>{
    let greeting=[];
    let username=document.getElementById("name").value;
    if(username===''||username.length<8){
      
        greeting.push("Name is required and it should be more than 8 chars");
    }
    let mobile=document.getElementById("phone").value;
    const matched=mobile.match('[6-9]+[0-9]{9}');
    if(!matched){
        greeting.push("mobile number not in correct format");
    }
    let email=document.getElementById("email").value;
    const validEmail=email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if(!validEmail){
        greeting.push("email address not proper");
    }
    if(greeting.length>0){
        document.getElementById("greet").innerHTML=greeting.join(',');
        myEvent.preventDefault();
    }
});