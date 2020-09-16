import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-veify-email',
  templateUrl: './veify-email.component.html',
  styleUrls: ['./veify-email.component.scss']
})
export class VeifyEmailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
