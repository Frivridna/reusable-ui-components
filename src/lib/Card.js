import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background: #fff;
  margin-bottom: 20px;
`; 

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const ThumbNail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;

const Titlebar = styled.div`
  display: flex;
  align-items: center;
`; 

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px  6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;
// allow container styles to be modified from another component that uses this card ---> send in className as prop. 
export const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className }) => {
  return (
    <Container className={className}> 
      {coverImage && <CoverImage src={coverImage}/>}
      <Content>
        <Titlebar>
          {thumbnailUrl && <ThumbNail url={thumbnailUrl} />}
          <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
        </Titlebar>
      </Content>
    </Container>
  )
}

