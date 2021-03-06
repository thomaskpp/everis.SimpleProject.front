import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AnexoService } from 'src/app/_services/anexo.service';
import { Anexo } from 'src/app/_models/anexo.model';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.css']
})

export class AnexosComponent implements OnInit {

  anexo = new Anexo();

  constructor(private formBuilder: FormBuilder, private anexoService: AnexoService) { }
  anexoForm: FormGroup;

  ngOnInit() {

  }

  Adicionar() {
    this.anexo.IdProjeto = 1;

    this.anexoService.Adicionar(this.anexo)
      .subscribe((data: any) => {
        switch (data.codigo) {
          case 200:
            window.alert('ok');
            break;
          default:
            window.alert('erro');
            break;
        }
      },
        error => {
          alert('Erro ao tentar adicionar.');
        });
  }
}
