import {Component, Input} from '@angular/core';
import {UserDetails} from '../../models/user-details.model';
import {UserType} from "../../../../shared/enums/user-type.enum";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input()
  details: UserDetails[] = [
    {
      firstName: "Jan",
      lastName: "Kowalski",
      postalCode: "12-345",
      city: "Warszawa",
      street: "Aleje Jerozolimskie 123",
      phone: 123456789,
      userId: 987654,
      userRole: UserType.ADMIN,
    },
    {
      firstName: "Anna",
      lastName: "Nowak",
      companyName: "Inna Firma",
      nip: 9876543210,
      regon: "987654321",
      postalCode: "54-321",
      city: "Kraków",
      street: "ul. Floriańska 12",
      phone: 987654321,
      userId: 123456,
      userRole: UserType.PET,
    },
    {
      firstName: "Piotr",
      lastName: "Wiśniewski",
      companyName: "ABC Sp. z o.o.",
      nip: 1357924680,
      regon: "246813579",
      postalCode: "67-890",
      city: "Gdańsk",
      street: "ul. Mariacka 7",
      phone: 456789123,
      userId: 135790,
      userRole: UserType.CLIENT,
    },
    {
      firstName: "Jan",
      lastName: "Kowalski",
      companyName: "Przykładowa Firma",
      nip: 1234567890,
      regon: "123456789",
      postalCode: "12-345",
      city: "Warszawa",
      street: "Aleje Jerozolimskie 123",
      phone: 123456789,
      userId: 987654,
      userRole: UserType.CLIENT,
    },
    {
      firstName: "Anna",
      lastName: "Nowak",
      companyName: "Inna Firma",
      nip: 9876543210,
      regon: "987654321",
      postalCode: "54-321",
      city: "Kraków",
      street: "ul. Floriańska 12",
      phone: 987654321,
      userId: 123456,
      userRole: UserType.CLIENT,
    },
    {
      firstName: "Piotr",
      lastName: "Wiśniewski",
      companyName: "ABC Sp. z o.o.",
      nip: 1357924680,
      regon: "246813579",
      postalCode: "67-890",
      city: "Gdańsk",
      street: "ul. Mariacka 7",
      phone: 456789123,
      userId: 135790,
      userRole: UserType.CLIENT,
    },
  ];

  selectedUserDetails: UserDetails | null = null;


  onUserEditClick(userDetails: UserDetails) {
    this.selectedUserDetails = userDetails;
  }

  handleUpdate(updatedUserDetails: UserDetails) {
    // Logika aktualizacji danych użytkownika, np. wywołanie serwisu
    console.log(updatedUserDetails);
    // Potencjalnie zaktualizuj listę użytkowników lub wykonaj inne czynności
  }

  onUserDeleteClick(): void {

  }
}
