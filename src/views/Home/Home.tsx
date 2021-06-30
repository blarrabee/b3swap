import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/vegan/vegan-3.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/vegan/'), url('/images/vegan/');
    background-size: contain;
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const StyledHeading = styled(Heading)`
  ${({ theme }) => theme.mediaQueries.xs} {
    position: relative;
    bottom: 135px;
  }
  
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: 0;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <StyledHeading as="h1" size="xl" mb="24px" color="black">
          {TranslateString(576, 'B3Swap')}
        </StyledHeading>
        <Text color="black">{TranslateString(578, 'Finance of the future')}</Text>
      </Hero>
      <div>
        <Cards>
          {/* <FarmStakingCard />*/}
          <TwitterCard />
          {/* <CakeStats />*/}
          {/* <TotalValueLockedCard />*/}
        </Cards>
      </div>
    </Page>
  )
}

export default Home
