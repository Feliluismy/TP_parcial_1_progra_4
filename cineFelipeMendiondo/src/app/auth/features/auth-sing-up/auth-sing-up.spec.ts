import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthSingUp } from './auth-sing-up';

describe('AuthSingUp', () => {
  let component: AuthSingUp;
  let fixture: ComponentFixture<AuthSingUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSingUp],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSingUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
