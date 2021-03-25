import React from 'react';
import styled from "styled-components";

const StyledAvatar = styled.img`
width: 100px;
height: 100px;
border: 2px solid #000;
border-radius: 2%;
margin: 16px;
background-size: cover;
background-image: url("https://avatars0.githubusercontent.com/u/25882133?v=4");
`;

const ProfilePhoto = () => <StyledAvatar />

export default ProfilePhoto;

