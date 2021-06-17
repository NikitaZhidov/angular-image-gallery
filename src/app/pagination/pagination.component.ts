import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() onSelectPrevPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelectNextPage: EventEmitter<void> = new EventEmitter<void>();

  @Input() hasPrevPage: boolean = false;
  @Input() hasNextPage: boolean = false;

  @Input() currentPage: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  selectPrevPage(): void {
    this.onSelectPrevPage.emit()
  }

  selectNextPage(): void {
    this.onSelectNextPage.emit();
  }
}
