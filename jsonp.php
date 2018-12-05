<?php
  if(isset($_GET['aaa'])){
      $callBack = $_GET['aaa'];
      echo $callBack.'({s:1,arr:[1,2,3,4,5]})';
  }
?>