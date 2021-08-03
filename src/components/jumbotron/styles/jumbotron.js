import styled from 'styled-components/macro'

export const Inner = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-direction:${({ direction }) => direction};
  max-width:1100px;
  margin:auto;
  width:100%;

  @media(max-width: 1000px){
    flex-direction:column;
  }
`
export const Pane = styled.div`
  width: 50%;
`
export const Title = styled.h1``
export const Subtitle = styled.h2``
export const Image = styled.img``
export const Container = styled.div``