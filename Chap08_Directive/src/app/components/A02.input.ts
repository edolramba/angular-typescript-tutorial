import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="panel panel-default">
            <div class="panel panel-heading">
                <h3>Directive Input</h3>
            </div>

            <div class="panel panel-body">
                <div a02OneDir>A02 One Directive</div>
                <div a02OneDir="Hong">A02 One Directive</div>
                <div a02OneDir="name">A02 One Directive</div>
                <div a02OneDir="{{name}}">A02 One Directive</div>
                <!--
                이건 오류난다.
                <div [a02OneDir]="Hong">A02 One Directive</div>
                -->
                <div [a02OneDir]="name">A02 One Directive</div>
            </div>

            <div class="panel panel-body">
                <div [a02TwoDir]="title">TWO</div>
                <div [a02TwoDir]="'A02 Two Directive'">TWO</div>
                <div a02TwoDir="A02 Two Directive">TWO</div>

                <div [a02TwoDir]="title" [name]="'NulBu'" [age]="'20'">TWO</div>
            </div>
        </div>
    `
})
export class A02Component {
    private name: string = 'HongGilDong';
    private title: string = 'A02 Two Directive';

}