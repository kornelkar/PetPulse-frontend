import {UserInfo} from "./user-info.model";

export interface OwnerInfo {
  id: number;
  first_name: string;
  last_name: string;
  company_name?: string;
  nip?: string;
  regon?: string;
  postal_code: string;
  city: string;
  street: string;
  phone: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  user: UserInfo
}
