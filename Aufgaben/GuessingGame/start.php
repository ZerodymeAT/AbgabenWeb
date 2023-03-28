<!DOCTYPE html>
<html>
<head>
    <title>Willkommen!</title>
</head>
<body>
<?php
		if(isset($_POST['submit'])) {
			$user = $_POST['user'];
			header("Location: index.html");
			exit();
		}
	?>
<h1>Willkommen!</h1>
<p>Bitte geben Sie Ihren Namen ein:</p>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <input type="text" name="user">
    <input type="submit" name="submit" value="Weiter">
</form>
<script src="script.js"></script>
</body>
</html>