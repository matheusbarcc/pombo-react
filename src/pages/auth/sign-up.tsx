import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { createUser } from '@/api/create-user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerUser } = useMutation({
    mutationFn: createUser,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password,
      })

      toast.success('Conta criada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

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

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <Label>Seu nome</Label>
                <Input id="name" type="text" {...register('name')} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Seu e-mail</Label>
                <Input id="email" type="email" {...register('email')} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Seu CPF</Label>
                <Input id="cpf" type="text" {...register('cpf')} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Sua senha</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password')}
                />
              </div>
            </div>
            <Button
              disabled={isSubmitting}
              className="w-full bg-primary"
              type="submit"
            >
              Criar conta
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
