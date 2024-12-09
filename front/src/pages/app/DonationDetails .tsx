import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import IconButton from '@mui/joy/IconButton'
import Stack from '@mui/joy/Stack'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardOverflow from '@mui/joy/CardOverflow'



import Chip from '@mui/joy/Chip'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded'



import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { CardContent, Textarea } from '@mui/joy'



export function DonationDetails() {
    // Informações do produto
    const product = {
        title: 'Processador Ryzen',
        description:
            'Estou doando um Processador AMD Ryzen 7 3700X 4.4GHz que não utilizo mais. Ele está em ótimas condições de funcionamento, sem defeitos e nunca passou por overclock. Usei esse processador em meu computador pessoal principalmente para tarefas de desenvolvimento e alguns jogos, mas recentemente fiz um upgrade e decidi que ele pode ser mais útil para outra pessoa.',
        location: 'Sorocaba, SP',
        image: 'https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-7-3700x-3-6ghz-max-4-4ghz-ddr4-am4-32mb-cache/trpstore/12588831972/2a6094afa2668a7a8d79fee85b28b1f7.jpeg',
        nomeDono: 'Pedro Alves',
        numeroDono: '(15) 99555-0987',
        categoria: 'Processador'
    }

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1, padding: '25px', display: 'flex', justifyContent: 'center' }}>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ width: '800px', height: '520px' }}>
                    <div>
                        <Typography level='h4' >Processador Ryzen</Typography>
                        <Typography level="body-sm">
                            <Chip
                                variant="soft"
                                size="sm"
                                startDecorator={<CheckRoundedIcon />}
                                color="success"
                            >
                                Funcionando
                            </Chip>
                        </Typography>
                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                        >

                        </IconButton>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/rkgqanvu/file.png"
                            srcSet=""
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>

                            <Typography level="title-lg" sx={{ marginBottom: 1, marginTop: 1 }}>Descrição da Doação</Typography>

                            <Divider inset="none" />
                            <Typography level="body-md" sx={{ marginBottom: 2, marginTop: 2 }}>
                                Estou doando um Processador AMD Ryzen 7 3700X 4.4GHz que não utilizo mais. Ele está em ótimas condições de funcionamento,
                                sem defeitos e nunca passou por overclock.
                                Usei esse processador em meu computador pessoal principalmente para tarefas de desenvolvimento e alguns jogos,
                                mas recentemente fiz um upgrade e decidi que ele pode ser mais útil para outra pessoa.</Typography>
                            <Typography level="body-sm" sx={{ marginBottom: 1, marginTop: 3 }}>Sorocaba-SP</Typography>

                        </div>
                    </CardContent>
                </Card>

            </Grid>
            <Grid  >
                <Card sx={{ width: '442px', }}>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Envie uma mensagem</Typography>
                        <Typography level="body-sm">
                            Fique ligado no seu Email ou Chat
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Nome</FormLabel>
                                <FormControl
                                >
                                    <Input size="sm" placeholder="Nome" />

                                </FormControl>

                            </Stack>
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>Telefone</FormLabel>
                                    <Input size="sm" defaultValue="(15) 98817-9347" />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>
                                        Descrição do Produto
                                    </FormLabel>
                                    <Textarea placeholder="" minRows={3} size="sm" />
                                </FormControl>
                            </Stack>

                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                    >
                        <Stack direction="row" spacing={2}>

                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <FormLabel>Nome</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="Nome" />

                                </FormControl>


                            </Stack>
                        </Stack>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }} // 'column' em telas pequenas, 'row' em telas maiores
                            spacing={2}
                        >
                            <FormControl>
                                <FormLabel>Telefone</FormLabel>
                                <Input size="sm" defaultValue="(15) 98817-9347" />
                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    size="sm"
                                    type="email"
                                    startDecorator={<EmailRoundedIcon />}
                                    placeholder="email"
                                    defaultValue="siriwatk@test.com"
                                    sx={{ flexGrow: 1 }}
                                />
                            </FormControl>
                        </Stack>
                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2, width: '100%' }}>

                            <Button sx={{ width: '100%', height: '40px' }} size="sm" variant="solid">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card >
            </Grid>

        </Grid>

    )
}


