<script>
  function change(){
    var image=document.getElementById("offimage");
      if(image.src.match("bulboff"))
      {
        image.src="pic_bulbon.gif";
      }
    document.getElementById("para1").innerHTML="The bulb is Turn ON";
    //document.getElementById("offimage").innerHTML=image.src="pic_bulbon.gif"
  }
</script>

<script>
function change2(){
  var image=document.getElementById("offimage");
    if(image.src.match("bulbon"))
    {
      image.src="pic_bulboff.gif";
    }
  document.getElementById("para1").innerHTML="The bulb is Turn OFF";}
</script>
