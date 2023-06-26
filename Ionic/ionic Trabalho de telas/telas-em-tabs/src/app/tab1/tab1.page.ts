import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IonButtons } from '@ionic/angular';
import { IFilmes } from '../model/IFilmes';
import {AlertController, ToastController} from "@ionic/angular";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


    constructor(public router: Router,public alertController: AlertController, public toastController: ToastController) {}

    listaFilmes: IFilmes[] = [
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
      lancamento: '16/12/2021',
      duracao: '1h50m',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/original/t0fSUE2KsFNGXwui9knxd3XsW8n.jpg',
      sinopse: 'O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.',
      generos: ['Ação','Ficção científica','Aventura'],
      pagina: '/homem-Aranha',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato(2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1xsUAHTp8oyZQkTWzHZFcwhH8D0.jpg',
      sinopse:'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
      generos: ['Ação','Fantasia','Aventura'],
      pagina: '/vingadores',
      favorito: false
    },
    {
      nome: 'Morbius (2022)',
      lancamento: '31/03/2022 (BR)',
      duracao: '1h45m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
      sinopse: 'O bioquímico Michael Morbius tenta curar-se de uma doença rara no sangue mas, sem perceber, ele fica infectado com uma forma de vampirismo.',
      generos: ['Ação','Ficção Científica','Fantasia'],
      pagina: '/morbius',
      favorito: false
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 2,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
      sinopse: 'O lutador de MMA Cole Young não conhece sua herança, nem sabe o motivo do Imperador da Exoterra ter enviado seu melhor guerreiro, Sub-Zero, para ir atrás dele. Temendo pela segurança de sua família, ele se une a outros heróis para proteger a Terra.',
      generos: ['Ação','Fantasia','Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Uncharted: Fora do Mapa (2022)',
      lancamento: '17/02/2022',
      duracao: '1h56m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/original/soD18uucENplI81kUErvMzdb5Lm.jpg',
      sinopse: 'Nathan Drake e seu parceiro canastrão Victor "Sully" Sullivan embarcam em uma perigosa busca para encontrar o maior tesouro jamais encontrado. Enquanto isso, eles também rastreiam pistas que podem levar ao irmão perdido de Nathan.',
      generos: ['Ação','Aventura'],
      pagina: '/uncharted',
      favorito: false
    },
    {
      nome: 'Red: Crescer é Uma Fera (2022)',
      lancamento: '14/03/2022',
      duracao: '1h50m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/original/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg',
      sinopse: 'Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.',
      generos: ['Animação','Família','Comédia','Fantasia'],
      pagina: '/red',
      favorito: false
    }
  ];
  async exibirAlertaFavorito(filme: IFilmes){
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message:'Quer mesmo favoritar este filme?',
      buttons: [
        {
          text:'Não',
          role:'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text:'Sim',
          handler: () => {
            filme.favorito=true;
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

  exibirFilme(filme: IFilmes){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }
}
