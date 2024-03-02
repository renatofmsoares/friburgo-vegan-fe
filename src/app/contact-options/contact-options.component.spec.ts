import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOptionsComponent } from './contact-options.component';

describe('ContactOptionsComponent', () => {
  let component: ContactOptionsComponent;
  let fixture: ComponentFixture<ContactOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
