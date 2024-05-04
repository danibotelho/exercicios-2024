import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumoComponent } from './components/content/resumo/resumo.component';
import { CardComponent } from './components/content/card/card.component';
import { AppComponent } from './app.component';
import { BoxContentComponent } from './components/content/box-content/box-content.component';
import { CriarTopicoComponent } from './components/content/criar-topico/criar-topico.component';
import { FormTopicoComponent } from './components/content/form-topico/form-topico.component';
import { CardRespostaComponent } from './components/content/card-resposta/card-resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    BoxContentComponent,
    ResumoComponent,
    FormTopicoComponent,
    CardComponent,
    CardRespostaComponent,
    CriarTopicoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
