import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  template: `
    <h2 mat-dialog-title>Deletar produto</h2>
    <mat-dialog-content>
      Tem certeza que quer deletar este produto?
    </mat-dialog-content>
    <mat-dialog-actions aligns="end">
      <button mat-button (click)="onNo()">Não</button>
      <button mat-raised-button cdkFocusInitial color="accent" (click)="onYes()">Sim</button>
    </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogModule]
})

export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef)

  onNo() {
    this.matDialogRef.close(false)
  }

  onYes () {
    this.matDialogRef.close(true)
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject(MatDialog)

  constructor() { }

  openDialog () {
    return this.matDialog.open(ConfirmationDialogComponent).afterClosed()
  }
}
