import { Component } from '@angular/core';
import { VehicleService } from '../core/vehicle/vehicle.service';
import { VehicleModel } from '../core/vehicle/vehicle.model';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrls: ['./vehicle-overview.component.scss'],
})
export class VehicleOverviewComponent {
  vehicles: VehicleModel[] = [];
  errorMessage: string | null = null;
  loading = false;

  constructor(private vehicleService: VehicleService) {}

  filteredVehicles: VehicleModel[] = [];

  ngOnInit() {
    this.loading = true;
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles: VehicleModel[]) => {
        this.vehicles = vehicles;
        this.filteredVehicles = vehicles;
        this.loading = false;
      },
      error: (err: string) => {
        this.errorMessage = err;
        this.loading = false;
      },
    });
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchValue = target.value.toLowerCase();

    this.filteredVehicles = this.vehicles.filter((vehicle) => {
      return (
        vehicle.name.toLowerCase().includes(searchValue) ||
        vehicle.price.toString().includes(searchValue) ||
        vehicle.color.toLowerCase().includes(searchValue)
      );
    });
  }
}
