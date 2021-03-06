import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatMenuModule,
         MatInputModule,
         MatFormFieldModule,
         MatSnackBarModule,
         MatToolbarModule,
         MatDialogModule,
         MatSidenavModule,
         MatNativeDateModule,
         MatProgressBarModule,
         MatCardModule,
         MatTabsModule,
         MatSlideToggleModule,
         MatTooltipModule,
         MatTableModule,
         MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }

