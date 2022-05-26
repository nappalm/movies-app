import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo: FC<unknown> = () => {
  const footPrintImg = `/logo.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={40} height={40} alt="logo" />
          <Text mt={2} fontWeight="bold" ml={3}>
            PopCorn
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
