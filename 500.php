<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // collect value of input field
            $name = $_POST['fname'];
        }
        $conn = new mysqli('localhost', 'root', '', 'project500');
        if($conn->connect_error){
            die('connection failed:'.$conn->connect_error);
        } else{
            $stmt = $conn->prepare("insert into cmnts(cmnt)
            values(?)");
            $stmt->bind_param("s", $name);
            $stmt->execute();
            echo "registration Successfull ...";
            $stmt->close();
            $conn->close();
        }
        /*$servername = "localhost";
        $username = "root";
        $password = "";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password);

        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        else{
            echo "Connected successfully";
        }*/
    ?>
</body>
</html>