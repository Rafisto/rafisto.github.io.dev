import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const ArticleWrapper = ({ children }: Props) => {
  return (
    <Box sx={[{ marginBlockStart: '100px', alignItems: "center" }]}>
      <div className="listpagemain" style={{}}>
        <Typography variant="h4" style={{ marginBlockEnd: "15px" }}>Lista Artykułów</Typography>
        {children}
      </div>
    </Box>
  )
}

export default ArticleWrapper