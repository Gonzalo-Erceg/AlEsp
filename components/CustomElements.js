class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
           <header>
    <nav class="navbar">
        <a href="/" class="logo-container">
            <svg
   width="45"
   height="41"
   viewBox="0 0 46.838402 43.205536"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs1" /><g
     id="layer1"
     transform="translate(-222.04277,-298.61742)"><g
       id="g2-2-0"
       transform="matrix(0.33792356,0,0,0.33792356,213.35071,276.83448)"
       style="fill:#ffff;fill-opacity:1"><path
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round"
         d="m 127.27285,141.11289 v 10.55169 a 2.414241,2.414241 112.49977 0 1 -0.7071,1.70711 l -28.048446,28.0489 a 4.9999601,4.9999601 179.99977 0 1 -7.071039,3e-5 L 63.318272,153.29263 a 2.4142134,2.4142134 67.499998 0 1 -0.707107,-1.70711 V 141.2054 a 0.4142137,0.4142137 22.500007 0 0 -0.707107,-0.29289 l -11.637359,11.63735 36.22828,36.2288 c 4.717998,4.71799 12.315069,4.71799 17.033071,0 l 9.91774,-9.91774 c 0.29955,-0.29956 0.57926,-0.61147 0.84077,-0.93276 l 25.40104,-25.40104 -11.70763,-11.70714 a 0.41422583,0.41422583 157.4994 0 0 -0.70712,0.29291 z"
         id="path196-0-3" /><path
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round"
         d="M 124.80789,64.461182 C 113.37321,64.484182 102.50761,70.0199 95.017456,79.63855 87.517692,70.053791 76.660543,64.548335 65.242529,64.540247 45.797177,64.572896 29.262157,80.3487 26.256278,101.73643 c -0.336072,2.24819 -0.514723,4.52212 -0.534334,6.80113 0.0386,12.41207 4.784842,24.22879 13.068453,32.53652 l 1.5875,1.58698 2.10013,2.10065 51.121598,-51.121601 a 1.9999996,1.9999996 3.4106538e-6 0 1 2.828427,0 l 11.428238,11.428241 a 0.41421348,0.41421348 157.5 0 0 0.70711,-0.29289 V 93.947359 a 2,2 135 0 1 2,-2 h 14.73529 a 2,2 45 0 1 2,2 V 123.2875 a 2.4388764,2.4388764 67.70515 0 0 0.70203,1.71215 l 19.46676,19.74759 2.0221,-2.0221 2.12649,-2.12649 c 8.06075,-8.28457 12.66569,-19.92703 12.7124,-32.14015 -0.006,-2.3591 -0.18315,-4.7139 -0.52865,-7.04143 -3.10127,-21.294536 -19.61423,-36.945226 -38.99193,-36.955888 z"
         id="path194-9-8" /><path
         id="rect194-5-4"
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.142601;stroke-linecap:round"
         d="m 113.95113,97.623314 h 7.48192 a 2,2 45 0 1 2,2 v 19.850326 a 0.47866124,0.47866124 154.42137 0 1 -0.77887,0.37282 L 112.73,111.85501 a 2.0891602,2.0891602 64.421369 0 1 -0.77887,-1.62718 V 99.623314 a 2,2 135 0 1 2,-2 z"
         transform="matrix(0.86065461,0,0,0.99998962,16.576502,-0.80747989)" /><g
         id="g196-6-2"
         transform="translate(-0.9595203,-1.6470701)"
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-opacity:1"><path
           id="rect195-82-7"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(1.8713896,1.157819)" /><path
           id="rect195-1-8-8"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(14.290066,1.157819)" /><path
           id="rect195-5-7-5"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(14.290066,13.021439)" /><path
           id="rect195-8-2-5"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(1.8713896,13.021439)" /></g></g></g></svg>

        </a>
        <ul class="nav-links">
          <li><a href="/news.html">Novedades</a></li>
          <li><a href="/apoyo.html">Ayudá a la causa</a></li>
          <li><a href="/comedores.html">Comedores</a></li>
        </ul>
        <div class="login-container">
          <a href="/auth.html" class="login-btn">inicia sesión/regístrate</a>
        </div>
      </nav>
</header>

  <style>

  
  /* Header and navigation */
  header {
    background: linear-gradient(to right, #78ABA8,#78ABA8,#C8CFA0);
    padding: 10px 20px;
    position:relative;
    z-index:1;
    font-family: var(--text-font), sans-serif;
    box-shadow:  0px 0px 10px #5a5a5a
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo-container img {
    width: 60px; /* Ajusta según el tamaño deseado para tu logo */
  }
  
  /* Navigation links */
  .nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-right: 30px;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
  
  .nav-links li a:hover {
    text-decoration: underline;
  }
  
  /* Login button */
  .login-container {
    display: flex;
    align-items: center;
  }
  
  .login-btn {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
      font-family: var(--text-font), sans-serif;

  }
  
  .login-btn:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
    }
  
    .nav-links {
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
  
    .nav-links li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    .login-container {
      margin-top: 10px;
    }
  }

  </style>
        `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<footer>
    <div class="footer-content">
      <div class="logo-container">
        <svg
   width="46.838402mm"
   height="43.205536mm"
   viewBox="0 0 46.838402 43.205536"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs1" /><g
     id="layer1"
     transform="translate(-222.04277,-298.61742)"><g
       id="g2-2-0"
       transform="matrix(0.33792356,0,0,0.33792356,213.35071,276.83448)"
       style="fill:#fff;fill-opacity:1"><path
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round"
         d="m 127.27285,141.11289 v 10.55169 a 2.414241,2.414241 112.49977 0 1 -0.7071,1.70711 l -28.048446,28.0489 a 4.9999601,4.9999601 179.99977 0 1 -7.071039,3e-5 L 63.318272,153.29263 a 2.4142134,2.4142134 67.499998 0 1 -0.707107,-1.70711 V 141.2054 a 0.4142137,0.4142137 22.500007 0 0 -0.707107,-0.29289 l -11.637359,11.63735 36.22828,36.2288 c 4.717998,4.71799 12.315069,4.71799 17.033071,0 l 9.91774,-9.91774 c 0.29955,-0.29956 0.57926,-0.61147 0.84077,-0.93276 l 25.40104,-25.40104 -11.70763,-11.70714 a 0.41422583,0.41422583 157.4994 0 0 -0.70712,0.29291 z"
         id="path196-0-3" /><path
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round"
         d="M 124.80789,64.461182 C 113.37321,64.484182 102.50761,70.0199 95.017456,79.63855 87.517692,70.053791 76.660543,64.548335 65.242529,64.540247 45.797177,64.572896 29.262157,80.3487 26.256278,101.73643 c -0.336072,2.24819 -0.514723,4.52212 -0.534334,6.80113 0.0386,12.41207 4.784842,24.22879 13.068453,32.53652 l 1.5875,1.58698 2.10013,2.10065 51.121598,-51.121601 a 1.9999996,1.9999996 3.4106538e-6 0 1 2.828427,0 l 11.428238,11.428241 a 0.41421348,0.41421348 157.5 0 0 0.70711,-0.29289 V 93.947359 a 2,2 135 0 1 2,-2 h 14.73529 a 2,2 45 0 1 2,2 V 123.2875 a 2.4388764,2.4388764 67.70515 0 0 0.70203,1.71215 l 19.46676,19.74759 2.0221,-2.0221 2.12649,-2.12649 c 8.06075,-8.28457 12.66569,-19.92703 12.7124,-32.14015 -0.006,-2.3591 -0.18315,-4.7139 -0.52865,-7.04143 -3.10127,-21.294536 -19.61423,-36.945226 -38.99193,-36.955888 z"
         id="path194-9-8" /><path
         id="rect194-5-4"
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.142601;stroke-linecap:round"
         d="m 113.95113,97.623314 h 7.48192 a 2,2 45 0 1 2,2 v 19.850326 a 0.47866124,0.47866124 154.42137 0 1 -0.77887,0.37282 L 112.73,111.85501 a 2.0891602,2.0891602 64.421369 0 1 -0.77887,-1.62718 V 99.623314 a 2,2 135 0 1 2,-2 z"
         transform="matrix(0.86065461,0,0,0.99998962,16.576502,-0.80747989)" /><g
         id="g196-6-2"
         transform="translate(-0.9595203,-1.6470701)"
         style="fill:#fff;fill-opacity:1;stroke:none;stroke-opacity:1"><path
           id="rect195-82-7"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(1.8713896,1.157819)" /><path
           id="rect195-1-8-8"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(14.290066,1.157819)" /><path
           id="rect195-5-7-5"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(14.290066,13.021439)" /><path
           id="rect195-8-2-5"
           style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:0.132292;stroke-linecap:round;stroke-opacity:1"
           d="m 84.956161,127.74619 5.867709,0 a 2,2 45 0 1 2,2 v 5.86771 a 2,2 135 0 1 -2,2 h -5.867709 a 2,2 45 0 1 -2,-2 v -5.86771 a 2,2 135 0 1 2,-2 z"
           transform="translate(1.8713896,13.021439)" /></g></g></g></svg>
        <p>Solidaridad que viste y alimenta</p>
      </div>
      <div class="menu">
        <h3>Destacado</h3>
        <ul>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Políticas de privacidad</a></li>
          <li><a href="#">Ser voluntario</a></li>
          <li><a href="/nosotros.html">Nosotros</a></li>
        </ul>
      </div>
      <div class="social-media">
        <ul>
          <li><a href="#"><i class="fa fa-instagram"></i> @alimentando.esperanzas</a></li>
          <li><a href="#"><i class="fa fa-facebook"></i> @alimentando.esperanzas</a></li>
          <li><a href="#"><i class="fa fa-envelope"></i> @alimentando.esperanzas</a></li>
        </ul>
      </div>
    </div>
  
</footer>
<style>
    footer {
    background: linear-gradient(to right, #78ABA8,#78ABA8,#C8CFA0);
    padding: 20px 0;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo-container {
    text-align: center;
  }
  
  .logo-container img {
    width: 60px; /* Ajusta el tamaño según tu logo */
    margin-bottom: 10px;
  }
  
  .logo-container p {
    font-size: 16px;
    }
  
  .menu {
    text-align: left;
  }
  
  .menu h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu ul li {
    margin-bottom: 8px;
  }
  
  .menu ul li a {
    color: white;
    text-decoration: none;
  }
  
  .menu ul li a:hover {
    text-decoration: underline;
  }
  
  .social-media {
    text-align: right;
  }
  
  .social-media ul {
    list-style: none;
    padding: 0;
  }
  
  .social-media ul li {
    margin-bottom: 8px;
  }
  
  .social-media ul li a {
    color: white;
    text-decoration: none;
  }
  
  .social-media ul li a:hover {
    text-decoration: underline;
  }
  
  .social-media ul li a i {
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  
    .social-media {
      margin-top: 20px;
    }
  }
  
</style>`;
  }
}

customElements.define("c-navbar", NavBar);
customElements.define("c-footer", Footer);
