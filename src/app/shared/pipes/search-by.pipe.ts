import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from './../models/blog';

@Pipe({
  name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {
  transform(blogs: Array<Blog>, term: string): Blog[] {
    if (term === undefined) {
      return blogs;
    } else {
      return blogs.filter(blog => {
        return blog.title.toLowerCase().includes(term.toLowerCase());
      });
    }
  }

}
