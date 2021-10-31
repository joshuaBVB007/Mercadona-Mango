import { SearchProductsService } from 'src/app/Services/search-products.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { BBDDService } from 'src/app/Services/bbdd.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MatomoTracker } from '@ngx-matomo/tracker';
import { indices } from 'src/app/app.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

 
  PageName: string = "Login";
  headerVisible: boolean = false;
  asignarStylo="";
  img_app="";
  img_dona="../../../assets/imgs/logo_mercadona.png";
  img_mango="../../../assets/vestidos/mango_logo2.jpg";
  button_arriba_style="";
  button_abajo_style="";
  constructor(private readonly tracker: MatomoTracker,private routeInfo:ActivatedRoute,private search:SearchProductsService,private bbddService: BBDDService,private router: Router) {
    this.PageName = this.bbddService.PageName(1);
  }

  ngOnInit() {
      
      //informa en el dashboard cuantos han entrado en mi web
      this.tracker.setUserId("manolita");
      //informa que se ha visitado  la pagina
      this.tracker.trackPageView("Han entrado en login");
      console.log(this.tracker.getMatomoUrl());


      this.asignarStylo=this.routeInfo.snapshot.params['stylo'];
      console.log(this.asignarStylo);
      this.CambiarSass(this.asignarStylo);
      this.search.CargarProductos();
      this.DesignarStylo();   
  }

  CambiarSass(dato:string){this.search.styloActual(dato);}
  
  DesignarStylo(){
    if(this.asignarStylo=="mango"){
      this.button_arriba_style="secondary-button-mango"
      this.button_abajo_style="main-button-mango";
      this.img_app=this.img_mango;
    }else if(this.asignarStylo=="dona"){
      this.button_arriba_style="secondary-button"
      this.button_abajo_style="main-button";
      this.img_app=this.img_dona;
    }
  }
  Cambiarstylo(diseno:string){
      this.ngOnInit();
  }
  OpenComprar() {
    //param1=categoria(video,comida,etc) param2=accion(cliente clicó en ir a productos)según manual de matomo.
    this.tracker.trackEvent("Botón comprar","cliente clicó en ir a productos");

    const navigationExtras: NavigationExtras = { state: { prova: "prova" } };
    console.log("Redirecting to home page");
    this.router.navigate(["../tabs/Home"], navigationExtras);
    console.log("Soy comprar");
  }
  OpenEventos(){
    const navigationExtras: NavigationExtras = { state: { prova: "prova" } };
    this.router.navigate(["/events"], navigationExtras)
    console.log("Soy eventos")
  }
}
