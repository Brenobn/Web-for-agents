import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateQuestionRequest } from "./types/create-question-request"
import type { CreateQuestionResponse } from "./types/create-question-response"
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response"

type ApiQuestion = GetRoomQuestionsResponse[number]
export type Question = ApiQuestion & {
  isGeneratingAnswer?: boolean
}

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },

    onMutate: async (newQuestionData) => {
      await queryClient.cancelQueries({ queryKey: ["get-questions", roomId] })

      const previousQuestions =
        queryClient.getQueryData<GetRoomQuestionsResponse>([
          "get-questions",
          roomId,
        ])

      const newOptimisticQuestion: Question = {
        id: crypto.randomUUID(),
        question: newQuestionData.question,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
        answer: null,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomId],
        (oldData) =>
          oldData
            ? [...oldData, newOptimisticQuestion]
            : [newOptimisticQuestion]
      )

      return { previousQuestions }
    },

    onError: (_err, _newQuestion, context) => {
      if (context?.previousQuestions) {
        queryClient.setQueryData(
          ["get-questions", roomId],
          context.previousQuestions
        )
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-questions", roomId] })
    },
  })
}
