import * as React from 'react'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import Stack from '@mui/joy/Stack'
import FileUploadExample from './InputFile'
import { Option, Select, Textarea } from '@mui/joy'


interface BasicModalDialogProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalEditDonate({ open, setOpen }: BasicModalDialogProps) {

    return (
        <React.Fragment>

            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog sx={{ width: '400px' }}>
                    <DialogTitle>Edite a Doação Memória RAM</DialogTitle>
                    <DialogContent>Preencha as novas informações da doação.</DialogContent>
                    <form
                        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault()
                            setOpen(false)
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input autoFocus required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <Select defaultValue="Funcionando">

                                    <Option value="Funcionando">Funcinando</Option>
                                    <Option value="Falha">Falha</Option>
                                    <Option value="Sem Status">Sem Status </Option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Categoria</FormLabel>
                                <Select defaultValue="Memoria RAM">

                                    <Option value="Memoria RAM">Memoria RAM</Option>
                                    <Option value="Processador">Processador</Option>
                                    <Option value="Placa de Vídeo">Placa de Vídeo </Option>
                                    <Option value="Placa mãe">Placa mãe</Option>
                                    <Option value="Fonte">Fonte</Option>
                                    <Option value="Periférico">Periférico</Option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>
                                    Descrição do Produto
                                </FormLabel>
                                <Textarea placeholder="" minRows={3} size="sm" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Imagem
                                </FormLabel>
                                <FileUploadExample />
                            </FormControl>


                            <Button type="submit">Criar</Button>

                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    )
}