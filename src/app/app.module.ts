import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './rotas/admin/admin.module';
import { AjudaComponent } from './rotas/ajuda/ajuda.component';
import { CarrinhoComponent } from './rotas/carrinho/carrinho.component';
import { HomeComponent } from './rotas/home/home.component';
import { LojaComponent } from './rotas/loja/loja.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { CustomCurrencyMaskConfig } from './shared/constants/ngx-mask-config.const';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    LojaComponent,
    AjudaComponent,
    CarrinhoComponent,
    HeaderComponent,
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
