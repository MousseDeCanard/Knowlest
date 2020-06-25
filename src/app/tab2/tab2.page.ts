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
        'Athlétisme',
        'Badminton',
        'Baseball',
        'Basketball',
        'Bowling',
        'Boxe',
        'Canoé Kayak',
        'Danse',
        'Equitation',
        'Escalade',
        'Escrime',
        'Foot à 5',
        'Football',
        'Football Américain',
        'Golf',
        'Gymnastique',
        'Handball',
        'Handisport',
        'Hockey',
        'Jogging',
        'Judo',
        'Karaté',
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
        'Plongée',
        'Pêche',
        'Randonnée Pédestre',
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
        'Littérature étrangère: Afrique',
        'Littérature étrangère: Amérique du Nord',
        'Littérature étrangère: Amérique du Sud',
        'Littérature étrangère: Asie',
        'Littérature étrangère: Europe',
        'Littérature étrangère: Océanie',
        'Merveilleux/fantastique classiques',
        'Nouvelles classiques',
        'Poésies classiques',
        'Poésies modernes',
        'Romans classiques',
        'Romans courtois classiques',
        'Romans modernes aventures',
        'Romans modernes policiers',
        'Romans modernes science-fiction',
        'Théâtres classiques',
        'Théâtres modernes',
        'Echanges épistolaires classiques',
        'Africain',
        'Americain',
        'Asiatique',
        'Bistro',
        'Brunch',
        'Burger',
        'Européen',
        'Fast Food',
        'Grillade',
        'Healthy',
        'Indien',
        'Italien',
        'Latino',
        'Moderne',
        'Moyent-Orient',
        'Méditerranéen',
        'Poisson',
        'Restaurant Etoilé',
        'Sushi',
        'Tacos',
        'Vegan',
        'Viande',
        'Archéologie',
        'Art',
        'Arts décoratifs',
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