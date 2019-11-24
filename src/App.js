import React, { useState } from 'react'
import GlobalStyle from './styles/global'
// import { Container, Content } from './style'
import Upload from './components/Upload'

export default () => {
  const [itens, setItems] = useState([])

  const fileAccepts = props => {
    const arr = Array.from(props)
    setItems(arr)
    console.log()
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
    </div>
  )
}
