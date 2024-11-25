import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Bird } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getPublications } from '@/api/get-publications'
import { getUserById } from '@/api/get-user-by-id'
import { Avatar } from '@/components/avatar'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useFilters } from '@/pages/_layouts/app'

import { PublicationCard } from '../feed/publication-card'

export function Profile() {
  const { userId } = useParams()
  const { filters } = useFilters()

  console.log(userId)

  if (!userId) {
    throw new Error('User ID is required.')
  }

  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
  })

  const { data: publications } = useQuery({
    queryKey: ['publications', filters, user?.userId],
    queryFn: () =>
      getPublications({
        page: 1,
        limit: 10,
        userId: user?.userId, // Ensure the correct userId is passed
        content: filters.content || undefined,
        createdAtStart: filters.createdAtStart || undefined,
        createdAtEnd: filters.createdAtEnd || undefined,
        isLiked: filters.isLiked || undefined,
      }),
    enabled: !!user, // Only fetch when user data is available
  })

  return (
    <>
      <Helmet title="Profile" />
      <div className="flex flex-col h-screen p-7 gap-5">
        <Card className="border-0 shadow-none">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              <Avatar
                src={
                  user?.profilePicture ??
                  'https://conteudo.imguol.com.br/c/esporte/10/2022/09/23/richarlison-comemora-gol-pela-selecao-brasileira-em-amistoso-contra-gana-1663969438957_v2_4x3.jpg'
                }
                size="xl"
              />
              <div className="flex flex-col gap-1">
                <CardTitle>{user?.name}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-muted-foreground text-xs font-bold ">
                Membro desde
              </span>
              <span className="text-foreground text-xs">
                {user?.createdAt
                  ? format(new Date(user.createdAt), 'dd MMM. yyyy', {
                      locale: ptBR,
                    })
                  : null}
              </span>
            </div>
          </CardHeader>
        </Card>
        <Separator />
        {publications && publications.length > 0 ? (
          publications.map((publication) => (
            <PublicationCard
              key={publication.publicationId}
              publication={publication}
            />
          ))
        ) : (
          <div className="flex justify-center items-center mt-10 gap-3 text-muted-foreground font-semibold">
            <Bird />
            Nenhum pruu foi encontrado.
          </div>
        )}
      </div>
    </>
  )
}
