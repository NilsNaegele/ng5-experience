import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';

import { ProjectComponent } from './project-overview/project/project.component';
import { Ng5MaterialComponent } from './project-overview/ng5-material/ng5-material.component';
import { Ng4BooksComponent } from './project-overview/ng4-books/ng4-books.component';
import { Ng5TalkToMeComponent } from './project-overview/ng5-talk-to-me/ng5-talk-to-me.component';
import { Ng5ShareComponent } from './project-overview/ng5-share/ng5-share.component';
import { Ng5QuizComponent } from './project-overview/ng5-quiz/ng5-quiz.component';

import { BlogComponent } from './blog-overview/blog/blog.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogCreateComponent } from './blog-overview/blog-create/blog-create.component';

import { BookComponent } from './book-overview/book/book.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';

import { AuthGuardService } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },

  // login
  { path: 'login', component: LoginComponent },

  // projects
  { path: 'projects/project-a', component: ProjectComponent },
  { path: 'projects/ng5-material', component: Ng5MaterialComponent },
  { path: 'projects/ng4-books', component: Ng4BooksComponent },
  { path: 'projects/ng5-talk-to-me', component: Ng5TalkToMeComponent },
  { path: 'projects/ng5-machine-learning', component: Ng5ShareComponent },
  { path: 'projects/ng5-quiz', component: Ng5QuizComponent },

  // blog overview
  { path: 'blogs', component: BlogOverviewComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'blog-create', component: BlogCreateComponent, canActivate: [AuthGuardService] },

  // books
  { path: 'books', component: BookOverviewComponent },
  { path: 'book/:id', component: BookComponent },

  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
