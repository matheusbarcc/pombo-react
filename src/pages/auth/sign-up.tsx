import { Label } from '@radix-ui/react-dropdown-menu'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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

  // const { mutateAsync: authenticate } = useMutation({
  //   mutationFn: signIn,
  // })

  async function handleSignUp(data: SignUpForm) {
    try {
      // await authenticate({ email: data.email })
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log(data)

      toast.success('Conta criada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Verifique os campos.')
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
            <div className="space-y-2">
              <Label>Seu nome</Label>
              <Input id="name" type="text" {...register('name')} />
              <Label>Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              <Label>Seu CPF</Label>
              <Input id="cpf" type="text" {...register('cpf')} />
              <Label>Sua senha</Label>
              <Input id="password" type="password" {...register('password')} />
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
