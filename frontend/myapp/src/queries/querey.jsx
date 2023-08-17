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
  mutation Mutation(
    $title: String
    $author: String
    $description: String
    $contact: String
    $lat: String
    $lng: String
    $price: String
    $image: String
    $address: String
    $genre: String
  ) {
    DonateBook(
      title: $title
      author: $author
      description: $description
      contact: $contact
      lat: $lat
      lng: $lng
      price: $price
      image: $image
      address: $address
      genre: $genre
    ) {
      address
      author
      buyerId
      by
      contact
      description
      genre
      image
      lat
      lng
      location
      price
      title
      userD {
        username
        userEmail
      }
    }
  }
`;