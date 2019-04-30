import { Component, OnInit } from '@angular/core';
import { Collab} from '../collab';

@Component({
  selector: 'app-collabs',
  templateUrl: './collabs.component.html',
  styleUrls: ['./collabs.component.css']
})
export class CollabsComponent implements OnInit {
  collab: Collab = {
    matricule : '00001',
    name : 'Char AZNABLE'
  };

  constructor() { }

  ngOnInit() {
  }

}
