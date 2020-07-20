import { Component } from '@angular/core';
import { CrudService } from './shared/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form';

  name: string;
  email: string;
  cell: number;

  constructor(public router: Router, public crud: CrudService) {}

  /* Metodo para gravar dados no Angular Firestone */
  createRecorder() {
    const record = { nome: this.name, email: this.email, cell: this.cell };

    this.crud.createNewRecord(record).then((res) => {});
  }
}
