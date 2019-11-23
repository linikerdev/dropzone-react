import React from 'react'
import GlobalStyle from './styles/global'
// import { Container, Content } from './style'
import Upload from './components/Upload'

export default () => {
  const fileAccepts = props => {
    const arr = Array.from(props)
    arr.map(item => console.log(item))
  }

  return (
    <div>
      <Upload
        height={500}
        width={900}
        // error='deu ruim'
        // success='agora foi'
        // default='manda v'
        accepts={fileAccepts}
        multiple
      />
      <GlobalStyle />
    </div>
  )
}
