export enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export enum WorkTypes {
  All = "همه",
  InOffice = "حضوری",
  Remote = "ریموت",
}
export interface EntranceShape {
  workType: WorkTypes;
  workDescription: string;
}
export interface UserShape {
  name: string;
  phoneNumber: string;

  activityLog: {
    id: string;
    hasEntered: boolean;
    hasExited: boolean;
    entranceTime: Date | null;
    exitTime: Date | null;
    workType: WorkTypes | null;
    workDescription: string;
  }[];
}

export enum InputTypes {
  Name = "نام",
  PhoneNumber = "شماره تلفن",
}
export enum AuthenticationConstants {
  AuthenticatedUser = "AuthenticatedUser",
  SignUp = "SignUp",
  LogIn = "LogIn",
}
export type FormTypes =
  | AuthenticationConstants.SignUp
  | AuthenticationConstants.LogIn;
export interface FormInterface {
  type: FormTypes;
}

export enum Routes {
  Home = "/",
  Reports = "/reports",
  Authentication = "/authentication",
}
