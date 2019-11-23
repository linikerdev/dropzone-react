import React from 'react'
import { DropContainer, UploadMessage } from './styles'
import { useDropzone } from 'react-dropzone'
const accept = 'image/*'

export default function StyledDropzone (props) {
  const renderDragMessage = (isDragActive, isDragReject, isDragAccept) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          {props.default || 'Arraste arquivos aqui...'}
        </UploadMessage>
      )
    }

    if (isDragReject) {
      return (
        <UploadMessage type='error'>
          {props.error || 'Arquivo não suportado...'}
        </UploadMessage>
      )
    }

    return (
      <UploadMessage type='success'>
        {props.success || 'Solte os arquivos aqui...'}
      </UploadMessage>
    )
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept,
    onDrop: drop => props.accepts(drop),
    multiple: props.multiple || false
  })

  return (
    <DropContainer
      {...getRootProps()}
      isDragActive={isDragAccept}
      isDragReject={isDragReject}
      width={props.width}
      height={props.height}
    >
      <input
        {...getInputProps()}
        accept={accept}
        multiple={props.multiple || false}
      />
      {renderDragMessage(isDragActive, isDragReject, isDragAccept)}
    </DropContainer>
  )
}
