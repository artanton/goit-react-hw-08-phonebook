import styled from 'styled-components';
export const PhoneNoItem = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background-color: transparent;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: rotate(180deg);
    transition: transform 0.5s ease;
  }
`;

export const IconWrapper = styled.span`
  color: red;
`;
