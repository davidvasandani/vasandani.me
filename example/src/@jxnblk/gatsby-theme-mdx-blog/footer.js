import React from 'react'
import {
  css,
  Container,
  Box,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Box as='footer' css={css({ variant: 'layout.footer' })}>
    <Container>
      © 2019 David Vasandani
    </Container>
  </Box>
