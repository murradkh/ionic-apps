import { Component } from "@angular/core";
import {FavirotepagePage} from '../favirotepage/favirotepage';
import { LibraryPage} from '../library/library';
@Component({
templateUrl:'tabs.html'
})

export class tabspage{
 public   favoritesPage=FavirotepagePage;
 public   libraryPage=LibraryPage;

    
}