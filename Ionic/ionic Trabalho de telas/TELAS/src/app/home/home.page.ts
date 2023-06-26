import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import{Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 ValoresNome: any[];
 ValoresId: any[];
 Valoresfornecedor: any[];
 MudancaN: any;
 Mudancaid: any;
 Mudancafor: any;
  constructor (public ToastController: ToastController,
    public alertController: AlertController,
      private router: Router) {}

    async exibirToast (mensagem: string) {
      const toast = await this.ToastController.create({
        message: mensagem,
        duration: 2000
      });
      toast.present();
    }


    async Entrada() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Produto:',
        inputs: [
          {
            name: 'Valorid',
            type: 'number',
            placeholder: 'Codigo do produto'
          },
          {
            name: 'ValorNome',
            type: 'text',
            placeholder: 'Nome do produto'
          },
          {
            name: 'Valorfornecedor',
            type: 'text',
            placeholder: 'Fabricante / Fornecedor'
          }
        ],
        buttons: [
          {
            text: 'Ok',
            handler: (dados_cadastrados: any) => {
              this.ValoresId = dados_cadastrados['Valorid'];
              this.ValoresNome = dados_cadastrados['ValorNome'];
              this.Valoresfornecedor = dados_cadastrados['Valorfornecedor'];
              this.Mudancaid = (this.ValoresId);
              this.MudancaN = (this.ValoresNome);
              this.Mudancafor = (this.Valoresfornecedor);
              this.exibirToast('Dados salvos');
              this.router.navigateByUrl(`/tela2/${this.ValoresId}${this.ValoresNome}${this.Valoresfornecedor}`)
            }
          }
        ]
      });
        await alert.present();

        
    }
    async Editar() {
      this.router.navigateByUrl(`/tela2/${this.Mudancaid}${this.MudancaN}${this.Mudancafor}`)
       
    }

   
}
