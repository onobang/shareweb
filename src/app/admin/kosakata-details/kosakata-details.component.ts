import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { KosakataService } from '../shared/kosakata.service';
import Kosakata from '../shared/kosakata';
@Component({
  selector: 'app-kosakata-details',
  templateUrl: './kosakata-details.component.html',
  styleUrls: ['./kosakata-details.component.scss']
})
export class KosakataDetailsComponent implements OnInit, OnChanges {

  @Input() kosakata: Kosakata;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentKosakata: Kosakata = null;
  message = '';

  constructor(private kosakataService: KosakataService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentKosakata = { ...this.kosakata };
  }

  updatePublished(status): void {
    this.kosakataService.update(this.currentKosakata.key, { published: status })
      .then(() => {
        this.currentKosakata.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
  }

  updateKosakata(): void {
    const data = {
      title: this.currentKosakata.title,
      description: this.currentKosakata.description
    };

    this.kosakataService.update(this.currentKosakata.key, data)
      .then(() => this.message = 'The kosakata was updated successfully!')
      .catch(err => console.log(err));
  }

  deleteKosakata(): void {
    this.kosakataService.delete(this.currentKosakata.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The kosakata was updated successfully!';
      })
      .catch(err => console.log(err));
  }
}
