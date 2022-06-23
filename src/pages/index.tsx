import React from 'react'
import styled from 'styled-components'
import { client } from 'src/libs/client'
import { Button } from 'src/components/atoms/Button'

import Link from 'next/link'
import { Post } from 'src/types'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      posts: data.contents,
    },
  }
}

type Props = {
  className?: string
  posts: Post[]
}

export const IndexBase: React.FC<Props> = ({ className, posts }) => {

  return (
    <div className={className}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>
              <Button text={post.id} type="back"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export const Index = styled(IndexBase)`
  font-size:30px;
  ${({ theme }) => theme.media.sp`
    font-size: 20px;
  `}
  &__link{
    color: red;
    ${({theme}) => theme.media.tablet`
      color: blue;
    `}
  }
`

export default Index