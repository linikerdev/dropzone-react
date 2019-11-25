import React, { useState } from 'react'
import GlobalStyle from './styles/global'
// import { Container, Content } from './style'
import Upload from './components/Upload'
import api from 'axios'
import _ from 'lodash'

export default () => {
  const [itens, setItems] = useState([])

  const fileAccepts = props => {
    const arr = Array.from(props)
    setItems(itens.concat(arr))
  }

  const submitTransfer = () => {
    itens.map(async item => {
      const getUrl = await api.post(
        'http://localhost:3333/api/v1/manager/geturl',
        {
          image: item.name
        }
      )
      item.url = getUrl.data.data
      item.progress = 0
      const index = _.findIndex(itens, { name: item.name })
      setItems([...itens, (itens[index] = item)])
    })
  }

  return (
    <div>
      {itens.length === 0 ? (
        <div>
          <Upload
            // height={500}
            // width={900}
            accepts={fileAccepts}
            multiple
          />
          <GlobalStyle />
        </div>
      ) : (
        itens.map(item => item.name)
      )}
      <button onClick={submitTransfer}>Enviar</button>
    </div>
  )
}
