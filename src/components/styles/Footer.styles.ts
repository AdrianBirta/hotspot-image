import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  & .footer-buttons {
    display: flex;
    alignItems: center;
  }
`;

export const ImageFooterProduct = styled.img`
  width: 60px;
  margin-right: 5px;
  border: 1px solid transparent;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease-in-out border;

  &:hover {
    border: 1px solid #ff5b00;
  }
`;

export const ButtonFooter = styled.a`
  width: 60px;
  height: 60px;
  text-decoration: none;
  margin-left: 5px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display:flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ffffff;
    background-color: #ff5b00;
  }
`;
