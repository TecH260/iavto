import React from 'react'

import Head from 'next/head'
import { TITLE } from 'app/config'
import { getAllCarparks, getHotTender } from 'api/Company'
import CarParkBlock from 'modules/templates/CarParkBlock'

export default function Carparks() {
  return (
    <>
      <Head>
        <title>Автопарки | {TITLE}</title>
      </Head>
      <CarParkBlock
        title={'Лучшие автопарки'}
        columns={{
          md: 3,
          xs: 12
        }}
        getData={getHotTender}
        large={true}
      />
      <CarParkBlock
        title={'Автопарки'}
        columns={{
          md: 3,
          xs: 12,
          sm: 6,
          lg: '1-5'
        }}
        getData={getAllCarparks}
        large={false}
      />
    </>
  )
}
