import { Component, OnInit } from '@angular/core';
import {EntitlementService} from 'arsenal-ng-common-services/entitlements';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public entl: EntitlementService
  ) { }

  ngOnInit(): void {
  }

}
