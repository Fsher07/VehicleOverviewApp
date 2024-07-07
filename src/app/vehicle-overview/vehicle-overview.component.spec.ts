import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleOverviewComponent } from './vehicle-overview.component';
import { VehicleNamePipe } from '../pipes/vehicle-name-pipe.pipe';

describe('VehicleOverviewComponent', () => {
  let component: VehicleOverviewComponent;
  let fixture: ComponentFixture<VehicleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleNamePipe],
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
