import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PessoasComponent } from './Home/Pessoas/pessoas.component';
import { LoginComponent } from './Home/Login/login/login.component';
import { PrimeiroAcessoComponent } from './Home/Login/primeiro-acesso/primeiro-acesso.component';
import { EsqueceuSenhaComponent } from './Home/Login/esqueceu-senha/esqueceu-senha.component';
import { DashboardComponent } from './Home/Dashboard/dashboard/dashboard.component';
import { NovoProjetoComponent } from './Home/Projetos/actions/novo-projeto/novo-projeto.component';
import { FechamentoProjetoComponent } from './Home/Projetos/actions/fechamento-projeto/fechamento-projeto.component';
import { AnexosComponent } from './Home/Projetos/actions/novo-projeto/actions/anexos/anexos.component';
import { EsforcoProjetoComponent } from './Home/Projetos/actions/esforco-projeto/esforco-projeto.component';
import { AtribuicaoEquipeComponent } from './Home/Projetos/actions/novo-projeto/actions/atribuicao-equipe/atribuicao-equipe.component';
import { NovaChangeComponent } from './Home/Projetos/actions/nova-change/nova-change.component';
import { CadastroPessoasComponent } from './Home/Pessoas/actions/cadastro-pessoas/cadastro-pessoas.component';
import { ProjetosComponent } from './Home/Projetos/projetos.component';
import { DadosPrincipaisComponent } from './Home/Projetos/actions/novo-projeto/actions/dados-principais/dados-principais.component';
import { AddTelephoneComponent } from './shared/add-telephone/add-telephone.component';
import { AppRoutingModule } from './app-routing.module';
import { ModelosComponent } from './shared/modelos/modelos.component';
import { TemplateComponent } from './template/template.component';
import { EmpresaComponent } from './Home/Empresa/empresa.component';

import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { UploadComponent } from './shared/upload/upload.component';
// import { InputComponent } from './shared/input/input.component';
import { DateFormatPipe } from './shared/util/date-format-pipe';
import { DateTimeFormatPipe } from './shared/util/datetime-format-pipe';
import { ChangesComponent } from './Home/Projetos/actions/changes/changes.component';
import { NovoEsforcoProjetoComponent } from './Home/Projetos/actions/novo-esforco-projeto/novo-esforco-projeto.component';
import { MapaSiteComponent } from './Home/mapa-site/mapa-site.component';
import { EmpresaService } from './_services/empresa-service.service';
import { ProjetoService } from './_services/projeto.service';
import { NovaEmpresaComponent } from './Home/Empresa/nova-empresa/nova-empresa.component';






@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    LoginComponent,
    PrimeiroAcessoComponent,
    EsqueceuSenhaComponent,
    DashboardComponent,
    NovoProjetoComponent,
    FechamentoProjetoComponent,
    AnexosComponent,
    EsforcoProjetoComponent,
    AtribuicaoEquipeComponent,
    NovaChangeComponent,
    CadastroPessoasComponent,
    ProjetosComponent,
    DadosPrincipaisComponent,
    AddTelephoneComponent,
    ModelosComponent,
    TemplateComponent,
    EmpresaComponent,
    AnexosComponent,
    UploadComponent,
    // InputComponent,
    DateFormatPipe,
    DateTimeFormatPipe,
    ChangesComponent,
    NovoEsforcoProjetoComponent,
    MapaSiteComponent,
    NovaEmpresaComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    FormsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [
    ProjetoService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
