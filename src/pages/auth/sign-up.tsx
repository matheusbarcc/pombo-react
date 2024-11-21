import { Label } from '@radix-ui/react-dropdown-menu'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import CPFInput from '@/components/cpf-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignUp() {
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Entrar</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Nova conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie sua conta e espalhe suas ideias!
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Seu nome</Label>
              <Input id="name" type="text" />
              <Label>Seu e-mail</Label>
              <Input id="email" type="email" />
              <Label>Seu CPF</Label>
              <CPFInput id="cpf" />
              <Label>Sua senha</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full bg-primary" type="submit">
              Criar conta
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
