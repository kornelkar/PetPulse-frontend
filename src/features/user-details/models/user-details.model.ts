import {Role} from "../../../core/models/role.model";

export interface UserDetails {
id: number;
name: string;
email: string;
email_verified_at: Date | null;
role_id: number;
created_at: Date;
updated_at: Date;
role: Role;
}
