import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private service:TranslateService){}
  switchLanguage(event:any){
    this.service.use(event.target.value || "en")
  }
  title = 'Translations';
}
