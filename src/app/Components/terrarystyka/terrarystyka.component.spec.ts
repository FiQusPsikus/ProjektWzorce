import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrarystykaComponent } from './terrarystyka.component';

describe('TerrarystykaComponent', () => {
  let component: TerrarystykaComponent;
  let fixture: ComponentFixture<TerrarystykaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrarystykaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrarystykaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
