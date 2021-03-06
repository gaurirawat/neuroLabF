import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceivingStationComponent } from './receiving-station/receiving-station.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { ValidityListComponent} from './validity-list/validity-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReceivingFormComponent } from './receiving-form/receiving-form.component';
import { MapSampleComponent } from './map-sample/map-sample.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PreReceivingComponent } from './pre-receiving/pre-receiving.component';
import { SegregationStationComponent } from './segregation-station/segregation-station.component';
import { ListGenerationComponent } from './list-generation/list-generation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { VialConfirmationDialogComponent } from './vial-confirmation-dialog/vial-confirmation-dialog.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SeparationStationComponent } from './separation-station/separation-station.component';
import { IndividualSearchComponent } from './individual-search/individual-search.component';
import { PddDataComponent } from './pdd-data/pdd-data.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { VialDataComponent } from './vial-data/vial-data.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SegregationListComponent } from './segregation-list/segregation-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PendingVialsComponent } from './pending-vials/pending-vials.component';
import { ExploreDataComponent } from './explore-data/explore-data.component';
import {TestComponent} from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    ReceivingStationComponent,
    ValidityListComponent,
    ReceivingFormComponent,
    MapSampleComponent,
    ConfirmationDialogComponent,
    PreReceivingComponent,
    SegregationStationComponent,
    WelcomePageComponent,
    ListGenerationComponent,
    PageNotFoundComponent,
    VialConfirmationDialogComponent,
    SeparationStationComponent,
    IndividualSearchComponent,
    PddDataComponent,
    MasterDataComponent,
    VialDataComponent,
    DashboardComponent,
    SegregationListComponent,
    PendingVialsComponent,
    ExploreDataComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableExporterModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
