import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"],
})
export class IntroComponent implements OnInit {
  constructor() {}

  //@ViewChild("bannerText", { static: false }) public bannerText: ElementRef;
  // @ViewChild("bannerText") bannerText: ElementRef;

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    let y = window.scrollY;
    if (y >= 200) {
      document.getElementById("bannerText").style.opacity = "0";
    } else {
      document.getElementById("bannerText").style.opacity = "1";
    }
  }
}
