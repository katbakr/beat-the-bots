import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $password: String!) {
		addUser(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const UPDATE_ROUND_HISTORY = gql`
  mutation updateRoundHistory($userId: ID!, $levelId: ID!, $roundHistory: String) {
    updateRoundHistory(userId: $userId, levelId: $levelId, roundHistory: $roundHistory) {
      _id
      username
      levels {
        roundHistory
      }
    }
  }
`;