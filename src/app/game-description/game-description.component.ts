import { Component, Input, OnInit, OnChanges } from '@angular/core'

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges{
  cardAction = [
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'You', description: 'Du bestimmst wer drinkt'},
    {title: 'Me', description: ' Du drinkst'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'},
    {title: 'Waterfall', description: ' Jeder fängt zur selben Zeit an Wasser zu drinken'}
  ];

  title = '';
  description = '';
  @Input() card: string;

  ngOnInit(): void {
  
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('Current card:', this.card);
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
