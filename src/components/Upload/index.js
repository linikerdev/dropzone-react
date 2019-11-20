import React from 'react'
import { DropContainer, UploadMessage } from './styles'
import { useDropzone } from 'react-dropzone'
const accept = 'image/*'

export default function StyledDropzone (props) {
  const renderDragMessage = (isDragActive, isDragReject, isDragAccept) => {
    console.log('isDragAccept', isDragAccept)
    console.log('isDragReject', isDragReject)
    console.log('isDragActive', isDragActive)
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type='success'>Solte os arquivos aqui</UploadMessage>
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept,
    onDrop: drop => console.log(drop),
    onDropRejected: reject => console.log(reject)
  })

  return (
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragAccept}
      isDragReject={isDragReject}
    >
      <input {...getInputProps()} accept={accept} multiple />
      {renderDragMessage(isDragActive, isDragReject, isDragAccept)}
    </DropContainer>
  )
}
