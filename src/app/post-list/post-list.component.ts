import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SeoService } from '../shared/services/seo.service';
import { BASE_URL } from '../shared/constants';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  title: string;

  constructor(private seo: SeoService,
              private location: Location) { }

  ngOnInit() {
    this.title = 'Page title';
    
    const tags = [{
      name: 'description',
      content: 'A description of the page'
    },{
      name: 'og:title',
      content: this.title
    },{
      name: 'og:description',
      content: 'A description of the page'
    },{
      name: 'og:image',
      content: 'image_url'
    },{
      name: 'og:url',
      content: BASE_URL + this.location.prepareExternalUrl(this.location.path())
    }];
    
    this.seo.addTags(tags);
    
    this.seo.setTitle(this.title);
  }

}
