import {OwnerInfo} from "./owner-info.model";

export class AnimalInfo {
  id: number;
  name: string;
  microchipNumber: number;
  weight: number;
  age: number;
  color: string;
  gender: string;
  animal_type_id: number;
  breed_id: number;
  owner_id: number;
  created_at: string;
  updated_at: string;
  animal_type: AnimalType;
  breed: AnimalBreed;
  owner: OwnerInfo;
}

export class AnimalType {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class AnimalBreed {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
