import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({providedIn:'root'})
export class ProductService{
    private product:Product[]=[
        new Product('1','1','Baguette/French Bread',150,false,'https://www.bakingmad.com/BakingMad/media/content/Recipes/Bread-Dough/French-baguettes/1-French-Baguettes.jpg',
        'Great eaten fresh from oven. Used to make sub sandwiches, etc.'
        ),
        new Product('2','1','Croissants',300,false,'https://sarahsvegankitchen.com/wp-content/uploads/2020/05/croissants-23-min.jpg',
        'A croissant is a buttery, flaky, viennoiserie-pastry named for its well-known crescent shape.'
        ),
        new Product('3','2','Pizza',500,false,'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80',
        'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.'
        ),
        new Product('4','3','Milk',55,false,'https://www.reversefactor.in/blogs/73getty-854296650.jpg',
        'Milk is a pale liquid produced by the mammary glands of mammals'
        ),
        new Product('5','3','Cream Cheese',110,false,'https://bakingamoment.com/wp-content/uploads/2019/03/IMG_3383-best-way-to-make-cream-cheese-frosting.jpg',
        'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.'
        ),
        new Product('6','4','Pork Tenderloin',250,false,'https://www.cookingclassy.com/wp-content/uploads/2013/01/Island-Pork-Tenderloin-4-500x375.jpg',
        'The pork tenderloin, in some countries called pork fillet, is a cut of pork. '
        ),
        new Product('7','4','Ribs, Baby Back',330,false,'https://barbecuebible.com/wp-content/uploads/2019/09/featured-baby-back-ribs-with-guava-barbecue-sauce-1024x640.jpg',
        'Pork ribs are a cut of pork popular in North American and Asian cuisines. '
        ),
        new Product('8','4','Ground Beef',230,false,'https://embed.widencdn.net/img/beef/4hh1pywcnj/800x600px/Grind_Fine_85.psd?keep=c&u=7fueml',
        'Ground beef, beef mince, minced beef, minced meat is a ground meat made of beef that has been finely chopped with a large knife or a meat grinder.'
        ),
        new Product('9','5','Tuna',250,false,'https://www.goodfoodstories.com/wp-content/uploads/2014/04/tuna-salad-1-Photograph-%C2%A9-Good-Food-Stories-LLC-720x540.jpg',
        'A tuna is a saltwater finfish that belongs to the tribe Thunnini, a sub-grouping of the mackerel family – which together with the tunas, also includes the bonitos, ackerels, and Spanish mackerels.'
        ),
        new Product('10','5','Salmon',300,false,'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/FNK_PAN-FRIED-SALMON-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558115714985.jpeg',
        'Salmon is the common name for several species of ray-finned fish in the family Salmonidae.'
        ),
        new Product('11','5','Oysters',450,false,'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B800%2C600%5D&w=1600&h=838&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F06%2FChefs-Never-Buy-Frozen-oysters-FT-BLOG0519.jpg',
        'The word oyster is used as a common name for a number of different families of saltwater clams, bivalve molluscs that live in marine or brackish habitats.'
        ),
        new Product('12','5','Scalops',510,false,'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/4/0/KC1707_Seared-Diver-Scallops-with-Caper-Honey-Sauce_s4x3.jpg.rend.hgtvcom.826.620.suffix/1528138536237.jpeg',
        'Scallop is a common name that is primarily applied to any one of numerous species of saltwater clams or marine bivalve mollusks in the taxonomic family Pectinidae, the scallops.'
        ),
        new Product('13','6','Banana',30,false,'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
        'The banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.'
        ),
        new Product('14','6','Cucumber',50,false,'https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ.jpg',
        'Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. '
        ),
        new Product('15','6','Apple',70,false,'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        'The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple.'
        ),
        new Product('16','6','Lemon',50,false,'https://static.toiimg.com/photo/68215164.cms',
        'The lemon is a species of small evergreen tree native to Asia.'
        ),
        new Product('17','6','Pear',40,false,'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/pears-28f8900.jpg?quality=90&resize=960,872',
        'The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae.'
        ),

    ];

    getProducts(){
        return this.product.slice();
    }
}