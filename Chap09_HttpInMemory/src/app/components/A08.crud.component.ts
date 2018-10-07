import { Person } from './../resources/data/personData';
import { PersonService } from './../service/person.service';
import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'a08Component',
    template: `
        <div class="panel-heading">
            <h3>HTTP CRUD</h3>
        </div>

        <div class="panel-body">
            Name: <input type="text" class="form-control" [(ngModel)]="person.name"><br>
            Age: <input type="number" class="form-control" [(ngModel)]="person.age"><br>
            Address: <input type="text" class="form-control" [(ngModel)]="person.address"><br>

            <button class="btn btn-primary" (click)="onPost()">ADD</button>
            <button class="btn btn-primary" (click)="onModify()">MODIFY</button>
        </div>

        <div class="panel-body">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>MODIFY</th>
                    <th>DELETE</th>
                </tr>
                <tr *ngFor="let item of persons">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.address}}</td>
                    <td>
                        <a (click)="onView(item)">수정</a>
                    </td>
                    <td>
                        <a (click)="onDelete(item)">삭제</a>
                    </td>
                </tr>
            </table>
        </div>
    `,
    providers: [ PersonService ]
})
export class A08Component  { 
    
    private persons: string[];
    private person: Person;

    constructor(private http: PersonService){
        this.person = new Person();
    }

    ngOnInit() {
        this.http.getPerson()
            .subscribe(
                (data: string[]) => {
                    this.persons = data;
                }
            )
    }

    private onGet(): void{
        this.http.getPerson()
        .subscribe(
            (data: string[]) => {
                this.persons = data;
            }
        )
    }

    private onPost(): void{
        if(!this.person.name) return;

        this.http.addPerson(this.person)
            .subscribe(
                (data: Person) => {
                    console.log(data)
                }
            )

        // Form 필드의 값을 삭제
        this.person.name = '';
        this.person.age = null;
        this.person.address = '';

        // 입력된 리스트를 다시 호출하여 화면에 표시
        this.onGet();
    }

    // 각 필드에 수정 버튼을 클릭하면 form에 정보 표시
    private onView(item: Person): void{
        this.person.id = item.id;
        this.person.name = item.name;
        this.person.age = item.age;
        this.person.address = item.address;
    }

    // 수정
    private onModify(): void{
        this.http.modifyPerson(this.person)
            .subscribe(
                (data: Person) => {
                    console.log('Modify=> ' + data);      // 돌려주는 값 없음
                }
            )

        // Form 필드의 값을 삭제
        this.person.name = '';
        this.person.age = null;
        this.person.address = '';

        // 입력된 리스트를 다시 호출하여 화면에 표시
        this.onGet();
    }


    // 삭제. 전달 된 값을 받아 전달
    private onDelete(person: Person): void{
        this.http.deletePerson(person)
            .subscribe(
                (data: Person) => {
                    console.log('Delete=> ' + data);      // 돌려주는 값 없음
                }
            )

        this.onGet();
    }
}