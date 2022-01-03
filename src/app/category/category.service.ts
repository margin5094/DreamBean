import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "./category.model";
@Injectable({providedIn:'root'})
export class CategoryService{

    private category:Category[]=[

        new Category('1','Bread & Bakery','The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.'
        ,'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/bread-bakery-large.jpg',
        "https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/bread-bakery-large.jpg"
        ),
        new Category('2','Takeaway','Its consistently excellent, dishes are superb and healthily cooked with high quality ingredients.'
        ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNzQHna7ulUM0MKMGARVUPU63lJjF90AJ1A&usqp=CAU',
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNzQHna7ulUM0MKMGARVUPU63lJjF90AJ1A&usqp=CAU"
        ),
        new Category('3','Dairy','A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.'
        ,'https://article.innovadatabase.com/articleimgs/article_images/637243603784859129Fresh-dairy-products-on-the-wooden-table-675334958_3524x4712.jpeg',
        "https://article.innovadatabase.com/articleimgs/article_images/637243603784859129Fresh-dairy-products-on-the-wooden-table-675334958_3524x4712.jpeg"
        ),
        new Category('4','Meat','Only superior quality beef, lamb, pork.'
        ,'https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg?w=900&fm=jpg&fl=progressive',
        "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg?w=900&fm=jpg&fl=progressive"
        ),
        new Category('5','Seafood','Great place to buy fresh seafood.'
        ,'https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg',
        "https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg"
        ),
        new Category('6','Fruit & Veg','A variety of fresh fruits and vegetables.'
        ,'https://36iusc2tb88y2g492si2bqd1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/fruit-veg.jpg',
        "https://36iusc2tb88y2g492si2bqd1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/fruit-veg.jpg"
        )

    ];

    getCategory(){
        return this.category.slice();
    }

}

