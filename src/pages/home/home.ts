import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {InternalPage} from "../internal/internal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credential: string = "1234567890";
  password: string = "1234";

  constructor(public navCtrl: NavController,
              private alertController: AlertController,
              private userService: UserServiceProvider) {

  }

  loginButtonClicked() {

    this.userService.matchCredentials(this.credential, this.password)
      .then((response) => {
        //move to next page
        this.navCtrl.push(InternalPage);
      })
      .catch((err) => {
        //display error to user
        //dont go ahead
        this.alertController
          .create({"title" : "Error Occurred", "message": err, "buttons": [{"text": "Retry"}]})
          .present();
      });
  }
}
