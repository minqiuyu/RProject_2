export class Profile {

    constructor(private username: string='', private firstName: string='', private lastName: string='', private email: string='',private imageUrl: string=''){}
    // constructor(){}
    getUsername(){
        return this.username;
    }
    setUsername(username: string){
        this.username = username;
    }
}