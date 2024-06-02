import { Injectable } from '@angular/core';

interface IModalService {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: IModalService[] = [];
  
  
  constructor() { }

  public toggleModal(id: string): void {
    const modal = this.modals.find(el => el.id === id );
    
    if(modal) {
      modal.visible = !modal.visible;
    }
  }
  
  public isModalOpen(id: string): boolean {
    return !!this.modals.find(el => el.id === id )?.visible;
  }
  
  public register(id: string) {
      this.modals.push({
        id,
        visible: false,
      })
  }
  
  public unregister(id: string) {
    this.modals = this.modals.filter(el => el.id !== id);
  }
}
