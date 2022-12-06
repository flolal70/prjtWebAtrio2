import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  progress: number[];
  error: string = '';

  constructor(private router: Router) {
    this.progress = [45, 20];
   }

  ngOnInit(): void {
  }



  onSetZero() {
    this.progress.forEach(element => {
      element = 0;
    });
    this.error = 'Peut-être mettre un observable pour transmettre progress au composant ?';
  }

  onAddFive() {
    this.progress.forEach(element => {
      element += 5;
    });
    this.router.navigateByUrl(`progress`);
    this.error = 'Peut-être mettre un observable pour transmettre progress au composant ?';
  }

  onAddTen() {
    this.progress.forEach(element => {
      element += 10;
    });
    this.router.navigateByUrl(`progress`);
    this.error = 'Peut-être mettre un observable pour transmettre progress au composant ?';
  }
}
