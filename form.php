<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Campaigning for the reopening of Boldrewood Tunnel since October 2019 (about 3.15pm)">
	<meta name="keywords" content="Southampton, University, Tunnel, Society, Secret">
	<meta name="author" content="Me">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="boldrewoodstyle.css">
	<title>Boldrewood Tunnel Soc</title>
</head>
<body>
	<div id="header">
		<h3>Boldrewood Tunnel Soc</h3>
		<nav id="navbar">
		<a class="burger">MENU</a>
		<div id="nav-div">
			<ul id="nav-list">
				<li><a href="./">ABOUT US</a></li>
				<li><a class="active" href="#">JOIN</a></li>
				<li><a href="map.html">MAP</a></li>
				<li><a href="faq.html">FAQ</a></li>
			</ul>
		</div><!--nav-div-->
		</nav>
	</div><!--header-->
	<div id="container">
	<?php
		$to = "undergroundresistance@boldrewoodtunnelsoc.com";
		$from = $_POST["email"];
		$subject = "New Member";
		$message = $from . "@soton.ac.uk has joined";
		$headers = "From:" . $from . "@soton.ac.uk";
		mail($to, $subject, $message, $headers);

	?>
	<p>Thank you. You've taken your first step into a larger world</p>
	</div><!--Container-->
	<div id="footer">
	<p id="centered">Boldrewood Tunnel: Not so much a myth as a legend</p>
	<p id = "small">&#169;	2019 Boldrewood Tunnel Soc</p>
	</div><!--footer-->
</body>
</html>
