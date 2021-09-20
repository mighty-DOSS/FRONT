import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [],
})
export class AppComponent implements OnInit{
  title!: string;
  ngOnInit():void {
    console.log("Evento executado na inicialização do componente !");
  }
}
