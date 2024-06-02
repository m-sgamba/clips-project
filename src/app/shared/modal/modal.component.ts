import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @Input() modelID: string = '';
  
  constructor(
    public el: ElementRef,
    public _modalService: ModalService)
  {}
  
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  
  public closeModal($event: MouseEvent) {
    this._modalService.toggleModal(this.modelID);
  }
}
