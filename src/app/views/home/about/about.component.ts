import {Component} from '@angular/core';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private modalService: NgbModal) {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const modalRef = this.modalService.open(PopupComponent, {});
    modalRef.componentInstance.data = 'About Component';

    // this.modalService.open(this.popup, {})
  }
}
