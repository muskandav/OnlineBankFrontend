import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FundtransferComponent } from './fundtransfer.component';

describe('FundtransferComponent', () => {
    let component: FundtransferComponent;
    let fixture: ComponentFixture<FundtransferComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FundtransferComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FundtransferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable submit button if confirm fromAccount field is empty', () => {
        //Arrange
        component.formData.get('fromAccount')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if confirm beneficiaryAcc field is empty', () => {
        //Arrange
        component.formData.get('beneficiaryAcc')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if confirm beneficiaryAccType field is empty', () => {
        //Arrange
        component.formData.get('beneficiaryAccType')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should disable submit button if confirm amount field is empty', () => {
        //Arrange
        component.formData.get('amount')?.setValue('');

        //Act and Assert
        expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    })

    it('should have 3 input fields', () => {

        expect(fixture.debugElement.queryAll(By.css('input')).length).toBe(3);
    })

    it('should have 1 select fields', () => {

        expect(fixture.debugElement.queryAll(By.css('select')).length).toBe(1);
    })


});
