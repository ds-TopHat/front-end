export interface UnitsList {
  id: number;
  type: string;
}

export interface MeResponseTypes {
  name: string;
  unitsList: UnitsList[];
}
