<?php

function writeFile($str, $o) {
   $f = $str . ".json";
   $file = file_get_contents($f);
   $fileObj = json_decode($file, true);

   array_push($fileObj[$str], $o);

   $file = fopen($f, "w");
   fwrite($file, json_encode($fileObj));
   fclose($file);
}

$obj = json_decode($_POST["obj"], true);

if (isset($obj["gender"])) {
   #OPEN DATABASE, PROCESS CAR SUGGESTION
   writeFile("findingCar", $obj);

   exit();
}

if (isset($obj["report"])) {
   if ($obj["report"] == "") {
      exit();
   }
   writeFile("problemsReported", $obj);

   exit();
}

if (isset($obj["tag"])) {
   if ($obj["tag"] == "") {
      exit();
   }
   writeFile("suggestions", $obj);

   exit();
}

?>