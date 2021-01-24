module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Account {
  id: Int!
  application(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  birthdate: DateTime
  created: DateTime!
  email: String!
  firstname: String
  isActive: Boolean!
  lastname: String
  password: String!
  roles: Json!
  salary: Float
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  updated: DateTime!
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  id: Int
  application: ApplicationCreateManyWithoutBuyerInput
  birthdate: DateTime
  email: String!
  firstname: String
  isActive: Boolean!
  lastname: String
  password: String!
  roles: Json!
  salary: Float
  events: EventCreateManyWithoutOwenerInput
}

input AccountCreateOneWithoutApplicationInput {
  create: AccountCreateWithoutApplicationInput
  connect: AccountWhereUniqueInput
}

input AccountCreateOneWithoutEventsInput {
  create: AccountCreateWithoutEventsInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutApplicationInput {
  id: Int
  birthdate: DateTime
  email: String!
  firstname: String
  isActive: Boolean!
  lastname: String
  password: String!
  roles: Json!
  salary: Float
  events: EventCreateManyWithoutOwenerInput
}

input AccountCreateWithoutEventsInput {
  id: Int
  application: ApplicationCreateManyWithoutBuyerInput
  birthdate: DateTime
  email: String!
  firstname: String
  isActive: Boolean!
  lastname: String
  password: String!
  roles: Json!
  salary: Float
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  id_ASC
  id_DESC
  birthdate_ASC
  birthdate_DESC
  created_ASC
  created_DESC
  email_ASC
  email_DESC
  firstname_ASC
  firstname_DESC
  isActive_ASC
  isActive_DESC
  lastname_ASC
  lastname_DESC
  password_ASC
  password_DESC
  roles_ASC
  roles_DESC
  salary_ASC
  salary_DESC
  updated_ASC
  updated_DESC
}

type AccountPreviousValues {
  id: Int!
  birthdate: DateTime
  created: DateTime!
  email: String!
  firstname: String
  isActive: Boolean!
  lastname: String
  password: String!
  roles: Json!
  salary: Float
  updated: DateTime!
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  application: ApplicationUpdateManyWithoutBuyerInput
  birthdate: DateTime
  email: String
  firstname: String
  isActive: Boolean
  lastname: String
  password: String
  roles: Json
  salary: Float
  events: EventUpdateManyWithoutOwenerInput
}

input AccountUpdateManyMutationInput {
  birthdate: DateTime
  email: String
  firstname: String
  isActive: Boolean
  lastname: String
  password: String
  roles: Json
  salary: Float
}

input AccountUpdateOneRequiredWithoutApplicationInput {
  create: AccountCreateWithoutApplicationInput
  update: AccountUpdateWithoutApplicationDataInput
  upsert: AccountUpsertWithoutApplicationInput
  connect: AccountWhereUniqueInput
}

input AccountUpdateOneWithoutEventsInput {
  create: AccountCreateWithoutEventsInput
  update: AccountUpdateWithoutEventsDataInput
  upsert: AccountUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutApplicationDataInput {
  birthdate: DateTime
  email: String
  firstname: String
  isActive: Boolean
  lastname: String
  password: String
  roles: Json
  salary: Float
  events: EventUpdateManyWithoutOwenerInput
}

input AccountUpdateWithoutEventsDataInput {
  application: ApplicationUpdateManyWithoutBuyerInput
  birthdate: DateTime
  email: String
  firstname: String
  isActive: Boolean
  lastname: String
  password: String
  roles: Json
  salary: Float
}

input AccountUpsertWithoutApplicationInput {
  update: AccountUpdateWithoutApplicationDataInput!
  create: AccountCreateWithoutApplicationInput!
}

input AccountUpsertWithoutEventsInput {
  update: AccountUpdateWithoutEventsDataInput!
  create: AccountCreateWithoutEventsInput!
}

input AccountWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  application_every: ApplicationWhereInput
  application_some: ApplicationWhereInput
  application_none: ApplicationWhereInput
  birthdate: DateTime
  birthdate_not: DateTime
  birthdate_in: [DateTime!]
  birthdate_not_in: [DateTime!]
  birthdate_lt: DateTime
  birthdate_lte: DateTime
  birthdate_gt: DateTime
  birthdate_gte: DateTime
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  isActive: Boolean
  isActive_not: Boolean
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  salary: Float
  salary_not: Float
  salary_in: [Float!]
  salary_not_in: [Float!]
  salary_lt: Float
  salary_lte: Float
  salary_gt: Float
  salary_gte: Float
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  id: Int
  email: String
}

type AggregateAccount {
  count: Int!
}

type AggregateApplication {
  count: Int!
}

type AggregateContract {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type Application {
  id: Int!
  buyer: Account!
  contract: Contract
  created: DateTime!
  offer: Float!
  property_id: String
  updated: DateTime!
  status: ApplicationStatus!
}

type ApplicationConnection {
  pageInfo: PageInfo!
  edges: [ApplicationEdge]!
  aggregate: AggregateApplication!
}

input ApplicationCreateInput {
  id: Int
  buyer: AccountCreateOneWithoutApplicationInput!
  contract: ContractCreateOneWithoutApplicationInput
  offer: Float!
  property_id: String
  status: ApplicationStatus
}

input ApplicationCreateManyWithoutBuyerInput {
  create: [ApplicationCreateWithoutBuyerInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateOneWithoutContractInput {
  create: ApplicationCreateWithoutContractInput
  connect: ApplicationWhereUniqueInput
}

input ApplicationCreateWithoutBuyerInput {
  id: Int
  contract: ContractCreateOneWithoutApplicationInput
  offer: Float!
  property_id: String
  status: ApplicationStatus
}

input ApplicationCreateWithoutContractInput {
  id: Int
  buyer: AccountCreateOneWithoutApplicationInput!
  offer: Float!
  property_id: String
  status: ApplicationStatus
}

type ApplicationEdge {
  node: Application!
  cursor: String!
}

enum ApplicationOrderByInput {
  id_ASC
  id_DESC
  created_ASC
  created_DESC
  offer_ASC
  offer_DESC
  property_id_ASC
  property_id_DESC
  updated_ASC
  updated_DESC
  status_ASC
  status_DESC
}

type ApplicationPreviousValues {
  id: Int!
  created: DateTime!
  offer: Float!
  property_id: String
  updated: DateTime!
  status: ApplicationStatus!
}

input ApplicationScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  offer: Float
  offer_not: Float
  offer_in: [Float!]
  offer_not_in: [Float!]
  offer_lt: Float
  offer_lte: Float
  offer_gt: Float
  offer_gte: Float
  property_id: String
  property_id_not: String
  property_id_in: [String!]
  property_id_not_in: [String!]
  property_id_lt: String
  property_id_lte: String
  property_id_gt: String
  property_id_gte: String
  property_id_contains: String
  property_id_not_contains: String
  property_id_starts_with: String
  property_id_not_starts_with: String
  property_id_ends_with: String
  property_id_not_ends_with: String
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  status: ApplicationStatus
  status_not: ApplicationStatus
  status_in: [ApplicationStatus!]
  status_not_in: [ApplicationStatus!]
  AND: [ApplicationScalarWhereInput!]
  OR: [ApplicationScalarWhereInput!]
  NOT: [ApplicationScalarWhereInput!]
}

enum ApplicationStatus {
  ACCEPTED
  REFUSED
  PENDING
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
  previousValues: ApplicationPreviousValues
}

input ApplicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApplicationWhereInput
  AND: [ApplicationSubscriptionWhereInput!]
  OR: [ApplicationSubscriptionWhereInput!]
  NOT: [ApplicationSubscriptionWhereInput!]
}

input ApplicationUpdateInput {
  buyer: AccountUpdateOneRequiredWithoutApplicationInput
  contract: ContractUpdateOneWithoutApplicationInput
  offer: Float
  property_id: String
  status: ApplicationStatus
}

input ApplicationUpdateManyDataInput {
  offer: Float
  property_id: String
  status: ApplicationStatus
}

input ApplicationUpdateManyMutationInput {
  offer: Float
  property_id: String
  status: ApplicationStatus
}

input ApplicationUpdateManyWithoutBuyerInput {
  create: [ApplicationCreateWithoutBuyerInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  set: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutBuyerInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutBuyerInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput!
  data: ApplicationUpdateManyDataInput!
}

input ApplicationUpdateOneRequiredWithoutContractInput {
  create: ApplicationCreateWithoutContractInput
  update: ApplicationUpdateWithoutContractDataInput
  upsert: ApplicationUpsertWithoutContractInput
  connect: ApplicationWhereUniqueInput
}

input ApplicationUpdateWithoutBuyerDataInput {
  contract: ContractUpdateOneWithoutApplicationInput
  offer: Float
  property_id: String
  status: ApplicationStatus
}

input ApplicationUpdateWithoutContractDataInput {
  buyer: AccountUpdateOneRequiredWithoutApplicationInput
  offer: Float
  property_id: String
  status: ApplicationStatus
}

input ApplicationUpdateWithWhereUniqueWithoutBuyerInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutBuyerDataInput!
}

input ApplicationUpsertWithoutContractInput {
  update: ApplicationUpdateWithoutContractDataInput!
  create: ApplicationCreateWithoutContractInput!
}

input ApplicationUpsertWithWhereUniqueWithoutBuyerInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutBuyerDataInput!
  create: ApplicationCreateWithoutBuyerInput!
}

input ApplicationWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  buyer: AccountWhereInput
  contract: ContractWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  offer: Float
  offer_not: Float
  offer_in: [Float!]
  offer_not_in: [Float!]
  offer_lt: Float
  offer_lte: Float
  offer_gt: Float
  offer_gte: Float
  property_id: String
  property_id_not: String
  property_id_in: [String!]
  property_id_not_in: [String!]
  property_id_lt: String
  property_id_lte: String
  property_id_gt: String
  property_id_gte: String
  property_id_contains: String
  property_id_not_contains: String
  property_id_starts_with: String
  property_id_not_starts_with: String
  property_id_ends_with: String
  property_id_not_ends_with: String
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  status: ApplicationStatus
  status_not: ApplicationStatus
  status_in: [ApplicationStatus!]
  status_not_in: [ApplicationStatus!]
  AND: [ApplicationWhereInput!]
  OR: [ApplicationWhereInput!]
  NOT: [ApplicationWhereInput!]
}

input ApplicationWhereUniqueInput {
  id: Int
}

type BatchPayload {
  count: Long!
}

type Contract {
  id: Int!
  price: Float!
  created: DateTime!
  updated: DateTime!
  application: Application!
}

type ContractConnection {
  pageInfo: PageInfo!
  edges: [ContractEdge]!
  aggregate: AggregateContract!
}

input ContractCreateInput {
  id: Int
  price: Float!
  application: ApplicationCreateOneWithoutContractInput!
}

input ContractCreateOneWithoutApplicationInput {
  create: ContractCreateWithoutApplicationInput
  connect: ContractWhereUniqueInput
}

input ContractCreateWithoutApplicationInput {
  id: Int
  price: Float!
}

type ContractEdge {
  node: Contract!
  cursor: String!
}

enum ContractOrderByInput {
  id_ASC
  id_DESC
  price_ASC
  price_DESC
  created_ASC
  created_DESC
  updated_ASC
  updated_DESC
}

type ContractPreviousValues {
  id: Int!
  price: Float!
  created: DateTime!
  updated: DateTime!
}

type ContractSubscriptionPayload {
  mutation: MutationType!
  node: Contract
  updatedFields: [String!]
  previousValues: ContractPreviousValues
}

input ContractSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContractWhereInput
  AND: [ContractSubscriptionWhereInput!]
  OR: [ContractSubscriptionWhereInput!]
  NOT: [ContractSubscriptionWhereInput!]
}

input ContractUpdateInput {
  price: Float
  application: ApplicationUpdateOneRequiredWithoutContractInput
}

input ContractUpdateManyMutationInput {
  price: Float
}

input ContractUpdateOneWithoutApplicationInput {
  create: ContractCreateWithoutApplicationInput
  update: ContractUpdateWithoutApplicationDataInput
  upsert: ContractUpsertWithoutApplicationInput
  delete: Boolean
  disconnect: Boolean
  connect: ContractWhereUniqueInput
}

input ContractUpdateWithoutApplicationDataInput {
  price: Float
}

input ContractUpsertWithoutApplicationInput {
  update: ContractUpdateWithoutApplicationDataInput!
  create: ContractCreateWithoutApplicationInput!
}

input ContractWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  application: ApplicationWhereInput
  AND: [ContractWhereInput!]
  OR: [ContractWhereInput!]
  NOT: [ContractWhereInput!]
}

input ContractWhereUniqueInput {
  id: Int
}

scalar DateTime

type Event {
  id: Int!
  title: String!
  description: String
  status: EventStatus!
  owener: Account
  created: DateTime!
  updated: DateTime!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: Int
  title: String!
  description: String
  status: EventStatus
  owener: AccountCreateOneWithoutEventsInput
}

input EventCreateManyWithoutOwenerInput {
  create: [EventCreateWithoutOwenerInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutOwenerInput {
  id: Int
  title: String!
  description: String
  status: EventStatus
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  status_ASC
  status_DESC
  created_ASC
  created_DESC
  updated_ASC
  updated_DESC
}

type EventPreviousValues {
  id: Int!
  title: String!
  description: String
  status: EventStatus!
  created: DateTime!
  updated: DateTime!
}

input EventScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: EventStatus
  status_not: EventStatus
  status_in: [EventStatus!]
  status_not_in: [EventStatus!]
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

enum EventStatus {
  READ
  RESIVE
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  title: String
  description: String
  status: EventStatus
  owener: AccountUpdateOneWithoutEventsInput
}

input EventUpdateManyDataInput {
  title: String
  description: String
  status: EventStatus
}

input EventUpdateManyMutationInput {
  title: String
  description: String
  status: EventStatus
}

input EventUpdateManyWithoutOwenerInput {
  create: [EventCreateWithoutOwenerInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutOwenerInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutOwenerInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateWithoutOwenerDataInput {
  title: String
  description: String
  status: EventStatus
}

input EventUpdateWithWhereUniqueWithoutOwenerInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutOwenerDataInput!
}

input EventUpsertWithWhereUniqueWithoutOwenerInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutOwenerDataInput!
  create: EventCreateWithoutOwenerInput!
}

input EventWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: EventStatus
  status_not: EventStatus
  status_in: [EventStatus!]
  status_not_in: [EventStatus!]
  owener: AccountWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: Int
}

scalar Json

scalar Long

type Mutation {
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createApplication(data: ApplicationCreateInput!): Application!
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateManyApplications(data: ApplicationUpdateManyMutationInput!, where: ApplicationWhereInput): BatchPayload!
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  createContract(data: ContractCreateInput!): Contract!
  updateContract(data: ContractUpdateInput!, where: ContractWhereUniqueInput!): Contract
  updateManyContracts(data: ContractUpdateManyMutationInput!, where: ContractWhereInput): BatchPayload!
  upsertContract(where: ContractWhereUniqueInput!, create: ContractCreateInput!, update: ContractUpdateInput!): Contract!
  deleteContract(where: ContractWhereUniqueInput!): Contract
  deleteManyContracts(where: ContractWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  application(where: ApplicationWhereUniqueInput!): Application
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  contract(where: ContractWhereUniqueInput!): Contract
  contracts(where: ContractWhereInput, orderBy: ContractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contract]!
  contractsConnection(where: ContractWhereInput, orderBy: ContractOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContractConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  node(id: ID!): Node
}

type Subscription {
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  contract(where: ContractSubscriptionWhereInput): ContractSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
}
`
      }
    