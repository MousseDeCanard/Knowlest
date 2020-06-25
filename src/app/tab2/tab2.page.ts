import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {

 

items = [];

constructor() { }

isItemAvailable = false;

initializeItems(){
    this.items = ['Accrobranche',
        'Athl�tisme',
        'Badminton',
        'Baseball',
        'Basketball',
        'Bowling',
        'Boxe',
        'Cano� Kayak',
        'Danse',
        'Equitation',
        'Escalade',
        'Escrime',
        'Foot � 5',
        'Football',
        'Football Am�ricain',
        'Golf',
        'Gymnastique',
        'Handball',
        'Handisport',
        'Hockey',
        'Jogging',
        'Judo',
        'Karat�',
        'Karting',
        'LaserQuest',
        'Lutte',
        'MMA',
        'Moto',
        'Musculation',
        'Natation',
        'Paintball',
        'Patinage',
        'Ping-Pong',
        'Plong�e',
        'P�che',
        'Randonn�e P�destre',
        'Rugby',
        'Skate',
        'Sports d hiver',
        'Sports Nautique',
        'Squash',
        'Street Workout',
        'Tennis',
        'Triathlon',
        'Trottinette',
        'Volleyball',
        'Yoga',
        'Biographies/autobiographies classiques',
        'Biographies/autobiographies modernes',
        'Business',
        'Fables classiques',
        'Litt�rature �trang�re: Afrique',
        'Litt�rature �trang�re: Am�rique du Nord',
        'Litt�rature �trang�re: Am�rique du Sud',
        'Litt�rature �trang�re: Asie',
        'Litt�rature �trang�re: Europe',
        'Litt�rature �trang�re: Oc�anie',
        'Merveilleux/fantastique classiques',
        'Nouvelles classiques',
        'Po�sies classiques',
        'Po�sies modernes',
        'Romans classiques',
        'Romans courtois classiques',
        'Romans modernes aventures',
        'Romans modernes policiers',
        'Romans modernes science-fiction',
        'Th��tres classiques',
        'Th��tres modernes',
        'Echanges �pistolaires classiques',
        'Africain',
        'Americain',
        'Asiatique',
        'Bistro',
        'Brunch',
        'Burger',
        'Europ�en',
        'Fast Food',
        'Grillade',
        'Healthy',
        'Indien',
        'Italien',
        'Latino',
        'Moderne',
        'Moyent-Orient',
        'M�diterran�en',
        'Poisson',
        'Restaurant Etoil�',
        'Sushi',
        'Tacos',
        'Vegan',
        'Viande',
        'Arch�ologie',
        'Art',
        'Arts d�coratifs',
        'Beaux Arts',
        'Ethnologie',
        'Histoire',
        'Histoire naturelle',
        'Sciences',
        'Techniques'];
}

getItems(ev: any){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    } else {
        this.isItemAvailable = false;
    }
}
cons(item){
    console.log(item);
}

}