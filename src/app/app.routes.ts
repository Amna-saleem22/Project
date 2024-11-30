import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';



export const routes: Routes = [
  
   {
      path: 'Contact',
      component: ContactComponent
  },
  {
      path: 'product',
      component: ProductComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: '**',
      component: HeaderComponent
  }
];

