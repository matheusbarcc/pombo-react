import { Label } from '@radix-ui/react-dropdown-menu'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Nova conta</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo(a)
            </h1>
            <p className="text-sm text-muted-foreground">
              Conecte-se e veja o que há de novo!
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Seu e-mail</Label>
              <Input id="email" type="email" />
              <Label>Sua senha</Label>
              <Input id="password" type="password" />
            </div>

            <Button className="w-full bg-primary" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
