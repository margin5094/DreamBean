export class Category {
    id: string;
    title: string;
    desc: string;
    imageS: string;
    imageL: string;
    constructor(id:string,title:string,desc:string,imageS:string,imageL:string){
        this.id=id;
        this.title=title;
        this.desc=desc;
        this.imageS=imageS;
        this.imageL=imageL;
    }
}