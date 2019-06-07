import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
