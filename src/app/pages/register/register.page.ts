import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors, confirmPassword } from 'src/app/utils/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  tipoUsuario: string;

  constructor(
    private apiService: ApiService,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,
    public translate: TranslateService
  ) { }

  focusedInputs: boolean[] = [false, false, false, false];

  onFocus(index: number) {
    this.focusedInputs[index] = true;
  }

  onBlur(index: number) {
    this.focusedInputs[index] = false;
  }

  public ngOnInit(): void {

    this.tipoUsuario = sessionStorage.getItem('tipoUsuario');


    this.form = new FormGroup({
      name: new FormControl('', 
        {validators: [Validators.required]}
      ),
      email: new FormControl('', 
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('', 
        {validators: [Validators.required, Validators.minLength(8)]}
      ),
      password_confirmation: new FormControl('', 
        {validators: [Validators.required, Validators.minLength(8), confirmPassword]}
      ),
    });
    

  }
  getRegistroLink(): string {
    if (this.tipoUsuario === 'paseador') {
      return '/completar-perfil';
    } else if (this.tipoUsuario === 'empresa') {
      return '/completar-perfil-empresa';
    } else {
      // Por defecto o para otros tipos de usuario
      return '/completar-perfil';
    }
  }
  
  

  public submitForm(): void {
    this.utilitiesService.showLoading("Registrando usuario...");
  
    this.apiService.register(this.form.value).subscribe(
      (user: User) => {
        this.utilitiesService.dismissLoading();
        this.utilitiesService.showToast('Registro correcto');
  
        // Intenta obtener el rol del usuario desde sessionStorage
        const userRole = sessionStorage.getItem('tipoUsuario');
  
        if (userRole === 'paseador') {
          this.navCtrl.navigateRoot('/tabs/calendario-paseador');
        } else if (userRole === 'dueño') {
          this.navCtrl.navigateRoot('/tabs/listado-paseadores');
        } else if (userRole === 'empresa') {
          this.navCtrl.navigateRoot('/tabs/calendario-paseador');
        } 
      },
      (error) => {
        this.utilitiesService.dismissLoading();
        this.utilitiesService.showToast(codeErrors(error));
        
      }
    );
  }
  
  

  
}
