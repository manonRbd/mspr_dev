import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import sha256 from 'sha256';
import { DmoProvider } from '../providers/DmoProvider';
import { Dmo } from '../models/Dmo'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin : FormGroup;
  private password : String;
  private login : String 
  constructor(private navCtrl : NavController, public formBuilder: FormBuilder, private dmoProvider: DmoProvider) {
     // Create the form and define fields and validators.
     this.formLogin = this.formBuilder.group({
      login:['', Validators.required],
      password:['', Validators.required],
    });
   }
  
  signIn(dmo:NgForm){
    this.login = dmo.value.login;
    this.password = sha256(dmo.value.password)
    console.log('log : '+this.password  + '  pass : ' + this.password  );
    if (this.formLogin.valid) {
      this.dmoProvider.getOneByLoginAndPassword(this.login ,this.password ).then(user => {
        console.debug("GET ONE :" + user)
        this.navCtrl.navigateForward('home/'+user.uuid);
      });
    }else{
      alert('Tentative de connexion échouée. Veuillez réessayer.')
    }  
  }
  toRegister(){
    this.navCtrl.navigateForward('register');
  }

  ngOnInit() {
    //console.log(sha256('manon'))
  }

}
