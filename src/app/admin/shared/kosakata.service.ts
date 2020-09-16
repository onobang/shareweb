import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Kosakata from './kosakata';

@Injectable({
  providedIn: 'root'
})
export class KosakataService {

  private dbPath = '/kosakata';

  kosakatasRef: AngularFireList<Kosakata> = null;

  constructor(private db: AngularFireDatabase) {
    this.kosakatasRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Kosakata> {
    return this.kosakatasRef;
  }

  create(kosakata: Kosakata): any {
    return this.kosakatasRef.push(kosakata);
  }

  update(key: string, value: any): Promise<void> {
    return this.kosakatasRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.kosakatasRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.kosakatasRef.remove();
  }
}
