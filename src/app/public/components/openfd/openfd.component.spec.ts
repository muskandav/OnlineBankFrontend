import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OpenfdComponent } from './openfd.component';

describe('OpenfdComponent', () => {
    let component: OpenfdComponent;
    let fixture: ComponentFixture<OpenfdComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OpenfdComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(OpenfdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable submit button if from amount field is empty', () => {
        //Arrange
        component.formData.get('fromAcc')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if fdProduct field is empty', () => {
        //Arrange
        component.formData.get('fdProduct')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if fdPeriod field is empty', () => {
        //Arrange
        component.formData.get('fdPeriod')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if amount field is empty', () => {
        //Arrange
        component.formData.get('amount')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should have 2 input fields', () => {

        expect(fixture.debugElement.queryAll(By.css('input')).length).toBe(2);
    })

    it('should have 2 select fields', () => {

        expect(fixture.debugElement.queryAll(By.css('select')).length).toBe(2);
    })
});
