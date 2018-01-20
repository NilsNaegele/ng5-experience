import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MAT_DATE_LOCALE } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { MaterialModule } from './material/material.module';
import { AuthenticationModule } from './authentication/authentication.module';
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

import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogComponent } from './blog-overview/blog/blog.component';
import { BlogCreateComponent } from './blog-overview/blog-create/blog-create.component';

import { BookOverviewComponent } from './book-overview/book-overview.component';
import { BookComponent } from './book-overview/book/book.component';

import { MenuComponent } from './shared/layouts/menu/menu.component';
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';

import { SearchByPipe } from './shared/pipes/search-by.pipe';

import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { BlogService } from './shared/services/blog.service';
import { BookService } from './shared/services/book.service';

registerLocaleData(localeDe, 'de');


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
    BlogCreateComponent,
    BookOverviewComponent,
    BookComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    SearchByPipe
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [
              AuthenticationService, AuthGuardService,
              BlogService, BookService,
              { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
              { provide: LOCALE_ID, useValue: 'de'}
            ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
