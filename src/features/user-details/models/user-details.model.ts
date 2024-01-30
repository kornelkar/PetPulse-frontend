import {UserType} from "../../../shared/enums/user-type.enum";

export interface UserDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  nip?: number;
  regon?: string;
  postalCode: string;
  city: string;
  street: string;
  phone: number;
  userId: number;
  userRole: UserType;
}
