import { Component, Input } from '@angular/core';


@Component({
  selector: 'cnode-view',
  templateUrl: 'cnode-view.html'
})
export class CnodeViewComponent {
  @Input('data') data;

  constructor() {}

  ngOnInit() {
  }


}
