import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import {AlertController, ToastController} from "@ionic/angular";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

    listaAtores: IAtores[] = [
    {
      nome: 'Robert Pattinson',
      nascimento: 'Nasceu em: 13-05-1986 ',
      hist: 'Robert Douglas Thomas Pattinson (nascido em 13 de maio de 1986) é um ator inglês. Notável por seus papéis versáteis em filmes de grande orçamento e independentes, Pattinson foi classificado entre os atores mais bem pagos do mundo.  Depois de começar a atuar em um clube de teatro de Londres aos 15 anos, Pattinson começou sua carreira no cinema interpretando Cedric Diggory no filme de fantasia Harry Potter e o Cálice de Fogo (2005).  Ele ganhou reconhecimento mundial por interpretar Edward Cullen na série de filmes A Saga Crepúsculo (2008–2012), que arrecadou mais de US$ 3,3 bilhões em todo o mundo.',
      classificacao: 8,
      foto: 'https://www.themoviedb.org/t/p/w375_and_h375_face/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg',
      generos: ['Sci-Fi ','Fantasia','Drama','Ação','Aventura'],
      pagina: '/Robert-Pattinson',
      favorito: false
    },
    {
      nome: 'Jared Leto',
      nascimento: 'Nasceu em: 26-12-1971',
      hist: 'Jared Joseph Leto (Bossier City, 26 de dezembro de 1971) é um ator, diretor, cantor e compositor americano. Vocalista da banda 30 Seconds to Mars, venceu diversos prêmios musicais com sua banda por sua carreira como músico, incluindo vários VMA e EMA. Como ator, venceu o Oscar e o Globo de Ouro de Melhor Ator Coadjuvante interpretando uma mulher transexual em Dallas Buyers Club. Em 2015 foi escolhido para viver o Coringa no filme Esquadrão Suicida.',
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w375_and_h375_face/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg',
      generos: ['Sci-Fi ','Drama','Ação',],
      pagina: '/Jared-Leto',
      favorito: false
    },
    {
      nome: 'Tom Holland',
      nascimento: 'Nasceu em: 01-06-1996',
      hist: 'Thomas "Tom" Holland é um ator e dançarino inglês, mais conhecido por interpretar o papel principal em Billy Elliot the Musical no Victoria Palace Theatre, Londres, bem como para estrelar o filme de 2012 O Impossível. Por último papel, ele se tornou um vencedor do Hollywood Spotlight Award, bem como do National Board of Review’s award no "Breakthrough Actor" categoria do London Film Critics Circle Awards 2012 em “Young British Performer of the Year”.',
      classificacao: 10,
      foto: 'https://www.themoviedb.org/t/p/original/4eiFdjEtqb2pnWX6z98ADcYD9zV.jpg',
      generos: ['Sci-Fi ','Fantasia','Drama','Ação','Aventura','Comédia'],
      pagina: '/Tom-Holland',
      favorito: false
    },
    {
      nome: 'Elizabeth Olsen',
      nascimento: 'Nasceu em: 16-02-1999',
      hist: 'É uma atriz norte-americana. Elizabeth é a irmã mais nova das também atrizes Mary-Kate Olsen e Ashley Olsen.Elizabeth nasceu em Sherman Oaks, Califórnia em 1989, também chamada de "Lizzie", é irmã de duas famosas atrizes, as gêmeas Mary-Kate e Ashley Olsen e de Trent Olsen . Graduou-se na Universidade de Nova York Tisch School of the Arts e Atlantic Theater Company Acting School, em Nova York. Se dedica à carreira de atriz e já atuou em muitas das produções das irmãs mais velhas. Começou sua carreira aos cinco anos de idade, quando atuou em um episódio da série de suas irmãs "The Adventures of Mary-Kate & Ashley: O Caso da Mansão Thorn", mas atuou pela primeira vez no filme Peace, Love, and Misunderstanding (2011), no qual desempenhou o papel de Zoe. Outro filme da atriz é Martha Marcy May Marlene, e outra de suas atuações está intitula-se A Casa Silenciosa, onde desempenhou o papel de Sarah, além de um papel extremamente importante na marvel, atuando como Wanda Maximoff.',
      classificacao: 10,
      foto: 'https://www.themoviedb.org/t/p/original/7Gr7Gpwvn05pnsawfNAlob1PAK3.jpg',
      generos: ['Sci-Fi ','Fantasia','Drama','Ação','Aventura','Romance','Comédia'],
      pagina: '/elizabeth-olsen',
      favorito: false
    }
  ];
  async exibirAlertaFavorito(ator: IAtores){
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message:'Quer mesmo favoritar essa série?',
      buttons: [
        {
          text:'Não',
          role:'cancel',
          handler: () => {
            ator.favorito = false;
          }
        },{
          text:'Sim',
          handler: () => {
            ator.favorito = true;
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
  exibirAtores(atores: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:atores}};
    this.router.navigate(['atores-detalhe'], navigationExtras);
  }
}