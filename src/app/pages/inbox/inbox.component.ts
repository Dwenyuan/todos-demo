import { Component, OnInit } from '@angular/core';
import { Collect } from 'src/app/model/collect.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  constructor() {}
  list: Collect[] = [];
  ngOnInit() {}
}
