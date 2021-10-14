import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <img
        src="https://avatars.githubusercontent.com/u/38304023?v=4"
        alt="Avatar"
      />
      <div>
        <div>
          <h1>Igor Frazão</h1>
          <S.Wrapper>
            <h3>Username:</h3>
            <span>ayresigo</span>
          </S.Wrapper>
        </div>
        <S.Wrapper>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>9</span>
          </div>
        </S.Wrapper>
      </div>
    </S.Wrapper>
  );
};

export default Profile;
