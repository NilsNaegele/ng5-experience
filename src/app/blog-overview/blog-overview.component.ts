import { Component, OnInit } from '@angular/core';

import { BlogService } from './../shared/services/blog.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss', './blog-overview-mobile.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  blogs: Observable<any[]>;
  term = undefined;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getAllBlogs();
  }

}
