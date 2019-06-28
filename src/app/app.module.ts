import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatNativeDateModule, MatTableModule, MatPaginatorModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { SearchDialogComponent } from './child-detail/search-dialog/search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildDetailComponent,
    SearchDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SearchDialogComponent,
  ],
})
export class AppModule { }
