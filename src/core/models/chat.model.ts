export class ChatRooms {
  id?: number;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  nip?: string;
  regon?: string;
  postal_code?: string;
  city?: string;
  street?: string;
  phone?: string;
  user_id?: number;
  created_at?: string;
  updated_at?: string;
}

export class Message {
  id?: number;
  room_id?: number;
  user_id?: number;
  to_user_id?: number;
  message?: string;
  created_at?: string;
  updated_at?: string;
}
