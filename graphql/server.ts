import { createYoga, createSchema } from 'graphql-yoga'
import { getManifestVersions } from '../audit/manifestLog'
import { getCodeDiff } from '../audit/codeDiff'
import { runAgentWorkflow } from '../langgraph/runtime'
import fs from 'fs-extra'

const yoga = createYoga({
  schema: createSchema({
    typeDefs: await fs.readFile('./graphql/schema.graphql', 'utf-8'),
    resolvers: {
      Query: {
        versions: () => getManifestVersions(),
        diff: async (_: any, { oldPath, newPath }: any) => {
          const oldCode = await fs.readFile(oldPath, 'utf-8')
          const newCode = await fs.readFile(newPath, 'utf-8')
          return getCodeDiff(oldCode, newCode)
        }
      },
      Mutation: {
        runWorkflow: async (_: any, { workflow }: any) => {
          await runAgentWorkflow(workflow)
          return '✅ Workflow complete'
        }
      }
    }
  })
})

yoga.start().then(() => {
  console.log('🧬 GraphQL API ready at http://localhost:4001/graphql')
})
