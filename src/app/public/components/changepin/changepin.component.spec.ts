import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChangepinComponent } from './changepin.component';

describe('ChangepinComponent', () => {
    let component: ChangepinComponent;
    let fixture: ComponentFixture<ChangepinComponent>;
    let oldUserPin: number;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChangepinComponent]
        })
            .compileComponents();

        oldUserPin = 1234;
        fixture = TestBed.createComponent(ChangepinComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable submit button if oldPin input is not equal to the user old pin', () => {

        //Arrange
        component.formData.get('oldPin')?.setValue('2345');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })
    it('should disable submit button if new pin and confirm new pin are not equal', () => {

        //Arrange
        component.formData.get('oldPin')?.setValue('2345');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })
    it('should enable submit button if oldpin is correct and new pin is equal to confirm new pin', () => {

        //Arrange
        component.formData.get('oldPin')?.setValue('2345');
        component.formData.get('newPin')?.setValue('1234');
        component.formData.get('ConfirmNewPin')?.setValue('1234');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeFalsy();
    })

    it('should disable submit button if old pin field is empty', () => {
        //Arrange
        component.formData.get('oldPin')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if new pin field is empty', () => {
        //Arrange
        component.formData.get('newPin')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if confirm new pin field is empty', () => {
        //Arrange
        component.formData.get('ConfirmNewPin')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })
});
