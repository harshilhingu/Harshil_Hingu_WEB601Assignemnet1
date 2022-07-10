import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { DetailcardComponent } from './detailcard/detailcard.component';
import { DetailedcontentComponent } from './detailedcontent/detailedcontent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    DetailcardComponent,
    DetailedcontentComponent,
    PagenotfoundComponent,
    SearchcontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }