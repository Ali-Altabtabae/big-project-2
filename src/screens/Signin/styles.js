import styled from "styled-components/native";

export const TopStyling = styled.View`
  height: 20%;
  align-items: center;
  justify-content: center;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 60%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 99, 71, 0.4);
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const AuthContainer = styled.View`
  flex: 8;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5e4d7;
  border-bottom-width: 1px;
  border-color: #306B34;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  color: #f5e4d7;
`;

export const AuthTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  color: #306B34;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  border-color: #306B34
  color: #306B34
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #306B34;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f5e4d7;
`;

export const AuthOther = styled.Text`
  margin-top: 15px;
  color: #306B34;
`;

export const TeamItemStyled = styled.Text`
  color: black;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

// Home Page
export const HomeContainer = styled.View`
  flex: 8;
  align-self: stretch;
  align-items: center;
  background-color: #306B34;
  padding-right: 60px;
  padding-left: 60px;
`;
export const HomeButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #306B34;
  margin-top: 30px;
  border: 3px;
  border-color: #f5e4d7;
  border-radius: 5px;
`;
export const HomeButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f5e4d7;
`;

// Fields Page
export const FieldContainer = styled.View`
  flex: 8;
  align-self: stretch;
  align-items: center;
  background-color: #306b34;
  padding-right: 60px;
  padding-left: 60px;
`;
export const FieldButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #306b34;
  margin-top: 30px;
  border: 3px;
  border-color: #f5e4d7;
  border-radius: 5px;
`;
export const Wrapper = styled.ScrollView`
  width: 100%;
  flex: 1;
`;
export const FieldButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f5e4d7;
`;

export const FieldHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #306b34;
  border-bottom-width: 1px;
  border-color: #f5e4d7;
`;

// Team Page
export const TeamPageContainer = styled.View`
  flex: 8;
  align-self: stretch;
  align-items: center;
  background-color: #7b506f;
  padding-right: 60px;
  padding-left: 60px;
`;
export const TeamPageButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #7b506f;
  margin-top: 30px;
  border: 3px;
  border-color: #f5e4d7;
  border-radius: 5px;
`;
export const TeamPageButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #f5e4d7;
`;

export const TeamPageHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #7b506f;
  border-bottom-width: 1px;
  border-color: #f5e4d7;
`;

// Sign Out Button
export const SignOutButton = styled.TouchableOpacity`
  align-self: stretch;
  position: absolute;
  padding-top: 20px;
  margin-right: 15px;
  right: 1;
`;
export const SignOutButtonText = styled.Text`
  font-size: 18px;
  color: #f5e4d7;
`;
