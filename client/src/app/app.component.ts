import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './shared/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private store: StoreService, private router: Router) {}
  ngOnInit(): void {

  }
}
