import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { Copyright } from '@mui/icons-material'

const DashboardPage = () => {

    const history = useNavigate()

const logout=()=>{

history('/login')
}

  return (
    <div>
      <Button variant='contained' onClick={logout}>Logout</Button>
      <Copyright></Copyright>
    </div>
  )
}

export default DashboardPage
