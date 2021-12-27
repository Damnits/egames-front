import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}


  ngOnInit(): void {
  }

}
