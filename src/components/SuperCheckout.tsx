import * as React from 'react'

import { SUPER_CHECKOUT_URL } from '../constants'
import styled from 'styled-components'

interface Props {
  projectId: string
  show: boolean
}

export const SuperCheckout = (props: Props) => {
  const { projectId, show } = props

  const Modal = styled.div<{ show: boolean }>`
    z-index: auto;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
  `

  const Container = styled.div`
    position: fixed;
    background: white;
    width: auto;
    height: auto;

    border-radius: 8px;
    padding: 1.25rem;
  `

  const buildUrl = (): string => {
    var url = `${SUPER_CHECKOUT_URL}/${projectId}`
    return url
  }

  const url = buildUrl()

  return (
    <Modal show={show}>
      <Container>
        <iframe
          src={`${url}`}
          height={680}
          width={330}
          style={{ border: 'none' }}
        />
      </Container>
    </Modal>
  )
}
