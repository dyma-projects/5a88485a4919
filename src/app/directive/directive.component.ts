import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Voiture } from '../shared/voiture.model';


@Component({
selector: 'app-directive',
templateUrl: './directive.component.html',
styleUrls: ['./directive.component.css'],
})
@NgModule({
// Ajout de FormsModule aux imports :
imports: [FormsModule ]
})

export class DirectiveComponent implements OnInit {
//exercice 1
public status : boolean = true;
//exercice bouton text
public texts : Array<{mot}> = [];
//exemple 1
public backgroundImage : string ="";
//exemple 2
public voitures : Voiture[] = [
new Voiture('Renault'),
new Voiture('Audi'),
new Voiture('Tesla'),
new Voiture('Peugeot')
];
public value: string ='';
//exemple 3
public color:string='';

changeColor(color:string): void{
this.color = color;
}

@Input() voiture : Voiture[];
constructor() {
this.texts.push({mot : 'un'});
this.texts.push({mot : 'deux'});
this.texts.push({mot : 'trois'});
}



ngOnInit() {
this.voiture;
  }
}