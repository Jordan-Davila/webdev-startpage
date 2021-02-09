<?php
require './config.php';
require './bootstrap.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start Page</title>
    <link rel="stylesheet" href="./public/css/app.css">
    <script>
        // Store to global variable
        <?php
        echo "var data = " . json_encode($data) . ";\n";
        ?>
    </script>
</head>

<body class="font-mono">
    <main id="app"></main>
    <script src="./public/app.js" type="text/javascript"></script>
</body>

</html>
