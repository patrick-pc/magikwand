import { Configuration, OpenAIApi } from 'openai'
import type { NextApiRequest, NextApiResponse } from 'next'

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content } = req.body

  let basePrompt = `Rephrase this: ${content}`

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: basePrompt,
    temperature: 0.7,
    max_tokens: 256,
  })

  const basePromptOutput = baseCompletion.data.choices.pop() as any

  res.status(200).json(basePromptOutput.text)
}
