import styled from 'styled-components'

const Head = styled.h1`
  background: ${({theme}) => theme.colors.primaryColor}
`;

export default function Home() {
  return (
    <Head>Oi</Head>
  )
}
