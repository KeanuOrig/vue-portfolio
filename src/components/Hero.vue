<template>
  <div class="h-screen bg-image flex flex-col items-center justify-center">

    <div class="text-center">
      <img src="../assets/self.png" class="w-[50rem] lg:h-[37rem]">
    </div>

    <div class="sm:text-6xl text-4xl font-mono">Keanu Orig</div>

    <div class="sm:text-2xl text-1xl font-mono">Web Developer / Software Engineer</div>

    <div class="relative">
      <a href="/Orig_Keanu_Resume.pdf" download>
        <div class="letter-image">
          <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
              <div class="letter-border"></div>
              <div class="letter-title"></div>
              <div class="letter-context"></div>
              <div class="letter-stamp">
                <div class="letter-stamp-inner"></div>
              </div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            <div class="left-fold"></div>
            <div class="font-cursive text-white resume">Download CV</div>
          </div>
        </div>
      </a>
    </div> 
    <div class=""></div>
  </div>
</template>

<style scoped>

  .bg-image {
    background-image: url("../assets/background.png");
    background-size: cover;
  }
  

  .fade {
    -webkit-animation: smooth 5s ease-in;
    -moz-animation: smooth 5s ease-in;
    -o-animation: smooth 5s ease-in;
    -ms-animation: smooth 5s ease-in;
    animation: smooth 5s ease-in;
    animation-name: grow;
  }

  @keyframes grow {
    from {
      width: 0rem;
      height: 0rem;
    }

    to {
      width: 20rem;
      height: 20rem;
    }
  }
  @-webkit-keyframes smooth {
      0% { opacity: 0;}
      100% { opacity: 1;}
  }

  @-moz-keyframes smooth {
      0% { opacity: 0;}
      100% { opacity: 1;}
  }

  @-o-keyframes smooth {
      0% { opacity: 0;}
      100% { opacity: 1;}
  }

  @keyframes smooth {
      0% { opacity: 0;}
      100% { opacity: 1;}
  }

  .resume {
    position: absolute;
    top: 80%;
    left: 28%;
    z-index: 2;
  }

  .letter-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    -webkit-transform: translate(-50%, 0%);
    -moz-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: .4s;
    -moz-transition: .4s;
    transition: .4s;
    
    .body {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 100px 200px;
      border-color: transparent transparent #1b0f0f transparent;
      z-index: 2;
    }
    
    .top-fold {
      position: absolute;
      top: 50px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 100px 0 100px;
      -webkit-transform-origin: 50% 0%;
      -webkit-transition: transform .4s .4s, z-index .2s .4s;
      -moz-transform-origin: 50% 0%;
      -moz-transition: transform .4s .4s, z-index .2s .4s;
      transform-origin: 50% 0%;
      transition: transform .4s .4s, z-index .2s .4s;
      border-color: #373635 transparent transparent transparent;
      z-index: 2;
    }
    
    .back-fold {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 100px;
      background: #4d4c4c;
      z-index: 0;
    }
    
    .left-fold {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 50px 100px;
      border-color: transparent transparent transparent #282323;
      z-index: 2;
    }
    
    .letter {
      left: 20px;
      bottom: 0px;
      position: absolute;
      width: 160px;
      height: 60px;
      background: white;
      z-index: 1;
      overflow: hidden;
      -webkit-transition: .4s .2s;
      -moz-transition: .4s .2s;
      transition: .4s .2s;
      
      .letter-border {
        height: 10px;
        width: 100%;
        background: repeating-linear-gradient(
          -45deg,
          #2a2828,
          #242021 8px,
          transparent 8px,
          transparent 18px
        );
      }
      
      .letter-title {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 40%;
        background: #180a0a;
      }
      .letter-context {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 20%;
        background: #191919;
      }
      
      .letter-stamp {
        margin-top: 30px;
        margin-left: 120px;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        background: #200808;
        opacity: 0.3;
      }
    }
  }


  .letter-image:hover {
    .animated-mail {
      transform: translateY(50px);
      -webkit-transform: translateY(50px);
      -moz-transform: translateY(50px);
    }
    
    .animated-mail .top-fold {
      transition: transform .4s, z-index .2s;
      transform: rotateX(180deg);
      -webkit-transition: transform .4s, z-index .2s;
      -webkit-transform: rotateX(180deg);
      -moz-transition: transform .4s, z-index .2s;
      -moz-transform: rotateX(180deg);
      z-index: 0;
    }
    
    .animated-mail .letter {
      height: 180px;
    }
  }
</style>