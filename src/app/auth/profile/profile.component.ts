import {Component,  OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  singleDoc: Observable<any>;
  constructor(private firestore: AngularFirestore,
              private actRoute: ActivatedRoute,
              ) {}
  id = this.actRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {

    // this.items = this.firestore
    //   .collectionGroup('users')
    //   .valueChanges();

    this.crazinessToObserveASingleDoc();
    }

  crazinessToObserveASingleDoc() {
   // const id = this.actRoute.snapshot.paramMap.get('id');
    this.singleDoc = this.firestore.collection('users', ref => ref.where('uid', '==', this.id)).valueChanges().pipe(
      tap(docs => console.log('docs', docs)),
      map(val => val.length > 0 ? val[0] : null)
    );
  }
  }

