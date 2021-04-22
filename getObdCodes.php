<?php
include ("db.php"); //include db.php file to connect to DB

echo "<body>";
//create a $SQL variable and populate it with a SQL statement that retrieves product details
$SQL="select * from obdcode where obdcode = 0100";
//run SQL query for connected DB or exit and display error message
$exeSQL=mysqli_query($conn, $SQL) or die (mysqli_error($conn));
echo "<table style='border: 0px'>";
//create an array of records (2 dimensional variable) called $arrayp.
//populate it with the records retrieved by the SQL query previously executed.
//Iterate through the array i.e while the end of the array has not been reached, run through it
while ($codeArray=mysqli_fetch_assoc($exeSQL))
{

$resultJSON = json_encode($codeArray);
/*echo "<tr>";
echo "<td style='border: 0px'>";
echo "<p>" .$codeArray["obdCode"];
echo "</td>";
echo "<td style='border: 0px'>";
echo "<p>" .$codeArray["definition"];
echo "</td>";
echo "</tr>";
}
echo "</table>";*/
echo "$resultJSON";
}
echo "</body>";
?>