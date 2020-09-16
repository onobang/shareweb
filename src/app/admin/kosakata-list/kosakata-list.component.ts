import { Component, OnInit } from '@angular/core';
import { KosakataService } from '../shared/kosakata.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-kosakata-list',
  templateUrl: './kosakata-list.component.html',
  styleUrls: ['./kosakata-list.component.scss']
})
export class KosakataListComponent implements OnInit {
  kosakatas: any;
  currentKosakata = null;
  currentIndex = -1;
  title = '';

  constructor(private kosakataService: KosakataService) { }

  ngOnInit(): void {
    this.retrieveKosakatas();
  }

  refreshList(): void {
    this.currentKosakata = null;
    this.currentIndex = -1;
    this.retrieveKosakatas();
  }

  retrieveKosakatas(): void {
    this.kosakataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kosakatas = data;
    });
  }

  setActiveKosakata(kosakata, index): void {
    this.currentKosakata = kosakata;
    this.currentIndex = index;
  }

  removeAllKosakatas(): void {
    this.kosakataService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
