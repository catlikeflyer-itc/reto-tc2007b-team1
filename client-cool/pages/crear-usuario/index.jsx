import React from 'react'
import MainAuth from '../../components/sections/mainAuth/mainAuth'
import data from '../../data/staticData.json'

export default function index() {
  return (
    <MainAuth data={data}/>
  )
}
