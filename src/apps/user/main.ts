import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserModule } from './user.module';


platformBrowserDynamic().bootstrapModule(UserModule)
  .catch(err => console.error(err));
