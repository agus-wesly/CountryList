import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'
import './index.css'

type DialogProps = ComponentProps<typeof Dialog.Root>

Modal.Trigger = Dialog.Trigger
Modal.Title = Dialog.Title
Modal.Description = Dialog.Description
Modal.Close = Dialog.Close

export default function Modal({ children, ...rest }: DialogProps) {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
