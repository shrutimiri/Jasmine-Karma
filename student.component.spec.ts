import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { StudentService } from '../student.service';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  let appComponent : AppComponent;
  let appFixture : ComponentFixture<AppComponent>;

  let h1:HTMLElement;
  let deb:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent , AppComponent],
      providers:[StudentService],
      imports:[AppRoutingModule, HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;

    h1 = fixture.nativeElement.querySelector('h1');

    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('SpyOn method',()=>{
  //   spyOn(component,'calculate');
  //   component.saveData();
  //   expect(component.calculate).toHaveBeenCalled();
  // });

  // it('SpyOn method - 1',()=>{
  //   spyOn(component,'calculate').and.returnValues(40,20);
  //   let result = component.StudentResult();
  //   expect(result).toEqual("Pass");
  // });

  it('SpyOn method - 2',()=>{
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service,"SaveDetails").and.callFake(() =>{
      return of ({
        "result1":200
      })
    })
    component.saveData();
    expect(component.result).toEqual({
      "result1":200
    })

  });

  xit('Verify the h1 element value',()=>{
    component.StudentResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult)
  });

  xit('Increase count click',()=>{
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#btnincreaseNumber'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();

    expect(component.CountNumber).toEqual(parseInt(h1.nativeElement.innerText));
  });

  it('Call Private Method',()=>{
    component["ShowName"]();       // calling a private method
    expect(component["Name"]).toEqual("DotNet Office")
  });

  it('Call Private Method - 2',()=>{
    component["calculate"](10,20);       // calling a private method
    expect(component.sum).toEqual(30)
  });

  it('Spy Private Method',()=>{
    let spyName = spyOn<any>(component,'ShowName');   //We can use any to spy private method
    component["ShowName"]();
    expect(spyName).toHaveBeenCalled();   
  });

  it('Spy Private Method - 2',()=>{
    let spyMethod = spyOn<any>(component,'calculate');   //We can use any to spy private method
    component["calculate"](5,5);
    expect(spyMethod).toHaveBeenCalled();   
  });

  it('Unit test case for Input directive',async()=>{
    appComponent.myInputMessage = "Input Directive"
    appFixture.detectChanges();

    fixture.whenStable().then(()=>{
      let element =  appFixture.debugElement.nativeElement.querySelector("h3").innerText;

      expect(element).toEqual("child component - Input Directive")
    })
  });

  it('Unit tets case for Output directive', async()=>{
   // component.sendValues();
    fixture.detectChanges();

    appFixture.whenStable().then(()=>{
      component.myOutput.subscribe(g =>{
        expect(g).toEqual("I am output directory.")
      })
      component.sendValues();
    })
    
  });

});
