import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

/*
describe('AppComponent', () => {
  
 let component = new AppComponent();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularUnitTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularUnitTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularUnitTest app is running!');
  });

  it('My testCase', ()=>{
    expect(true).toBe(true);
  });

  it('Show Alert Message', ()=>{
    expect(component.showMsg("Hello")).toBe("Hello");
  });

  it('Addition of two numbers', ()=>{
    // expect(Addition(10,20)).toBe(30);
    expect(Addition(10,20)).toBeGreaterThan(20);
  });

    // xit('Addition of two numbers', ()=>{
    //  expect(Addition(10,20)).toBeGreaterThan(20);
    // });
  

    it('ToBe() and ToEqual() ', ()=>{
      var a = "Hello";
      var b = "Hello";

      expect(a).toBe(b);
      expect(a).toEqual(b);
    });

    it('toBeTrue() and toBeFalse()', ()=>{
      var a =true;
      var b= false;
      expect(a).toBeTrue();
      expect(b).toBeFalse();
    });

    it('toBeTruthy() and toBeFalsy()',()=>{
      var a =true;
      expect(a).toBeTruthy();
      expect(undefined).toBeFalsy();
    });

    it('toMatch()', ()=>{
      let input = "The dotnetoffice tutorials";
      let strPhone = "001-234-54-89";
      expect(input).toMatch(/dotnet/);
      expect(input).toMatch(/dotnetoffice/i);
      expect(input).not.toMatch("dot1");
      expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/)
    });

    it('ToBeCloseTo()',()=>{
      let pi= 3.1415926,  e = 2.78;
      expect(pi).not.toBeCloseTo(e);
      expect(pi).toBeCloseTo(e,0);
      expect(3.14).toBeCloseTo(2.8,0)
      expect(4.334).toBeCloseTo(4.334);
      expect(4.334).toBeCloseTo(4.3345,1);
      expect(4.334).toBeCloseTo(4.3345,2);
      expect(4.334).toBeCloseTo(4.3,1);
      expect(4.223).not.toBeCloseTo(4.22,3);
      expect(4.223).not.toBeCloseTo(4.22,4);

    });

    it('toBeDefined() and toBeUndefined()', ()=>{
      let myObj ={
        foo:"foo"
      };
      let myFunction = (function() {})();
      let StrUndefined;
      expect("Hello").toBeDefined();
      expect(myObj).toBeDefined();
      expect(myObj.foo).toBeDefined();
      expect(myFunction).not.toBeDefined();
      expect(StrUndefined).toBeUndefined();   // expect(StrUndefined).not.toBeDefined();
    });

    it('toBeNull()',()=>{
      var nullValue = null;
      var valueUndefined;
      var notNull ="notNull";
      expect(null).toBeNull();
      expect(nullValue).toBeNull();
      expect(valueUndefined).not.toBeNull();
      expect(notNull).not.toBeNull();
    });

    it('toContain()', ()=>{
      let myArray = ["jasmine","DotNet","Tutorials"];
      expect([1,2,3]).toContain(2);
      expect([1,2,3]).toContain(2,3);
      expect(myArray).toContain("jasmine");
      expect(myArray).not.toContain("Dot");
      expect([1,2,3]).not.toContain(4);
    });

    it('toBeNan()', ()=>{
     expect(0/0).toBeNaN();
     expect(1/5).not.toBeNaN();
     expect(0/5).not.toBeNaN();     // 0/5 = 0 
    });

    it('toBePositiveInfinity()', ()=>{
      expect(1/0).toBePositiveInfinity();
    });

    it('toBeNegativeInfinity()', ()=>{
      expect(-1/0).toBeNegativeInfinity();
    });

 

});
*/

describe('AppComponent', ()=>{
  var comp : AppComponent;               // Arrange

  beforeAll(()=>{
    console.log("Before All")
  })

  afterAll(()=>{
    console.log("After All")
  })

  beforeEach(()=>{
    comp = new AppComponent();
    console.log("Before Each")
  })

  afterEach(()=>{
      console.log("After Each")
  })

    it('Increase Count',()=>{
     
      comp.increaseCount(2);                       //  Act
      expect(comp.count).toEqual(12);              // Assert
    console.log("Increase Count")
  })

  it('Decrease Count',()=>{
   
    comp.decreaseCount(2);
    expect(comp.count).toEqual(8);
    console.log("Decrease Count")
  })

 
})
