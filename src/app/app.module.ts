import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecutableFilesTableComponent } from './executable-files-table/executable-files-table.component';
import { DynamicTableComponent } from './shared/components/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ExecutableFilesTableComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
