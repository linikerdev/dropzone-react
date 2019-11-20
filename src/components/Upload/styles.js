import styled, { css } from 'styled-components'

const messageColors = {
  default: '#999',
  error: '#ff1744',
  success: '#00e676'
}

const dragActive = css`
  border-color: ${messageColors.success};
`

const dragReject = css`
  border-color: ${messageColors.error};
`

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  border-radius: 4px;
  cursor: pointer;
  border-radius: 2;
  border: dashed 2px;
  border-color: ${messageColors.default};
  background-color: '#ffffff';
  color: '#bdbdbd';
  outline: none;
  transition: border 0.1s ease-in-out;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
