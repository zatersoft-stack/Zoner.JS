import { defineModule } from '../zoner';
import { AppComponent } from './app.component';

export const AppModule = defineModule({
  bootstrap: AppComponent,
  declarations: [AppComponent],
  providers: []
});
