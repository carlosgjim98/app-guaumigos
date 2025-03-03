import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors, confirmPassword } from 'src/app/utils/utils';

@Component({
  selector: 'app-resgistro-usuario-paseador',
  templateUrl: './resgistro-usuario-paseador.page.html',
  styleUrls: ['./resgistro-usuario-paseador.page.scss'],
})
export class ResgistroUsuarioPaseadorPage implements OnInit {

  form: FormGroup;

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

  public submitForm(): void {
    this.utilitiesService.showLoading("Registrando usuario...");

    this.apiService.register(this.form.value)

    this.apiService.register(this.form.value).subscribe((user : User) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Registro correcto');

      this.navCtrl.navigateRoot('/login');

    }, (error) => {
      
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast(codeErrors(error));

    });
  }
}

