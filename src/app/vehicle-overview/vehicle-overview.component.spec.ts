import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleOverviewComponent } from './vehicle-overview.component';
import { AppModule } from '../app.module';

describe('VehicleOverviewComponent', () => {
  let component: VehicleOverviewComponent;
  let fixture: ComponentFixture<VehicleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [VehicleOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
