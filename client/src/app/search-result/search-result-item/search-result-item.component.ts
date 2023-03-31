import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {

  @Input() searchResultItem: any;
  @Input() lastItem: boolean | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openBookDetail(searchResultItem:any){
    this.router.navigateByUrl("/bookdetail/"+searchResultItem._id);
    localStorage.setItem("book_detail",searchResultItem);
  }

}
