import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Mutation($name: String, $email: String, $password: String) {
    SignIn(name: $name, email: $email, password: $password)
  }
`;

export const LOGIN = gql`
mutation Login($email: String, $password: String) {
  Login(email: $email, password: $password)
}
`;

export const DONATE_BOOK = gql`
  mutation DonateBook(
    $title: String
    $author: String
    $description: String
    $price: String
    $image: String
    $contact: String
    $lat: String
    $lng: String
    $address: String
  ) {
    DonateBook(
      title: $title
      author: $author
      description: $description
      price: $price
      image: $image
      contact: $contact
      lat: $lat
      lng: $lng
      address: $address
    ) {
      address
      author
      contact
      description
      gener
      image
      location
      price
      title
      userD {
        userEmail
        username
      }
    }
  }
`;