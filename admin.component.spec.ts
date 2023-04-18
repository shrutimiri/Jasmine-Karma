import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      providers:[],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('Interpolation test',()=>{
    const name: HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.name);

    component.name = "name-updated";
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.name);
  });

  xit('Interpolation test for testbox',()=>{
    const inputVal:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernum');
    expect(inputVal.type).toEqual(component.type);

    component.type ="text";
    fixture.detectChanges();
    expect(inputVal.type).toEqual(component.type);

    expect(inputVal.readOnly).toBeFalsy();         // For Property Binding
  });

  xit('ngClass for paragraph',()=>{
    const element = fixture.debugElement.nativeElement.querySelector('#header');
    expect(element.getAttribute('class')).toContain('font-red');
  });

  xit('ngClass for header',()=>{
    const element = fixture.debugElement.nativeElement.querySelector('#header1');
    component.num = 5;
    fixture.detectChanges();
    expect(element.getAttribute('class')).toContain('font-red');
  });

  xit('ngStyle for paragraph',()=>{
    const element = fixture.debugElement.nativeElement.querySelector('#para');
    expect(element.getAttribute('style')).toContain('color: green');
  });

  xit(' Table Attribute Binding',()=>{
    const element:HTMLTableElement = fixture.debugElement.nativeElement.querySelector("#colId");
    expect(element.getAttribute('colspan')).toEqual(component.columnSpan.toString());
  });

  xit(' Button Attribute Binding',()=>{
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonId");
    expect(element.getAttribute('aria-label')).toEqual(component.arialable);
  });

  xit('Event Binding => Button 1',()=>{
    let element:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#button1");
    expect(component.label).toEqual("DOTNET");

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("Dot Net Office")
  });

  xit('Event Binding => Button 2',()=>{
    let element:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#button2");
    expect(component.label).toEqual("DOTNET");

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual("Label value changed on button2")
  });

  xit('Event Binding => Input 1',()=>{
    let element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#textbox1");
    expect(component.label).toEqual("DOTNET");

    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("onChangeInput label changed")
  });

  xit('Event Binding => Input 2',()=>{
    let element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#textbox2");
    expect(component.label).toEqual("DOTNET");

    element.value ="Dotnet-Updated"
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual("Dotnet-Updated")
  });

  xit('Two way data Binding',(done)=>{
    component.studentName ="Shruti Updated";
    fixture.detectChanges();

    // For aync calls or two way data binding
    fixture.whenStable().then(()=>{
      const element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#name");
      expect(element.value).toEqual("Shruti Updated");
      done();   // done is used when spec has no expectation
    })
    
  });

// For Spec has no expectation => we can use done or async

// async works with whenStable() &
// fakeAsync works with tick();

  xit('Two way data Binding=> set textbox value using async',async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#name");
      element.value ="textbox-updated";
      element.dispatchEvent(new Event('input'));
      expect(element.value).toEqual(component.studentName);
      
    })
  }));

  xit('Two way data Binding=> set textbox value using fakeAsync',fakeAsync(()=>{
    fixture.detectChanges();
    
    tick();

  //  fixture.whenStable().then(()=>{
      const element:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#name");
      element.value ="textbox-updated";
      element.dispatchEvent(new Event('input'));
      expect(element.value).toEqual(component.studentName);
      
  //  })
  }));

  xit('button click test case',()=>{
    fixture.detectChanges();
    const element:HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#button1");
    fixture.whenStable().then(()=>{
      element.click();
      expect(component.studentName).toEqual("Shruti Miriyala")
    })
  });

});
