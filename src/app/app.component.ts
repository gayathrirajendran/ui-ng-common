import { Component } from '@angular/core';
import { EntitlementService } from 'arsenal-ng-common-services/entitlements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-ng-common';

  constructor(public entl: EntitlementService) {
    console.log('User', this.entl.user);
  }

}
