import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Mutation($name: String, $email: String, $password: String) {
    SignIn(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    Login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
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
    $genre: String
    $price: String
    $image: String
    $address: String
    $userId: ID
    $rating: Float
    $sellerName: String
  ) {
    DonateBook(
      title: $title
      author: $author
      description: $description
      contact: $contact
      lat: $lat
      lng: $lng
      genre: $genre
      price: $price
      image: $image
      address: $address
      userId: $userId
      rating: $rating
      sellerName: $sellerName
    ) {
      title
    }
  }
`;

export const GENRE_BOOKS = gql`
  query GenreBook($genre: String) {
    GenreBook(genre: $genre) {
      title
      description
      genre
      address
      author
      by
      buyerId
      contact
      image
      lat
      lng
      location
      price
      status
    }
  }
`;


export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    GetAllBooks {
      title
      address
      _id
      author
      by
      description
      contact
      genre
      image
      lat
      lng
      rating
      price
      status
      buyerId
    }
  }
`;