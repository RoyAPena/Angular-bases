import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  public onDeleteChacter(id?: string): void {

    if ( !id ) return;

    this.onDeleteId.emit(id);
  }
}
