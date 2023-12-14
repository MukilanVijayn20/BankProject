import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private refreshFlagKey = 'refreshFlag';

  getRefreshFlag(): boolean {
    const flag = sessionStorage.getItem(this.refreshFlagKey);
    return flag ? JSON.parse(flag) : false;
  }

  setRefreshFlag(flag: boolean): void {
    sessionStorage.setItem(this.refreshFlagKey, JSON.stringify(flag));
  }
}
