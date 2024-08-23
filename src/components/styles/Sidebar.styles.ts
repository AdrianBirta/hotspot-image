import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #22222290;
  z-index: 1;
`;

export const SidebarContent = styled.div`
    position: absolute;
    right: 0;
    z-index: 2;
    top: 0;
    bottom: 0;
    background: #fff;
    padding: 10px;
    width: 290px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.6); 
    }
    
    & .title {
      text-align: center;
      text-decoration: 1px underline;
      text-underline-offset: 3px;
      text-underline-radius: 1px;
    }

    & .close-button {
      position: absolute;
      top: 1%;
      right: 3%;
      background-color: #fff;
      border: 1px solid red;
      color: red;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: red;
        color: #fff;
      }
    }
  }
`;

export const SidebarItemProduct = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  width: 260px;
  min-height: 120px;
  border-bottom: 1px solid lightgray;

  & > img {
    width: 70px;
    height: 90px;
  }

  & .details {
    flex-basis: 65%;

    & h3 {
      margin: 0;
    }
  }

  &:last-of-type {
    border: none;
  }
`