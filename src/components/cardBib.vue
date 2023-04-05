<template>
    <div class="cardbody m-5" v-for="x in 4" >
     <img
      src="@/assets/image/guide.jpg"
      alt="Pancake"
     />
     <div class="container__text">
      <h2>le guide marocain des associations</h2>
      <p>
          Les associations sont essentielles pour résoudre les problèmes du Maroc et le Guide Marocain des Associations est une ressource précieuse pour les personnes impliquées dans ce travail.
      </p>
      <a href="http://www.acodec.org/medias/files/guide-marocain-des-associations.pdf">
      <button class="btn">view <i class="fa fa-arrow-right"></i></button>
  </a>
     </div>
    </div>
    
  </template>
  <style>
  .cardbody {
    background-color: #F8EF9E;
    position: relative;
    display: grid;
    grid-template-columns: 300px 600px;
    border-radius: 5px;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  }
  .cardbody img {
    width: 300px;
    height: 300px;
    border-radius: 5px 0 0 5px;
  }
  .cardbody .btn {
    position: absolute;
    bottom: -20px;
    right: -20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #fc9400;
    color: #fff;
    padding: 22px 45px;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);
  }
  .cardbody .btn i {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  
  .container__text {
    padding: 40px 40px 0;
  }
  .container__text h2 {
    color: #351897;
    font-weight: 400;
  }
  .container__text .container__text__star span {
    font-size: 0.8rem;
    color: #ffa800;
    margin: -5px 0 20px;
  }
  .container__text p {
    font-size: 0.9rem;
  }
  </style>



 