import styled from 'styled-components';

export const HotspotComponentContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  max-width: 554px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow .3s ease;

  &:hover {
    box-shadow: 0px 7px 18px 1px #CCC;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageFloor = styled.img`
  width: 100%;
`;

export const ImageBadge = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #eeeeee;
  padding: 2px 5px;
  transform: translate(-50%, 50%);

  &:hover {
    background-color: #000000;
    color: #eeeeee;
  }
`

export const HotspotWrapper = styled.div<{
  $top: string;
  $left: string;
  $padding: string;
  $isHovered: boolean;
}>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  padding: ${props => props.$isHovered ? 12 : props.$padding}px;
  background-color: ${props => props.$isHovered ? '#dddddd80' : '#33333380'};
  border-radius: 50%;
  transition: .1s ease-in-out;

  &:hover {
    background-color: #dddddd80;
  }
  
  &:hover > div:first-child,
  ${props => props.$isHovered && `
    & > div:first-child {
      box-shadow: 0px 0px 5px 1px #ff5b00;
    }
  `}
`;

export const Hotspot = styled.div<{ $active: boolean; size: string; $isHovered: boolean; $isOverImageContainer: boolean }>`
  width: ${props => props.$isHovered ? 7 : props.size}px;
  height: ${props => props.$isHovered ? 7 : props.size}px;
  background-color: ${props => props.$isHovered ? '#ff5b00' : '#fff'};
  opacity: ${props =>
    !props.$isOverImageContainer
      ? 1 // When not hovering the image, all hotspots are fully visible
      : props.$isOverImageContainer && !props.$active
        ? 1 // The hovered hotspot is fully visible
        : props.$isHovered ? 1 : 0.3};
  box-shadow: 0px 0px 2px 2px #333;
  transition: .1s ease-in-out;
  border-radius: 50%;
`;
