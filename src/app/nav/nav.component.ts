import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public _modalService: ModalService) {
  }
  
  public openModal($event: Event) {
    $event.preventDefault();
    this._modalService.toggleModal('auth');
  }
}
