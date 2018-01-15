import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../shared/services/blog.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', './blog-mobile.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Observable<any[]>;
  loveImagePath: string;

  constructor(private blogService: BlogService) {
    // this.loveImagePath = '../../../assets/images/unconditionallove.jpg';
  }

  ngOnInit() {
    this.blogs = this.blogService.getAllBlogs();
  }

}
