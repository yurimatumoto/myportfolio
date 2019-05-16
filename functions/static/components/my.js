class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div id="js--app" class="my-header spacer">
        <!-- PC -->
        <div class="my-header-pc">
          <a class="logo" href="/">
            <img src="/images/logo.svg" alt="matsumoto yuri" class="nonactive">
            <img src="/images/logo_hover.svg" alt="matsumoto yuri" class="active">
          </a>
          <a class="menu" href="/works/">
            <span>WORKS</span>
          </a>
          <a class="menu" href="/about/">
            <span>ABOUT</span>
          </a>
          <a class="menu" href="/lab/">
            <span>LAB</span>
          </a>
          <a class="menu" href="/contact/">
            <span>CONTACT</span>
          </a>
        </div>
        <!-- SP -->
        <div class="my-header-sp">
          <a class="logo" href="/">
            <img src="/images/logo.svg" alt="matsumoto yuri">
          </a>
          <a href="#" class="menu-icon" id="js--sp-menu">
            <i class="fas fa-bars"></i>
          </a>
          <a href="#" class="menu-icon-close" id="js--sp-menu-close">
          <i class="fas fa-times"></i>
          </a>
          <div class="menu-container">
            <a class="menu" href="/">
              <span>Top</span>
            </a>
            <a class="menu" href="/works/">
              <span>WORKS</span>
            </a>
            <a class="menu" href="/about/">
              <span>ABOUT</span>
            </a>
            <a class="menu" href="/lab/">
              <span>LAB</span>
            </a>
            <a class="menu" href="/contact/">
              <span>CONTACT</span>
            </a>
          </div>
        </div>
      </div>
      <div class="my-header-spacer"></div>
    `;
  }
}
customElements.define("my-header", MyHeader);


class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
      </style>
      <div class="row">
  			<div class="col-12 column">
          <div class="my-footer">
            <div class="sns_menu">
              <ul>
                <li><a href="https://www.behance.net/matumoto-yuri" target="_blank"><i class="fab fa-behance"></i></a></li>
                <li><a href="https://vimeo.com/user43096074" target="_blank"><i class="fab fa-vimeo-v"></i></a></li>
                <li><a href="https://www.linkedin.com/in/yuri-matumoto-935386146/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            &copy; MATUMOTO YURI 2019 / Source and Licenses<br>
            Lovingly made by YURI MATUMOTO and TAKEDA HIROSHI
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-footer", MyFooter);


// Header for SP.
let openEl = document.getElementsByClassName("menu-icon")[0];
let closeEl = document.getElementsByClassName("menu-icon-close")[0];
let menuEl = document.getElementsByClassName("menu-container")[0];
document.getElementById("js--sp-menu").onclick = () => {
  menuEl.style.display = "block";
  openEl.style.display = "none";
  closeEl.style.display = "block";
}

document.getElementById("js--sp-menu-close").onclick = () => {
  menuEl.style.display = "none";
  openEl.style.display = "block";
  closeEl.style.display = "none";
}
