"use strict";
exports.__esModule = true;
var graphql_1 = require("@nestjs/graphql");
var path_1 = require("path");
var definitionsFactory = new graphql_1.GraphQLDefinitionsFactory();
// Vai gerar ckasses do tipo TypeScript e vai colocar em graphql.typescript
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: (0, path_1.join)(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class'
});
