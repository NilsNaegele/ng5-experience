import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

// projects
import { ProjectComponent } from './project-overview/project/project.component';
import { Ng5MaterialComponent } from './project-overview/ng5-material/ng5-material.component';
import { Ng4BooksComponent } from './project-overview/ng4-books/ng4-books.component';
import { Ng5TalkToMeComponent } from './project-overview/ng5-talk-to-me/ng5-talk-to-me.component';
import { Ng5ShareComponent } from './project-overview/ng5-share/ng5-share.component';
import { Ng5QuizComponent } from './project-overview/ng5-quiz/ng5-quiz.component';

// experience
// ...

// bog overview
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
// blog posts
import { BlogComponent } from './blog-overview/blog/blog.component';

import { MenuComponent } from './shared/layouts/menu/menu.component';
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectComponent,
    Ng5MaterialComponent,
    Ng4BooksComponent,
    Ng5TalkToMeComponent,
    Ng5ShareComponent,
    Ng5QuizComponent,
    BlogOverviewComponent,
    BlogComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
