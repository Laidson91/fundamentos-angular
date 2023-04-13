import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
nome = "Laidson";
dataNascimento = "1991-01-01";
urlImagem = "/assets/111.jpg";

mostrarDataNascimento() {
  alert(`A data de nascimento do Laidson é: ${this.dataNascimento}`);
}
}
