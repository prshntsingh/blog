//<script type="text/javascript">

  function redirect(x)
  {
    localStorage.setItem("id",x);
  }


  var xhttp = new XMLHttpRequest();
  var obj;

  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      obj=JSON.parse(this.responseText);
      console.log(obj);

     for(var i =0;i<3;i++)
      {
        var im = "im"+(i+1).toString();
        var h = "chead"+(i+1).toString();
        var c = "content"+(i+1).toString();
        var s = "span"+(i+1).toString();

        document.getElementById(c).innerHTML = obj[i].content;
        document.getElementById(im).src = obj[i].imageUrl;
        document.getElementById(h).innerHTML=obj[i].title;
        document.getElementById(s).innerHTML = obj[i].id;
       //


      }
}
  }
  xhttp.open("GET","http://www.koushikmln.com:7500/blogs",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();

//</script>
<!-- signup-->
//<script type="text/javascript">
  var lgdb = [];
  var jObject = JSON.parse(localStorage.getItem("us"));
  if(jObject != null)
  {
    for(i in jObject)
    {
    lgdb.push(jObject[i]);
  }
  }
  var js;


  function login(){
    var u = document.getElementById("sign").user.value;
    var p = document.getElementById("sign").pass.value;
    //var u = document.forms[0].user.value;
    //var p = document.forms[0].pass.value;
    js = {"username":u,"password":p};
    lgdb.push(js);
    localStorage.setItem("us",JSON.stringify(lgdb));
    alert("User registered Successfully!!");


    //lgdb[document.forms[0].user.value] = document.forms[0].pass.value;
    //lgbd.pus

    //localStorage.setItem("username",document.forms[0].user.value);
    //localStorage.setItem("password",document.forms[0].pass.value);
  }
//  localStorage.setItem("user","papu");
//  alert(localStorage.getItem("user"));
//</script>


//<script type="text/javascript">
  function check(){
    var s= false;
    var jObject = JSON.parse(localStorage.getItem("us"));
    for(i in jObject)
    {

      if(jObject[i].username == document.getElementById("log").user.value && jObject[i].password == document.getElementById("log").pass.value)
      {
          s=true;
      }
    }

    if(s)
    {

      document.getElementById("sbutton").style.display = "none";
      document.getElementById("lbutton").style.display = "none";
      document.getElementById("logout").style.display = "block";
      document.getElementById("name").innerHTML = document.getElementById("log").user.value;
      document.getElementById("name").style.display = "block";

//sbutton
      return true;
    }
    else
    {
      alert("Wrong credentials");
      return false;
    }

  }

  function logout(){
      document.getElementById("sbutton").style.display = "block";
      document.getElementById("lbutton").style.display = "block";
      document.getElementById("logout").style.display = "none";
      document.getElementById("name").style.display = "none";

  }
///</script>

 /// <script>
    var bid = localStorage.getItem("id");
    var xhttp = new XMLHttpRequest();
    var s = {"blogId":bid};
  var obj;

  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){

        obj=JSON.parse(this.responseText);
        console.log(obj);

        document.getElementById("head").innerHTML = obj.title;
        document.getElementById("image").src = obj.imageUrl;
        document.getElementById("content").innerHTML=obj.content;
       // document.getElementById(s).innerHTML = obj[i].id;

}
  }
    xhttp.open("POST","http://www.koushikmln.com:7500/blogs/getBlog",true);
    xhttp.setRequestHeader("Content-type", "application/JSON");
  xhttp.send(JSON.stringify(s));


  //</script>
