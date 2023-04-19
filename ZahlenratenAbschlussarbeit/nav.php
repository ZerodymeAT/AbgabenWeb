<ul>
  <li class="menu"><a href="index.php">Home</a></li>
  <li class="menu"><a href="scoreboard.php">Scoreboard</a></li>
  <li class="menu" style="float:right" ><a class="time" id="clock"></a></li>
</ul>
<script>
  function updateClock() {
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    document.getElementById('clock').innerHTML = date + ' ' + time;
  }

  setInterval(updateClock, 1000);
</script>