import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {User} from "../../model/User";

/**
 * Generated class for the InternalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-internal',
  templateUrl: 'internal.html',
})
export class InternalPage {

  user: User = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertController: AlertController,
              private userService:UserServiceProvider) {

    this.getDataOfUser();
  }

  private getDataOfUser() {
    this.userService.getLoggedInUser()
      .then( user =>{
      //user is found
      //display your data on View (HTML)
      this.user = user;
    }).catch(err=>{
      //show error to user
      //close the page

      this.alertController
        .create({"title": err, "buttons": [{"text" : "ohhh!"}]})
        .present();
    })
  }
}
