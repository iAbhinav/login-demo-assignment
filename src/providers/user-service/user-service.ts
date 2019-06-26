import { Injectable } from '@angular/core';
import {User} from "../../model/User";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

   matchCredentials(credential: string, password: string) : Promise<any> {

    if(credential == "1234567890" && password == "1234") {
      return Promise.resolve("todo: login success")
    }

    return Promise.reject("Todo: this needs to be implemented");
  }

  getLoggedInUser(): Promise<User> {
     // let userObject : User = new User("Abhinav", "1234567890", "1234", "male");
     let userObject : User = new User("Abhinav", "1234567890", "1234", "male");
    return Promise.resolve(userObject);
  }
}
