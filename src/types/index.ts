export enum PossibleActionsToPerform {
  HIDE = 'HIDE',
  RETRIEVE = 'RETRIEVE'
}

export interface FileSubmitted {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  lastModifiedDate: Date;
}
