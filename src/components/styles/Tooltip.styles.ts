import styled from 'styled-components';

export const Tooltip = styled.div<{ $visibility: string }>`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 10px);
  width: 280px;
  display: flex;
  justify-content: space-between;
  visibility: ${props => props.$visibility};
  padding: 10px;
  margin-top: 2px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
  cursor: initial;
`;

export const TooltipContent = styled.div`
  width: 131px;

  & > .tooltip-content-top {
    display: flex;
    flex-direction: column;
    font-size: 12px;

    & > p {
      margin: 0;
    }
  }
`;

export const ImageTooltipProduct = styled.img`
  width: 131px;
`;

export const ButtonTooltip = styled.a<{
  $bgColor: string;
  $color: string;
  $borderColor: string;
  $isHovered?: boolean;
}>`
  padding: 4px 10px;
  cursor: pointer;
  background-color: ${props => props.$bgColor};
  border: 1px solid ${props => props.$borderColor};
  color: ${props => props.$color};
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  border-radius: 3px;
  margin-bottom: 5px;
  font-size: 12px;
  text-align: center;
  width: 80px;
  transition: background-color .3s ease, color .3s ease;

  ${props => props.$isHovered && `
    &:hover {
      background-color: #000000;
      color: #ffffff;
    }  
  `}
`;
