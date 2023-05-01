export interface Ipassenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: null | Ichild[];
}
export interface Ichild{
  name:string,
  age:number
}
