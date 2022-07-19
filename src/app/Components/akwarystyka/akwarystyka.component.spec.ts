import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkwarystykaComponent } from './akwarystyka.component';

describe('AkwarystykaComponent', () => {
  let component: AkwarystykaComponent;
  let fixture: ComponentFixture<AkwarystykaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkwarystykaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkwarystykaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
