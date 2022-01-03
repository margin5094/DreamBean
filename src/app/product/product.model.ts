export class Product{
    id:string;
    categoryId:string;
    title:string;
    price:number;
    isSpecial:boolean;
    imageL:string;
    desc:string;

    constructor(id:string,
        categoryId:string,
        title:string,
        price:number,
        isSpecial:boolean,
        imageL:string,
        desc:string,){
            this.id=id;
            this.categoryId=categoryId;
            this.title=title;
            this.price=price;
            this.isSpecial=isSpecial;
            this.imageL=imageL;
            this.desc=desc;
    }
}