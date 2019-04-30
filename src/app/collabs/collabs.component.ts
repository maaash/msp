import { Component, OnInit } from '@angular/core';
import { Collab } from '../collab';
import { COLLABS } from '../mock-collabs';

@Component({
  selector: 'app-collabs',
  templateUrl: './collabs.component.html',
  styleUrls: ['./collabs.component.css']
})
export class CollabsComponent implements OnInit {

  collabs = COLLABS;
  selectedCollab: Collab;

  constructor() { }

  collab: Collab = {
    matricule: '0000000002',
    nom: 'Char AZNABLE',
    sexe: 'Homme'
  };

  ngOnInit() {
  }

  onSelect(collab: Collab): void {
    this.selectedCollab = collab;
  }

}
