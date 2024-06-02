import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modelID: string = '';
  
  constructor(public _modalService: ModalService) {}
  
  public closeModal($event: MouseEvent) {
    this._modalService.toggleModal(this.modelID);
  }
}
