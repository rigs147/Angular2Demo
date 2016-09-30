import {Component} from '@angular/core';

import { ContextMenuComponent, ContextMenuService } from 'angular2-contextmenu';

@Component({
    selector: 'my-context-menu',
    templateUrl: 'app/context-menu/context-menu.html',
    styleUrls: ['app/context-menu/context-menu.css']
})
export class MyContextMenuComponent {

  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }];


  //@Injectable()
  constructor(private contextMenuService: ContextMenuService) {}

  onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({ event: $event, item: item });
    $event.preventDefault();
  }
};
