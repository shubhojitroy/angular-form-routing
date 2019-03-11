import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fr-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  pageTitle = 'Something is wrong!';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    // this.router.navigate(['/home']);
    window.history.back();
  }

}
