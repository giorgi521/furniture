import { CodegenConfig } from '@graphql-codegen/cli';
const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL,
  documents: ['src/**/*.{tsx,ts,js,jsx}'],
  generates: {
    'generated/graphql.ts/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;