import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VetModule } from './vet.module';


platformBrowserDynamic().bootstrapModule(VetModule)
  .catch(err => console.error(err));
