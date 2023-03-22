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
# example parameters: "levelId": "1",
  "roundHistory": "bRhPwH",
mutation UpdateRoundHistory($levelId: ID!, $roundHistory: String) {
  updateRoundHistory(levelId: $levelId, roundHistory: $roundHistory) {
    _id
    username
    password
    levels {
      levelId
      levelName
      isLocked
      isDefeated
      roundHistory
    }
  }
}
`;
