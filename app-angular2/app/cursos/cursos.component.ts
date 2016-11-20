import { Component } from '@angular/core';
@Component ({
    moduleId: module.id,
    selector: 'cursos-lista',
/*template:
`
<h4>{{tituloSessaoCursos}}</h4>
<ul class="list-group">
    <li class="list-group-item table-stripe" *ngFor="let curso of cursos">{{curso}}</li>
</ul>
`,*/
    templateUrl: 'cursos.component.tpl.html'
})
export class CursosComponent {
	tituloSessaoCursos = 'Segundo componente com crase usando array de listas:';

    cursos = ['Primeiro curso', 'Segundo Curso', 'Terceiro Curso', 'Quarto Curso', 'Quinto Curso', 'Sexto Curso', 'Sétimo Curso'];
}
