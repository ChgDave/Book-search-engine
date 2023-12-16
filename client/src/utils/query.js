import { gql } from "@apollo/client";

export const ME = gql`
  query myProfile {
    me {
      _id
      username
      email
      savedBooks
    }
  }
`;
