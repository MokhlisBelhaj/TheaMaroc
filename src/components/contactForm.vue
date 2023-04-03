<template>
    <div class="container">
		<h1 class="text-center mb-5">Contactez-nous</h1>
		<form action="envoyer.php" method="POST">

			<!-- Nom -->
			<div class="form-group">
				<label for="name">Nom:</label>
				<input type="text" id="name" name="name" class="form-control" required>
			</div>

			<!-- Adresse e-mail -->
			<div class="form-group">
				<label for="email">Adresse e-mail:</label>
				<input type="email" id="email" name="email" class="form-control" required>
			</div>

			<!-- Numéro de téléphone -->
			<div class="form-group">
				<label for="phone">Numéro de téléphone:</label>
				<input type="tel" id="phone" name="phone" class="form-control" required>
			</div>

			<!-- Message -->
			<div class="form-group">
				<label for="message">Message:</label>
				<textarea id="message" name="message" class="form-control" required></textarea>
			</div>

			<!-- Bouton d'envoi -->
			<button type="submit" class="btn btn-warning">Envoyer</button>

		</form>
	</div>
</template>