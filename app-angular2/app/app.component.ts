import { Component } from '@angular/core';

import {MeuPrimeiroComponent} from './primeiro/meu-primeiro.component'
import {CursosComponent} from './cursos/cursos.component'

@Component({
    selector: 'my-app',
    template: `
<div class="row">
<div class="col-md-1"></div>
    <div class="col-md-10">
        <div class="jumbotron">
            <h2 class="title">App Angular 2</h2>
            <p>Aplicação de Exemplo para Estudo</p>
        </div>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    </div>
    <div class="col-md-1"></div>
</div>
    `,
    directives: [MeuPrimeiroComponent,CursosComponent]

})
export class AppComponent { }
