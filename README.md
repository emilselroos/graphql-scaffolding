# GraphQL approaches

Repository for some server-side GraphQL folder structure examples. The right choice always depends on many factors and also other variants than these can fit.

[GraphQL Cheat Sheet](https://github.com/sogko/graphql-schema-language-cheat-sheet)

**minimal**

The minimal approach wraps all components and parts of GraphQL into one file. This approach fits well for small demos or testing and teaching materials.

**feature-first**

The feature-first approach places all the GraphQL files into a single folder ``/graphql`` that has sub-folders for every feature of the application. Each of those folders contains all component files linked to that one feature (e.g. type definitions, resolvers). In other words, in this approach GraphQL files are grouped in sub-folders by the feature they are part of.

**function-first**

The function-first approach divides different parts of GraphQL (e.g. type definitions, resolvers) based on their function or role. The main ``/graphql`` folder has its own sub-folders for all these functions. In other words, in this approach GraphQL files are grouped in sub-folders by their function/role.
