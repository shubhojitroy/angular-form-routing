import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Feature components */
import { ProductsModule } from './products/products.module';
import { UserModule } from './users/user.module';
import { MessagesModule } from './messages/messages.module';
import { HomeModule } from './home/home.module';

/* Child components (directives)*/
import { HeaderComponent } from './includes/header.component';
import { FooterComponent } from './includes/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    UserModule,
    MessagesModule,
    HomeModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
