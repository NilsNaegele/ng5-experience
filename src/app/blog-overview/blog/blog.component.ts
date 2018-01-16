import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../shared/services/blog.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', './blog-mobile.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any[];

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id).subscribe(blog => this.blogs = blog);
  }

}
