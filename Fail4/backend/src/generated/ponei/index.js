
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AspNetUsersScalarFieldEnum = {
  Id: 'Id',
  ProfileId: 'ProfileId',
  UserName: 'UserName',
  NormalizedUserName: 'NormalizedUserName',
  Email: 'Email',
  NormalizedEmail: 'NormalizedEmail',
  EmailConfirmed: 'EmailConfirmed',
  PasswordHash: 'PasswordHash',
  SecurityStamp: 'SecurityStamp',
  ConcurrencyStamp: 'ConcurrencyStamp',
  PhoneNumber: 'PhoneNumber',
  PhoneNumberConfirmed: 'PhoneNumberConfirmed',
  TwoFactorEnabled: 'TwoFactorEnabled',
  LockoutEnd: 'LockoutEnd',
  LockoutEnabled: 'LockoutEnabled',
  AccessFailedCount: 'AccessFailedCount',
  UserAddressId: 'UserAddressId',
  UserOrigin: 'UserOrigin'
};

exports.Prisma.AspNetRoleClaimsScalarFieldEnum = {
  Id: 'Id',
  RoleId: 'RoleId',
  ClaimType: 'ClaimType',
  ClaimValue: 'ClaimValue'
};

exports.Prisma.AspNetRolesScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  NormalizedName: 'NormalizedName',
  ConcurrencyStamp: 'ConcurrencyStamp'
};

exports.Prisma.AspNetUserClaimsScalarFieldEnum = {
  Id: 'Id',
  UserId: 'UserId',
  ClaimType: 'ClaimType',
  ClaimValue: 'ClaimValue'
};

exports.Prisma.AspNetUserLoginsScalarFieldEnum = {
  LoginProvider: 'LoginProvider',
  ProviderKey: 'ProviderKey',
  ProviderDisplayName: 'ProviderDisplayName',
  UserId: 'UserId'
};

exports.Prisma.AspNetUserRolesScalarFieldEnum = {
  UserId: 'UserId',
  RoleId: 'RoleId'
};

exports.Prisma.AspNetUserTokensScalarFieldEnum = {
  UserId: 'UserId',
  LoginProvider: 'LoginProvider',
  Name: 'Name',
  Value: 'Value'
};

exports.Prisma.ClientsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  Secret: 'Secret',
  TenantId: 'TenantId'
};

exports.Prisma.CoinEventsScalarFieldEnum = {
  Id: 'Id',
  EventType: 'EventType',
  Date: 'Date',
  RelatedEntityId: 'RelatedEntityId'
};

exports.Prisma.PasswordRecoveryCodesScalarFieldEnum = {
  Id: 'Id',
  Email: 'Email',
  Code: 'Code',
  ExpiresAt: 'ExpiresAt'
};

exports.Prisma.ProfilesScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  SurName: 'SurName',
  CpfCnpj: 'CpfCnpj',
  DocumentType: 'DocumentType',
  Phone: 'Phone'
};

exports.Prisma.TenantsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  Id: 'Id',
  ApplicationUserId: 'ApplicationUserId',
  CoinEventId: 'CoinEventId',
  Date: 'Date',
  Amount: 'Amount'
};

exports.Prisma.UserAddressesScalarFieldEnum = {
  Id: 'Id',
  PostalCode: 'PostalCode',
  Street: 'Street',
  Number: 'Number',
  Country: 'Country',
  State: 'State',
  City: 'City',
  Neighborhood: 'Neighborhood',
  Complement: 'Complement'
};

exports.Prisma.WalletsScalarFieldEnum = {
  Id: 'Id',
  ApplicationUserId: 'ApplicationUserId',
  Balance: 'Balance'
};

exports.Prisma.EFMigrationsHistoryScalarFieldEnum = {
  MigrationId: 'MigrationId',
  ProductVersion: 'ProductVersion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  AspNetUsers: 'AspNetUsers',
  AspNetRoleClaims: 'AspNetRoleClaims',
  AspNetRoles: 'AspNetRoles',
  AspNetUserClaims: 'AspNetUserClaims',
  AspNetUserLogins: 'AspNetUserLogins',
  AspNetUserRoles: 'AspNetUserRoles',
  AspNetUserTokens: 'AspNetUserTokens',
  Clients: 'Clients',
  CoinEvents: 'CoinEvents',
  PasswordRecoveryCodes: 'PasswordRecoveryCodes',
  Profiles: 'Profiles',
  Tenants: 'Tenants',
  Transactions: 'Transactions',
  UserAddresses: 'UserAddresses',
  Wallets: 'Wallets',
  EFMigrationsHistory: 'EFMigrationsHistory'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Paulo\\Desktop\\SupPageProject\\backend\\src\\generated\\ponei",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Paulo\\Desktop\\SupPageProject\\backend\\src\\database\\ponei-db.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../database",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PONEI_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/ponei\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"PONEI_DATABASE_URL\")\n}\n\nmodel AspNetUsers {\n  Id                   String             @id(map: \"PK_AspNetUsers\")\n  ProfileId            String?            @db.Uuid\n  UserName             String?            @db.VarChar(256)\n  NormalizedUserName   String?            @unique(map: \"UserNameIndex\") @db.VarChar(256)\n  Email                String?            @db.VarChar(256)\n  NormalizedEmail      String?            @db.VarChar(256)\n  EmailConfirmed       Boolean\n  PasswordHash         String?\n  SecurityStamp        String?\n  ConcurrencyStamp     String?\n  PhoneNumber          String?\n  PhoneNumberConfirmed Boolean\n  TwoFactorEnabled     Boolean\n  LockoutEnd           DateTime?          @db.Timestamptz(6)\n  LockoutEnabled       Boolean\n  AccessFailedCount    Int\n  UserAddressId        String?            @db.Uuid\n  UserOrigin           Int                @default(0)\n  AspNetUserClaims     AspNetUserClaims[]\n  AspNetUserLogins     AspNetUserLogins[]\n  AspNetUserRoles      AspNetUserRoles[]\n  AspNetUserTokens     AspNetUserTokens[]\n  Profiles             Profiles?          @relation(fields: [ProfileId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_AspNetUsers_Profiles_ProfileId\")\n  UserAddresses        UserAddresses?     @relation(fields: [UserAddressId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_AspNetUsers_UserAddresses_UserAddressId\")\n  Transactions         Transactions[]\n  Wallets              Wallets?\n\n  @@index([NormalizedEmail], map: \"EmailIndex\")\n  @@index([ProfileId], map: \"IX_AspNetUsers_ProfileId\")\n  @@index([UserAddressId], map: \"IX_AspNetUsers_UserAddressId\")\n  @@map(\"AspNetUsers\")\n}\n\nmodel AspNetRoleClaims {\n  Id          Int         @id(map: \"PK_AspNetRoleClaims\") @default(autoincrement())\n  RoleId      String\n  ClaimType   String?\n  ClaimValue  String?\n  AspNetRoles AspNetRoles @relation(fields: [RoleId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetRoleClaims_AspNetRoles_RoleId\")\n\n  @@index([RoleId], map: \"IX_AspNetRoleClaims_RoleId\")\n}\n\nmodel AspNetRoles {\n  Id               String             @id(map: \"PK_AspNetRoles\")\n  Name             String?            @db.VarChar(256)\n  NormalizedName   String?            @unique(map: \"RoleNameIndex\") @db.VarChar(256)\n  ConcurrencyStamp String?\n  AspNetRoleClaims AspNetRoleClaims[]\n  AspNetUserRoles  AspNetUserRoles[]\n}\n\nmodel AspNetUserClaims {\n  Id          Int         @id(map: \"PK_AspNetUserClaims\") @default(autoincrement())\n  UserId      String\n  ClaimType   String?\n  ClaimValue  String?\n  AspNetUsers AspNetUsers @relation(fields: [UserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetUserClaims_AspNetUsers_UserId\")\n\n  @@index([UserId], map: \"IX_AspNetUserClaims_UserId\")\n}\n\nmodel AspNetUserLogins {\n  LoginProvider       String\n  ProviderKey         String\n  ProviderDisplayName String?\n  UserId              String\n  AspNetUsers         AspNetUsers @relation(fields: [UserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetUserLogins_AspNetUsers_UserId\")\n\n  @@id([LoginProvider, ProviderKey], map: \"PK_AspNetUserLogins\")\n  @@index([UserId], map: \"IX_AspNetUserLogins_UserId\")\n}\n\nmodel AspNetUserRoles {\n  UserId      String\n  RoleId      String\n  AspNetRoles AspNetRoles @relation(fields: [RoleId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetUserRoles_AspNetRoles_RoleId\")\n  AspNetUsers AspNetUsers @relation(fields: [UserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetUserRoles_AspNetUsers_UserId\")\n\n  @@id([UserId, RoleId], map: \"PK_AspNetUserRoles\")\n  @@index([RoleId], map: \"IX_AspNetUserRoles_RoleId\")\n}\n\nmodel AspNetUserTokens {\n  UserId        String\n  LoginProvider String\n  Name          String\n  Value         String?\n  AspNetUsers   AspNetUsers @relation(fields: [UserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_AspNetUserTokens_AspNetUsers_UserId\")\n\n  @@id([UserId, LoginProvider, Name], map: \"PK_AspNetUserTokens\")\n}\n\nmodel Clients {\n  Id       String  @id(map: \"PK_Clients\") @db.Uuid\n  Name     String\n  Secret   String\n  TenantId String  @db.Uuid\n  Tenants  Tenants @relation(fields: [TenantId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_Clients_Tenants_TenantId\")\n\n  @@index([TenantId], map: \"IX_Clients_TenantId\")\n}\n\nmodel CoinEvents {\n  Id              String         @id(map: \"PK_CoinEvents\") @db.Uuid\n  EventType       Int\n  Date            DateTime       @db.Timestamptz(6)\n  RelatedEntityId String         @db.Uuid\n  Transactions    Transactions[]\n\n  @@index([RelatedEntityId], map: \"IX_CoinEvents_RelatedEntityId\")\n}\n\nmodel PasswordRecoveryCodes {\n  Id        String   @id(map: \"PK_PasswordRecoveryCodes\") @db.Uuid\n  Email     String   @unique(map: \"IX_PasswordRecoveryCodes_Email\")\n  Code      String\n  ExpiresAt DateTime @db.Timestamptz(6)\n}\n\nmodel Profiles {\n  Id           String        @id(map: \"PK_Profiles\") @db.Uuid\n  Name         String\n  SurName      String\n  CpfCnpj      String\n  DocumentType Int           @default(0)\n  Phone        String        @default(\"\")\n  AspNetUsers  AspNetUsers[]\n}\n\nmodel Tenants {\n  Id      String    @id(map: \"PK_Tenants\") @db.Uuid\n  Name    String\n  Clients Clients[]\n}\n\nmodel Transactions {\n  Id                String      @id(map: \"PK_Transactions\") @db.Uuid\n  ApplicationUserId String\n  CoinEventId       String?     @db.Uuid\n  Date              DateTime    @db.Timestamptz(6)\n  Amount            Int\n  AspNetUsers       AspNetUsers @relation(fields: [ApplicationUserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_Transactions_AspNetUsers_ApplicationUserId\")\n  CoinEvents        CoinEvents? @relation(fields: [CoinEventId], references: [Id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_Transactions_CoinEvents_CoinEventId\")\n\n  @@index([ApplicationUserId], map: \"IX_Transactions_ApplicationUserId\")\n  @@index([CoinEventId], map: \"IX_Transactions_CoinEventId\")\n}\n\nmodel UserAddresses {\n  Id           String        @id(map: \"PK_UserAddresses\") @db.Uuid\n  PostalCode   String\n  Street       String\n  Number       String\n  Country      String\n  State        String\n  City         String\n  Neighborhood String        @default(\"\")\n  Complement   String        @default(\"\")\n  AspNetUsers  AspNetUsers[]\n}\n\nmodel Wallets {\n  Id                Int         @id(map: \"PK_Wallets\") @default(autoincrement())\n  ApplicationUserId String      @unique(map: \"IX_Wallets_ApplicationUserId\")\n  Balance           Int\n  AspNetUsers       AspNetUsers @relation(fields: [ApplicationUserId], references: [Id], onDelete: Cascade, onUpdate: NoAction, map: \"FK_Wallets_AspNetUsers_ApplicationUserId\")\n}\n\nmodel EFMigrationsHistory {\n  MigrationId    String @id(map: \"PK___EFMigrationsHistory\") @db.VarChar(150)\n  ProductVersion String @db.VarChar(32)\n\n  @@map(\"__EFMigrationsHistory\")\n}\n",
  "inlineSchemaHash": "6a4a2821929e1519c73b56338079bf69f3df73f2392c6c2b7237d4f02152a671",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/ponei",
    "generated/ponei",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"AspNetUsers\":{\"dbName\":\"AspNetUsers\",\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NormalizedUserName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NormalizedEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EmailConfirmed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PasswordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SecurityStamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConcurrencyStamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNumberConfirmed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwoFactorEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LockoutEnd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LockoutEnabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AccessFailedCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserAddressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserOrigin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUserClaims\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUserClaims\",\"relationName\":\"AspNetUserClaimsToAspNetUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUserLogins\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUserLogins\",\"relationName\":\"AspNetUserLoginsToAspNetUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUserRoles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUserRoles\",\"relationName\":\"AspNetUserRolesToAspNetUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUserTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUserTokens\",\"relationName\":\"AspNetUserTokensToAspNetUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Profiles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profiles\",\"relationName\":\"AspNetUsersToProfiles\",\"relationFromFields\":[\"ProfileId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserAddresses\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserAddresses\",\"relationName\":\"AspNetUsersToUserAddresses\",\"relationFromFields\":[\"UserAddressId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"AspNetUsersToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Wallets\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wallets\",\"relationName\":\"AspNetUsersToWallets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetRoleClaims\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RoleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetRoles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetRoles\",\"relationName\":\"AspNetRoleClaimsToAspNetRoles\",\"relationFromFields\":[\"RoleId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetRoles\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NormalizedName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ConcurrencyStamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetRoleClaims\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetRoleClaims\",\"relationName\":\"AspNetRoleClaimsToAspNetRoles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUserRoles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUserRoles\",\"relationName\":\"AspNetRolesToAspNetUserRoles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetUserClaims\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUserClaimsToAspNetUsers\",\"relationFromFields\":[\"UserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetUserLogins\":{\"dbName\":null,\"fields\":[{\"name\":\"LoginProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderDisplayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUserLoginsToAspNetUsers\",\"relationFromFields\":[\"UserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"LoginProvider\",\"ProviderKey\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetUserRoles\":{\"dbName\":null,\"fields\":[{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RoleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetRoles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetRoles\",\"relationName\":\"AspNetRolesToAspNetUserRoles\",\"relationFromFields\":[\"RoleId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUserRolesToAspNetUsers\",\"relationFromFields\":[\"UserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"UserId\",\"RoleId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AspNetUserTokens\":{\"dbName\":null,\"fields\":[{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LoginProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUserTokensToAspNetUsers\",\"relationFromFields\":[\"UserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"UserId\",\"LoginProvider\",\"Name\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clients\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Secret\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TenantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tenants\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tenants\",\"relationName\":\"ClientsToTenants\",\"relationFromFields\":[\"TenantId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CoinEvents\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EventType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RelatedEntityId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"CoinEventsToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PasswordRecoveryCodes\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExpiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profiles\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SurName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CpfCnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUsersToProfiles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tenants\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Clients\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clients\",\"relationName\":\"ClientsToTenants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactions\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ApplicationUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoinEventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUsersToTransactions\",\"relationFromFields\":[\"ApplicationUserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoinEvents\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CoinEvents\",\"relationName\":\"CoinEventsToTransactions\",\"relationFromFields\":[\"CoinEventId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserAddresses\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Street\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"State\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"City\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Neighborhood\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Complement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUsersToUserAddresses\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wallets\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ApplicationUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AspNetUsers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AspNetUsers\",\"relationName\":\"AspNetUsersToWallets\",\"relationFromFields\":[\"ApplicationUserId\"],\"relationToFields\":[\"Id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EFMigrationsHistory\":{\"dbName\":\"__EFMigrationsHistory\",\"fields\":[{\"name\":\"MigrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/ponei/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/ponei/schema.prisma")
