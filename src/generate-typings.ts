import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import {join} from "path";

const definitionsFactory = new GraphQLDefinitionsFactory();

// Vai gerar ckasses do tipo TypeScript e vai colocar em graphql.typescript
definitionsFactory.generate(
    {
        typePaths: ['./src/**/*.graphql'],
        path: join(process.cwd(),'src/graphql.ts'),
        outputAs: 'class',  
    }
);