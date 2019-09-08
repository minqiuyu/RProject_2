import { last } from 'rxjs/operators';

export class Profile {

    constructor(private username: string='', private firstName: string='', private lastName: string='', private email: string='',private imageUrl: string=''){}
    // constructor(){}
    getUsername(){
        return this.username;
    }
    setUsername(username: string){
        this.username = username;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email: string){
        this.email = email;
    }
    getFirstName(){
        return this.firstName;
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }

    getLastName(){
        return this.lastName;
    }

    setLastName(lastName: string){
        this.lastName = lastName;
    }
}