import {Component,  OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  singleDoc: Observable<any>;
  constructor( private firestore: AngularFirestore,
               private actRoute: ActivatedRoute,
               public authService: AuthService,
  ) { }
  id = this.actRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {

    // this.items = this.firestore
    //   .collectionGroup('users')
    //   .valueChanges();

    this.crazinessToObserveASingleDoc();
  }

  crazinessToObserveASingleDoc(): void {
    // const id = this.actRoute.snapshot.paramMap.get('id');
    this.singleDoc = this.firestore.collection('users', ref => ref.where('uid', '==', this.id)).valueChanges().pipe(
      tap(docs => console.log('docs', docs)),
      map(val => val.length > 0 ? val[0] : null)
    );
  }
}

