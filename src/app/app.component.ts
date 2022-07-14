import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'copy-cat';
  menuToggle = document.querySelector('#menu-toggle');
  public menu = document.querySelector('#menu');
  public menuToggleActive: boolean = false;

  //   menuToggle.addEventListener("click", function (event) {
  //   console.log("menuToggle");
  //   var menuOpen = menu.classList.contains("active");
  //   var newMenuOpenStatus = !menuOpen;

  //   menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
  //   menu.classList.toggle("active");
  //   menuToggle.classList.toggle("active");
  // });

  public openMenu() {
    console.log('##openmenu');
    // let menuOpen = menu.classList.contains('active');

    this.menuToggleActive = !this.menuToggleActive;
  }
}
