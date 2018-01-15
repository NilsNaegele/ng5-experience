import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogService } from './../../shared/services/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  blogs;


  constructor(private blogService: BlogService) { }

  onSend(form: NgForm) {
    const date = form.value.date;
    const title = form.value.title;
    const firstParagraph = form.value.firstParagraph;
    const leadQuestion = form.value.leadQuestion;
    const secondParagraph = form.value.secondParagraph;
    const imagePath = form.value.imagePath;
    const thirdParagraph = form.value.thirdParagraph;
    this.blogService.postBlog(date, title, firstParagraph, leadQuestion,
                              secondParagraph, imagePath, thirdParagraph);
  }

  ngOnInit() {

  }

}
