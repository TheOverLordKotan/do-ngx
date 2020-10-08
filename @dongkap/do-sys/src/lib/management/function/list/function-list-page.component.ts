import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFilterComponent, DatatableColumn } from '@dongkap/do-common';
import { FunctionControlService } from '../services/function-control.service';

@Component({
  selector: 'do-function-list-page',
  styleUrls: ['./function-list-page.component.scss'],
  templateUrl: './function-list-page.component.html',
})
export class FunctionListPageComponent extends BaseFilterComponent<any> implements OnInit, OnDestroy {

  public apiPath: HttpBaseModel;
  public selectionType: SelectionType = SelectionType.single;
  public columns: DatatableColumn[] = [
    { name: 'Authority', prop: 'authority', width: 150 },
    { name: 'Description', prop: 'description', width: 275 },
  ];
  public expanded: boolean = false;

  constructor(public injector: Injector, private router: Router, private functionControlService: FunctionControlService) {
    super(injector, {
      'authority': [],
      'description': [],
    });
    this.apiPath = this.api['security']['datatable-role'];
    this.filters = [
      { controlName: 'authority', type: 'input' },
      { controlName: 'description', type: 'input' }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onAddGroup(): void {
    this.router.navigate(['/app/mgmt/function/control', 'add']);
  }

  onViewDetail(data): void {
    this.functionControlService.setRole(data);
    this.router.navigate(['/app/mgmt/function/control', 'edit']);
  }

  onReset(): void {
    this.router.navigate(['/app/mgmt/function/control']);
  }

  back(): boolean {
    this.router.navigate(['/app/mgmt/function/control']);
    return false;
  }

}
