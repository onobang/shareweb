import { Component, OnInit } from '@angular/core';
import { KosakataService } from '../shared/kosakata.service';
import Kosakata from '../shared/kosakata';

@Component({
  selector: 'app-add-kosakata',
  templateUrl: './add-kosakata.component.html',
  styleUrls: ['./add-kosakata.component.scss']
})
export class AddKosakataComponent implements OnInit {


  kosakata: Kosakata = new Kosakata();
  submitted = false;

  constructor(private kosakataService: KosakataService) { }

  ngOnInit(): void {
  }

  saveKosakata(): void {
    this.kosakataService.create(this.kosakata).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newKosakata(): void {
    this.submitted = false;
    this.kosakata = new Kosakata();
  }
}
