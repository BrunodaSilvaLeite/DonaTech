import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'


export default function FileUploadButton() {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null)

    const handleButtonClick = () => {
        fileInputRef.current?.click() // Abre o seletor de arquivos
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            console.log('Arquivo selecionado:', file)
        }
    }

    return (
        <CssVarsProvider>
            <Box sx={{

                maxWidth: 400,

            }}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleButtonClick}
                    style={{ width: '100%', }} // Esconde o input de arquivo
                >
                    Selecionar Arquivo
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // Esconde o input de arquivo
                />
            </Box>
        </CssVarsProvider>
    )
}
