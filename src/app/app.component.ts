import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from './personne';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { MatCalendar, MatCalendarCellCssClasses, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


export interface Food {
  value: string;
  viewValue: string;
}

export interface Condiment {
  value: string;
  name: string;
  viewValue: string;
}

export class Model {
  value: string;
  viewValue: string;
  pref: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const tableArr: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  data: PeriodicElement[];


  

  @ViewChild('calendar') calendar: MatCalendar<Date>;
  selectedDate: Date;

  selectCondiment: Condiment[];
  selectedFood: Food;

  title = 'angStorm';
  model = new Model();
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  accompagnementsInit: Condiment[] = [
    { value: 'steak-0', name: 'salade', viewValue: 'salade' },
    { value: 'pizza-1', name: 'pomme de terre', viewValue: 'pomme de terre' },
    { value: 'tacos-2', name: 'riz', viewValue: 'riz' },
    { value: 'steak-0', name: 'rizotto', viewValue: 'rizotto' },
    { value: 'pizza-1', name: 'haricots verts', viewValue: 'haricots verts' },
    { value: 'tacos-2', name: 'pattes', viewValue: 'pattes' }
  ];
  accompagnements: Condiment[];
  businessUnit: Array<string> = [
    'Rina', 'Amsterdam', 'Allauch'
  ];
  reportType: Array<string> = [
    'complet', 'partiel'
  ];

  tableau_personne = new Array<Personne>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = tableArr;
    this.accompagnements = this.accompagnementsInit;
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      if (date.getDate() === 1) {
        return 'special-date';
      } else {
        return;
      }
    };
  }

  onSelect(event) {
    this.selectedDate = event;
  }


  proposeCondiment(event) {
    this.accompagnements = this.accompagnementsInit;
    this.selectedFood = null;
    this.selectedFood = event.source.value;
    console.log(this.selectedFood);
    this.pickCorespondingCondiment(this.selectedFood);
  }

  pickCorespondingCondiment(current_food: Food) {
    this.accompagnements = this.accompagnements.filter(x => x.value === current_food.value);
    for (const condi of this.accompagnements) {
      console.log(condi.viewValue);
    }

  }
  chooseCondiment(event) {
    this.selectCondiment = event.source.value;
    console.log(this.selectCondiment);
  }

  generateReport(form: NgForm) {
    const value = form.value;
    const startDate = value.startDate;
    const endDate = value.endDate;
    console.log(form);
    // console.log(startDate + '  ' + endDate);
  }

  generateReport2(form: NgForm) {
    const value = form.value;
    const startDate2 = value.startDate2;
    const endDate2 = value.endDate2;
    const preference = value.preference;
    console.log(form);
    // console.log( preference);
  }
}



