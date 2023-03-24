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
//Careful! we need to pass the "_id" of the level as well as the newest round history.
export const UPDATE_ROUND_HISTORY = gql`
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
