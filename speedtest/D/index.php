<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PHP Captcha</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
		<h3>PHP CAPTCHA</h3>
	</div>
	<?php 
		if(isset($_GET['message'])) {
			if($_GET['message'] == 'success') { ?>
				<div class="alert alert-success">Captcha berhasil!</div>
			<?php } else if($_GET['message'] == 'error') { ?>
				<div class="alert alert-danger">Captcha gagal!</div>
			<?php } else { ?> 
				<div class="alert alert-danger">Isi jawaban!</div>
			<?php }
		}
	 ?>
	 <div class="card">
	 	<form method="post" action="captcha.php">
	 		<div class="form-group">
	 			<label for="captcha">Captcha</label>
	 			<img src="captcha.php" alt="captcha">
	 		</div>
	 		<div class="form-group">
	 			<label for="input">Jawaban</label>
	 			<input type="text" name="input" id="input" autofocus>
	 		</div>
	 		<div class="form-group">
	 			<button class="btn" type="submit">Submit</button>
	 		</div>
	 	</form>
	 </div>

</body>
</html>