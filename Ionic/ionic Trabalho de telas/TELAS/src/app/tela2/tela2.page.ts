import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController} from '@ionic/angular';
import{Router} from '@angular/router';
@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {
valor: any;
  alertController: any;

  constructor( private activatedRoute: ActivatedRoute,
    public alertaController: AlertController,
      private router: Router) {}

  ngOnInit() {
    this.valor = this.activatedRoute.snapshot.paramMap.get('valor')

  }
  async ida() {
  this.router.navigateByUrl(`/tela3/`)
  }
}
