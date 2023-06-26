import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IonButtons } from '@ionic/angular';
import { ISeries } from '../model/ISeries';
import {AlertController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    constructor( public router: Router, public alertController: AlertController, public toastController: ToastController) {}

    listaSeries: ISeries[] = [
    {
      nome: 'Game of Thrones',
      lancamento: 'Lançamento: 06/04/2014',
      temporadas: '8 - Temporadas',
      Duracao:'50-82mins',
      classificacao: 9,
      sinopse: 'A história gira em torno de uma batalha entre os Sete Reinos, onde duas famílias dominantes estão lutando pelo controle do Trono de Ferro, cuja posse possivelmente assegurará a sobrevivência durante o inverno que está por vir. Produção da HBO.',
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/l2ezB41chGDjXcKo24lseuXYtKP.jpg',
      generos: ['Sci-Fi ','Fantasia','Drama','Ação','Aventura'],
      pagina: '/Game-of-Thrones',
      favorito: false
    },
    {
      nome: 'The Flash',
      lancamento: 'Lançamento: 07/11/2014 (BR)',
      temporadas: '8 temporadas',
      Duracao:'42-45mins',
      classificacao: 8,
      sinopse: 'O investigador forense Barry Allen (Grant Gustin) sofre um acidente em seu laboratório: ele leva um banho de produtos químicos e, em seguida, é atingido por um raio. A partir disso, ele se torna capaz de canalizar os poderes do "Campo de Velocidade" e de se locomover com uma rapidez sobre-humana.',
      cartaz: 'https://www.themoviedb.org/t/p/original/A6oCNKBeyzhfCpJJUfmIWR2b41v.jpg',
      generos: ['Ficção científica','Super-Herói','Ação'],
      pagina: '/The-flash',
      favorito: false
    },
    {
      nome: 'Stranger Things',
      lancamento: 'Lançamento: 15/07/2016 (BR)',
      temporadas: '4 temporadas',
      Duracao:'50mins',
      classificacao: 9,
      sinopse: 'Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.',
      cartaz: 'https://www.themoviedb.org/t/p/original/zFE44Qks8F1IFu7qkqxNjJoelvT.jpg',
      generos: ['Drama','Sci-Fi',' Fantasia','Mistério'],
      pagina: '/st',
      favorito: false
    },
    {
      nome: 'Peaky Blinders: Sangue, Apostas e Navalhas',
      lancamento: 'Lançamento: 25/04/2013 (BR)',
      temporadas: '6 temporadas',
      Duracao:'58mins',
      classificacao: 7,
      sinopse: 'Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.',
      cartaz: 'https://www.themoviedb.org/t/p/original/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg',
      generos: ['Drama','crime'],
      pagina: '/peaky-blinders',
      favorito: false
    },
    {
      nome: 'Cavaleiro da Lua',
      lancamento: 'Lançamento: 30/03/2022 (BR)',
      temporadas: '1 temporada',
      Duracao:'47mins',
      classificacao: 7,
      sinopse: 'A série acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal entre os poderosos deuses do Egito.',
      cartaz: 'https://www.themoviedb.org/t/p/original/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg',
      generos: ['Ação','Aventura','Sci-Fi',' Fantasia','Mistério'],
      pagina: '/cavaleiro-da-lua',
      favorito: false
    }
  ];
  async exibirAlertaFavorito(serie: ISeries){
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message:'Quer mesmo favoritar essa série?',
      buttons: [
        {
          text:'Não',
          role:'cancel',
          handler: () => {
            serie.favorito = false;
          }
        },{
          text:'Sim',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast(){
    const toast = await this.toastController.create({
      message:'Adicionado aos favoritos com sucesso!!!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  exibirSerie(serie: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }
}

