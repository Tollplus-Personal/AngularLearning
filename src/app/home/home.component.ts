import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = "";
  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      deactive: this.clickCounter > 4,
      nocative: this.clickCounter <= 4
    };
    return myClasses;
  }
}
