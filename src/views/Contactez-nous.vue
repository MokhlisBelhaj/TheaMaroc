
<template>
     <div class="container my-5">
        <h1 class="text-center mb-2">Contactez-nous</h1>

        <div class="row justify-content-center">
            <div class="col-md-6 my-auto">
                <img src="../assets/image/BeFunky-photo265-726x420.jpg" style="width:100%;" alt="">
                    </div>
          <div class="col-lg-6 col-md-8 ">
            <form action="envoyer.php" method="POST">
              
                <label for="name" class="form-label">Nom:</label>
                <input type="text" id="name" name="name" class="form-control shadow-lg p-3 mb-1 bg-body-tertiary rounded" required />
              
             
                <label for="email" class="form-label">Adresse e-mail:</label>
                <input type="email" id="email" name="email" class="form-control shadow-lg p-3 mb-1 bg-body-tertiary rounded" required />
              
           
                <label for="phone" class="form-label">Numéro de téléphone:</label>
                <input type="tel" id="phone" name="phone" class="form-control shadow-lg p-3 mb-1 bg-body-tertiary rounded" required />
              
           
                <label for="message" class="form-label">Message:</label>
                <textarea id="message" name="message" class="form-control shadow-lg p-3 mb-1 bg-body-tertiary rounded" required></textarea>
            
              <button type="submit" class="btn btn-warning">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
</template>