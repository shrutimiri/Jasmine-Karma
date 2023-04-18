import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement, inject } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FileSizePipe } from '../file-size.pipe';
import { StudentService } from '../student.service';
import { Pipe, PipeTransform } from '@angular/core';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let service : StudentService;

  let upperPipe:UpperCasePipe;
  let lowerPipe:LowerCasePipe;
  let pipe : FileSizePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, FileSizePipe ],
      providers:[StudentService],
      imports:[AppRoutingModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(StudentService);

    upperPipe = new UpperCasePipe();
    lowerPipe = new LowerCasePipe();
    pipe = new FileSizePipe();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit(' *ngIf => Test case for num is greater than 20',()=>{
    const element:HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#div1");
    const element2:HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#div2");

    expect(element).not.toBeNull();
    expect(element2).toBeNull();
  });

  xit(' *ngIf => Test case for num is greater than 20 - ngTemplate',()=>{
    const element:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ng1");
    const element2:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ng2");

    expect(element).not.toBeNull();
    expect(element2).toBeNull();
  });

  xit(' *ngIf => Test case for num is less than 20',()=>{
    component.num = 15;
    fixture.detectChanges();

    const element:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ng1");
    const element2:HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ng2");

    expect(element).toBeNull();
    expect(element2).not.toBeNull();
  });

  xit('*ngSwitch test case',()=>{
    const element:HTMLDivElement= fixture.debugElement.nativeElement.querySelector("#div1");
    expect(element.childElementCount).toEqual(1);
    expect(element.children.length).toEqual(1);
    expect(element.children[0].innerHTML).toEqual("One is Selected")
  });

  xit('*ngSwitch test case - 2',()=>{
    const element:HTMLDivElement= fixture.debugElement.nativeElement.querySelector("#div1");

    component.selectedNum = "Two";
    fixture.detectChanges();

    expect(element.childElementCount).toEqual(1);
    expect(element.children.length).toEqual(1);
    expect(element.children[0].innerHTML).toEqual("Two is Selected")
  });

  xit('*ngFor1=> simple array',()=>{
    const element:DebugElement[]=fixture.debugElement.queryAll(By.css(".ngFor1"));
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement, index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.ColorNames[index]);
    })
  });

  xit('*ngFor2=> simple array',()=>{
    const element:DebugElement[]=fixture.debugElement.queryAll(By.css(".ngFor2"));
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement, index:number)=>{
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(component.ColorsList[index].name + ' - ' + component.ColorsList[index].id);
    })
  });

  xit('*ngFor3=> simple array',()=>{
    const element:DebugElement[]=fixture.debugElement.queryAll(By.css(".ngFor3"));
    expect(element.length).toEqual(4);

    element.forEach((obj:DebugElement, index:number)=>{
      const output = `${index}-${index ===0 ? true :false}-${element.length-1 === index ? true : false}-${index % 2 === 0 }-${index % 2 !==0}`
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(output);
    })
  });

  xit('Dependency Injection Test case using Testbed get method',()=>{
    expect(service instanceof(StudentService)).toBeTruthy();
  });

//  it('Dependency Injection Test case using inject  method', inject([StudentService],(instanceService:StudentService))=>{
//   expect(instanceService).toBeTruthy();
//   expect(instanceService instanceof(StudentService)).toBeTruthy();
//  }))

xit(' In Built => Upper Pipe',()=>{
  expect(upperPipe.transform(component.title)).toEqual("THE DOTNET OFFICE");
});

xit(' In Built => Lower Pipe',()=>{
  expect(lowerPipe.transform(component.title)).toEqual("the dotnet office");
});

xit('Custom Pipe without argument',()=>{
  expect(pipe.transform(component.size)).toEqual("File size is -1.91MB ")
});

xit('Custom Pipe with argument',()=>{
  expect(pipe.transform(component.size , "GB")).toEqual("File size is -1.91GB")
});



});
