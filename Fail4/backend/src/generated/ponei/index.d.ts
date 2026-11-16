
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AspNetUsers
 * 
 */
export type AspNetUsers = $Result.DefaultSelection<Prisma.$AspNetUsersPayload>
/**
 * Model AspNetRoleClaims
 * 
 */
export type AspNetRoleClaims = $Result.DefaultSelection<Prisma.$AspNetRoleClaimsPayload>
/**
 * Model AspNetRoles
 * 
 */
export type AspNetRoles = $Result.DefaultSelection<Prisma.$AspNetRolesPayload>
/**
 * Model AspNetUserClaims
 * 
 */
export type AspNetUserClaims = $Result.DefaultSelection<Prisma.$AspNetUserClaimsPayload>
/**
 * Model AspNetUserLogins
 * 
 */
export type AspNetUserLogins = $Result.DefaultSelection<Prisma.$AspNetUserLoginsPayload>
/**
 * Model AspNetUserRoles
 * 
 */
export type AspNetUserRoles = $Result.DefaultSelection<Prisma.$AspNetUserRolesPayload>
/**
 * Model AspNetUserTokens
 * 
 */
export type AspNetUserTokens = $Result.DefaultSelection<Prisma.$AspNetUserTokensPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model CoinEvents
 * 
 */
export type CoinEvents = $Result.DefaultSelection<Prisma.$CoinEventsPayload>
/**
 * Model PasswordRecoveryCodes
 * 
 */
export type PasswordRecoveryCodes = $Result.DefaultSelection<Prisma.$PasswordRecoveryCodesPayload>
/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Tenants
 * 
 */
export type Tenants = $Result.DefaultSelection<Prisma.$TenantsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model UserAddresses
 * 
 */
export type UserAddresses = $Result.DefaultSelection<Prisma.$UserAddressesPayload>
/**
 * Model Wallets
 * 
 */
export type Wallets = $Result.DefaultSelection<Prisma.$WalletsPayload>
/**
 * Model EFMigrationsHistory
 * 
 */
export type EFMigrationsHistory = $Result.DefaultSelection<Prisma.$EFMigrationsHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AspNetUsers
 * const aspNetUsers = await prisma.aspNetUsers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AspNetUsers
   * const aspNetUsers = await prisma.aspNetUsers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.aspNetUsers`: Exposes CRUD operations for the **AspNetUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetUsers
    * const aspNetUsers = await prisma.aspNetUsers.findMany()
    * ```
    */
  get aspNetUsers(): Prisma.AspNetUsersDelegate<ExtArgs>;

  /**
   * `prisma.aspNetRoleClaims`: Exposes CRUD operations for the **AspNetRoleClaims** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetRoleClaims
    * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findMany()
    * ```
    */
  get aspNetRoleClaims(): Prisma.AspNetRoleClaimsDelegate<ExtArgs>;

  /**
   * `prisma.aspNetRoles`: Exposes CRUD operations for the **AspNetRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetRoles
    * const aspNetRoles = await prisma.aspNetRoles.findMany()
    * ```
    */
  get aspNetRoles(): Prisma.AspNetRolesDelegate<ExtArgs>;

  /**
   * `prisma.aspNetUserClaims`: Exposes CRUD operations for the **AspNetUserClaims** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetUserClaims
    * const aspNetUserClaims = await prisma.aspNetUserClaims.findMany()
    * ```
    */
  get aspNetUserClaims(): Prisma.AspNetUserClaimsDelegate<ExtArgs>;

  /**
   * `prisma.aspNetUserLogins`: Exposes CRUD operations for the **AspNetUserLogins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetUserLogins
    * const aspNetUserLogins = await prisma.aspNetUserLogins.findMany()
    * ```
    */
  get aspNetUserLogins(): Prisma.AspNetUserLoginsDelegate<ExtArgs>;

  /**
   * `prisma.aspNetUserRoles`: Exposes CRUD operations for the **AspNetUserRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetUserRoles
    * const aspNetUserRoles = await prisma.aspNetUserRoles.findMany()
    * ```
    */
  get aspNetUserRoles(): Prisma.AspNetUserRolesDelegate<ExtArgs>;

  /**
   * `prisma.aspNetUserTokens`: Exposes CRUD operations for the **AspNetUserTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspNetUserTokens
    * const aspNetUserTokens = await prisma.aspNetUserTokens.findMany()
    * ```
    */
  get aspNetUserTokens(): Prisma.AspNetUserTokensDelegate<ExtArgs>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs>;

  /**
   * `prisma.coinEvents`: Exposes CRUD operations for the **CoinEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinEvents
    * const coinEvents = await prisma.coinEvents.findMany()
    * ```
    */
  get coinEvents(): Prisma.CoinEventsDelegate<ExtArgs>;

  /**
   * `prisma.passwordRecoveryCodes`: Exposes CRUD operations for the **PasswordRecoveryCodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordRecoveryCodes
    * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findMany()
    * ```
    */
  get passwordRecoveryCodes(): Prisma.PasswordRecoveryCodesDelegate<ExtArgs>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs>;

  /**
   * `prisma.tenants`: Exposes CRUD operations for the **Tenants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenants.findMany()
    * ```
    */
  get tenants(): Prisma.TenantsDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;

  /**
   * `prisma.userAddresses`: Exposes CRUD operations for the **UserAddresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddresses.findMany()
    * ```
    */
  get userAddresses(): Prisma.UserAddressesDelegate<ExtArgs>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **Wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.WalletsDelegate<ExtArgs>;

  /**
   * `prisma.eFMigrationsHistory`: Exposes CRUD operations for the **EFMigrationsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EFMigrationsHistories
    * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
    * ```
    */
  get eFMigrationsHistory(): Prisma.EFMigrationsHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "aspNetUsers" | "aspNetRoleClaims" | "aspNetRoles" | "aspNetUserClaims" | "aspNetUserLogins" | "aspNetUserRoles" | "aspNetUserTokens" | "clients" | "coinEvents" | "passwordRecoveryCodes" | "profiles" | "tenants" | "transactions" | "userAddresses" | "wallets" | "eFMigrationsHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AspNetUsers: {
        payload: Prisma.$AspNetUsersPayload<ExtArgs>
        fields: Prisma.AspNetUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          findFirst: {
            args: Prisma.AspNetUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          findMany: {
            args: Prisma.AspNetUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>[]
          }
          create: {
            args: Prisma.AspNetUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          createMany: {
            args: Prisma.AspNetUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetUsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>[]
          }
          delete: {
            args: Prisma.AspNetUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          update: {
            args: Prisma.AspNetUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          deleteMany: {
            args: Prisma.AspNetUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUsersPayload>
          }
          aggregate: {
            args: Prisma.AspNetUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetUsers>
          }
          groupBy: {
            args: Prisma.AspNetUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetUsersCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetUsersCountAggregateOutputType> | number
          }
        }
      }
      AspNetRoleClaims: {
        payload: Prisma.$AspNetRoleClaimsPayload<ExtArgs>
        fields: Prisma.AspNetRoleClaimsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetRoleClaimsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetRoleClaimsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          findFirst: {
            args: Prisma.AspNetRoleClaimsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetRoleClaimsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          findMany: {
            args: Prisma.AspNetRoleClaimsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>[]
          }
          create: {
            args: Prisma.AspNetRoleClaimsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          createMany: {
            args: Prisma.AspNetRoleClaimsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetRoleClaimsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>[]
          }
          delete: {
            args: Prisma.AspNetRoleClaimsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          update: {
            args: Prisma.AspNetRoleClaimsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          deleteMany: {
            args: Prisma.AspNetRoleClaimsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetRoleClaimsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetRoleClaimsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRoleClaimsPayload>
          }
          aggregate: {
            args: Prisma.AspNetRoleClaimsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetRoleClaims>
          }
          groupBy: {
            args: Prisma.AspNetRoleClaimsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetRoleClaimsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetRoleClaimsCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetRoleClaimsCountAggregateOutputType> | number
          }
        }
      }
      AspNetRoles: {
        payload: Prisma.$AspNetRolesPayload<ExtArgs>
        fields: Prisma.AspNetRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetRolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetRolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          findFirst: {
            args: Prisma.AspNetRolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetRolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          findMany: {
            args: Prisma.AspNetRolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>[]
          }
          create: {
            args: Prisma.AspNetRolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          createMany: {
            args: Prisma.AspNetRolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetRolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>[]
          }
          delete: {
            args: Prisma.AspNetRolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          update: {
            args: Prisma.AspNetRolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          deleteMany: {
            args: Prisma.AspNetRolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetRolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetRolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetRolesPayload>
          }
          aggregate: {
            args: Prisma.AspNetRolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetRoles>
          }
          groupBy: {
            args: Prisma.AspNetRolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetRolesCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetRolesCountAggregateOutputType> | number
          }
        }
      }
      AspNetUserClaims: {
        payload: Prisma.$AspNetUserClaimsPayload<ExtArgs>
        fields: Prisma.AspNetUserClaimsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetUserClaimsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetUserClaimsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          findFirst: {
            args: Prisma.AspNetUserClaimsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetUserClaimsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          findMany: {
            args: Prisma.AspNetUserClaimsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>[]
          }
          create: {
            args: Prisma.AspNetUserClaimsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          createMany: {
            args: Prisma.AspNetUserClaimsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetUserClaimsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>[]
          }
          delete: {
            args: Prisma.AspNetUserClaimsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          update: {
            args: Prisma.AspNetUserClaimsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          deleteMany: {
            args: Prisma.AspNetUserClaimsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetUserClaimsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetUserClaimsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserClaimsPayload>
          }
          aggregate: {
            args: Prisma.AspNetUserClaimsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetUserClaims>
          }
          groupBy: {
            args: Prisma.AspNetUserClaimsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserClaimsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetUserClaimsCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserClaimsCountAggregateOutputType> | number
          }
        }
      }
      AspNetUserLogins: {
        payload: Prisma.$AspNetUserLoginsPayload<ExtArgs>
        fields: Prisma.AspNetUserLoginsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetUserLoginsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetUserLoginsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          findFirst: {
            args: Prisma.AspNetUserLoginsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetUserLoginsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          findMany: {
            args: Prisma.AspNetUserLoginsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>[]
          }
          create: {
            args: Prisma.AspNetUserLoginsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          createMany: {
            args: Prisma.AspNetUserLoginsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetUserLoginsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>[]
          }
          delete: {
            args: Prisma.AspNetUserLoginsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          update: {
            args: Prisma.AspNetUserLoginsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          deleteMany: {
            args: Prisma.AspNetUserLoginsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetUserLoginsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetUserLoginsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserLoginsPayload>
          }
          aggregate: {
            args: Prisma.AspNetUserLoginsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetUserLogins>
          }
          groupBy: {
            args: Prisma.AspNetUserLoginsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserLoginsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetUserLoginsCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserLoginsCountAggregateOutputType> | number
          }
        }
      }
      AspNetUserRoles: {
        payload: Prisma.$AspNetUserRolesPayload<ExtArgs>
        fields: Prisma.AspNetUserRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetUserRolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetUserRolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          findFirst: {
            args: Prisma.AspNetUserRolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetUserRolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          findMany: {
            args: Prisma.AspNetUserRolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>[]
          }
          create: {
            args: Prisma.AspNetUserRolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          createMany: {
            args: Prisma.AspNetUserRolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetUserRolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>[]
          }
          delete: {
            args: Prisma.AspNetUserRolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          update: {
            args: Prisma.AspNetUserRolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          deleteMany: {
            args: Prisma.AspNetUserRolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetUserRolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetUserRolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserRolesPayload>
          }
          aggregate: {
            args: Prisma.AspNetUserRolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetUserRoles>
          }
          groupBy: {
            args: Prisma.AspNetUserRolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetUserRolesCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserRolesCountAggregateOutputType> | number
          }
        }
      }
      AspNetUserTokens: {
        payload: Prisma.$AspNetUserTokensPayload<ExtArgs>
        fields: Prisma.AspNetUserTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspNetUserTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspNetUserTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          findFirst: {
            args: Prisma.AspNetUserTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspNetUserTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          findMany: {
            args: Prisma.AspNetUserTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>[]
          }
          create: {
            args: Prisma.AspNetUserTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          createMany: {
            args: Prisma.AspNetUserTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AspNetUserTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>[]
          }
          delete: {
            args: Prisma.AspNetUserTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          update: {
            args: Prisma.AspNetUserTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          deleteMany: {
            args: Prisma.AspNetUserTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspNetUserTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspNetUserTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspNetUserTokensPayload>
          }
          aggregate: {
            args: Prisma.AspNetUserTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspNetUserTokens>
          }
          groupBy: {
            args: Prisma.AspNetUserTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspNetUserTokensCountArgs<ExtArgs>
            result: $Utils.Optional<AspNetUserTokensCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      CoinEvents: {
        payload: Prisma.$CoinEventsPayload<ExtArgs>
        fields: Prisma.CoinEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          findFirst: {
            args: Prisma.CoinEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          findMany: {
            args: Prisma.CoinEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>[]
          }
          create: {
            args: Prisma.CoinEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          createMany: {
            args: Prisma.CoinEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinEventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>[]
          }
          delete: {
            args: Prisma.CoinEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          update: {
            args: Prisma.CoinEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          deleteMany: {
            args: Prisma.CoinEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoinEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinEventsPayload>
          }
          aggregate: {
            args: Prisma.CoinEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoinEvents>
          }
          groupBy: {
            args: Prisma.CoinEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinEventsCountArgs<ExtArgs>
            result: $Utils.Optional<CoinEventsCountAggregateOutputType> | number
          }
        }
      }
      PasswordRecoveryCodes: {
        payload: Prisma.$PasswordRecoveryCodesPayload<ExtArgs>
        fields: Prisma.PasswordRecoveryCodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordRecoveryCodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordRecoveryCodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          findFirst: {
            args: Prisma.PasswordRecoveryCodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordRecoveryCodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          findMany: {
            args: Prisma.PasswordRecoveryCodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>[]
          }
          create: {
            args: Prisma.PasswordRecoveryCodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          createMany: {
            args: Prisma.PasswordRecoveryCodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordRecoveryCodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>[]
          }
          delete: {
            args: Prisma.PasswordRecoveryCodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          update: {
            args: Prisma.PasswordRecoveryCodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          deleteMany: {
            args: Prisma.PasswordRecoveryCodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordRecoveryCodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordRecoveryCodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryCodesPayload>
          }
          aggregate: {
            args: Prisma.PasswordRecoveryCodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordRecoveryCodes>
          }
          groupBy: {
            args: Prisma.PasswordRecoveryCodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryCodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordRecoveryCodesCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryCodesCountAggregateOutputType> | number
          }
        }
      }
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Tenants: {
        payload: Prisma.$TenantsPayload<ExtArgs>
        fields: Prisma.TenantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          findFirst: {
            args: Prisma.TenantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          findMany: {
            args: Prisma.TenantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>[]
          }
          create: {
            args: Prisma.TenantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          createMany: {
            args: Prisma.TenantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>[]
          }
          delete: {
            args: Prisma.TenantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          update: {
            args: Prisma.TenantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          deleteMany: {
            args: Prisma.TenantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>
          }
          aggregate: {
            args: Prisma.TenantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenants>
          }
          groupBy: {
            args: Prisma.TenantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      UserAddresses: {
        payload: Prisma.$UserAddressesPayload<ExtArgs>
        fields: Prisma.UserAddressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          findFirst: {
            args: Prisma.UserAddressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          findMany: {
            args: Prisma.UserAddressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>[]
          }
          create: {
            args: Prisma.UserAddressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          createMany: {
            args: Prisma.UserAddressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAddressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>[]
          }
          delete: {
            args: Prisma.UserAddressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          update: {
            args: Prisma.UserAddressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAddressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressesPayload>
          }
          aggregate: {
            args: Prisma.UserAddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddresses>
          }
          groupBy: {
            args: Prisma.UserAddressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressesCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressesCountAggregateOutputType> | number
          }
        }
      }
      Wallets: {
        payload: Prisma.$WalletsPayload<ExtArgs>
        fields: Prisma.WalletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          findFirst: {
            args: Prisma.WalletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          findMany: {
            args: Prisma.WalletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>[]
          }
          create: {
            args: Prisma.WalletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          createMany: {
            args: Prisma.WalletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>[]
          }
          delete: {
            args: Prisma.WalletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          update: {
            args: Prisma.WalletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          deleteMany: {
            args: Prisma.WalletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.WalletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
          }
        }
      }
      EFMigrationsHistory: {
        payload: Prisma.$EFMigrationsHistoryPayload<ExtArgs>
        fields: Prisma.EFMigrationsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EFMigrationsHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findFirst: {
            args: Prisma.EFMigrationsHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          findMany: {
            args: Prisma.EFMigrationsHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          create: {
            args: Prisma.EFMigrationsHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          createMany: {
            args: Prisma.EFMigrationsHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>[]
          }
          delete: {
            args: Prisma.EFMigrationsHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          update: {
            args: Prisma.EFMigrationsHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.EFMigrationsHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EFMigrationsHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EFMigrationsHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EFMigrationsHistoryPayload>
          }
          aggregate: {
            args: Prisma.EFMigrationsHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEFMigrationsHistory>
          }
          groupBy: {
            args: Prisma.EFMigrationsHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EFMigrationsHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<EFMigrationsHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AspNetUsersCountOutputType
   */

  export type AspNetUsersCountOutputType = {
    AspNetUserClaims: number
    AspNetUserLogins: number
    AspNetUserRoles: number
    AspNetUserTokens: number
    Transactions: number
  }

  export type AspNetUsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUserClaims?: boolean | AspNetUsersCountOutputTypeCountAspNetUserClaimsArgs
    AspNetUserLogins?: boolean | AspNetUsersCountOutputTypeCountAspNetUserLoginsArgs
    AspNetUserRoles?: boolean | AspNetUsersCountOutputTypeCountAspNetUserRolesArgs
    AspNetUserTokens?: boolean | AspNetUsersCountOutputTypeCountAspNetUserTokensArgs
    Transactions?: boolean | AspNetUsersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsersCountOutputType
     */
    select?: AspNetUsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeCountAspNetUserClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserClaimsWhereInput
  }

  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeCountAspNetUserLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserLoginsWhereInput
  }

  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeCountAspNetUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserRolesWhereInput
  }

  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeCountAspNetUserTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserTokensWhereInput
  }

  /**
   * AspNetUsersCountOutputType without action
   */
  export type AspNetUsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type AspNetRolesCountOutputType
   */

  export type AspNetRolesCountOutputType = {
    AspNetRoleClaims: number
    AspNetUserRoles: number
  }

  export type AspNetRolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoleClaims?: boolean | AspNetRolesCountOutputTypeCountAspNetRoleClaimsArgs
    AspNetUserRoles?: boolean | AspNetRolesCountOutputTypeCountAspNetUserRolesArgs
  }

  // Custom InputTypes
  /**
   * AspNetRolesCountOutputType without action
   */
  export type AspNetRolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRolesCountOutputType
     */
    select?: AspNetRolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AspNetRolesCountOutputType without action
   */
  export type AspNetRolesCountOutputTypeCountAspNetRoleClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetRoleClaimsWhereInput
  }

  /**
   * AspNetRolesCountOutputType without action
   */
  export type AspNetRolesCountOutputTypeCountAspNetUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserRolesWhereInput
  }


  /**
   * Count Type CoinEventsCountOutputType
   */

  export type CoinEventsCountOutputType = {
    Transactions: number
  }

  export type CoinEventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | CoinEventsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CoinEventsCountOutputType without action
   */
  export type CoinEventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEventsCountOutputType
     */
    select?: CoinEventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoinEventsCountOutputType without action
   */
  export type CoinEventsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    AspNetUsers: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | ProfilesCountOutputTypeCountAspNetUsersArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountAspNetUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUsersWhereInput
  }


  /**
   * Count Type TenantsCountOutputType
   */

  export type TenantsCountOutputType = {
    Clients: number
  }

  export type TenantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | TenantsCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantsCountOutputType
     */
    select?: TenantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
  }


  /**
   * Count Type UserAddressesCountOutputType
   */

  export type UserAddressesCountOutputType = {
    AspNetUsers: number
  }

  export type UserAddressesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | UserAddressesCountOutputTypeCountAspNetUsersArgs
  }

  // Custom InputTypes
  /**
   * UserAddressesCountOutputType without action
   */
  export type UserAddressesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddressesCountOutputType
     */
    select?: UserAddressesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAddressesCountOutputType without action
   */
  export type UserAddressesCountOutputTypeCountAspNetUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AspNetUsers
   */

  export type AggregateAspNetUsers = {
    _count: AspNetUsersCountAggregateOutputType | null
    _avg: AspNetUsersAvgAggregateOutputType | null
    _sum: AspNetUsersSumAggregateOutputType | null
    _min: AspNetUsersMinAggregateOutputType | null
    _max: AspNetUsersMaxAggregateOutputType | null
  }

  export type AspNetUsersAvgAggregateOutputType = {
    AccessFailedCount: number | null
    UserOrigin: number | null
  }

  export type AspNetUsersSumAggregateOutputType = {
    AccessFailedCount: number | null
    UserOrigin: number | null
  }

  export type AspNetUsersMinAggregateOutputType = {
    Id: string | null
    ProfileId: string | null
    UserName: string | null
    NormalizedUserName: string | null
    Email: string | null
    NormalizedEmail: string | null
    EmailConfirmed: boolean | null
    PasswordHash: string | null
    SecurityStamp: string | null
    ConcurrencyStamp: string | null
    PhoneNumber: string | null
    PhoneNumberConfirmed: boolean | null
    TwoFactorEnabled: boolean | null
    LockoutEnd: Date | null
    LockoutEnabled: boolean | null
    AccessFailedCount: number | null
    UserAddressId: string | null
    UserOrigin: number | null
  }

  export type AspNetUsersMaxAggregateOutputType = {
    Id: string | null
    ProfileId: string | null
    UserName: string | null
    NormalizedUserName: string | null
    Email: string | null
    NormalizedEmail: string | null
    EmailConfirmed: boolean | null
    PasswordHash: string | null
    SecurityStamp: string | null
    ConcurrencyStamp: string | null
    PhoneNumber: string | null
    PhoneNumberConfirmed: boolean | null
    TwoFactorEnabled: boolean | null
    LockoutEnd: Date | null
    LockoutEnabled: boolean | null
    AccessFailedCount: number | null
    UserAddressId: string | null
    UserOrigin: number | null
  }

  export type AspNetUsersCountAggregateOutputType = {
    Id: number
    ProfileId: number
    UserName: number
    NormalizedUserName: number
    Email: number
    NormalizedEmail: number
    EmailConfirmed: number
    PasswordHash: number
    SecurityStamp: number
    ConcurrencyStamp: number
    PhoneNumber: number
    PhoneNumberConfirmed: number
    TwoFactorEnabled: number
    LockoutEnd: number
    LockoutEnabled: number
    AccessFailedCount: number
    UserAddressId: number
    UserOrigin: number
    _all: number
  }


  export type AspNetUsersAvgAggregateInputType = {
    AccessFailedCount?: true
    UserOrigin?: true
  }

  export type AspNetUsersSumAggregateInputType = {
    AccessFailedCount?: true
    UserOrigin?: true
  }

  export type AspNetUsersMinAggregateInputType = {
    Id?: true
    ProfileId?: true
    UserName?: true
    NormalizedUserName?: true
    Email?: true
    NormalizedEmail?: true
    EmailConfirmed?: true
    PasswordHash?: true
    SecurityStamp?: true
    ConcurrencyStamp?: true
    PhoneNumber?: true
    PhoneNumberConfirmed?: true
    TwoFactorEnabled?: true
    LockoutEnd?: true
    LockoutEnabled?: true
    AccessFailedCount?: true
    UserAddressId?: true
    UserOrigin?: true
  }

  export type AspNetUsersMaxAggregateInputType = {
    Id?: true
    ProfileId?: true
    UserName?: true
    NormalizedUserName?: true
    Email?: true
    NormalizedEmail?: true
    EmailConfirmed?: true
    PasswordHash?: true
    SecurityStamp?: true
    ConcurrencyStamp?: true
    PhoneNumber?: true
    PhoneNumberConfirmed?: true
    TwoFactorEnabled?: true
    LockoutEnd?: true
    LockoutEnabled?: true
    AccessFailedCount?: true
    UserAddressId?: true
    UserOrigin?: true
  }

  export type AspNetUsersCountAggregateInputType = {
    Id?: true
    ProfileId?: true
    UserName?: true
    NormalizedUserName?: true
    Email?: true
    NormalizedEmail?: true
    EmailConfirmed?: true
    PasswordHash?: true
    SecurityStamp?: true
    ConcurrencyStamp?: true
    PhoneNumber?: true
    PhoneNumberConfirmed?: true
    TwoFactorEnabled?: true
    LockoutEnd?: true
    LockoutEnabled?: true
    AccessFailedCount?: true
    UserAddressId?: true
    UserOrigin?: true
    _all?: true
  }

  export type AspNetUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUsers to aggregate.
     */
    where?: AspNetUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUsers to fetch.
     */
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetUsers
    **/
    _count?: true | AspNetUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AspNetUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AspNetUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetUsersMaxAggregateInputType
  }

  export type GetAspNetUsersAggregateType<T extends AspNetUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetUsers[P]>
      : GetScalarType<T[P], AggregateAspNetUsers[P]>
  }




  export type AspNetUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUsersWhereInput
    orderBy?: AspNetUsersOrderByWithAggregationInput | AspNetUsersOrderByWithAggregationInput[]
    by: AspNetUsersScalarFieldEnum[] | AspNetUsersScalarFieldEnum
    having?: AspNetUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetUsersCountAggregateInputType | true
    _avg?: AspNetUsersAvgAggregateInputType
    _sum?: AspNetUsersSumAggregateInputType
    _min?: AspNetUsersMinAggregateInputType
    _max?: AspNetUsersMaxAggregateInputType
  }

  export type AspNetUsersGroupByOutputType = {
    Id: string
    ProfileId: string | null
    UserName: string | null
    NormalizedUserName: string | null
    Email: string | null
    NormalizedEmail: string | null
    EmailConfirmed: boolean
    PasswordHash: string | null
    SecurityStamp: string | null
    ConcurrencyStamp: string | null
    PhoneNumber: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd: Date | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId: string | null
    UserOrigin: number
    _count: AspNetUsersCountAggregateOutputType | null
    _avg: AspNetUsersAvgAggregateOutputType | null
    _sum: AspNetUsersSumAggregateOutputType | null
    _min: AspNetUsersMinAggregateOutputType | null
    _max: AspNetUsersMaxAggregateOutputType | null
  }

  type GetAspNetUsersGroupByPayload<T extends AspNetUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetUsersGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetUsersGroupByOutputType[P]>
        }
      >
    >


  export type AspNetUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ProfileId?: boolean
    UserName?: boolean
    NormalizedUserName?: boolean
    Email?: boolean
    NormalizedEmail?: boolean
    EmailConfirmed?: boolean
    PasswordHash?: boolean
    SecurityStamp?: boolean
    ConcurrencyStamp?: boolean
    PhoneNumber?: boolean
    PhoneNumberConfirmed?: boolean
    TwoFactorEnabled?: boolean
    LockoutEnd?: boolean
    LockoutEnabled?: boolean
    AccessFailedCount?: boolean
    UserAddressId?: boolean
    UserOrigin?: boolean
    AspNetUserClaims?: boolean | AspNetUsers$AspNetUserClaimsArgs<ExtArgs>
    AspNetUserLogins?: boolean | AspNetUsers$AspNetUserLoginsArgs<ExtArgs>
    AspNetUserRoles?: boolean | AspNetUsers$AspNetUserRolesArgs<ExtArgs>
    AspNetUserTokens?: boolean | AspNetUsers$AspNetUserTokensArgs<ExtArgs>
    Profiles?: boolean | AspNetUsers$ProfilesArgs<ExtArgs>
    UserAddresses?: boolean | AspNetUsers$UserAddressesArgs<ExtArgs>
    Transactions?: boolean | AspNetUsers$TransactionsArgs<ExtArgs>
    Wallets?: boolean | AspNetUsers$WalletsArgs<ExtArgs>
    _count?: boolean | AspNetUsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUsers"]>

  export type AspNetUsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ProfileId?: boolean
    UserName?: boolean
    NormalizedUserName?: boolean
    Email?: boolean
    NormalizedEmail?: boolean
    EmailConfirmed?: boolean
    PasswordHash?: boolean
    SecurityStamp?: boolean
    ConcurrencyStamp?: boolean
    PhoneNumber?: boolean
    PhoneNumberConfirmed?: boolean
    TwoFactorEnabled?: boolean
    LockoutEnd?: boolean
    LockoutEnabled?: boolean
    AccessFailedCount?: boolean
    UserAddressId?: boolean
    UserOrigin?: boolean
    Profiles?: boolean | AspNetUsers$ProfilesArgs<ExtArgs>
    UserAddresses?: boolean | AspNetUsers$UserAddressesArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUsers"]>

  export type AspNetUsersSelectScalar = {
    Id?: boolean
    ProfileId?: boolean
    UserName?: boolean
    NormalizedUserName?: boolean
    Email?: boolean
    NormalizedEmail?: boolean
    EmailConfirmed?: boolean
    PasswordHash?: boolean
    SecurityStamp?: boolean
    ConcurrencyStamp?: boolean
    PhoneNumber?: boolean
    PhoneNumberConfirmed?: boolean
    TwoFactorEnabled?: boolean
    LockoutEnd?: boolean
    LockoutEnabled?: boolean
    AccessFailedCount?: boolean
    UserAddressId?: boolean
    UserOrigin?: boolean
  }

  export type AspNetUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUserClaims?: boolean | AspNetUsers$AspNetUserClaimsArgs<ExtArgs>
    AspNetUserLogins?: boolean | AspNetUsers$AspNetUserLoginsArgs<ExtArgs>
    AspNetUserRoles?: boolean | AspNetUsers$AspNetUserRolesArgs<ExtArgs>
    AspNetUserTokens?: boolean | AspNetUsers$AspNetUserTokensArgs<ExtArgs>
    Profiles?: boolean | AspNetUsers$ProfilesArgs<ExtArgs>
    UserAddresses?: boolean | AspNetUsers$UserAddressesArgs<ExtArgs>
    Transactions?: boolean | AspNetUsers$TransactionsArgs<ExtArgs>
    Wallets?: boolean | AspNetUsers$WalletsArgs<ExtArgs>
    _count?: boolean | AspNetUsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AspNetUsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Profiles?: boolean | AspNetUsers$ProfilesArgs<ExtArgs>
    UserAddresses?: boolean | AspNetUsers$UserAddressesArgs<ExtArgs>
  }

  export type $AspNetUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetUsers"
    objects: {
      AspNetUserClaims: Prisma.$AspNetUserClaimsPayload<ExtArgs>[]
      AspNetUserLogins: Prisma.$AspNetUserLoginsPayload<ExtArgs>[]
      AspNetUserRoles: Prisma.$AspNetUserRolesPayload<ExtArgs>[]
      AspNetUserTokens: Prisma.$AspNetUserTokensPayload<ExtArgs>[]
      Profiles: Prisma.$ProfilesPayload<ExtArgs> | null
      UserAddresses: Prisma.$UserAddressesPayload<ExtArgs> | null
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      Wallets: Prisma.$WalletsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      ProfileId: string | null
      UserName: string | null
      NormalizedUserName: string | null
      Email: string | null
      NormalizedEmail: string | null
      EmailConfirmed: boolean
      PasswordHash: string | null
      SecurityStamp: string | null
      ConcurrencyStamp: string | null
      PhoneNumber: string | null
      PhoneNumberConfirmed: boolean
      TwoFactorEnabled: boolean
      LockoutEnd: Date | null
      LockoutEnabled: boolean
      AccessFailedCount: number
      UserAddressId: string | null
      UserOrigin: number
    }, ExtArgs["result"]["aspNetUsers"]>
    composites: {}
  }

  type AspNetUsersGetPayload<S extends boolean | null | undefined | AspNetUsersDefaultArgs> = $Result.GetResult<Prisma.$AspNetUsersPayload, S>

  type AspNetUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetUsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetUsersCountAggregateInputType | true
    }

  export interface AspNetUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetUsers'], meta: { name: 'AspNetUsers' } }
    /**
     * Find zero or one AspNetUsers that matches the filter.
     * @param {AspNetUsersFindUniqueArgs} args - Arguments to find a AspNetUsers
     * @example
     * // Get one AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetUsersFindUniqueArgs>(args: SelectSubset<T, AspNetUsersFindUniqueArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetUsers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetUsersFindUniqueOrThrowArgs} args - Arguments to find a AspNetUsers
     * @example
     * // Get one AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersFindFirstArgs} args - Arguments to find a AspNetUsers
     * @example
     * // Get one AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetUsersFindFirstArgs>(args?: SelectSubset<T, AspNetUsersFindFirstArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersFindFirstOrThrowArgs} args - Arguments to find a AspNetUsers
     * @example
     * // Get one AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findMany()
     * 
     * // Get first 10 AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const aspNetUsersWithIdOnly = await prisma.aspNetUsers.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AspNetUsersFindManyArgs>(args?: SelectSubset<T, AspNetUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetUsers.
     * @param {AspNetUsersCreateArgs} args - Arguments to create a AspNetUsers.
     * @example
     * // Create one AspNetUsers
     * const AspNetUsers = await prisma.aspNetUsers.create({
     *   data: {
     *     // ... data to create a AspNetUsers
     *   }
     * })
     * 
     */
    create<T extends AspNetUsersCreateArgs>(args: SelectSubset<T, AspNetUsersCreateArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetUsers.
     * @param {AspNetUsersCreateManyArgs} args - Arguments to create many AspNetUsers.
     * @example
     * // Create many AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetUsersCreateManyArgs>(args?: SelectSubset<T, AspNetUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetUsers and returns the data saved in the database.
     * @param {AspNetUsersCreateManyAndReturnArgs} args - Arguments to create many AspNetUsers.
     * @example
     * // Create many AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetUsers and only return the `Id`
     * const aspNetUsersWithIdOnly = await prisma.aspNetUsers.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetUsersCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetUsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetUsers.
     * @param {AspNetUsersDeleteArgs} args - Arguments to delete one AspNetUsers.
     * @example
     * // Delete one AspNetUsers
     * const AspNetUsers = await prisma.aspNetUsers.delete({
     *   where: {
     *     // ... filter to delete one AspNetUsers
     *   }
     * })
     * 
     */
    delete<T extends AspNetUsersDeleteArgs>(args: SelectSubset<T, AspNetUsersDeleteArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetUsers.
     * @param {AspNetUsersUpdateArgs} args - Arguments to update one AspNetUsers.
     * @example
     * // Update one AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetUsersUpdateArgs>(args: SelectSubset<T, AspNetUsersUpdateArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetUsers.
     * @param {AspNetUsersDeleteManyArgs} args - Arguments to filter AspNetUsers to delete.
     * @example
     * // Delete a few AspNetUsers
     * const { count } = await prisma.aspNetUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetUsersDeleteManyArgs>(args?: SelectSubset<T, AspNetUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetUsersUpdateManyArgs>(args: SelectSubset<T, AspNetUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetUsers.
     * @param {AspNetUsersUpsertArgs} args - Arguments to update or create a AspNetUsers.
     * @example
     * // Update or create a AspNetUsers
     * const aspNetUsers = await prisma.aspNetUsers.upsert({
     *   create: {
     *     // ... data to create a AspNetUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetUsers we want to update
     *   }
     * })
     */
    upsert<T extends AspNetUsersUpsertArgs>(args: SelectSubset<T, AspNetUsersUpsertArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersCountArgs} args - Arguments to filter AspNetUsers to count.
     * @example
     * // Count the number of AspNetUsers
     * const count = await prisma.aspNetUsers.count({
     *   where: {
     *     // ... the filter for the AspNetUsers we want to count
     *   }
     * })
    **/
    count<T extends AspNetUsersCountArgs>(
      args?: Subset<T, AspNetUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetUsersAggregateArgs>(args: Subset<T, AspNetUsersAggregateArgs>): Prisma.PrismaPromise<GetAspNetUsersAggregateType<T>>

    /**
     * Group by AspNetUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetUsersGroupByArgs['orderBy'] }
        : { orderBy?: AspNetUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetUsers model
   */
  readonly fields: AspNetUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUserClaims<T extends AspNetUsers$AspNetUserClaimsArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$AspNetUserClaimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findMany"> | Null>
    AspNetUserLogins<T extends AspNetUsers$AspNetUserLoginsArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$AspNetUserLoginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findMany"> | Null>
    AspNetUserRoles<T extends AspNetUsers$AspNetUserRolesArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$AspNetUserRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findMany"> | Null>
    AspNetUserTokens<T extends AspNetUsers$AspNetUserTokensArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$AspNetUserTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findMany"> | Null>
    Profiles<T extends AspNetUsers$ProfilesArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$ProfilesArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    UserAddresses<T extends AspNetUsers$UserAddressesArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$UserAddressesArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transactions<T extends AspNetUsers$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    Wallets<T extends AspNetUsers$WalletsArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsers$WalletsArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetUsers model
   */ 
  interface AspNetUsersFieldRefs {
    readonly Id: FieldRef<"AspNetUsers", 'String'>
    readonly ProfileId: FieldRef<"AspNetUsers", 'String'>
    readonly UserName: FieldRef<"AspNetUsers", 'String'>
    readonly NormalizedUserName: FieldRef<"AspNetUsers", 'String'>
    readonly Email: FieldRef<"AspNetUsers", 'String'>
    readonly NormalizedEmail: FieldRef<"AspNetUsers", 'String'>
    readonly EmailConfirmed: FieldRef<"AspNetUsers", 'Boolean'>
    readonly PasswordHash: FieldRef<"AspNetUsers", 'String'>
    readonly SecurityStamp: FieldRef<"AspNetUsers", 'String'>
    readonly ConcurrencyStamp: FieldRef<"AspNetUsers", 'String'>
    readonly PhoneNumber: FieldRef<"AspNetUsers", 'String'>
    readonly PhoneNumberConfirmed: FieldRef<"AspNetUsers", 'Boolean'>
    readonly TwoFactorEnabled: FieldRef<"AspNetUsers", 'Boolean'>
    readonly LockoutEnd: FieldRef<"AspNetUsers", 'DateTime'>
    readonly LockoutEnabled: FieldRef<"AspNetUsers", 'Boolean'>
    readonly AccessFailedCount: FieldRef<"AspNetUsers", 'Int'>
    readonly UserAddressId: FieldRef<"AspNetUsers", 'String'>
    readonly UserOrigin: FieldRef<"AspNetUsers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AspNetUsers findUnique
   */
  export type AspNetUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUsers to fetch.
     */
    where: AspNetUsersWhereUniqueInput
  }

  /**
   * AspNetUsers findUniqueOrThrow
   */
  export type AspNetUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUsers to fetch.
     */
    where: AspNetUsersWhereUniqueInput
  }

  /**
   * AspNetUsers findFirst
   */
  export type AspNetUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUsers to fetch.
     */
    where?: AspNetUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUsers to fetch.
     */
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUsers.
     */
    cursor?: AspNetUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUsers.
     */
    distinct?: AspNetUsersScalarFieldEnum | AspNetUsersScalarFieldEnum[]
  }

  /**
   * AspNetUsers findFirstOrThrow
   */
  export type AspNetUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUsers to fetch.
     */
    where?: AspNetUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUsers to fetch.
     */
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUsers.
     */
    cursor?: AspNetUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUsers.
     */
    distinct?: AspNetUsersScalarFieldEnum | AspNetUsersScalarFieldEnum[]
  }

  /**
   * AspNetUsers findMany
   */
  export type AspNetUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUsers to fetch.
     */
    where?: AspNetUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUsers to fetch.
     */
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetUsers.
     */
    cursor?: AspNetUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUsers.
     */
    skip?: number
    distinct?: AspNetUsersScalarFieldEnum | AspNetUsersScalarFieldEnum[]
  }

  /**
   * AspNetUsers create
   */
  export type AspNetUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetUsers.
     */
    data: XOR<AspNetUsersCreateInput, AspNetUsersUncheckedCreateInput>
  }

  /**
   * AspNetUsers createMany
   */
  export type AspNetUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetUsers.
     */
    data: AspNetUsersCreateManyInput | AspNetUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetUsers createManyAndReturn
   */
  export type AspNetUsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetUsers.
     */
    data: AspNetUsersCreateManyInput | AspNetUsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetUsers update
   */
  export type AspNetUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetUsers.
     */
    data: XOR<AspNetUsersUpdateInput, AspNetUsersUncheckedUpdateInput>
    /**
     * Choose, which AspNetUsers to update.
     */
    where: AspNetUsersWhereUniqueInput
  }

  /**
   * AspNetUsers updateMany
   */
  export type AspNetUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetUsers.
     */
    data: XOR<AspNetUsersUpdateManyMutationInput, AspNetUsersUncheckedUpdateManyInput>
    /**
     * Filter which AspNetUsers to update
     */
    where?: AspNetUsersWhereInput
  }

  /**
   * AspNetUsers upsert
   */
  export type AspNetUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetUsers to update in case it exists.
     */
    where: AspNetUsersWhereUniqueInput
    /**
     * In case the AspNetUsers found by the `where` argument doesn't exist, create a new AspNetUsers with this data.
     */
    create: XOR<AspNetUsersCreateInput, AspNetUsersUncheckedCreateInput>
    /**
     * In case the AspNetUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetUsersUpdateInput, AspNetUsersUncheckedUpdateInput>
  }

  /**
   * AspNetUsers delete
   */
  export type AspNetUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    /**
     * Filter which AspNetUsers to delete.
     */
    where: AspNetUsersWhereUniqueInput
  }

  /**
   * AspNetUsers deleteMany
   */
  export type AspNetUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUsers to delete
     */
    where?: AspNetUsersWhereInput
  }

  /**
   * AspNetUsers.AspNetUserClaims
   */
  export type AspNetUsers$AspNetUserClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    where?: AspNetUserClaimsWhereInput
    orderBy?: AspNetUserClaimsOrderByWithRelationInput | AspNetUserClaimsOrderByWithRelationInput[]
    cursor?: AspNetUserClaimsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUserClaimsScalarFieldEnum | AspNetUserClaimsScalarFieldEnum[]
  }

  /**
   * AspNetUsers.AspNetUserLogins
   */
  export type AspNetUsers$AspNetUserLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    where?: AspNetUserLoginsWhereInput
    orderBy?: AspNetUserLoginsOrderByWithRelationInput | AspNetUserLoginsOrderByWithRelationInput[]
    cursor?: AspNetUserLoginsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUserLoginsScalarFieldEnum | AspNetUserLoginsScalarFieldEnum[]
  }

  /**
   * AspNetUsers.AspNetUserRoles
   */
  export type AspNetUsers$AspNetUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    where?: AspNetUserRolesWhereInput
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    cursor?: AspNetUserRolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUserRolesScalarFieldEnum | AspNetUserRolesScalarFieldEnum[]
  }

  /**
   * AspNetUsers.AspNetUserTokens
   */
  export type AspNetUsers$AspNetUserTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    where?: AspNetUserTokensWhereInput
    orderBy?: AspNetUserTokensOrderByWithRelationInput | AspNetUserTokensOrderByWithRelationInput[]
    cursor?: AspNetUserTokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUserTokensScalarFieldEnum | AspNetUserTokensScalarFieldEnum[]
  }

  /**
   * AspNetUsers.Profiles
   */
  export type AspNetUsers$ProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
  }

  /**
   * AspNetUsers.UserAddresses
   */
  export type AspNetUsers$UserAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    where?: UserAddressesWhereInput
  }

  /**
   * AspNetUsers.Transactions
   */
  export type AspNetUsers$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * AspNetUsers.Wallets
   */
  export type AspNetUsers$WalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    where?: WalletsWhereInput
  }

  /**
   * AspNetUsers without action
   */
  export type AspNetUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
  }


  /**
   * Model AspNetRoleClaims
   */

  export type AggregateAspNetRoleClaims = {
    _count: AspNetRoleClaimsCountAggregateOutputType | null
    _avg: AspNetRoleClaimsAvgAggregateOutputType | null
    _sum: AspNetRoleClaimsSumAggregateOutputType | null
    _min: AspNetRoleClaimsMinAggregateOutputType | null
    _max: AspNetRoleClaimsMaxAggregateOutputType | null
  }

  export type AspNetRoleClaimsAvgAggregateOutputType = {
    Id: number | null
  }

  export type AspNetRoleClaimsSumAggregateOutputType = {
    Id: number | null
  }

  export type AspNetRoleClaimsMinAggregateOutputType = {
    Id: number | null
    RoleId: string | null
    ClaimType: string | null
    ClaimValue: string | null
  }

  export type AspNetRoleClaimsMaxAggregateOutputType = {
    Id: number | null
    RoleId: string | null
    ClaimType: string | null
    ClaimValue: string | null
  }

  export type AspNetRoleClaimsCountAggregateOutputType = {
    Id: number
    RoleId: number
    ClaimType: number
    ClaimValue: number
    _all: number
  }


  export type AspNetRoleClaimsAvgAggregateInputType = {
    Id?: true
  }

  export type AspNetRoleClaimsSumAggregateInputType = {
    Id?: true
  }

  export type AspNetRoleClaimsMinAggregateInputType = {
    Id?: true
    RoleId?: true
    ClaimType?: true
    ClaimValue?: true
  }

  export type AspNetRoleClaimsMaxAggregateInputType = {
    Id?: true
    RoleId?: true
    ClaimType?: true
    ClaimValue?: true
  }

  export type AspNetRoleClaimsCountAggregateInputType = {
    Id?: true
    RoleId?: true
    ClaimType?: true
    ClaimValue?: true
    _all?: true
  }

  export type AspNetRoleClaimsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetRoleClaims to aggregate.
     */
    where?: AspNetRoleClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoleClaims to fetch.
     */
    orderBy?: AspNetRoleClaimsOrderByWithRelationInput | AspNetRoleClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetRoleClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoleClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoleClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetRoleClaims
    **/
    _count?: true | AspNetRoleClaimsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AspNetRoleClaimsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AspNetRoleClaimsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetRoleClaimsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetRoleClaimsMaxAggregateInputType
  }

  export type GetAspNetRoleClaimsAggregateType<T extends AspNetRoleClaimsAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetRoleClaims]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetRoleClaims[P]>
      : GetScalarType<T[P], AggregateAspNetRoleClaims[P]>
  }




  export type AspNetRoleClaimsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetRoleClaimsWhereInput
    orderBy?: AspNetRoleClaimsOrderByWithAggregationInput | AspNetRoleClaimsOrderByWithAggregationInput[]
    by: AspNetRoleClaimsScalarFieldEnum[] | AspNetRoleClaimsScalarFieldEnum
    having?: AspNetRoleClaimsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetRoleClaimsCountAggregateInputType | true
    _avg?: AspNetRoleClaimsAvgAggregateInputType
    _sum?: AspNetRoleClaimsSumAggregateInputType
    _min?: AspNetRoleClaimsMinAggregateInputType
    _max?: AspNetRoleClaimsMaxAggregateInputType
  }

  export type AspNetRoleClaimsGroupByOutputType = {
    Id: number
    RoleId: string
    ClaimType: string | null
    ClaimValue: string | null
    _count: AspNetRoleClaimsCountAggregateOutputType | null
    _avg: AspNetRoleClaimsAvgAggregateOutputType | null
    _sum: AspNetRoleClaimsSumAggregateOutputType | null
    _min: AspNetRoleClaimsMinAggregateOutputType | null
    _max: AspNetRoleClaimsMaxAggregateOutputType | null
  }

  type GetAspNetRoleClaimsGroupByPayload<T extends AspNetRoleClaimsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetRoleClaimsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetRoleClaimsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetRoleClaimsGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetRoleClaimsGroupByOutputType[P]>
        }
      >
    >


  export type AspNetRoleClaimsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RoleId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetRoleClaims"]>

  export type AspNetRoleClaimsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RoleId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetRoleClaims"]>

  export type AspNetRoleClaimsSelectScalar = {
    Id?: boolean
    RoleId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
  }

  export type AspNetRoleClaimsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
  }
  export type AspNetRoleClaimsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
  }

  export type $AspNetRoleClaimsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetRoleClaims"
    objects: {
      AspNetRoles: Prisma.$AspNetRolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      RoleId: string
      ClaimType: string | null
      ClaimValue: string | null
    }, ExtArgs["result"]["aspNetRoleClaims"]>
    composites: {}
  }

  type AspNetRoleClaimsGetPayload<S extends boolean | null | undefined | AspNetRoleClaimsDefaultArgs> = $Result.GetResult<Prisma.$AspNetRoleClaimsPayload, S>

  type AspNetRoleClaimsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetRoleClaimsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetRoleClaimsCountAggregateInputType | true
    }

  export interface AspNetRoleClaimsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetRoleClaims'], meta: { name: 'AspNetRoleClaims' } }
    /**
     * Find zero or one AspNetRoleClaims that matches the filter.
     * @param {AspNetRoleClaimsFindUniqueArgs} args - Arguments to find a AspNetRoleClaims
     * @example
     * // Get one AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetRoleClaimsFindUniqueArgs>(args: SelectSubset<T, AspNetRoleClaimsFindUniqueArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetRoleClaims that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetRoleClaimsFindUniqueOrThrowArgs} args - Arguments to find a AspNetRoleClaims
     * @example
     * // Get one AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetRoleClaimsFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetRoleClaimsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetRoleClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsFindFirstArgs} args - Arguments to find a AspNetRoleClaims
     * @example
     * // Get one AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetRoleClaimsFindFirstArgs>(args?: SelectSubset<T, AspNetRoleClaimsFindFirstArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetRoleClaims that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsFindFirstOrThrowArgs} args - Arguments to find a AspNetRoleClaims
     * @example
     * // Get one AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetRoleClaimsFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetRoleClaimsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetRoleClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findMany()
     * 
     * // Get first 10 AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const aspNetRoleClaimsWithIdOnly = await prisma.aspNetRoleClaims.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AspNetRoleClaimsFindManyArgs>(args?: SelectSubset<T, AspNetRoleClaimsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetRoleClaims.
     * @param {AspNetRoleClaimsCreateArgs} args - Arguments to create a AspNetRoleClaims.
     * @example
     * // Create one AspNetRoleClaims
     * const AspNetRoleClaims = await prisma.aspNetRoleClaims.create({
     *   data: {
     *     // ... data to create a AspNetRoleClaims
     *   }
     * })
     * 
     */
    create<T extends AspNetRoleClaimsCreateArgs>(args: SelectSubset<T, AspNetRoleClaimsCreateArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetRoleClaims.
     * @param {AspNetRoleClaimsCreateManyArgs} args - Arguments to create many AspNetRoleClaims.
     * @example
     * // Create many AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetRoleClaimsCreateManyArgs>(args?: SelectSubset<T, AspNetRoleClaimsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetRoleClaims and returns the data saved in the database.
     * @param {AspNetRoleClaimsCreateManyAndReturnArgs} args - Arguments to create many AspNetRoleClaims.
     * @example
     * // Create many AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetRoleClaims and only return the `Id`
     * const aspNetRoleClaimsWithIdOnly = await prisma.aspNetRoleClaims.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetRoleClaimsCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetRoleClaimsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetRoleClaims.
     * @param {AspNetRoleClaimsDeleteArgs} args - Arguments to delete one AspNetRoleClaims.
     * @example
     * // Delete one AspNetRoleClaims
     * const AspNetRoleClaims = await prisma.aspNetRoleClaims.delete({
     *   where: {
     *     // ... filter to delete one AspNetRoleClaims
     *   }
     * })
     * 
     */
    delete<T extends AspNetRoleClaimsDeleteArgs>(args: SelectSubset<T, AspNetRoleClaimsDeleteArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetRoleClaims.
     * @param {AspNetRoleClaimsUpdateArgs} args - Arguments to update one AspNetRoleClaims.
     * @example
     * // Update one AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetRoleClaimsUpdateArgs>(args: SelectSubset<T, AspNetRoleClaimsUpdateArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetRoleClaims.
     * @param {AspNetRoleClaimsDeleteManyArgs} args - Arguments to filter AspNetRoleClaims to delete.
     * @example
     * // Delete a few AspNetRoleClaims
     * const { count } = await prisma.aspNetRoleClaims.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetRoleClaimsDeleteManyArgs>(args?: SelectSubset<T, AspNetRoleClaimsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetRoleClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetRoleClaimsUpdateManyArgs>(args: SelectSubset<T, AspNetRoleClaimsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetRoleClaims.
     * @param {AspNetRoleClaimsUpsertArgs} args - Arguments to update or create a AspNetRoleClaims.
     * @example
     * // Update or create a AspNetRoleClaims
     * const aspNetRoleClaims = await prisma.aspNetRoleClaims.upsert({
     *   create: {
     *     // ... data to create a AspNetRoleClaims
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetRoleClaims we want to update
     *   }
     * })
     */
    upsert<T extends AspNetRoleClaimsUpsertArgs>(args: SelectSubset<T, AspNetRoleClaimsUpsertArgs<ExtArgs>>): Prisma__AspNetRoleClaimsClient<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetRoleClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsCountArgs} args - Arguments to filter AspNetRoleClaims to count.
     * @example
     * // Count the number of AspNetRoleClaims
     * const count = await prisma.aspNetRoleClaims.count({
     *   where: {
     *     // ... the filter for the AspNetRoleClaims we want to count
     *   }
     * })
    **/
    count<T extends AspNetRoleClaimsCountArgs>(
      args?: Subset<T, AspNetRoleClaimsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetRoleClaimsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetRoleClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetRoleClaimsAggregateArgs>(args: Subset<T, AspNetRoleClaimsAggregateArgs>): Prisma.PrismaPromise<GetAspNetRoleClaimsAggregateType<T>>

    /**
     * Group by AspNetRoleClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRoleClaimsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetRoleClaimsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetRoleClaimsGroupByArgs['orderBy'] }
        : { orderBy?: AspNetRoleClaimsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetRoleClaimsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetRoleClaimsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetRoleClaims model
   */
  readonly fields: AspNetRoleClaimsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetRoleClaims.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetRoleClaimsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetRoles<T extends AspNetRolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetRolesDefaultArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetRoleClaims model
   */ 
  interface AspNetRoleClaimsFieldRefs {
    readonly Id: FieldRef<"AspNetRoleClaims", 'Int'>
    readonly RoleId: FieldRef<"AspNetRoleClaims", 'String'>
    readonly ClaimType: FieldRef<"AspNetRoleClaims", 'String'>
    readonly ClaimValue: FieldRef<"AspNetRoleClaims", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetRoleClaims findUnique
   */
  export type AspNetRoleClaimsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoleClaims to fetch.
     */
    where: AspNetRoleClaimsWhereUniqueInput
  }

  /**
   * AspNetRoleClaims findUniqueOrThrow
   */
  export type AspNetRoleClaimsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoleClaims to fetch.
     */
    where: AspNetRoleClaimsWhereUniqueInput
  }

  /**
   * AspNetRoleClaims findFirst
   */
  export type AspNetRoleClaimsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoleClaims to fetch.
     */
    where?: AspNetRoleClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoleClaims to fetch.
     */
    orderBy?: AspNetRoleClaimsOrderByWithRelationInput | AspNetRoleClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetRoleClaims.
     */
    cursor?: AspNetRoleClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoleClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoleClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetRoleClaims.
     */
    distinct?: AspNetRoleClaimsScalarFieldEnum | AspNetRoleClaimsScalarFieldEnum[]
  }

  /**
   * AspNetRoleClaims findFirstOrThrow
   */
  export type AspNetRoleClaimsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoleClaims to fetch.
     */
    where?: AspNetRoleClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoleClaims to fetch.
     */
    orderBy?: AspNetRoleClaimsOrderByWithRelationInput | AspNetRoleClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetRoleClaims.
     */
    cursor?: AspNetRoleClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoleClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoleClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetRoleClaims.
     */
    distinct?: AspNetRoleClaimsScalarFieldEnum | AspNetRoleClaimsScalarFieldEnum[]
  }

  /**
   * AspNetRoleClaims findMany
   */
  export type AspNetRoleClaimsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoleClaims to fetch.
     */
    where?: AspNetRoleClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoleClaims to fetch.
     */
    orderBy?: AspNetRoleClaimsOrderByWithRelationInput | AspNetRoleClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetRoleClaims.
     */
    cursor?: AspNetRoleClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoleClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoleClaims.
     */
    skip?: number
    distinct?: AspNetRoleClaimsScalarFieldEnum | AspNetRoleClaimsScalarFieldEnum[]
  }

  /**
   * AspNetRoleClaims create
   */
  export type AspNetRoleClaimsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetRoleClaims.
     */
    data: XOR<AspNetRoleClaimsCreateInput, AspNetRoleClaimsUncheckedCreateInput>
  }

  /**
   * AspNetRoleClaims createMany
   */
  export type AspNetRoleClaimsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetRoleClaims.
     */
    data: AspNetRoleClaimsCreateManyInput | AspNetRoleClaimsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetRoleClaims createManyAndReturn
   */
  export type AspNetRoleClaimsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetRoleClaims.
     */
    data: AspNetRoleClaimsCreateManyInput | AspNetRoleClaimsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetRoleClaims update
   */
  export type AspNetRoleClaimsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetRoleClaims.
     */
    data: XOR<AspNetRoleClaimsUpdateInput, AspNetRoleClaimsUncheckedUpdateInput>
    /**
     * Choose, which AspNetRoleClaims to update.
     */
    where: AspNetRoleClaimsWhereUniqueInput
  }

  /**
   * AspNetRoleClaims updateMany
   */
  export type AspNetRoleClaimsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetRoleClaims.
     */
    data: XOR<AspNetRoleClaimsUpdateManyMutationInput, AspNetRoleClaimsUncheckedUpdateManyInput>
    /**
     * Filter which AspNetRoleClaims to update
     */
    where?: AspNetRoleClaimsWhereInput
  }

  /**
   * AspNetRoleClaims upsert
   */
  export type AspNetRoleClaimsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetRoleClaims to update in case it exists.
     */
    where: AspNetRoleClaimsWhereUniqueInput
    /**
     * In case the AspNetRoleClaims found by the `where` argument doesn't exist, create a new AspNetRoleClaims with this data.
     */
    create: XOR<AspNetRoleClaimsCreateInput, AspNetRoleClaimsUncheckedCreateInput>
    /**
     * In case the AspNetRoleClaims was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetRoleClaimsUpdateInput, AspNetRoleClaimsUncheckedUpdateInput>
  }

  /**
   * AspNetRoleClaims delete
   */
  export type AspNetRoleClaimsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    /**
     * Filter which AspNetRoleClaims to delete.
     */
    where: AspNetRoleClaimsWhereUniqueInput
  }

  /**
   * AspNetRoleClaims deleteMany
   */
  export type AspNetRoleClaimsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetRoleClaims to delete
     */
    where?: AspNetRoleClaimsWhereInput
  }

  /**
   * AspNetRoleClaims without action
   */
  export type AspNetRoleClaimsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
  }


  /**
   * Model AspNetRoles
   */

  export type AggregateAspNetRoles = {
    _count: AspNetRolesCountAggregateOutputType | null
    _min: AspNetRolesMinAggregateOutputType | null
    _max: AspNetRolesMaxAggregateOutputType | null
  }

  export type AspNetRolesMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    NormalizedName: string | null
    ConcurrencyStamp: string | null
  }

  export type AspNetRolesMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    NormalizedName: string | null
    ConcurrencyStamp: string | null
  }

  export type AspNetRolesCountAggregateOutputType = {
    Id: number
    Name: number
    NormalizedName: number
    ConcurrencyStamp: number
    _all: number
  }


  export type AspNetRolesMinAggregateInputType = {
    Id?: true
    Name?: true
    NormalizedName?: true
    ConcurrencyStamp?: true
  }

  export type AspNetRolesMaxAggregateInputType = {
    Id?: true
    Name?: true
    NormalizedName?: true
    ConcurrencyStamp?: true
  }

  export type AspNetRolesCountAggregateInputType = {
    Id?: true
    Name?: true
    NormalizedName?: true
    ConcurrencyStamp?: true
    _all?: true
  }

  export type AspNetRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetRoles to aggregate.
     */
    where?: AspNetRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoles to fetch.
     */
    orderBy?: AspNetRolesOrderByWithRelationInput | AspNetRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetRoles
    **/
    _count?: true | AspNetRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetRolesMaxAggregateInputType
  }

  export type GetAspNetRolesAggregateType<T extends AspNetRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetRoles[P]>
      : GetScalarType<T[P], AggregateAspNetRoles[P]>
  }




  export type AspNetRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetRolesWhereInput
    orderBy?: AspNetRolesOrderByWithAggregationInput | AspNetRolesOrderByWithAggregationInput[]
    by: AspNetRolesScalarFieldEnum[] | AspNetRolesScalarFieldEnum
    having?: AspNetRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetRolesCountAggregateInputType | true
    _min?: AspNetRolesMinAggregateInputType
    _max?: AspNetRolesMaxAggregateInputType
  }

  export type AspNetRolesGroupByOutputType = {
    Id: string
    Name: string | null
    NormalizedName: string | null
    ConcurrencyStamp: string | null
    _count: AspNetRolesCountAggregateOutputType | null
    _min: AspNetRolesMinAggregateOutputType | null
    _max: AspNetRolesMaxAggregateOutputType | null
  }

  type GetAspNetRolesGroupByPayload<T extends AspNetRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetRolesGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetRolesGroupByOutputType[P]>
        }
      >
    >


  export type AspNetRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    NormalizedName?: boolean
    ConcurrencyStamp?: boolean
    AspNetRoleClaims?: boolean | AspNetRoles$AspNetRoleClaimsArgs<ExtArgs>
    AspNetUserRoles?: boolean | AspNetRoles$AspNetUserRolesArgs<ExtArgs>
    _count?: boolean | AspNetRolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetRoles"]>

  export type AspNetRolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    NormalizedName?: boolean
    ConcurrencyStamp?: boolean
  }, ExtArgs["result"]["aspNetRoles"]>

  export type AspNetRolesSelectScalar = {
    Id?: boolean
    Name?: boolean
    NormalizedName?: boolean
    ConcurrencyStamp?: boolean
  }

  export type AspNetRolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoleClaims?: boolean | AspNetRoles$AspNetRoleClaimsArgs<ExtArgs>
    AspNetUserRoles?: boolean | AspNetRoles$AspNetUserRolesArgs<ExtArgs>
    _count?: boolean | AspNetRolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AspNetRolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AspNetRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetRoles"
    objects: {
      AspNetRoleClaims: Prisma.$AspNetRoleClaimsPayload<ExtArgs>[]
      AspNetUserRoles: Prisma.$AspNetUserRolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string | null
      NormalizedName: string | null
      ConcurrencyStamp: string | null
    }, ExtArgs["result"]["aspNetRoles"]>
    composites: {}
  }

  type AspNetRolesGetPayload<S extends boolean | null | undefined | AspNetRolesDefaultArgs> = $Result.GetResult<Prisma.$AspNetRolesPayload, S>

  type AspNetRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetRolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetRolesCountAggregateInputType | true
    }

  export interface AspNetRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetRoles'], meta: { name: 'AspNetRoles' } }
    /**
     * Find zero or one AspNetRoles that matches the filter.
     * @param {AspNetRolesFindUniqueArgs} args - Arguments to find a AspNetRoles
     * @example
     * // Get one AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetRolesFindUniqueArgs>(args: SelectSubset<T, AspNetRolesFindUniqueArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetRoles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetRolesFindUniqueOrThrowArgs} args - Arguments to find a AspNetRoles
     * @example
     * // Get one AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetRolesFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetRolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesFindFirstArgs} args - Arguments to find a AspNetRoles
     * @example
     * // Get one AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetRolesFindFirstArgs>(args?: SelectSubset<T, AspNetRolesFindFirstArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesFindFirstOrThrowArgs} args - Arguments to find a AspNetRoles
     * @example
     * // Get one AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetRolesFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetRolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findMany()
     * 
     * // Get first 10 AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const aspNetRolesWithIdOnly = await prisma.aspNetRoles.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AspNetRolesFindManyArgs>(args?: SelectSubset<T, AspNetRolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetRoles.
     * @param {AspNetRolesCreateArgs} args - Arguments to create a AspNetRoles.
     * @example
     * // Create one AspNetRoles
     * const AspNetRoles = await prisma.aspNetRoles.create({
     *   data: {
     *     // ... data to create a AspNetRoles
     *   }
     * })
     * 
     */
    create<T extends AspNetRolesCreateArgs>(args: SelectSubset<T, AspNetRolesCreateArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetRoles.
     * @param {AspNetRolesCreateManyArgs} args - Arguments to create many AspNetRoles.
     * @example
     * // Create many AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetRolesCreateManyArgs>(args?: SelectSubset<T, AspNetRolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetRoles and returns the data saved in the database.
     * @param {AspNetRolesCreateManyAndReturnArgs} args - Arguments to create many AspNetRoles.
     * @example
     * // Create many AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetRoles and only return the `Id`
     * const aspNetRolesWithIdOnly = await prisma.aspNetRoles.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetRolesCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetRolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetRoles.
     * @param {AspNetRolesDeleteArgs} args - Arguments to delete one AspNetRoles.
     * @example
     * // Delete one AspNetRoles
     * const AspNetRoles = await prisma.aspNetRoles.delete({
     *   where: {
     *     // ... filter to delete one AspNetRoles
     *   }
     * })
     * 
     */
    delete<T extends AspNetRolesDeleteArgs>(args: SelectSubset<T, AspNetRolesDeleteArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetRoles.
     * @param {AspNetRolesUpdateArgs} args - Arguments to update one AspNetRoles.
     * @example
     * // Update one AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetRolesUpdateArgs>(args: SelectSubset<T, AspNetRolesUpdateArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetRoles.
     * @param {AspNetRolesDeleteManyArgs} args - Arguments to filter AspNetRoles to delete.
     * @example
     * // Delete a few AspNetRoles
     * const { count } = await prisma.aspNetRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetRolesDeleteManyArgs>(args?: SelectSubset<T, AspNetRolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetRolesUpdateManyArgs>(args: SelectSubset<T, AspNetRolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetRoles.
     * @param {AspNetRolesUpsertArgs} args - Arguments to update or create a AspNetRoles.
     * @example
     * // Update or create a AspNetRoles
     * const aspNetRoles = await prisma.aspNetRoles.upsert({
     *   create: {
     *     // ... data to create a AspNetRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetRoles we want to update
     *   }
     * })
     */
    upsert<T extends AspNetRolesUpsertArgs>(args: SelectSubset<T, AspNetRolesUpsertArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesCountArgs} args - Arguments to filter AspNetRoles to count.
     * @example
     * // Count the number of AspNetRoles
     * const count = await prisma.aspNetRoles.count({
     *   where: {
     *     // ... the filter for the AspNetRoles we want to count
     *   }
     * })
    **/
    count<T extends AspNetRolesCountArgs>(
      args?: Subset<T, AspNetRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetRolesAggregateArgs>(args: Subset<T, AspNetRolesAggregateArgs>): Prisma.PrismaPromise<GetAspNetRolesAggregateType<T>>

    /**
     * Group by AspNetRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetRolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetRolesGroupByArgs['orderBy'] }
        : { orderBy?: AspNetRolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetRoles model
   */
  readonly fields: AspNetRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetRoleClaims<T extends AspNetRoles$AspNetRoleClaimsArgs<ExtArgs> = {}>(args?: Subset<T, AspNetRoles$AspNetRoleClaimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetRoleClaimsPayload<ExtArgs>, T, "findMany"> | Null>
    AspNetUserRoles<T extends AspNetRoles$AspNetUserRolesArgs<ExtArgs> = {}>(args?: Subset<T, AspNetRoles$AspNetUserRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetRoles model
   */ 
  interface AspNetRolesFieldRefs {
    readonly Id: FieldRef<"AspNetRoles", 'String'>
    readonly Name: FieldRef<"AspNetRoles", 'String'>
    readonly NormalizedName: FieldRef<"AspNetRoles", 'String'>
    readonly ConcurrencyStamp: FieldRef<"AspNetRoles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetRoles findUnique
   */
  export type AspNetRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoles to fetch.
     */
    where: AspNetRolesWhereUniqueInput
  }

  /**
   * AspNetRoles findUniqueOrThrow
   */
  export type AspNetRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoles to fetch.
     */
    where: AspNetRolesWhereUniqueInput
  }

  /**
   * AspNetRoles findFirst
   */
  export type AspNetRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoles to fetch.
     */
    where?: AspNetRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoles to fetch.
     */
    orderBy?: AspNetRolesOrderByWithRelationInput | AspNetRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetRoles.
     */
    cursor?: AspNetRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetRoles.
     */
    distinct?: AspNetRolesScalarFieldEnum | AspNetRolesScalarFieldEnum[]
  }

  /**
   * AspNetRoles findFirstOrThrow
   */
  export type AspNetRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoles to fetch.
     */
    where?: AspNetRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoles to fetch.
     */
    orderBy?: AspNetRolesOrderByWithRelationInput | AspNetRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetRoles.
     */
    cursor?: AspNetRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetRoles.
     */
    distinct?: AspNetRolesScalarFieldEnum | AspNetRolesScalarFieldEnum[]
  }

  /**
   * AspNetRoles findMany
   */
  export type AspNetRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetRoles to fetch.
     */
    where?: AspNetRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetRoles to fetch.
     */
    orderBy?: AspNetRolesOrderByWithRelationInput | AspNetRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetRoles.
     */
    cursor?: AspNetRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetRoles.
     */
    skip?: number
    distinct?: AspNetRolesScalarFieldEnum | AspNetRolesScalarFieldEnum[]
  }

  /**
   * AspNetRoles create
   */
  export type AspNetRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetRoles.
     */
    data: XOR<AspNetRolesCreateInput, AspNetRolesUncheckedCreateInput>
  }

  /**
   * AspNetRoles createMany
   */
  export type AspNetRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetRoles.
     */
    data: AspNetRolesCreateManyInput | AspNetRolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetRoles createManyAndReturn
   */
  export type AspNetRolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetRoles.
     */
    data: AspNetRolesCreateManyInput | AspNetRolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetRoles update
   */
  export type AspNetRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetRoles.
     */
    data: XOR<AspNetRolesUpdateInput, AspNetRolesUncheckedUpdateInput>
    /**
     * Choose, which AspNetRoles to update.
     */
    where: AspNetRolesWhereUniqueInput
  }

  /**
   * AspNetRoles updateMany
   */
  export type AspNetRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetRoles.
     */
    data: XOR<AspNetRolesUpdateManyMutationInput, AspNetRolesUncheckedUpdateManyInput>
    /**
     * Filter which AspNetRoles to update
     */
    where?: AspNetRolesWhereInput
  }

  /**
   * AspNetRoles upsert
   */
  export type AspNetRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetRoles to update in case it exists.
     */
    where: AspNetRolesWhereUniqueInput
    /**
     * In case the AspNetRoles found by the `where` argument doesn't exist, create a new AspNetRoles with this data.
     */
    create: XOR<AspNetRolesCreateInput, AspNetRolesUncheckedCreateInput>
    /**
     * In case the AspNetRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetRolesUpdateInput, AspNetRolesUncheckedUpdateInput>
  }

  /**
   * AspNetRoles delete
   */
  export type AspNetRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
    /**
     * Filter which AspNetRoles to delete.
     */
    where: AspNetRolesWhereUniqueInput
  }

  /**
   * AspNetRoles deleteMany
   */
  export type AspNetRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetRoles to delete
     */
    where?: AspNetRolesWhereInput
  }

  /**
   * AspNetRoles.AspNetRoleClaims
   */
  export type AspNetRoles$AspNetRoleClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoleClaims
     */
    select?: AspNetRoleClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRoleClaimsInclude<ExtArgs> | null
    where?: AspNetRoleClaimsWhereInput
    orderBy?: AspNetRoleClaimsOrderByWithRelationInput | AspNetRoleClaimsOrderByWithRelationInput[]
    cursor?: AspNetRoleClaimsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetRoleClaimsScalarFieldEnum | AspNetRoleClaimsScalarFieldEnum[]
  }

  /**
   * AspNetRoles.AspNetUserRoles
   */
  export type AspNetRoles$AspNetUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    where?: AspNetUserRolesWhereInput
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    cursor?: AspNetUserRolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUserRolesScalarFieldEnum | AspNetUserRolesScalarFieldEnum[]
  }

  /**
   * AspNetRoles without action
   */
  export type AspNetRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetRoles
     */
    select?: AspNetRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetRolesInclude<ExtArgs> | null
  }


  /**
   * Model AspNetUserClaims
   */

  export type AggregateAspNetUserClaims = {
    _count: AspNetUserClaimsCountAggregateOutputType | null
    _avg: AspNetUserClaimsAvgAggregateOutputType | null
    _sum: AspNetUserClaimsSumAggregateOutputType | null
    _min: AspNetUserClaimsMinAggregateOutputType | null
    _max: AspNetUserClaimsMaxAggregateOutputType | null
  }

  export type AspNetUserClaimsAvgAggregateOutputType = {
    Id: number | null
  }

  export type AspNetUserClaimsSumAggregateOutputType = {
    Id: number | null
  }

  export type AspNetUserClaimsMinAggregateOutputType = {
    Id: number | null
    UserId: string | null
    ClaimType: string | null
    ClaimValue: string | null
  }

  export type AspNetUserClaimsMaxAggregateOutputType = {
    Id: number | null
    UserId: string | null
    ClaimType: string | null
    ClaimValue: string | null
  }

  export type AspNetUserClaimsCountAggregateOutputType = {
    Id: number
    UserId: number
    ClaimType: number
    ClaimValue: number
    _all: number
  }


  export type AspNetUserClaimsAvgAggregateInputType = {
    Id?: true
  }

  export type AspNetUserClaimsSumAggregateInputType = {
    Id?: true
  }

  export type AspNetUserClaimsMinAggregateInputType = {
    Id?: true
    UserId?: true
    ClaimType?: true
    ClaimValue?: true
  }

  export type AspNetUserClaimsMaxAggregateInputType = {
    Id?: true
    UserId?: true
    ClaimType?: true
    ClaimValue?: true
  }

  export type AspNetUserClaimsCountAggregateInputType = {
    Id?: true
    UserId?: true
    ClaimType?: true
    ClaimValue?: true
    _all?: true
  }

  export type AspNetUserClaimsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserClaims to aggregate.
     */
    where?: AspNetUserClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserClaims to fetch.
     */
    orderBy?: AspNetUserClaimsOrderByWithRelationInput | AspNetUserClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetUserClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetUserClaims
    **/
    _count?: true | AspNetUserClaimsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AspNetUserClaimsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AspNetUserClaimsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetUserClaimsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetUserClaimsMaxAggregateInputType
  }

  export type GetAspNetUserClaimsAggregateType<T extends AspNetUserClaimsAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetUserClaims]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetUserClaims[P]>
      : GetScalarType<T[P], AggregateAspNetUserClaims[P]>
  }




  export type AspNetUserClaimsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserClaimsWhereInput
    orderBy?: AspNetUserClaimsOrderByWithAggregationInput | AspNetUserClaimsOrderByWithAggregationInput[]
    by: AspNetUserClaimsScalarFieldEnum[] | AspNetUserClaimsScalarFieldEnum
    having?: AspNetUserClaimsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetUserClaimsCountAggregateInputType | true
    _avg?: AspNetUserClaimsAvgAggregateInputType
    _sum?: AspNetUserClaimsSumAggregateInputType
    _min?: AspNetUserClaimsMinAggregateInputType
    _max?: AspNetUserClaimsMaxAggregateInputType
  }

  export type AspNetUserClaimsGroupByOutputType = {
    Id: number
    UserId: string
    ClaimType: string | null
    ClaimValue: string | null
    _count: AspNetUserClaimsCountAggregateOutputType | null
    _avg: AspNetUserClaimsAvgAggregateOutputType | null
    _sum: AspNetUserClaimsSumAggregateOutputType | null
    _min: AspNetUserClaimsMinAggregateOutputType | null
    _max: AspNetUserClaimsMaxAggregateOutputType | null
  }

  type GetAspNetUserClaimsGroupByPayload<T extends AspNetUserClaimsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetUserClaimsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetUserClaimsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetUserClaimsGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetUserClaimsGroupByOutputType[P]>
        }
      >
    >


  export type AspNetUserClaimsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserClaims"]>

  export type AspNetUserClaimsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    UserId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserClaims"]>

  export type AspNetUserClaimsSelectScalar = {
    Id?: boolean
    UserId?: boolean
    ClaimType?: boolean
    ClaimValue?: boolean
  }

  export type AspNetUserClaimsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }
  export type AspNetUserClaimsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }

  export type $AspNetUserClaimsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetUserClaims"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      UserId: string
      ClaimType: string | null
      ClaimValue: string | null
    }, ExtArgs["result"]["aspNetUserClaims"]>
    composites: {}
  }

  type AspNetUserClaimsGetPayload<S extends boolean | null | undefined | AspNetUserClaimsDefaultArgs> = $Result.GetResult<Prisma.$AspNetUserClaimsPayload, S>

  type AspNetUserClaimsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetUserClaimsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetUserClaimsCountAggregateInputType | true
    }

  export interface AspNetUserClaimsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetUserClaims'], meta: { name: 'AspNetUserClaims' } }
    /**
     * Find zero or one AspNetUserClaims that matches the filter.
     * @param {AspNetUserClaimsFindUniqueArgs} args - Arguments to find a AspNetUserClaims
     * @example
     * // Get one AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetUserClaimsFindUniqueArgs>(args: SelectSubset<T, AspNetUserClaimsFindUniqueArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetUserClaims that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetUserClaimsFindUniqueOrThrowArgs} args - Arguments to find a AspNetUserClaims
     * @example
     * // Get one AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetUserClaimsFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetUserClaimsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetUserClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsFindFirstArgs} args - Arguments to find a AspNetUserClaims
     * @example
     * // Get one AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetUserClaimsFindFirstArgs>(args?: SelectSubset<T, AspNetUserClaimsFindFirstArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetUserClaims that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsFindFirstOrThrowArgs} args - Arguments to find a AspNetUserClaims
     * @example
     * // Get one AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetUserClaimsFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetUserClaimsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetUserClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findMany()
     * 
     * // Get first 10 AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const aspNetUserClaimsWithIdOnly = await prisma.aspNetUserClaims.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AspNetUserClaimsFindManyArgs>(args?: SelectSubset<T, AspNetUserClaimsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetUserClaims.
     * @param {AspNetUserClaimsCreateArgs} args - Arguments to create a AspNetUserClaims.
     * @example
     * // Create one AspNetUserClaims
     * const AspNetUserClaims = await prisma.aspNetUserClaims.create({
     *   data: {
     *     // ... data to create a AspNetUserClaims
     *   }
     * })
     * 
     */
    create<T extends AspNetUserClaimsCreateArgs>(args: SelectSubset<T, AspNetUserClaimsCreateArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetUserClaims.
     * @param {AspNetUserClaimsCreateManyArgs} args - Arguments to create many AspNetUserClaims.
     * @example
     * // Create many AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetUserClaimsCreateManyArgs>(args?: SelectSubset<T, AspNetUserClaimsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetUserClaims and returns the data saved in the database.
     * @param {AspNetUserClaimsCreateManyAndReturnArgs} args - Arguments to create many AspNetUserClaims.
     * @example
     * // Create many AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetUserClaims and only return the `Id`
     * const aspNetUserClaimsWithIdOnly = await prisma.aspNetUserClaims.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetUserClaimsCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetUserClaimsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetUserClaims.
     * @param {AspNetUserClaimsDeleteArgs} args - Arguments to delete one AspNetUserClaims.
     * @example
     * // Delete one AspNetUserClaims
     * const AspNetUserClaims = await prisma.aspNetUserClaims.delete({
     *   where: {
     *     // ... filter to delete one AspNetUserClaims
     *   }
     * })
     * 
     */
    delete<T extends AspNetUserClaimsDeleteArgs>(args: SelectSubset<T, AspNetUserClaimsDeleteArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetUserClaims.
     * @param {AspNetUserClaimsUpdateArgs} args - Arguments to update one AspNetUserClaims.
     * @example
     * // Update one AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetUserClaimsUpdateArgs>(args: SelectSubset<T, AspNetUserClaimsUpdateArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetUserClaims.
     * @param {AspNetUserClaimsDeleteManyArgs} args - Arguments to filter AspNetUserClaims to delete.
     * @example
     * // Delete a few AspNetUserClaims
     * const { count } = await prisma.aspNetUserClaims.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetUserClaimsDeleteManyArgs>(args?: SelectSubset<T, AspNetUserClaimsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetUserClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetUserClaimsUpdateManyArgs>(args: SelectSubset<T, AspNetUserClaimsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetUserClaims.
     * @param {AspNetUserClaimsUpsertArgs} args - Arguments to update or create a AspNetUserClaims.
     * @example
     * // Update or create a AspNetUserClaims
     * const aspNetUserClaims = await prisma.aspNetUserClaims.upsert({
     *   create: {
     *     // ... data to create a AspNetUserClaims
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetUserClaims we want to update
     *   }
     * })
     */
    upsert<T extends AspNetUserClaimsUpsertArgs>(args: SelectSubset<T, AspNetUserClaimsUpsertArgs<ExtArgs>>): Prisma__AspNetUserClaimsClient<$Result.GetResult<Prisma.$AspNetUserClaimsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetUserClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsCountArgs} args - Arguments to filter AspNetUserClaims to count.
     * @example
     * // Count the number of AspNetUserClaims
     * const count = await prisma.aspNetUserClaims.count({
     *   where: {
     *     // ... the filter for the AspNetUserClaims we want to count
     *   }
     * })
    **/
    count<T extends AspNetUserClaimsCountArgs>(
      args?: Subset<T, AspNetUserClaimsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetUserClaimsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetUserClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetUserClaimsAggregateArgs>(args: Subset<T, AspNetUserClaimsAggregateArgs>): Prisma.PrismaPromise<GetAspNetUserClaimsAggregateType<T>>

    /**
     * Group by AspNetUserClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserClaimsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetUserClaimsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetUserClaimsGroupByArgs['orderBy'] }
        : { orderBy?: AspNetUserClaimsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetUserClaimsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetUserClaimsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetUserClaims model
   */
  readonly fields: AspNetUserClaimsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetUserClaims.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetUserClaimsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetUserClaims model
   */ 
  interface AspNetUserClaimsFieldRefs {
    readonly Id: FieldRef<"AspNetUserClaims", 'Int'>
    readonly UserId: FieldRef<"AspNetUserClaims", 'String'>
    readonly ClaimType: FieldRef<"AspNetUserClaims", 'String'>
    readonly ClaimValue: FieldRef<"AspNetUserClaims", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetUserClaims findUnique
   */
  export type AspNetUserClaimsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserClaims to fetch.
     */
    where: AspNetUserClaimsWhereUniqueInput
  }

  /**
   * AspNetUserClaims findUniqueOrThrow
   */
  export type AspNetUserClaimsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserClaims to fetch.
     */
    where: AspNetUserClaimsWhereUniqueInput
  }

  /**
   * AspNetUserClaims findFirst
   */
  export type AspNetUserClaimsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserClaims to fetch.
     */
    where?: AspNetUserClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserClaims to fetch.
     */
    orderBy?: AspNetUserClaimsOrderByWithRelationInput | AspNetUserClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserClaims.
     */
    cursor?: AspNetUserClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserClaims.
     */
    distinct?: AspNetUserClaimsScalarFieldEnum | AspNetUserClaimsScalarFieldEnum[]
  }

  /**
   * AspNetUserClaims findFirstOrThrow
   */
  export type AspNetUserClaimsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserClaims to fetch.
     */
    where?: AspNetUserClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserClaims to fetch.
     */
    orderBy?: AspNetUserClaimsOrderByWithRelationInput | AspNetUserClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserClaims.
     */
    cursor?: AspNetUserClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserClaims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserClaims.
     */
    distinct?: AspNetUserClaimsScalarFieldEnum | AspNetUserClaimsScalarFieldEnum[]
  }

  /**
   * AspNetUserClaims findMany
   */
  export type AspNetUserClaimsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserClaims to fetch.
     */
    where?: AspNetUserClaimsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserClaims to fetch.
     */
    orderBy?: AspNetUserClaimsOrderByWithRelationInput | AspNetUserClaimsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetUserClaims.
     */
    cursor?: AspNetUserClaimsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserClaims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserClaims.
     */
    skip?: number
    distinct?: AspNetUserClaimsScalarFieldEnum | AspNetUserClaimsScalarFieldEnum[]
  }

  /**
   * AspNetUserClaims create
   */
  export type AspNetUserClaimsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetUserClaims.
     */
    data: XOR<AspNetUserClaimsCreateInput, AspNetUserClaimsUncheckedCreateInput>
  }

  /**
   * AspNetUserClaims createMany
   */
  export type AspNetUserClaimsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetUserClaims.
     */
    data: AspNetUserClaimsCreateManyInput | AspNetUserClaimsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetUserClaims createManyAndReturn
   */
  export type AspNetUserClaimsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetUserClaims.
     */
    data: AspNetUserClaimsCreateManyInput | AspNetUserClaimsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetUserClaims update
   */
  export type AspNetUserClaimsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetUserClaims.
     */
    data: XOR<AspNetUserClaimsUpdateInput, AspNetUserClaimsUncheckedUpdateInput>
    /**
     * Choose, which AspNetUserClaims to update.
     */
    where: AspNetUserClaimsWhereUniqueInput
  }

  /**
   * AspNetUserClaims updateMany
   */
  export type AspNetUserClaimsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetUserClaims.
     */
    data: XOR<AspNetUserClaimsUpdateManyMutationInput, AspNetUserClaimsUncheckedUpdateManyInput>
    /**
     * Filter which AspNetUserClaims to update
     */
    where?: AspNetUserClaimsWhereInput
  }

  /**
   * AspNetUserClaims upsert
   */
  export type AspNetUserClaimsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetUserClaims to update in case it exists.
     */
    where: AspNetUserClaimsWhereUniqueInput
    /**
     * In case the AspNetUserClaims found by the `where` argument doesn't exist, create a new AspNetUserClaims with this data.
     */
    create: XOR<AspNetUserClaimsCreateInput, AspNetUserClaimsUncheckedCreateInput>
    /**
     * In case the AspNetUserClaims was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetUserClaimsUpdateInput, AspNetUserClaimsUncheckedUpdateInput>
  }

  /**
   * AspNetUserClaims delete
   */
  export type AspNetUserClaimsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
    /**
     * Filter which AspNetUserClaims to delete.
     */
    where: AspNetUserClaimsWhereUniqueInput
  }

  /**
   * AspNetUserClaims deleteMany
   */
  export type AspNetUserClaimsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserClaims to delete
     */
    where?: AspNetUserClaimsWhereInput
  }

  /**
   * AspNetUserClaims without action
   */
  export type AspNetUserClaimsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserClaims
     */
    select?: AspNetUserClaimsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserClaimsInclude<ExtArgs> | null
  }


  /**
   * Model AspNetUserLogins
   */

  export type AggregateAspNetUserLogins = {
    _count: AspNetUserLoginsCountAggregateOutputType | null
    _min: AspNetUserLoginsMinAggregateOutputType | null
    _max: AspNetUserLoginsMaxAggregateOutputType | null
  }

  export type AspNetUserLoginsMinAggregateOutputType = {
    LoginProvider: string | null
    ProviderKey: string | null
    ProviderDisplayName: string | null
    UserId: string | null
  }

  export type AspNetUserLoginsMaxAggregateOutputType = {
    LoginProvider: string | null
    ProviderKey: string | null
    ProviderDisplayName: string | null
    UserId: string | null
  }

  export type AspNetUserLoginsCountAggregateOutputType = {
    LoginProvider: number
    ProviderKey: number
    ProviderDisplayName: number
    UserId: number
    _all: number
  }


  export type AspNetUserLoginsMinAggregateInputType = {
    LoginProvider?: true
    ProviderKey?: true
    ProviderDisplayName?: true
    UserId?: true
  }

  export type AspNetUserLoginsMaxAggregateInputType = {
    LoginProvider?: true
    ProviderKey?: true
    ProviderDisplayName?: true
    UserId?: true
  }

  export type AspNetUserLoginsCountAggregateInputType = {
    LoginProvider?: true
    ProviderKey?: true
    ProviderDisplayName?: true
    UserId?: true
    _all?: true
  }

  export type AspNetUserLoginsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserLogins to aggregate.
     */
    where?: AspNetUserLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserLogins to fetch.
     */
    orderBy?: AspNetUserLoginsOrderByWithRelationInput | AspNetUserLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetUserLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetUserLogins
    **/
    _count?: true | AspNetUserLoginsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetUserLoginsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetUserLoginsMaxAggregateInputType
  }

  export type GetAspNetUserLoginsAggregateType<T extends AspNetUserLoginsAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetUserLogins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetUserLogins[P]>
      : GetScalarType<T[P], AggregateAspNetUserLogins[P]>
  }




  export type AspNetUserLoginsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserLoginsWhereInput
    orderBy?: AspNetUserLoginsOrderByWithAggregationInput | AspNetUserLoginsOrderByWithAggregationInput[]
    by: AspNetUserLoginsScalarFieldEnum[] | AspNetUserLoginsScalarFieldEnum
    having?: AspNetUserLoginsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetUserLoginsCountAggregateInputType | true
    _min?: AspNetUserLoginsMinAggregateInputType
    _max?: AspNetUserLoginsMaxAggregateInputType
  }

  export type AspNetUserLoginsGroupByOutputType = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName: string | null
    UserId: string
    _count: AspNetUserLoginsCountAggregateOutputType | null
    _min: AspNetUserLoginsMinAggregateOutputType | null
    _max: AspNetUserLoginsMaxAggregateOutputType | null
  }

  type GetAspNetUserLoginsGroupByPayload<T extends AspNetUserLoginsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetUserLoginsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetUserLoginsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetUserLoginsGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetUserLoginsGroupByOutputType[P]>
        }
      >
    >


  export type AspNetUserLoginsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LoginProvider?: boolean
    ProviderKey?: boolean
    ProviderDisplayName?: boolean
    UserId?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserLogins"]>

  export type AspNetUserLoginsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LoginProvider?: boolean
    ProviderKey?: boolean
    ProviderDisplayName?: boolean
    UserId?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserLogins"]>

  export type AspNetUserLoginsSelectScalar = {
    LoginProvider?: boolean
    ProviderKey?: boolean
    ProviderDisplayName?: boolean
    UserId?: boolean
  }

  export type AspNetUserLoginsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }
  export type AspNetUserLoginsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }

  export type $AspNetUserLoginsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetUserLogins"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      LoginProvider: string
      ProviderKey: string
      ProviderDisplayName: string | null
      UserId: string
    }, ExtArgs["result"]["aspNetUserLogins"]>
    composites: {}
  }

  type AspNetUserLoginsGetPayload<S extends boolean | null | undefined | AspNetUserLoginsDefaultArgs> = $Result.GetResult<Prisma.$AspNetUserLoginsPayload, S>

  type AspNetUserLoginsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetUserLoginsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetUserLoginsCountAggregateInputType | true
    }

  export interface AspNetUserLoginsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetUserLogins'], meta: { name: 'AspNetUserLogins' } }
    /**
     * Find zero or one AspNetUserLogins that matches the filter.
     * @param {AspNetUserLoginsFindUniqueArgs} args - Arguments to find a AspNetUserLogins
     * @example
     * // Get one AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetUserLoginsFindUniqueArgs>(args: SelectSubset<T, AspNetUserLoginsFindUniqueArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetUserLogins that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetUserLoginsFindUniqueOrThrowArgs} args - Arguments to find a AspNetUserLogins
     * @example
     * // Get one AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetUserLoginsFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetUserLoginsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetUserLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsFindFirstArgs} args - Arguments to find a AspNetUserLogins
     * @example
     * // Get one AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetUserLoginsFindFirstArgs>(args?: SelectSubset<T, AspNetUserLoginsFindFirstArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetUserLogins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsFindFirstOrThrowArgs} args - Arguments to find a AspNetUserLogins
     * @example
     * // Get one AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetUserLoginsFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetUserLoginsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetUserLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findMany()
     * 
     * // Get first 10 AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.findMany({ take: 10 })
     * 
     * // Only select the `LoginProvider`
     * const aspNetUserLoginsWithLoginProviderOnly = await prisma.aspNetUserLogins.findMany({ select: { LoginProvider: true } })
     * 
     */
    findMany<T extends AspNetUserLoginsFindManyArgs>(args?: SelectSubset<T, AspNetUserLoginsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetUserLogins.
     * @param {AspNetUserLoginsCreateArgs} args - Arguments to create a AspNetUserLogins.
     * @example
     * // Create one AspNetUserLogins
     * const AspNetUserLogins = await prisma.aspNetUserLogins.create({
     *   data: {
     *     // ... data to create a AspNetUserLogins
     *   }
     * })
     * 
     */
    create<T extends AspNetUserLoginsCreateArgs>(args: SelectSubset<T, AspNetUserLoginsCreateArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetUserLogins.
     * @param {AspNetUserLoginsCreateManyArgs} args - Arguments to create many AspNetUserLogins.
     * @example
     * // Create many AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetUserLoginsCreateManyArgs>(args?: SelectSubset<T, AspNetUserLoginsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetUserLogins and returns the data saved in the database.
     * @param {AspNetUserLoginsCreateManyAndReturnArgs} args - Arguments to create many AspNetUserLogins.
     * @example
     * // Create many AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetUserLogins and only return the `LoginProvider`
     * const aspNetUserLoginsWithLoginProviderOnly = await prisma.aspNetUserLogins.createManyAndReturn({ 
     *   select: { LoginProvider: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetUserLoginsCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetUserLoginsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetUserLogins.
     * @param {AspNetUserLoginsDeleteArgs} args - Arguments to delete one AspNetUserLogins.
     * @example
     * // Delete one AspNetUserLogins
     * const AspNetUserLogins = await prisma.aspNetUserLogins.delete({
     *   where: {
     *     // ... filter to delete one AspNetUserLogins
     *   }
     * })
     * 
     */
    delete<T extends AspNetUserLoginsDeleteArgs>(args: SelectSubset<T, AspNetUserLoginsDeleteArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetUserLogins.
     * @param {AspNetUserLoginsUpdateArgs} args - Arguments to update one AspNetUserLogins.
     * @example
     * // Update one AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetUserLoginsUpdateArgs>(args: SelectSubset<T, AspNetUserLoginsUpdateArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetUserLogins.
     * @param {AspNetUserLoginsDeleteManyArgs} args - Arguments to filter AspNetUserLogins to delete.
     * @example
     * // Delete a few AspNetUserLogins
     * const { count } = await prisma.aspNetUserLogins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetUserLoginsDeleteManyArgs>(args?: SelectSubset<T, AspNetUserLoginsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetUserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetUserLoginsUpdateManyArgs>(args: SelectSubset<T, AspNetUserLoginsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetUserLogins.
     * @param {AspNetUserLoginsUpsertArgs} args - Arguments to update or create a AspNetUserLogins.
     * @example
     * // Update or create a AspNetUserLogins
     * const aspNetUserLogins = await prisma.aspNetUserLogins.upsert({
     *   create: {
     *     // ... data to create a AspNetUserLogins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetUserLogins we want to update
     *   }
     * })
     */
    upsert<T extends AspNetUserLoginsUpsertArgs>(args: SelectSubset<T, AspNetUserLoginsUpsertArgs<ExtArgs>>): Prisma__AspNetUserLoginsClient<$Result.GetResult<Prisma.$AspNetUserLoginsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetUserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsCountArgs} args - Arguments to filter AspNetUserLogins to count.
     * @example
     * // Count the number of AspNetUserLogins
     * const count = await prisma.aspNetUserLogins.count({
     *   where: {
     *     // ... the filter for the AspNetUserLogins we want to count
     *   }
     * })
    **/
    count<T extends AspNetUserLoginsCountArgs>(
      args?: Subset<T, AspNetUserLoginsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetUserLoginsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetUserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetUserLoginsAggregateArgs>(args: Subset<T, AspNetUserLoginsAggregateArgs>): Prisma.PrismaPromise<GetAspNetUserLoginsAggregateType<T>>

    /**
     * Group by AspNetUserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserLoginsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetUserLoginsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetUserLoginsGroupByArgs['orderBy'] }
        : { orderBy?: AspNetUserLoginsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetUserLoginsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetUserLoginsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetUserLogins model
   */
  readonly fields: AspNetUserLoginsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetUserLogins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetUserLoginsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetUserLogins model
   */ 
  interface AspNetUserLoginsFieldRefs {
    readonly LoginProvider: FieldRef<"AspNetUserLogins", 'String'>
    readonly ProviderKey: FieldRef<"AspNetUserLogins", 'String'>
    readonly ProviderDisplayName: FieldRef<"AspNetUserLogins", 'String'>
    readonly UserId: FieldRef<"AspNetUserLogins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetUserLogins findUnique
   */
  export type AspNetUserLoginsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserLogins to fetch.
     */
    where: AspNetUserLoginsWhereUniqueInput
  }

  /**
   * AspNetUserLogins findUniqueOrThrow
   */
  export type AspNetUserLoginsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserLogins to fetch.
     */
    where: AspNetUserLoginsWhereUniqueInput
  }

  /**
   * AspNetUserLogins findFirst
   */
  export type AspNetUserLoginsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserLogins to fetch.
     */
    where?: AspNetUserLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserLogins to fetch.
     */
    orderBy?: AspNetUserLoginsOrderByWithRelationInput | AspNetUserLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserLogins.
     */
    cursor?: AspNetUserLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserLogins.
     */
    distinct?: AspNetUserLoginsScalarFieldEnum | AspNetUserLoginsScalarFieldEnum[]
  }

  /**
   * AspNetUserLogins findFirstOrThrow
   */
  export type AspNetUserLoginsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserLogins to fetch.
     */
    where?: AspNetUserLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserLogins to fetch.
     */
    orderBy?: AspNetUserLoginsOrderByWithRelationInput | AspNetUserLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserLogins.
     */
    cursor?: AspNetUserLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserLogins.
     */
    distinct?: AspNetUserLoginsScalarFieldEnum | AspNetUserLoginsScalarFieldEnum[]
  }

  /**
   * AspNetUserLogins findMany
   */
  export type AspNetUserLoginsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserLogins to fetch.
     */
    where?: AspNetUserLoginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserLogins to fetch.
     */
    orderBy?: AspNetUserLoginsOrderByWithRelationInput | AspNetUserLoginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetUserLogins.
     */
    cursor?: AspNetUserLoginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserLogins.
     */
    skip?: number
    distinct?: AspNetUserLoginsScalarFieldEnum | AspNetUserLoginsScalarFieldEnum[]
  }

  /**
   * AspNetUserLogins create
   */
  export type AspNetUserLoginsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetUserLogins.
     */
    data: XOR<AspNetUserLoginsCreateInput, AspNetUserLoginsUncheckedCreateInput>
  }

  /**
   * AspNetUserLogins createMany
   */
  export type AspNetUserLoginsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetUserLogins.
     */
    data: AspNetUserLoginsCreateManyInput | AspNetUserLoginsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetUserLogins createManyAndReturn
   */
  export type AspNetUserLoginsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetUserLogins.
     */
    data: AspNetUserLoginsCreateManyInput | AspNetUserLoginsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetUserLogins update
   */
  export type AspNetUserLoginsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetUserLogins.
     */
    data: XOR<AspNetUserLoginsUpdateInput, AspNetUserLoginsUncheckedUpdateInput>
    /**
     * Choose, which AspNetUserLogins to update.
     */
    where: AspNetUserLoginsWhereUniqueInput
  }

  /**
   * AspNetUserLogins updateMany
   */
  export type AspNetUserLoginsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetUserLogins.
     */
    data: XOR<AspNetUserLoginsUpdateManyMutationInput, AspNetUserLoginsUncheckedUpdateManyInput>
    /**
     * Filter which AspNetUserLogins to update
     */
    where?: AspNetUserLoginsWhereInput
  }

  /**
   * AspNetUserLogins upsert
   */
  export type AspNetUserLoginsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetUserLogins to update in case it exists.
     */
    where: AspNetUserLoginsWhereUniqueInput
    /**
     * In case the AspNetUserLogins found by the `where` argument doesn't exist, create a new AspNetUserLogins with this data.
     */
    create: XOR<AspNetUserLoginsCreateInput, AspNetUserLoginsUncheckedCreateInput>
    /**
     * In case the AspNetUserLogins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetUserLoginsUpdateInput, AspNetUserLoginsUncheckedUpdateInput>
  }

  /**
   * AspNetUserLogins delete
   */
  export type AspNetUserLoginsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
    /**
     * Filter which AspNetUserLogins to delete.
     */
    where: AspNetUserLoginsWhereUniqueInput
  }

  /**
   * AspNetUserLogins deleteMany
   */
  export type AspNetUserLoginsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserLogins to delete
     */
    where?: AspNetUserLoginsWhereInput
  }

  /**
   * AspNetUserLogins without action
   */
  export type AspNetUserLoginsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserLogins
     */
    select?: AspNetUserLoginsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserLoginsInclude<ExtArgs> | null
  }


  /**
   * Model AspNetUserRoles
   */

  export type AggregateAspNetUserRoles = {
    _count: AspNetUserRolesCountAggregateOutputType | null
    _min: AspNetUserRolesMinAggregateOutputType | null
    _max: AspNetUserRolesMaxAggregateOutputType | null
  }

  export type AspNetUserRolesMinAggregateOutputType = {
    UserId: string | null
    RoleId: string | null
  }

  export type AspNetUserRolesMaxAggregateOutputType = {
    UserId: string | null
    RoleId: string | null
  }

  export type AspNetUserRolesCountAggregateOutputType = {
    UserId: number
    RoleId: number
    _all: number
  }


  export type AspNetUserRolesMinAggregateInputType = {
    UserId?: true
    RoleId?: true
  }

  export type AspNetUserRolesMaxAggregateInputType = {
    UserId?: true
    RoleId?: true
  }

  export type AspNetUserRolesCountAggregateInputType = {
    UserId?: true
    RoleId?: true
    _all?: true
  }

  export type AspNetUserRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserRoles to aggregate.
     */
    where?: AspNetUserRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserRoles to fetch.
     */
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetUserRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetUserRoles
    **/
    _count?: true | AspNetUserRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetUserRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetUserRolesMaxAggregateInputType
  }

  export type GetAspNetUserRolesAggregateType<T extends AspNetUserRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetUserRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetUserRoles[P]>
      : GetScalarType<T[P], AggregateAspNetUserRoles[P]>
  }




  export type AspNetUserRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserRolesWhereInput
    orderBy?: AspNetUserRolesOrderByWithAggregationInput | AspNetUserRolesOrderByWithAggregationInput[]
    by: AspNetUserRolesScalarFieldEnum[] | AspNetUserRolesScalarFieldEnum
    having?: AspNetUserRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetUserRolesCountAggregateInputType | true
    _min?: AspNetUserRolesMinAggregateInputType
    _max?: AspNetUserRolesMaxAggregateInputType
  }

  export type AspNetUserRolesGroupByOutputType = {
    UserId: string
    RoleId: string
    _count: AspNetUserRolesCountAggregateOutputType | null
    _min: AspNetUserRolesMinAggregateOutputType | null
    _max: AspNetUserRolesMaxAggregateOutputType | null
  }

  type GetAspNetUserRolesGroupByPayload<T extends AspNetUserRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetUserRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetUserRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetUserRolesGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetUserRolesGroupByOutputType[P]>
        }
      >
    >


  export type AspNetUserRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    RoleId?: boolean
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserRoles"]>

  export type AspNetUserRolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    RoleId?: boolean
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserRoles"]>

  export type AspNetUserRolesSelectScalar = {
    UserId?: boolean
    RoleId?: boolean
  }

  export type AspNetUserRolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }
  export type AspNetUserRolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetRoles?: boolean | AspNetRolesDefaultArgs<ExtArgs>
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }

  export type $AspNetUserRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetUserRoles"
    objects: {
      AspNetRoles: Prisma.$AspNetRolesPayload<ExtArgs>
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserId: string
      RoleId: string
    }, ExtArgs["result"]["aspNetUserRoles"]>
    composites: {}
  }

  type AspNetUserRolesGetPayload<S extends boolean | null | undefined | AspNetUserRolesDefaultArgs> = $Result.GetResult<Prisma.$AspNetUserRolesPayload, S>

  type AspNetUserRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetUserRolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetUserRolesCountAggregateInputType | true
    }

  export interface AspNetUserRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetUserRoles'], meta: { name: 'AspNetUserRoles' } }
    /**
     * Find zero or one AspNetUserRoles that matches the filter.
     * @param {AspNetUserRolesFindUniqueArgs} args - Arguments to find a AspNetUserRoles
     * @example
     * // Get one AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetUserRolesFindUniqueArgs>(args: SelectSubset<T, AspNetUserRolesFindUniqueArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetUserRoles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetUserRolesFindUniqueOrThrowArgs} args - Arguments to find a AspNetUserRoles
     * @example
     * // Get one AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetUserRolesFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetUserRolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesFindFirstArgs} args - Arguments to find a AspNetUserRoles
     * @example
     * // Get one AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetUserRolesFindFirstArgs>(args?: SelectSubset<T, AspNetUserRolesFindFirstArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetUserRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesFindFirstOrThrowArgs} args - Arguments to find a AspNetUserRoles
     * @example
     * // Get one AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetUserRolesFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetUserRolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findMany()
     * 
     * // Get first 10 AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.findMany({ take: 10 })
     * 
     * // Only select the `UserId`
     * const aspNetUserRolesWithUserIdOnly = await prisma.aspNetUserRoles.findMany({ select: { UserId: true } })
     * 
     */
    findMany<T extends AspNetUserRolesFindManyArgs>(args?: SelectSubset<T, AspNetUserRolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetUserRoles.
     * @param {AspNetUserRolesCreateArgs} args - Arguments to create a AspNetUserRoles.
     * @example
     * // Create one AspNetUserRoles
     * const AspNetUserRoles = await prisma.aspNetUserRoles.create({
     *   data: {
     *     // ... data to create a AspNetUserRoles
     *   }
     * })
     * 
     */
    create<T extends AspNetUserRolesCreateArgs>(args: SelectSubset<T, AspNetUserRolesCreateArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetUserRoles.
     * @param {AspNetUserRolesCreateManyArgs} args - Arguments to create many AspNetUserRoles.
     * @example
     * // Create many AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetUserRolesCreateManyArgs>(args?: SelectSubset<T, AspNetUserRolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetUserRoles and returns the data saved in the database.
     * @param {AspNetUserRolesCreateManyAndReturnArgs} args - Arguments to create many AspNetUserRoles.
     * @example
     * // Create many AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetUserRoles and only return the `UserId`
     * const aspNetUserRolesWithUserIdOnly = await prisma.aspNetUserRoles.createManyAndReturn({ 
     *   select: { UserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetUserRolesCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetUserRolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetUserRoles.
     * @param {AspNetUserRolesDeleteArgs} args - Arguments to delete one AspNetUserRoles.
     * @example
     * // Delete one AspNetUserRoles
     * const AspNetUserRoles = await prisma.aspNetUserRoles.delete({
     *   where: {
     *     // ... filter to delete one AspNetUserRoles
     *   }
     * })
     * 
     */
    delete<T extends AspNetUserRolesDeleteArgs>(args: SelectSubset<T, AspNetUserRolesDeleteArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetUserRoles.
     * @param {AspNetUserRolesUpdateArgs} args - Arguments to update one AspNetUserRoles.
     * @example
     * // Update one AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetUserRolesUpdateArgs>(args: SelectSubset<T, AspNetUserRolesUpdateArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetUserRoles.
     * @param {AspNetUserRolesDeleteManyArgs} args - Arguments to filter AspNetUserRoles to delete.
     * @example
     * // Delete a few AspNetUserRoles
     * const { count } = await prisma.aspNetUserRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetUserRolesDeleteManyArgs>(args?: SelectSubset<T, AspNetUserRolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetUserRolesUpdateManyArgs>(args: SelectSubset<T, AspNetUserRolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetUserRoles.
     * @param {AspNetUserRolesUpsertArgs} args - Arguments to update or create a AspNetUserRoles.
     * @example
     * // Update or create a AspNetUserRoles
     * const aspNetUserRoles = await prisma.aspNetUserRoles.upsert({
     *   create: {
     *     // ... data to create a AspNetUserRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetUserRoles we want to update
     *   }
     * })
     */
    upsert<T extends AspNetUserRolesUpsertArgs>(args: SelectSubset<T, AspNetUserRolesUpsertArgs<ExtArgs>>): Prisma__AspNetUserRolesClient<$Result.GetResult<Prisma.$AspNetUserRolesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesCountArgs} args - Arguments to filter AspNetUserRoles to count.
     * @example
     * // Count the number of AspNetUserRoles
     * const count = await prisma.aspNetUserRoles.count({
     *   where: {
     *     // ... the filter for the AspNetUserRoles we want to count
     *   }
     * })
    **/
    count<T extends AspNetUserRolesCountArgs>(
      args?: Subset<T, AspNetUserRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetUserRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetUserRolesAggregateArgs>(args: Subset<T, AspNetUserRolesAggregateArgs>): Prisma.PrismaPromise<GetAspNetUserRolesAggregateType<T>>

    /**
     * Group by AspNetUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserRolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetUserRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetUserRolesGroupByArgs['orderBy'] }
        : { orderBy?: AspNetUserRolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetUserRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetUserRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetUserRoles model
   */
  readonly fields: AspNetUserRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetUserRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetUserRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetRoles<T extends AspNetRolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetRolesDefaultArgs<ExtArgs>>): Prisma__AspNetRolesClient<$Result.GetResult<Prisma.$AspNetRolesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetUserRoles model
   */ 
  interface AspNetUserRolesFieldRefs {
    readonly UserId: FieldRef<"AspNetUserRoles", 'String'>
    readonly RoleId: FieldRef<"AspNetUserRoles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetUserRoles findUnique
   */
  export type AspNetUserRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserRoles to fetch.
     */
    where: AspNetUserRolesWhereUniqueInput
  }

  /**
   * AspNetUserRoles findUniqueOrThrow
   */
  export type AspNetUserRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserRoles to fetch.
     */
    where: AspNetUserRolesWhereUniqueInput
  }

  /**
   * AspNetUserRoles findFirst
   */
  export type AspNetUserRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserRoles to fetch.
     */
    where?: AspNetUserRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserRoles to fetch.
     */
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserRoles.
     */
    cursor?: AspNetUserRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserRoles.
     */
    distinct?: AspNetUserRolesScalarFieldEnum | AspNetUserRolesScalarFieldEnum[]
  }

  /**
   * AspNetUserRoles findFirstOrThrow
   */
  export type AspNetUserRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserRoles to fetch.
     */
    where?: AspNetUserRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserRoles to fetch.
     */
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserRoles.
     */
    cursor?: AspNetUserRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserRoles.
     */
    distinct?: AspNetUserRolesScalarFieldEnum | AspNetUserRolesScalarFieldEnum[]
  }

  /**
   * AspNetUserRoles findMany
   */
  export type AspNetUserRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserRoles to fetch.
     */
    where?: AspNetUserRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserRoles to fetch.
     */
    orderBy?: AspNetUserRolesOrderByWithRelationInput | AspNetUserRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetUserRoles.
     */
    cursor?: AspNetUserRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserRoles.
     */
    skip?: number
    distinct?: AspNetUserRolesScalarFieldEnum | AspNetUserRolesScalarFieldEnum[]
  }

  /**
   * AspNetUserRoles create
   */
  export type AspNetUserRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetUserRoles.
     */
    data: XOR<AspNetUserRolesCreateInput, AspNetUserRolesUncheckedCreateInput>
  }

  /**
   * AspNetUserRoles createMany
   */
  export type AspNetUserRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetUserRoles.
     */
    data: AspNetUserRolesCreateManyInput | AspNetUserRolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetUserRoles createManyAndReturn
   */
  export type AspNetUserRolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetUserRoles.
     */
    data: AspNetUserRolesCreateManyInput | AspNetUserRolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetUserRoles update
   */
  export type AspNetUserRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetUserRoles.
     */
    data: XOR<AspNetUserRolesUpdateInput, AspNetUserRolesUncheckedUpdateInput>
    /**
     * Choose, which AspNetUserRoles to update.
     */
    where: AspNetUserRolesWhereUniqueInput
  }

  /**
   * AspNetUserRoles updateMany
   */
  export type AspNetUserRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetUserRoles.
     */
    data: XOR<AspNetUserRolesUpdateManyMutationInput, AspNetUserRolesUncheckedUpdateManyInput>
    /**
     * Filter which AspNetUserRoles to update
     */
    where?: AspNetUserRolesWhereInput
  }

  /**
   * AspNetUserRoles upsert
   */
  export type AspNetUserRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetUserRoles to update in case it exists.
     */
    where: AspNetUserRolesWhereUniqueInput
    /**
     * In case the AspNetUserRoles found by the `where` argument doesn't exist, create a new AspNetUserRoles with this data.
     */
    create: XOR<AspNetUserRolesCreateInput, AspNetUserRolesUncheckedCreateInput>
    /**
     * In case the AspNetUserRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetUserRolesUpdateInput, AspNetUserRolesUncheckedUpdateInput>
  }

  /**
   * AspNetUserRoles delete
   */
  export type AspNetUserRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
    /**
     * Filter which AspNetUserRoles to delete.
     */
    where: AspNetUserRolesWhereUniqueInput
  }

  /**
   * AspNetUserRoles deleteMany
   */
  export type AspNetUserRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserRoles to delete
     */
    where?: AspNetUserRolesWhereInput
  }

  /**
   * AspNetUserRoles without action
   */
  export type AspNetUserRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserRoles
     */
    select?: AspNetUserRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserRolesInclude<ExtArgs> | null
  }


  /**
   * Model AspNetUserTokens
   */

  export type AggregateAspNetUserTokens = {
    _count: AspNetUserTokensCountAggregateOutputType | null
    _min: AspNetUserTokensMinAggregateOutputType | null
    _max: AspNetUserTokensMaxAggregateOutputType | null
  }

  export type AspNetUserTokensMinAggregateOutputType = {
    UserId: string | null
    LoginProvider: string | null
    Name: string | null
    Value: string | null
  }

  export type AspNetUserTokensMaxAggregateOutputType = {
    UserId: string | null
    LoginProvider: string | null
    Name: string | null
    Value: string | null
  }

  export type AspNetUserTokensCountAggregateOutputType = {
    UserId: number
    LoginProvider: number
    Name: number
    Value: number
    _all: number
  }


  export type AspNetUserTokensMinAggregateInputType = {
    UserId?: true
    LoginProvider?: true
    Name?: true
    Value?: true
  }

  export type AspNetUserTokensMaxAggregateInputType = {
    UserId?: true
    LoginProvider?: true
    Name?: true
    Value?: true
  }

  export type AspNetUserTokensCountAggregateInputType = {
    UserId?: true
    LoginProvider?: true
    Name?: true
    Value?: true
    _all?: true
  }

  export type AspNetUserTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserTokens to aggregate.
     */
    where?: AspNetUserTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserTokens to fetch.
     */
    orderBy?: AspNetUserTokensOrderByWithRelationInput | AspNetUserTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspNetUserTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspNetUserTokens
    **/
    _count?: true | AspNetUserTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspNetUserTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspNetUserTokensMaxAggregateInputType
  }

  export type GetAspNetUserTokensAggregateType<T extends AspNetUserTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateAspNetUserTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspNetUserTokens[P]>
      : GetScalarType<T[P], AggregateAspNetUserTokens[P]>
  }




  export type AspNetUserTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspNetUserTokensWhereInput
    orderBy?: AspNetUserTokensOrderByWithAggregationInput | AspNetUserTokensOrderByWithAggregationInput[]
    by: AspNetUserTokensScalarFieldEnum[] | AspNetUserTokensScalarFieldEnum
    having?: AspNetUserTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspNetUserTokensCountAggregateInputType | true
    _min?: AspNetUserTokensMinAggregateInputType
    _max?: AspNetUserTokensMaxAggregateInputType
  }

  export type AspNetUserTokensGroupByOutputType = {
    UserId: string
    LoginProvider: string
    Name: string
    Value: string | null
    _count: AspNetUserTokensCountAggregateOutputType | null
    _min: AspNetUserTokensMinAggregateOutputType | null
    _max: AspNetUserTokensMaxAggregateOutputType | null
  }

  type GetAspNetUserTokensGroupByPayload<T extends AspNetUserTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspNetUserTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspNetUserTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspNetUserTokensGroupByOutputType[P]>
            : GetScalarType<T[P], AspNetUserTokensGroupByOutputType[P]>
        }
      >
    >


  export type AspNetUserTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    LoginProvider?: boolean
    Name?: boolean
    Value?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserTokens"]>

  export type AspNetUserTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    LoginProvider?: boolean
    Name?: boolean
    Value?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspNetUserTokens"]>

  export type AspNetUserTokensSelectScalar = {
    UserId?: boolean
    LoginProvider?: boolean
    Name?: boolean
    Value?: boolean
  }

  export type AspNetUserTokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }
  export type AspNetUserTokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }

  export type $AspNetUserTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspNetUserTokens"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserId: string
      LoginProvider: string
      Name: string
      Value: string | null
    }, ExtArgs["result"]["aspNetUserTokens"]>
    composites: {}
  }

  type AspNetUserTokensGetPayload<S extends boolean | null | undefined | AspNetUserTokensDefaultArgs> = $Result.GetResult<Prisma.$AspNetUserTokensPayload, S>

  type AspNetUserTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AspNetUserTokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AspNetUserTokensCountAggregateInputType | true
    }

  export interface AspNetUserTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspNetUserTokens'], meta: { name: 'AspNetUserTokens' } }
    /**
     * Find zero or one AspNetUserTokens that matches the filter.
     * @param {AspNetUserTokensFindUniqueArgs} args - Arguments to find a AspNetUserTokens
     * @example
     * // Get one AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspNetUserTokensFindUniqueArgs>(args: SelectSubset<T, AspNetUserTokensFindUniqueArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AspNetUserTokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AspNetUserTokensFindUniqueOrThrowArgs} args - Arguments to find a AspNetUserTokens
     * @example
     * // Get one AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspNetUserTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, AspNetUserTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AspNetUserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensFindFirstArgs} args - Arguments to find a AspNetUserTokens
     * @example
     * // Get one AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspNetUserTokensFindFirstArgs>(args?: SelectSubset<T, AspNetUserTokensFindFirstArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AspNetUserTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensFindFirstOrThrowArgs} args - Arguments to find a AspNetUserTokens
     * @example
     * // Get one AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspNetUserTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, AspNetUserTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AspNetUserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findMany()
     * 
     * // Get first 10 AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.findMany({ take: 10 })
     * 
     * // Only select the `UserId`
     * const aspNetUserTokensWithUserIdOnly = await prisma.aspNetUserTokens.findMany({ select: { UserId: true } })
     * 
     */
    findMany<T extends AspNetUserTokensFindManyArgs>(args?: SelectSubset<T, AspNetUserTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AspNetUserTokens.
     * @param {AspNetUserTokensCreateArgs} args - Arguments to create a AspNetUserTokens.
     * @example
     * // Create one AspNetUserTokens
     * const AspNetUserTokens = await prisma.aspNetUserTokens.create({
     *   data: {
     *     // ... data to create a AspNetUserTokens
     *   }
     * })
     * 
     */
    create<T extends AspNetUserTokensCreateArgs>(args: SelectSubset<T, AspNetUserTokensCreateArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AspNetUserTokens.
     * @param {AspNetUserTokensCreateManyArgs} args - Arguments to create many AspNetUserTokens.
     * @example
     * // Create many AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspNetUserTokensCreateManyArgs>(args?: SelectSubset<T, AspNetUserTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AspNetUserTokens and returns the data saved in the database.
     * @param {AspNetUserTokensCreateManyAndReturnArgs} args - Arguments to create many AspNetUserTokens.
     * @example
     * // Create many AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AspNetUserTokens and only return the `UserId`
     * const aspNetUserTokensWithUserIdOnly = await prisma.aspNetUserTokens.createManyAndReturn({ 
     *   select: { UserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AspNetUserTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, AspNetUserTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AspNetUserTokens.
     * @param {AspNetUserTokensDeleteArgs} args - Arguments to delete one AspNetUserTokens.
     * @example
     * // Delete one AspNetUserTokens
     * const AspNetUserTokens = await prisma.aspNetUserTokens.delete({
     *   where: {
     *     // ... filter to delete one AspNetUserTokens
     *   }
     * })
     * 
     */
    delete<T extends AspNetUserTokensDeleteArgs>(args: SelectSubset<T, AspNetUserTokensDeleteArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AspNetUserTokens.
     * @param {AspNetUserTokensUpdateArgs} args - Arguments to update one AspNetUserTokens.
     * @example
     * // Update one AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspNetUserTokensUpdateArgs>(args: SelectSubset<T, AspNetUserTokensUpdateArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AspNetUserTokens.
     * @param {AspNetUserTokensDeleteManyArgs} args - Arguments to filter AspNetUserTokens to delete.
     * @example
     * // Delete a few AspNetUserTokens
     * const { count } = await prisma.aspNetUserTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspNetUserTokensDeleteManyArgs>(args?: SelectSubset<T, AspNetUserTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspNetUserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspNetUserTokensUpdateManyArgs>(args: SelectSubset<T, AspNetUserTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspNetUserTokens.
     * @param {AspNetUserTokensUpsertArgs} args - Arguments to update or create a AspNetUserTokens.
     * @example
     * // Update or create a AspNetUserTokens
     * const aspNetUserTokens = await prisma.aspNetUserTokens.upsert({
     *   create: {
     *     // ... data to create a AspNetUserTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspNetUserTokens we want to update
     *   }
     * })
     */
    upsert<T extends AspNetUserTokensUpsertArgs>(args: SelectSubset<T, AspNetUserTokensUpsertArgs<ExtArgs>>): Prisma__AspNetUserTokensClient<$Result.GetResult<Prisma.$AspNetUserTokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AspNetUserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensCountArgs} args - Arguments to filter AspNetUserTokens to count.
     * @example
     * // Count the number of AspNetUserTokens
     * const count = await prisma.aspNetUserTokens.count({
     *   where: {
     *     // ... the filter for the AspNetUserTokens we want to count
     *   }
     * })
    **/
    count<T extends AspNetUserTokensCountArgs>(
      args?: Subset<T, AspNetUserTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspNetUserTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspNetUserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AspNetUserTokensAggregateArgs>(args: Subset<T, AspNetUserTokensAggregateArgs>): Prisma.PrismaPromise<GetAspNetUserTokensAggregateType<T>>

    /**
     * Group by AspNetUserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspNetUserTokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AspNetUserTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspNetUserTokensGroupByArgs['orderBy'] }
        : { orderBy?: AspNetUserTokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AspNetUserTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspNetUserTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspNetUserTokens model
   */
  readonly fields: AspNetUserTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspNetUserTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspNetUserTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AspNetUserTokens model
   */ 
  interface AspNetUserTokensFieldRefs {
    readonly UserId: FieldRef<"AspNetUserTokens", 'String'>
    readonly LoginProvider: FieldRef<"AspNetUserTokens", 'String'>
    readonly Name: FieldRef<"AspNetUserTokens", 'String'>
    readonly Value: FieldRef<"AspNetUserTokens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AspNetUserTokens findUnique
   */
  export type AspNetUserTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserTokens to fetch.
     */
    where: AspNetUserTokensWhereUniqueInput
  }

  /**
   * AspNetUserTokens findUniqueOrThrow
   */
  export type AspNetUserTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserTokens to fetch.
     */
    where: AspNetUserTokensWhereUniqueInput
  }

  /**
   * AspNetUserTokens findFirst
   */
  export type AspNetUserTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserTokens to fetch.
     */
    where?: AspNetUserTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserTokens to fetch.
     */
    orderBy?: AspNetUserTokensOrderByWithRelationInput | AspNetUserTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserTokens.
     */
    cursor?: AspNetUserTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserTokens.
     */
    distinct?: AspNetUserTokensScalarFieldEnum | AspNetUserTokensScalarFieldEnum[]
  }

  /**
   * AspNetUserTokens findFirstOrThrow
   */
  export type AspNetUserTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserTokens to fetch.
     */
    where?: AspNetUserTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserTokens to fetch.
     */
    orderBy?: AspNetUserTokensOrderByWithRelationInput | AspNetUserTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspNetUserTokens.
     */
    cursor?: AspNetUserTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspNetUserTokens.
     */
    distinct?: AspNetUserTokensScalarFieldEnum | AspNetUserTokensScalarFieldEnum[]
  }

  /**
   * AspNetUserTokens findMany
   */
  export type AspNetUserTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter, which AspNetUserTokens to fetch.
     */
    where?: AspNetUserTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspNetUserTokens to fetch.
     */
    orderBy?: AspNetUserTokensOrderByWithRelationInput | AspNetUserTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspNetUserTokens.
     */
    cursor?: AspNetUserTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspNetUserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspNetUserTokens.
     */
    skip?: number
    distinct?: AspNetUserTokensScalarFieldEnum | AspNetUserTokensScalarFieldEnum[]
  }

  /**
   * AspNetUserTokens create
   */
  export type AspNetUserTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * The data needed to create a AspNetUserTokens.
     */
    data: XOR<AspNetUserTokensCreateInput, AspNetUserTokensUncheckedCreateInput>
  }

  /**
   * AspNetUserTokens createMany
   */
  export type AspNetUserTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspNetUserTokens.
     */
    data: AspNetUserTokensCreateManyInput | AspNetUserTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspNetUserTokens createManyAndReturn
   */
  export type AspNetUserTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AspNetUserTokens.
     */
    data: AspNetUserTokensCreateManyInput | AspNetUserTokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AspNetUserTokens update
   */
  export type AspNetUserTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * The data needed to update a AspNetUserTokens.
     */
    data: XOR<AspNetUserTokensUpdateInput, AspNetUserTokensUncheckedUpdateInput>
    /**
     * Choose, which AspNetUserTokens to update.
     */
    where: AspNetUserTokensWhereUniqueInput
  }

  /**
   * AspNetUserTokens updateMany
   */
  export type AspNetUserTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspNetUserTokens.
     */
    data: XOR<AspNetUserTokensUpdateManyMutationInput, AspNetUserTokensUncheckedUpdateManyInput>
    /**
     * Filter which AspNetUserTokens to update
     */
    where?: AspNetUserTokensWhereInput
  }

  /**
   * AspNetUserTokens upsert
   */
  export type AspNetUserTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * The filter to search for the AspNetUserTokens to update in case it exists.
     */
    where: AspNetUserTokensWhereUniqueInput
    /**
     * In case the AspNetUserTokens found by the `where` argument doesn't exist, create a new AspNetUserTokens with this data.
     */
    create: XOR<AspNetUserTokensCreateInput, AspNetUserTokensUncheckedCreateInput>
    /**
     * In case the AspNetUserTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspNetUserTokensUpdateInput, AspNetUserTokensUncheckedUpdateInput>
  }

  /**
   * AspNetUserTokens delete
   */
  export type AspNetUserTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
    /**
     * Filter which AspNetUserTokens to delete.
     */
    where: AspNetUserTokensWhereUniqueInput
  }

  /**
   * AspNetUserTokens deleteMany
   */
  export type AspNetUserTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspNetUserTokens to delete
     */
    where?: AspNetUserTokensWhereInput
  }

  /**
   * AspNetUserTokens without action
   */
  export type AspNetUserTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUserTokens
     */
    select?: AspNetUserTokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUserTokensInclude<ExtArgs> | null
  }


  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Secret: string | null
    TenantId: string | null
  }

  export type ClientsMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Secret: string | null
    TenantId: string | null
  }

  export type ClientsCountAggregateOutputType = {
    Id: number
    Name: number
    Secret: number
    TenantId: number
    _all: number
  }


  export type ClientsMinAggregateInputType = {
    Id?: true
    Name?: true
    Secret?: true
    TenantId?: true
  }

  export type ClientsMaxAggregateInputType = {
    Id?: true
    Name?: true
    Secret?: true
    TenantId?: true
  }

  export type ClientsCountAggregateInputType = {
    Id?: true
    Name?: true
    Secret?: true
    TenantId?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    Id: string
    Name: string
    Secret: string
    TenantId: string
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Secret?: boolean
    TenantId?: boolean
    Tenants?: boolean | TenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Secret?: boolean
    TenantId?: boolean
    Tenants?: boolean | TenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectScalar = {
    Id?: boolean
    Name?: boolean
    Secret?: boolean
    TenantId?: boolean
  }

  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenants?: boolean | TenantsDefaultArgs<ExtArgs>
  }
  export type ClientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenants?: boolean | TenantsDefaultArgs<ExtArgs>
  }

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      Tenants: Prisma.$TenantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Secret: string
      TenantId: string
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `Id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenants<T extends TenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantsDefaultArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clients model
   */ 
  interface ClientsFieldRefs {
    readonly Id: FieldRef<"Clients", 'String'>
    readonly Name: FieldRef<"Clients", 'String'>
    readonly Secret: FieldRef<"Clients", 'String'>
    readonly TenantId: FieldRef<"Clients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients createManyAndReturn
   */
  export type ClientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model CoinEvents
   */

  export type AggregateCoinEvents = {
    _count: CoinEventsCountAggregateOutputType | null
    _avg: CoinEventsAvgAggregateOutputType | null
    _sum: CoinEventsSumAggregateOutputType | null
    _min: CoinEventsMinAggregateOutputType | null
    _max: CoinEventsMaxAggregateOutputType | null
  }

  export type CoinEventsAvgAggregateOutputType = {
    EventType: number | null
  }

  export type CoinEventsSumAggregateOutputType = {
    EventType: number | null
  }

  export type CoinEventsMinAggregateOutputType = {
    Id: string | null
    EventType: number | null
    Date: Date | null
    RelatedEntityId: string | null
  }

  export type CoinEventsMaxAggregateOutputType = {
    Id: string | null
    EventType: number | null
    Date: Date | null
    RelatedEntityId: string | null
  }

  export type CoinEventsCountAggregateOutputType = {
    Id: number
    EventType: number
    Date: number
    RelatedEntityId: number
    _all: number
  }


  export type CoinEventsAvgAggregateInputType = {
    EventType?: true
  }

  export type CoinEventsSumAggregateInputType = {
    EventType?: true
  }

  export type CoinEventsMinAggregateInputType = {
    Id?: true
    EventType?: true
    Date?: true
    RelatedEntityId?: true
  }

  export type CoinEventsMaxAggregateInputType = {
    Id?: true
    EventType?: true
    Date?: true
    RelatedEntityId?: true
  }

  export type CoinEventsCountAggregateInputType = {
    Id?: true
    EventType?: true
    Date?: true
    RelatedEntityId?: true
    _all?: true
  }

  export type CoinEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinEvents to aggregate.
     */
    where?: CoinEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinEvents to fetch.
     */
    orderBy?: CoinEventsOrderByWithRelationInput | CoinEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinEvents
    **/
    _count?: true | CoinEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinEventsMaxAggregateInputType
  }

  export type GetCoinEventsAggregateType<T extends CoinEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinEvents[P]>
      : GetScalarType<T[P], AggregateCoinEvents[P]>
  }




  export type CoinEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinEventsWhereInput
    orderBy?: CoinEventsOrderByWithAggregationInput | CoinEventsOrderByWithAggregationInput[]
    by: CoinEventsScalarFieldEnum[] | CoinEventsScalarFieldEnum
    having?: CoinEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinEventsCountAggregateInputType | true
    _avg?: CoinEventsAvgAggregateInputType
    _sum?: CoinEventsSumAggregateInputType
    _min?: CoinEventsMinAggregateInputType
    _max?: CoinEventsMaxAggregateInputType
  }

  export type CoinEventsGroupByOutputType = {
    Id: string
    EventType: number
    Date: Date
    RelatedEntityId: string
    _count: CoinEventsCountAggregateOutputType | null
    _avg: CoinEventsAvgAggregateOutputType | null
    _sum: CoinEventsSumAggregateOutputType | null
    _min: CoinEventsMinAggregateOutputType | null
    _max: CoinEventsMaxAggregateOutputType | null
  }

  type GetCoinEventsGroupByPayload<T extends CoinEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinEventsGroupByOutputType[P]>
            : GetScalarType<T[P], CoinEventsGroupByOutputType[P]>
        }
      >
    >


  export type CoinEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    EventType?: boolean
    Date?: boolean
    RelatedEntityId?: boolean
    Transactions?: boolean | CoinEvents$TransactionsArgs<ExtArgs>
    _count?: boolean | CoinEventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinEvents"]>

  export type CoinEventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    EventType?: boolean
    Date?: boolean
    RelatedEntityId?: boolean
  }, ExtArgs["result"]["coinEvents"]>

  export type CoinEventsSelectScalar = {
    Id?: boolean
    EventType?: boolean
    Date?: boolean
    RelatedEntityId?: boolean
  }

  export type CoinEventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | CoinEvents$TransactionsArgs<ExtArgs>
    _count?: boolean | CoinEventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoinEventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoinEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinEvents"
    objects: {
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      EventType: number
      Date: Date
      RelatedEntityId: string
    }, ExtArgs["result"]["coinEvents"]>
    composites: {}
  }

  type CoinEventsGetPayload<S extends boolean | null | undefined | CoinEventsDefaultArgs> = $Result.GetResult<Prisma.$CoinEventsPayload, S>

  type CoinEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoinEventsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoinEventsCountAggregateInputType | true
    }

  export interface CoinEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinEvents'], meta: { name: 'CoinEvents' } }
    /**
     * Find zero or one CoinEvents that matches the filter.
     * @param {CoinEventsFindUniqueArgs} args - Arguments to find a CoinEvents
     * @example
     * // Get one CoinEvents
     * const coinEvents = await prisma.coinEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinEventsFindUniqueArgs>(args: SelectSubset<T, CoinEventsFindUniqueArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CoinEvents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoinEventsFindUniqueOrThrowArgs} args - Arguments to find a CoinEvents
     * @example
     * // Get one CoinEvents
     * const coinEvents = await prisma.coinEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CoinEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsFindFirstArgs} args - Arguments to find a CoinEvents
     * @example
     * // Get one CoinEvents
     * const coinEvents = await prisma.coinEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinEventsFindFirstArgs>(args?: SelectSubset<T, CoinEventsFindFirstArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CoinEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsFindFirstOrThrowArgs} args - Arguments to find a CoinEvents
     * @example
     * // Get one CoinEvents
     * const coinEvents = await prisma.coinEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CoinEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinEvents
     * const coinEvents = await prisma.coinEvents.findMany()
     * 
     * // Get first 10 CoinEvents
     * const coinEvents = await prisma.coinEvents.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const coinEventsWithIdOnly = await prisma.coinEvents.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CoinEventsFindManyArgs>(args?: SelectSubset<T, CoinEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CoinEvents.
     * @param {CoinEventsCreateArgs} args - Arguments to create a CoinEvents.
     * @example
     * // Create one CoinEvents
     * const CoinEvents = await prisma.coinEvents.create({
     *   data: {
     *     // ... data to create a CoinEvents
     *   }
     * })
     * 
     */
    create<T extends CoinEventsCreateArgs>(args: SelectSubset<T, CoinEventsCreateArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CoinEvents.
     * @param {CoinEventsCreateManyArgs} args - Arguments to create many CoinEvents.
     * @example
     * // Create many CoinEvents
     * const coinEvents = await prisma.coinEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinEventsCreateManyArgs>(args?: SelectSubset<T, CoinEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoinEvents and returns the data saved in the database.
     * @param {CoinEventsCreateManyAndReturnArgs} args - Arguments to create many CoinEvents.
     * @example
     * // Create many CoinEvents
     * const coinEvents = await prisma.coinEvents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoinEvents and only return the `Id`
     * const coinEventsWithIdOnly = await prisma.coinEvents.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinEventsCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinEventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CoinEvents.
     * @param {CoinEventsDeleteArgs} args - Arguments to delete one CoinEvents.
     * @example
     * // Delete one CoinEvents
     * const CoinEvents = await prisma.coinEvents.delete({
     *   where: {
     *     // ... filter to delete one CoinEvents
     *   }
     * })
     * 
     */
    delete<T extends CoinEventsDeleteArgs>(args: SelectSubset<T, CoinEventsDeleteArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CoinEvents.
     * @param {CoinEventsUpdateArgs} args - Arguments to update one CoinEvents.
     * @example
     * // Update one CoinEvents
     * const coinEvents = await prisma.coinEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinEventsUpdateArgs>(args: SelectSubset<T, CoinEventsUpdateArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CoinEvents.
     * @param {CoinEventsDeleteManyArgs} args - Arguments to filter CoinEvents to delete.
     * @example
     * // Delete a few CoinEvents
     * const { count } = await prisma.coinEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinEventsDeleteManyArgs>(args?: SelectSubset<T, CoinEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinEvents
     * const coinEvents = await prisma.coinEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinEventsUpdateManyArgs>(args: SelectSubset<T, CoinEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoinEvents.
     * @param {CoinEventsUpsertArgs} args - Arguments to update or create a CoinEvents.
     * @example
     * // Update or create a CoinEvents
     * const coinEvents = await prisma.coinEvents.upsert({
     *   create: {
     *     // ... data to create a CoinEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinEvents we want to update
     *   }
     * })
     */
    upsert<T extends CoinEventsUpsertArgs>(args: SelectSubset<T, CoinEventsUpsertArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CoinEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsCountArgs} args - Arguments to filter CoinEvents to count.
     * @example
     * // Count the number of CoinEvents
     * const count = await prisma.coinEvents.count({
     *   where: {
     *     // ... the filter for the CoinEvents we want to count
     *   }
     * })
    **/
    count<T extends CoinEventsCountArgs>(
      args?: Subset<T, CoinEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinEventsAggregateArgs>(args: Subset<T, CoinEventsAggregateArgs>): Prisma.PrismaPromise<GetCoinEventsAggregateType<T>>

    /**
     * Group by CoinEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinEventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinEventsGroupByArgs['orderBy'] }
        : { orderBy?: CoinEventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinEvents model
   */
  readonly fields: CoinEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transactions<T extends CoinEvents$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, CoinEvents$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoinEvents model
   */ 
  interface CoinEventsFieldRefs {
    readonly Id: FieldRef<"CoinEvents", 'String'>
    readonly EventType: FieldRef<"CoinEvents", 'Int'>
    readonly Date: FieldRef<"CoinEvents", 'DateTime'>
    readonly RelatedEntityId: FieldRef<"CoinEvents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoinEvents findUnique
   */
  export type CoinEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter, which CoinEvents to fetch.
     */
    where: CoinEventsWhereUniqueInput
  }

  /**
   * CoinEvents findUniqueOrThrow
   */
  export type CoinEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter, which CoinEvents to fetch.
     */
    where: CoinEventsWhereUniqueInput
  }

  /**
   * CoinEvents findFirst
   */
  export type CoinEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter, which CoinEvents to fetch.
     */
    where?: CoinEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinEvents to fetch.
     */
    orderBy?: CoinEventsOrderByWithRelationInput | CoinEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinEvents.
     */
    cursor?: CoinEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinEvents.
     */
    distinct?: CoinEventsScalarFieldEnum | CoinEventsScalarFieldEnum[]
  }

  /**
   * CoinEvents findFirstOrThrow
   */
  export type CoinEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter, which CoinEvents to fetch.
     */
    where?: CoinEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinEvents to fetch.
     */
    orderBy?: CoinEventsOrderByWithRelationInput | CoinEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinEvents.
     */
    cursor?: CoinEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinEvents.
     */
    distinct?: CoinEventsScalarFieldEnum | CoinEventsScalarFieldEnum[]
  }

  /**
   * CoinEvents findMany
   */
  export type CoinEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter, which CoinEvents to fetch.
     */
    where?: CoinEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinEvents to fetch.
     */
    orderBy?: CoinEventsOrderByWithRelationInput | CoinEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinEvents.
     */
    cursor?: CoinEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinEvents.
     */
    skip?: number
    distinct?: CoinEventsScalarFieldEnum | CoinEventsScalarFieldEnum[]
  }

  /**
   * CoinEvents create
   */
  export type CoinEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinEvents.
     */
    data: XOR<CoinEventsCreateInput, CoinEventsUncheckedCreateInput>
  }

  /**
   * CoinEvents createMany
   */
  export type CoinEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinEvents.
     */
    data: CoinEventsCreateManyInput | CoinEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinEvents createManyAndReturn
   */
  export type CoinEventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CoinEvents.
     */
    data: CoinEventsCreateManyInput | CoinEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinEvents update
   */
  export type CoinEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinEvents.
     */
    data: XOR<CoinEventsUpdateInput, CoinEventsUncheckedUpdateInput>
    /**
     * Choose, which CoinEvents to update.
     */
    where: CoinEventsWhereUniqueInput
  }

  /**
   * CoinEvents updateMany
   */
  export type CoinEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinEvents.
     */
    data: XOR<CoinEventsUpdateManyMutationInput, CoinEventsUncheckedUpdateManyInput>
    /**
     * Filter which CoinEvents to update
     */
    where?: CoinEventsWhereInput
  }

  /**
   * CoinEvents upsert
   */
  export type CoinEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinEvents to update in case it exists.
     */
    where: CoinEventsWhereUniqueInput
    /**
     * In case the CoinEvents found by the `where` argument doesn't exist, create a new CoinEvents with this data.
     */
    create: XOR<CoinEventsCreateInput, CoinEventsUncheckedCreateInput>
    /**
     * In case the CoinEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinEventsUpdateInput, CoinEventsUncheckedUpdateInput>
  }

  /**
   * CoinEvents delete
   */
  export type CoinEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    /**
     * Filter which CoinEvents to delete.
     */
    where: CoinEventsWhereUniqueInput
  }

  /**
   * CoinEvents deleteMany
   */
  export type CoinEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinEvents to delete
     */
    where?: CoinEventsWhereInput
  }

  /**
   * CoinEvents.Transactions
   */
  export type CoinEvents$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * CoinEvents without action
   */
  export type CoinEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
  }


  /**
   * Model PasswordRecoveryCodes
   */

  export type AggregatePasswordRecoveryCodes = {
    _count: PasswordRecoveryCodesCountAggregateOutputType | null
    _min: PasswordRecoveryCodesMinAggregateOutputType | null
    _max: PasswordRecoveryCodesMaxAggregateOutputType | null
  }

  export type PasswordRecoveryCodesMinAggregateOutputType = {
    Id: string | null
    Email: string | null
    Code: string | null
    ExpiresAt: Date | null
  }

  export type PasswordRecoveryCodesMaxAggregateOutputType = {
    Id: string | null
    Email: string | null
    Code: string | null
    ExpiresAt: Date | null
  }

  export type PasswordRecoveryCodesCountAggregateOutputType = {
    Id: number
    Email: number
    Code: number
    ExpiresAt: number
    _all: number
  }


  export type PasswordRecoveryCodesMinAggregateInputType = {
    Id?: true
    Email?: true
    Code?: true
    ExpiresAt?: true
  }

  export type PasswordRecoveryCodesMaxAggregateInputType = {
    Id?: true
    Email?: true
    Code?: true
    ExpiresAt?: true
  }

  export type PasswordRecoveryCodesCountAggregateInputType = {
    Id?: true
    Email?: true
    Code?: true
    ExpiresAt?: true
    _all?: true
  }

  export type PasswordRecoveryCodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecoveryCodes to aggregate.
     */
    where?: PasswordRecoveryCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryCodes to fetch.
     */
    orderBy?: PasswordRecoveryCodesOrderByWithRelationInput | PasswordRecoveryCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordRecoveryCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordRecoveryCodes
    **/
    _count?: true | PasswordRecoveryCodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordRecoveryCodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordRecoveryCodesMaxAggregateInputType
  }

  export type GetPasswordRecoveryCodesAggregateType<T extends PasswordRecoveryCodesAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordRecoveryCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordRecoveryCodes[P]>
      : GetScalarType<T[P], AggregatePasswordRecoveryCodes[P]>
  }




  export type PasswordRecoveryCodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordRecoveryCodesWhereInput
    orderBy?: PasswordRecoveryCodesOrderByWithAggregationInput | PasswordRecoveryCodesOrderByWithAggregationInput[]
    by: PasswordRecoveryCodesScalarFieldEnum[] | PasswordRecoveryCodesScalarFieldEnum
    having?: PasswordRecoveryCodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordRecoveryCodesCountAggregateInputType | true
    _min?: PasswordRecoveryCodesMinAggregateInputType
    _max?: PasswordRecoveryCodesMaxAggregateInputType
  }

  export type PasswordRecoveryCodesGroupByOutputType = {
    Id: string
    Email: string
    Code: string
    ExpiresAt: Date
    _count: PasswordRecoveryCodesCountAggregateOutputType | null
    _min: PasswordRecoveryCodesMinAggregateOutputType | null
    _max: PasswordRecoveryCodesMaxAggregateOutputType | null
  }

  type GetPasswordRecoveryCodesGroupByPayload<T extends PasswordRecoveryCodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordRecoveryCodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordRecoveryCodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordRecoveryCodesGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordRecoveryCodesGroupByOutputType[P]>
        }
      >
    >


  export type PasswordRecoveryCodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Email?: boolean
    Code?: boolean
    ExpiresAt?: boolean
  }, ExtArgs["result"]["passwordRecoveryCodes"]>

  export type PasswordRecoveryCodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Email?: boolean
    Code?: boolean
    ExpiresAt?: boolean
  }, ExtArgs["result"]["passwordRecoveryCodes"]>

  export type PasswordRecoveryCodesSelectScalar = {
    Id?: boolean
    Email?: boolean
    Code?: boolean
    ExpiresAt?: boolean
  }


  export type $PasswordRecoveryCodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordRecoveryCodes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Email: string
      Code: string
      ExpiresAt: Date
    }, ExtArgs["result"]["passwordRecoveryCodes"]>
    composites: {}
  }

  type PasswordRecoveryCodesGetPayload<S extends boolean | null | undefined | PasswordRecoveryCodesDefaultArgs> = $Result.GetResult<Prisma.$PasswordRecoveryCodesPayload, S>

  type PasswordRecoveryCodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasswordRecoveryCodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasswordRecoveryCodesCountAggregateInputType | true
    }

  export interface PasswordRecoveryCodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordRecoveryCodes'], meta: { name: 'PasswordRecoveryCodes' } }
    /**
     * Find zero or one PasswordRecoveryCodes that matches the filter.
     * @param {PasswordRecoveryCodesFindUniqueArgs} args - Arguments to find a PasswordRecoveryCodes
     * @example
     * // Get one PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordRecoveryCodesFindUniqueArgs>(args: SelectSubset<T, PasswordRecoveryCodesFindUniqueArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PasswordRecoveryCodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PasswordRecoveryCodesFindUniqueOrThrowArgs} args - Arguments to find a PasswordRecoveryCodes
     * @example
     * // Get one PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordRecoveryCodesFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordRecoveryCodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PasswordRecoveryCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesFindFirstArgs} args - Arguments to find a PasswordRecoveryCodes
     * @example
     * // Get one PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordRecoveryCodesFindFirstArgs>(args?: SelectSubset<T, PasswordRecoveryCodesFindFirstArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PasswordRecoveryCodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesFindFirstOrThrowArgs} args - Arguments to find a PasswordRecoveryCodes
     * @example
     * // Get one PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordRecoveryCodesFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordRecoveryCodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PasswordRecoveryCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findMany()
     * 
     * // Get first 10 PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const passwordRecoveryCodesWithIdOnly = await prisma.passwordRecoveryCodes.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PasswordRecoveryCodesFindManyArgs>(args?: SelectSubset<T, PasswordRecoveryCodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesCreateArgs} args - Arguments to create a PasswordRecoveryCodes.
     * @example
     * // Create one PasswordRecoveryCodes
     * const PasswordRecoveryCodes = await prisma.passwordRecoveryCodes.create({
     *   data: {
     *     // ... data to create a PasswordRecoveryCodes
     *   }
     * })
     * 
     */
    create<T extends PasswordRecoveryCodesCreateArgs>(args: SelectSubset<T, PasswordRecoveryCodesCreateArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesCreateManyArgs} args - Arguments to create many PasswordRecoveryCodes.
     * @example
     * // Create many PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordRecoveryCodesCreateManyArgs>(args?: SelectSubset<T, PasswordRecoveryCodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordRecoveryCodes and returns the data saved in the database.
     * @param {PasswordRecoveryCodesCreateManyAndReturnArgs} args - Arguments to create many PasswordRecoveryCodes.
     * @example
     * // Create many PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordRecoveryCodes and only return the `Id`
     * const passwordRecoveryCodesWithIdOnly = await prisma.passwordRecoveryCodes.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordRecoveryCodesCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordRecoveryCodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesDeleteArgs} args - Arguments to delete one PasswordRecoveryCodes.
     * @example
     * // Delete one PasswordRecoveryCodes
     * const PasswordRecoveryCodes = await prisma.passwordRecoveryCodes.delete({
     *   where: {
     *     // ... filter to delete one PasswordRecoveryCodes
     *   }
     * })
     * 
     */
    delete<T extends PasswordRecoveryCodesDeleteArgs>(args: SelectSubset<T, PasswordRecoveryCodesDeleteArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesUpdateArgs} args - Arguments to update one PasswordRecoveryCodes.
     * @example
     * // Update one PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordRecoveryCodesUpdateArgs>(args: SelectSubset<T, PasswordRecoveryCodesUpdateArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesDeleteManyArgs} args - Arguments to filter PasswordRecoveryCodes to delete.
     * @example
     * // Delete a few PasswordRecoveryCodes
     * const { count } = await prisma.passwordRecoveryCodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordRecoveryCodesDeleteManyArgs>(args?: SelectSubset<T, PasswordRecoveryCodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordRecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordRecoveryCodesUpdateManyArgs>(args: SelectSubset<T, PasswordRecoveryCodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordRecoveryCodes.
     * @param {PasswordRecoveryCodesUpsertArgs} args - Arguments to update or create a PasswordRecoveryCodes.
     * @example
     * // Update or create a PasswordRecoveryCodes
     * const passwordRecoveryCodes = await prisma.passwordRecoveryCodes.upsert({
     *   create: {
     *     // ... data to create a PasswordRecoveryCodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordRecoveryCodes we want to update
     *   }
     * })
     */
    upsert<T extends PasswordRecoveryCodesUpsertArgs>(args: SelectSubset<T, PasswordRecoveryCodesUpsertArgs<ExtArgs>>): Prisma__PasswordRecoveryCodesClient<$Result.GetResult<Prisma.$PasswordRecoveryCodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PasswordRecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesCountArgs} args - Arguments to filter PasswordRecoveryCodes to count.
     * @example
     * // Count the number of PasswordRecoveryCodes
     * const count = await prisma.passwordRecoveryCodes.count({
     *   where: {
     *     // ... the filter for the PasswordRecoveryCodes we want to count
     *   }
     * })
    **/
    count<T extends PasswordRecoveryCodesCountArgs>(
      args?: Subset<T, PasswordRecoveryCodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordRecoveryCodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordRecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordRecoveryCodesAggregateArgs>(args: Subset<T, PasswordRecoveryCodesAggregateArgs>): Prisma.PrismaPromise<GetPasswordRecoveryCodesAggregateType<T>>

    /**
     * Group by PasswordRecoveryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryCodesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordRecoveryCodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordRecoveryCodesGroupByArgs['orderBy'] }
        : { orderBy?: PasswordRecoveryCodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordRecoveryCodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordRecoveryCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordRecoveryCodes model
   */
  readonly fields: PasswordRecoveryCodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordRecoveryCodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordRecoveryCodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordRecoveryCodes model
   */ 
  interface PasswordRecoveryCodesFieldRefs {
    readonly Id: FieldRef<"PasswordRecoveryCodes", 'String'>
    readonly Email: FieldRef<"PasswordRecoveryCodes", 'String'>
    readonly Code: FieldRef<"PasswordRecoveryCodes", 'String'>
    readonly ExpiresAt: FieldRef<"PasswordRecoveryCodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordRecoveryCodes findUnique
   */
  export type PasswordRecoveryCodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryCodes to fetch.
     */
    where: PasswordRecoveryCodesWhereUniqueInput
  }

  /**
   * PasswordRecoveryCodes findUniqueOrThrow
   */
  export type PasswordRecoveryCodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryCodes to fetch.
     */
    where: PasswordRecoveryCodesWhereUniqueInput
  }

  /**
   * PasswordRecoveryCodes findFirst
   */
  export type PasswordRecoveryCodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryCodes to fetch.
     */
    where?: PasswordRecoveryCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryCodes to fetch.
     */
    orderBy?: PasswordRecoveryCodesOrderByWithRelationInput | PasswordRecoveryCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveryCodes.
     */
    cursor?: PasswordRecoveryCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveryCodes.
     */
    distinct?: PasswordRecoveryCodesScalarFieldEnum | PasswordRecoveryCodesScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryCodes findFirstOrThrow
   */
  export type PasswordRecoveryCodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryCodes to fetch.
     */
    where?: PasswordRecoveryCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryCodes to fetch.
     */
    orderBy?: PasswordRecoveryCodesOrderByWithRelationInput | PasswordRecoveryCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveryCodes.
     */
    cursor?: PasswordRecoveryCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveryCodes.
     */
    distinct?: PasswordRecoveryCodesScalarFieldEnum | PasswordRecoveryCodesScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryCodes findMany
   */
  export type PasswordRecoveryCodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryCodes to fetch.
     */
    where?: PasswordRecoveryCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryCodes to fetch.
     */
    orderBy?: PasswordRecoveryCodesOrderByWithRelationInput | PasswordRecoveryCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordRecoveryCodes.
     */
    cursor?: PasswordRecoveryCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryCodes.
     */
    skip?: number
    distinct?: PasswordRecoveryCodesScalarFieldEnum | PasswordRecoveryCodesScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryCodes create
   */
  export type PasswordRecoveryCodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * The data needed to create a PasswordRecoveryCodes.
     */
    data: XOR<PasswordRecoveryCodesCreateInput, PasswordRecoveryCodesUncheckedCreateInput>
  }

  /**
   * PasswordRecoveryCodes createMany
   */
  export type PasswordRecoveryCodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordRecoveryCodes.
     */
    data: PasswordRecoveryCodesCreateManyInput | PasswordRecoveryCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordRecoveryCodes createManyAndReturn
   */
  export type PasswordRecoveryCodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PasswordRecoveryCodes.
     */
    data: PasswordRecoveryCodesCreateManyInput | PasswordRecoveryCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordRecoveryCodes update
   */
  export type PasswordRecoveryCodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * The data needed to update a PasswordRecoveryCodes.
     */
    data: XOR<PasswordRecoveryCodesUpdateInput, PasswordRecoveryCodesUncheckedUpdateInput>
    /**
     * Choose, which PasswordRecoveryCodes to update.
     */
    where: PasswordRecoveryCodesWhereUniqueInput
  }

  /**
   * PasswordRecoveryCodes updateMany
   */
  export type PasswordRecoveryCodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordRecoveryCodes.
     */
    data: XOR<PasswordRecoveryCodesUpdateManyMutationInput, PasswordRecoveryCodesUncheckedUpdateManyInput>
    /**
     * Filter which PasswordRecoveryCodes to update
     */
    where?: PasswordRecoveryCodesWhereInput
  }

  /**
   * PasswordRecoveryCodes upsert
   */
  export type PasswordRecoveryCodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * The filter to search for the PasswordRecoveryCodes to update in case it exists.
     */
    where: PasswordRecoveryCodesWhereUniqueInput
    /**
     * In case the PasswordRecoveryCodes found by the `where` argument doesn't exist, create a new PasswordRecoveryCodes with this data.
     */
    create: XOR<PasswordRecoveryCodesCreateInput, PasswordRecoveryCodesUncheckedCreateInput>
    /**
     * In case the PasswordRecoveryCodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordRecoveryCodesUpdateInput, PasswordRecoveryCodesUncheckedUpdateInput>
  }

  /**
   * PasswordRecoveryCodes delete
   */
  export type PasswordRecoveryCodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
    /**
     * Filter which PasswordRecoveryCodes to delete.
     */
    where: PasswordRecoveryCodesWhereUniqueInput
  }

  /**
   * PasswordRecoveryCodes deleteMany
   */
  export type PasswordRecoveryCodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecoveryCodes to delete
     */
    where?: PasswordRecoveryCodesWhereInput
  }

  /**
   * PasswordRecoveryCodes without action
   */
  export type PasswordRecoveryCodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryCodes
     */
    select?: PasswordRecoveryCodesSelect<ExtArgs> | null
  }


  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    DocumentType: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    DocumentType: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    SurName: string | null
    CpfCnpj: string | null
    DocumentType: number | null
    Phone: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    SurName: string | null
    CpfCnpj: string | null
    DocumentType: number | null
    Phone: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    Id: number
    Name: number
    SurName: number
    CpfCnpj: number
    DocumentType: number
    Phone: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    DocumentType?: true
  }

  export type ProfilesSumAggregateInputType = {
    DocumentType?: true
  }

  export type ProfilesMinAggregateInputType = {
    Id?: true
    Name?: true
    SurName?: true
    CpfCnpj?: true
    DocumentType?: true
    Phone?: true
  }

  export type ProfilesMaxAggregateInputType = {
    Id?: true
    Name?: true
    SurName?: true
    CpfCnpj?: true
    DocumentType?: true
    Phone?: true
  }

  export type ProfilesCountAggregateInputType = {
    Id?: true
    Name?: true
    SurName?: true
    CpfCnpj?: true
    DocumentType?: true
    Phone?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType: number
    Phone: string
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    SurName?: boolean
    CpfCnpj?: boolean
    DocumentType?: boolean
    Phone?: boolean
    AspNetUsers?: boolean | Profiles$AspNetUsersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    SurName?: boolean
    CpfCnpj?: boolean
    DocumentType?: boolean
    Phone?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    Id?: boolean
    Name?: boolean
    SurName?: boolean
    CpfCnpj?: boolean
    DocumentType?: boolean
    Phone?: boolean
  }

  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | Profiles$AspNetUsersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      SurName: string
      CpfCnpj: string
      DocumentType: number
      Phone: string
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `Id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends Profiles$AspNetUsersArgs<ExtArgs> = {}>(args?: Subset<T, Profiles$AspNetUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profiles model
   */ 
  interface ProfilesFieldRefs {
    readonly Id: FieldRef<"Profiles", 'String'>
    readonly Name: FieldRef<"Profiles", 'String'>
    readonly SurName: FieldRef<"Profiles", 'String'>
    readonly CpfCnpj: FieldRef<"Profiles", 'String'>
    readonly DocumentType: FieldRef<"Profiles", 'Int'>
    readonly Phone: FieldRef<"Profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
  }

  /**
   * Profiles.AspNetUsers
   */
  export type Profiles$AspNetUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    where?: AspNetUsersWhereInput
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    cursor?: AspNetUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUsersScalarFieldEnum | AspNetUsersScalarFieldEnum[]
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Tenants
   */

  export type AggregateTenants = {
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  export type TenantsMinAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type TenantsMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type TenantsCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type TenantsMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type TenantsMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type TenantsCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type TenantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to aggregate.
     */
    where?: TenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantsMaxAggregateInputType
  }

  export type GetTenantsAggregateType<T extends TenantsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenants[P]>
      : GetScalarType<T[P], AggregateTenants[P]>
  }




  export type TenantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantsWhereInput
    orderBy?: TenantsOrderByWithAggregationInput | TenantsOrderByWithAggregationInput[]
    by: TenantsScalarFieldEnum[] | TenantsScalarFieldEnum
    having?: TenantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantsCountAggregateInputType | true
    _min?: TenantsMinAggregateInputType
    _max?: TenantsMaxAggregateInputType
  }

  export type TenantsGroupByOutputType = {
    Id: string
    Name: string
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  type GetTenantsGroupByPayload<T extends TenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantsGroupByOutputType[P]>
        }
      >
    >


  export type TenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Clients?: boolean | Tenants$ClientsArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenants"]>

  export type TenantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
  }, ExtArgs["result"]["tenants"]>

  export type TenantsSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type TenantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | Tenants$ClientsArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenants"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
    }, ExtArgs["result"]["tenants"]>
    composites: {}
  }

  type TenantsGetPayload<S extends boolean | null | undefined | TenantsDefaultArgs> = $Result.GetResult<Prisma.$TenantsPayload, S>

  type TenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantsCountAggregateInputType | true
    }

  export interface TenantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenants'], meta: { name: 'Tenants' } }
    /**
     * Find zero or one Tenants that matches the filter.
     * @param {TenantsFindUniqueArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantsFindUniqueArgs>(args: SelectSubset<T, TenantsFindUniqueArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenants that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantsFindUniqueOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantsFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindFirstArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantsFindFirstArgs>(args?: SelectSubset<T, TenantsFindFirstArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindFirstOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantsFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenants.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenants.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const tenantsWithIdOnly = await prisma.tenants.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TenantsFindManyArgs>(args?: SelectSubset<T, TenantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenants.
     * @param {TenantsCreateArgs} args - Arguments to create a Tenants.
     * @example
     * // Create one Tenants
     * const Tenants = await prisma.tenants.create({
     *   data: {
     *     // ... data to create a Tenants
     *   }
     * })
     * 
     */
    create<T extends TenantsCreateArgs>(args: SelectSubset<T, TenantsCreateArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantsCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantsCreateManyArgs>(args?: SelectSubset<T, TenantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantsCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `Id`
     * const tenantsWithIdOnly = await prisma.tenants.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantsCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenants.
     * @param {TenantsDeleteArgs} args - Arguments to delete one Tenants.
     * @example
     * // Delete one Tenants
     * const Tenants = await prisma.tenants.delete({
     *   where: {
     *     // ... filter to delete one Tenants
     *   }
     * })
     * 
     */
    delete<T extends TenantsDeleteArgs>(args: SelectSubset<T, TenantsDeleteArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenants.
     * @param {TenantsUpdateArgs} args - Arguments to update one Tenants.
     * @example
     * // Update one Tenants
     * const tenants = await prisma.tenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantsUpdateArgs>(args: SelectSubset<T, TenantsUpdateArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantsDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantsDeleteManyArgs>(args?: SelectSubset<T, TenantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantsUpdateManyArgs>(args: SelectSubset<T, TenantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenants.
     * @param {TenantsUpsertArgs} args - Arguments to update or create a Tenants.
     * @example
     * // Update or create a Tenants
     * const tenants = await prisma.tenants.upsert({
     *   create: {
     *     // ... data to create a Tenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenants we want to update
     *   }
     * })
     */
    upsert<T extends TenantsUpsertArgs>(args: SelectSubset<T, TenantsUpsertArgs<ExtArgs>>): Prisma__TenantsClient<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenants.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantsCountArgs>(
      args?: Subset<T, TenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantsAggregateArgs>(args: Subset<T, TenantsAggregateArgs>): Prisma.PrismaPromise<GetTenantsAggregateType<T>>

    /**
     * Group by Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantsGroupByArgs['orderBy'] }
        : { orderBy?: TenantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenants model
   */
  readonly fields: TenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends Tenants$ClientsArgs<ExtArgs> = {}>(args?: Subset<T, Tenants$ClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenants model
   */ 
  interface TenantsFieldRefs {
    readonly Id: FieldRef<"Tenants", 'String'>
    readonly Name: FieldRef<"Tenants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tenants findUnique
   */
  export type TenantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where: TenantsWhereUniqueInput
  }

  /**
   * Tenants findUniqueOrThrow
   */
  export type TenantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where: TenantsWhereUniqueInput
  }

  /**
   * Tenants findFirst
   */
  export type TenantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * Tenants findFirstOrThrow
   */
  export type TenantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * Tenants findMany
   */
  export type TenantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * Tenants create
   */
  export type TenantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenants.
     */
    data: XOR<TenantsCreateInput, TenantsUncheckedCreateInput>
  }

  /**
   * Tenants createMany
   */
  export type TenantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantsCreateManyInput | TenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenants createManyAndReturn
   */
  export type TenantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantsCreateManyInput | TenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenants update
   */
  export type TenantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenants.
     */
    data: XOR<TenantsUpdateInput, TenantsUncheckedUpdateInput>
    /**
     * Choose, which Tenants to update.
     */
    where: TenantsWhereUniqueInput
  }

  /**
   * Tenants updateMany
   */
  export type TenantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantsUpdateManyMutationInput, TenantsUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantsWhereInput
  }

  /**
   * Tenants upsert
   */
  export type TenantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenants to update in case it exists.
     */
    where: TenantsWhereUniqueInput
    /**
     * In case the Tenants found by the `where` argument doesn't exist, create a new Tenants with this data.
     */
    create: XOR<TenantsCreateInput, TenantsUncheckedCreateInput>
    /**
     * In case the Tenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantsUpdateInput, TenantsUncheckedUpdateInput>
  }

  /**
   * Tenants delete
   */
  export type TenantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
    /**
     * Filter which Tenants to delete.
     */
    where: TenantsWhereUniqueInput
  }

  /**
   * Tenants deleteMany
   */
  export type TenantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantsWhereInput
  }

  /**
   * Tenants.Clients
   */
  export type Tenants$ClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    cursor?: ClientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Tenants without action
   */
  export type TenantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    Amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    Amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    Id: string | null
    ApplicationUserId: string | null
    CoinEventId: string | null
    Date: Date | null
    Amount: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    Id: string | null
    ApplicationUserId: string | null
    CoinEventId: string | null
    Date: Date | null
    Amount: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    Id: number
    ApplicationUserId: number
    CoinEventId: number
    Date: number
    Amount: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    Amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    Amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    CoinEventId?: true
    Date?: true
    Amount?: true
  }

  export type TransactionsMaxAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    CoinEventId?: true
    Date?: true
    Amount?: true
  }

  export type TransactionsCountAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    CoinEventId?: true
    Date?: true
    Amount?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    Id: string
    ApplicationUserId: string
    CoinEventId: string | null
    Date: Date
    Amount: number
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApplicationUserId?: boolean
    CoinEventId?: boolean
    Date?: boolean
    Amount?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
    CoinEvents?: boolean | Transactions$CoinEventsArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApplicationUserId?: boolean
    CoinEventId?: boolean
    Date?: boolean
    Amount?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
    CoinEvents?: boolean | Transactions$CoinEventsArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    Id?: boolean
    ApplicationUserId?: boolean
    CoinEventId?: boolean
    Date?: boolean
    Amount?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
    CoinEvents?: boolean | Transactions$CoinEventsArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
    CoinEvents?: boolean | Transactions$CoinEventsArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
      CoinEvents: Prisma.$CoinEventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      ApplicationUserId: string
      CoinEventId: string | null
      Date: Date
      Amount: number
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `Id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    CoinEvents<T extends Transactions$CoinEventsArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$CoinEventsArgs<ExtArgs>>): Prisma__CoinEventsClient<$Result.GetResult<Prisma.$CoinEventsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly Id: FieldRef<"Transactions", 'String'>
    readonly ApplicationUserId: FieldRef<"Transactions", 'String'>
    readonly CoinEventId: FieldRef<"Transactions", 'String'>
    readonly Date: FieldRef<"Transactions", 'DateTime'>
    readonly Amount: FieldRef<"Transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions.CoinEvents
   */
  export type Transactions$CoinEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinEvents
     */
    select?: CoinEventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinEventsInclude<ExtArgs> | null
    where?: CoinEventsWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model UserAddresses
   */

  export type AggregateUserAddresses = {
    _count: UserAddressesCountAggregateOutputType | null
    _min: UserAddressesMinAggregateOutputType | null
    _max: UserAddressesMaxAggregateOutputType | null
  }

  export type UserAddressesMinAggregateOutputType = {
    Id: string | null
    PostalCode: string | null
    Street: string | null
    Number: string | null
    Country: string | null
    State: string | null
    City: string | null
    Neighborhood: string | null
    Complement: string | null
  }

  export type UserAddressesMaxAggregateOutputType = {
    Id: string | null
    PostalCode: string | null
    Street: string | null
    Number: string | null
    Country: string | null
    State: string | null
    City: string | null
    Neighborhood: string | null
    Complement: string | null
  }

  export type UserAddressesCountAggregateOutputType = {
    Id: number
    PostalCode: number
    Street: number
    Number: number
    Country: number
    State: number
    City: number
    Neighborhood: number
    Complement: number
    _all: number
  }


  export type UserAddressesMinAggregateInputType = {
    Id?: true
    PostalCode?: true
    Street?: true
    Number?: true
    Country?: true
    State?: true
    City?: true
    Neighborhood?: true
    Complement?: true
  }

  export type UserAddressesMaxAggregateInputType = {
    Id?: true
    PostalCode?: true
    Street?: true
    Number?: true
    Country?: true
    State?: true
    City?: true
    Neighborhood?: true
    Complement?: true
  }

  export type UserAddressesCountAggregateInputType = {
    Id?: true
    PostalCode?: true
    Street?: true
    Number?: true
    Country?: true
    State?: true
    City?: true
    Neighborhood?: true
    Complement?: true
    _all?: true
  }

  export type UserAddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to aggregate.
     */
    where?: UserAddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressesOrderByWithRelationInput | UserAddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressesMaxAggregateInputType
  }

  export type GetUserAddressesAggregateType<T extends UserAddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddresses[P]>
      : GetScalarType<T[P], AggregateUserAddresses[P]>
  }




  export type UserAddressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressesWhereInput
    orderBy?: UserAddressesOrderByWithAggregationInput | UserAddressesOrderByWithAggregationInput[]
    by: UserAddressesScalarFieldEnum[] | UserAddressesScalarFieldEnum
    having?: UserAddressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressesCountAggregateInputType | true
    _min?: UserAddressesMinAggregateInputType
    _max?: UserAddressesMaxAggregateInputType
  }

  export type UserAddressesGroupByOutputType = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood: string
    Complement: string
    _count: UserAddressesCountAggregateOutputType | null
    _min: UserAddressesMinAggregateOutputType | null
    _max: UserAddressesMaxAggregateOutputType | null
  }

  type GetUserAddressesGroupByPayload<T extends UserAddressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressesGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressesGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    PostalCode?: boolean
    Street?: boolean
    Number?: boolean
    Country?: boolean
    State?: boolean
    City?: boolean
    Neighborhood?: boolean
    Complement?: boolean
    AspNetUsers?: boolean | UserAddresses$AspNetUsersArgs<ExtArgs>
    _count?: boolean | UserAddressesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddresses"]>

  export type UserAddressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    PostalCode?: boolean
    Street?: boolean
    Number?: boolean
    Country?: boolean
    State?: boolean
    City?: boolean
    Neighborhood?: boolean
    Complement?: boolean
  }, ExtArgs["result"]["userAddresses"]>

  export type UserAddressesSelectScalar = {
    Id?: boolean
    PostalCode?: boolean
    Street?: boolean
    Number?: boolean
    Country?: boolean
    State?: boolean
    City?: boolean
    Neighborhood?: boolean
    Complement?: boolean
  }

  export type UserAddressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | UserAddresses$AspNetUsersArgs<ExtArgs>
    _count?: boolean | UserAddressesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserAddressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserAddressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddresses"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      PostalCode: string
      Street: string
      Number: string
      Country: string
      State: string
      City: string
      Neighborhood: string
      Complement: string
    }, ExtArgs["result"]["userAddresses"]>
    composites: {}
  }

  type UserAddressesGetPayload<S extends boolean | null | undefined | UserAddressesDefaultArgs> = $Result.GetResult<Prisma.$UserAddressesPayload, S>

  type UserAddressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAddressesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAddressesCountAggregateInputType | true
    }

  export interface UserAddressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddresses'], meta: { name: 'UserAddresses' } }
    /**
     * Find zero or one UserAddresses that matches the filter.
     * @param {UserAddressesFindUniqueArgs} args - Arguments to find a UserAddresses
     * @example
     * // Get one UserAddresses
     * const userAddresses = await prisma.userAddresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressesFindUniqueArgs>(args: SelectSubset<T, UserAddressesFindUniqueArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAddresses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAddressesFindUniqueOrThrowArgs} args - Arguments to find a UserAddresses
     * @example
     * // Get one UserAddresses
     * const userAddresses = await prisma.userAddresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesFindFirstArgs} args - Arguments to find a UserAddresses
     * @example
     * // Get one UserAddresses
     * const userAddresses = await prisma.userAddresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressesFindFirstArgs>(args?: SelectSubset<T, UserAddressesFindFirstArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAddresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesFindFirstOrThrowArgs} args - Arguments to find a UserAddresses
     * @example
     * // Get one UserAddresses
     * const userAddresses = await prisma.userAddresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddresses.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddresses.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userAddressesWithIdOnly = await prisma.userAddresses.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserAddressesFindManyArgs>(args?: SelectSubset<T, UserAddressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAddresses.
     * @param {UserAddressesCreateArgs} args - Arguments to create a UserAddresses.
     * @example
     * // Create one UserAddresses
     * const UserAddresses = await prisma.userAddresses.create({
     *   data: {
     *     // ... data to create a UserAddresses
     *   }
     * })
     * 
     */
    create<T extends UserAddressesCreateArgs>(args: SelectSubset<T, UserAddressesCreateArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAddresses.
     * @param {UserAddressesCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddresses = await prisma.userAddresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressesCreateManyArgs>(args?: SelectSubset<T, UserAddressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAddresses and returns the data saved in the database.
     * @param {UserAddressesCreateManyAndReturnArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddresses = await prisma.userAddresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAddresses and only return the `Id`
     * const userAddressesWithIdOnly = await prisma.userAddresses.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAddressesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAddressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAddresses.
     * @param {UserAddressesDeleteArgs} args - Arguments to delete one UserAddresses.
     * @example
     * // Delete one UserAddresses
     * const UserAddresses = await prisma.userAddresses.delete({
     *   where: {
     *     // ... filter to delete one UserAddresses
     *   }
     * })
     * 
     */
    delete<T extends UserAddressesDeleteArgs>(args: SelectSubset<T, UserAddressesDeleteArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAddresses.
     * @param {UserAddressesUpdateArgs} args - Arguments to update one UserAddresses.
     * @example
     * // Update one UserAddresses
     * const userAddresses = await prisma.userAddresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressesUpdateArgs>(args: SelectSubset<T, UserAddressesUpdateArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressesDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressesDeleteManyArgs>(args?: SelectSubset<T, UserAddressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddresses = await prisma.userAddresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressesUpdateManyArgs>(args: SelectSubset<T, UserAddressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAddresses.
     * @param {UserAddressesUpsertArgs} args - Arguments to update or create a UserAddresses.
     * @example
     * // Update or create a UserAddresses
     * const userAddresses = await prisma.userAddresses.upsert({
     *   create: {
     *     // ... data to create a UserAddresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddresses we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressesUpsertArgs>(args: SelectSubset<T, UserAddressesUpsertArgs<ExtArgs>>): Prisma__UserAddressesClient<$Result.GetResult<Prisma.$UserAddressesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddresses.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressesCountArgs>(
      args?: Subset<T, UserAddressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAddressesAggregateArgs>(args: Subset<T, UserAddressesAggregateArgs>): Prisma.PrismaPromise<GetUserAddressesAggregateType<T>>

    /**
     * Group by UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAddressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressesGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAddressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddresses model
   */
  readonly fields: UserAddressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends UserAddresses$AspNetUsersArgs<ExtArgs> = {}>(args?: Subset<T, UserAddresses$AspNetUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAddresses model
   */ 
  interface UserAddressesFieldRefs {
    readonly Id: FieldRef<"UserAddresses", 'String'>
    readonly PostalCode: FieldRef<"UserAddresses", 'String'>
    readonly Street: FieldRef<"UserAddresses", 'String'>
    readonly Number: FieldRef<"UserAddresses", 'String'>
    readonly Country: FieldRef<"UserAddresses", 'String'>
    readonly State: FieldRef<"UserAddresses", 'String'>
    readonly City: FieldRef<"UserAddresses", 'String'>
    readonly Neighborhood: FieldRef<"UserAddresses", 'String'>
    readonly Complement: FieldRef<"UserAddresses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserAddresses findUnique
   */
  export type UserAddressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where: UserAddressesWhereUniqueInput
  }

  /**
   * UserAddresses findUniqueOrThrow
   */
  export type UserAddressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where: UserAddressesWhereUniqueInput
  }

  /**
   * UserAddresses findFirst
   */
  export type UserAddressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressesOrderByWithRelationInput | UserAddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressesScalarFieldEnum | UserAddressesScalarFieldEnum[]
  }

  /**
   * UserAddresses findFirstOrThrow
   */
  export type UserAddressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressesOrderByWithRelationInput | UserAddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressesScalarFieldEnum | UserAddressesScalarFieldEnum[]
  }

  /**
   * UserAddresses findMany
   */
  export type UserAddressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressesOrderByWithRelationInput | UserAddressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressesScalarFieldEnum | UserAddressesScalarFieldEnum[]
  }

  /**
   * UserAddresses create
   */
  export type UserAddressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddresses.
     */
    data: XOR<UserAddressesCreateInput, UserAddressesUncheckedCreateInput>
  }

  /**
   * UserAddresses createMany
   */
  export type UserAddressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressesCreateManyInput | UserAddressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddresses createManyAndReturn
   */
  export type UserAddressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressesCreateManyInput | UserAddressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddresses update
   */
  export type UserAddressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddresses.
     */
    data: XOR<UserAddressesUpdateInput, UserAddressesUncheckedUpdateInput>
    /**
     * Choose, which UserAddresses to update.
     */
    where: UserAddressesWhereUniqueInput
  }

  /**
   * UserAddresses updateMany
   */
  export type UserAddressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressesUpdateManyMutationInput, UserAddressesUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressesWhereInput
  }

  /**
   * UserAddresses upsert
   */
  export type UserAddressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddresses to update in case it exists.
     */
    where: UserAddressesWhereUniqueInput
    /**
     * In case the UserAddresses found by the `where` argument doesn't exist, create a new UserAddresses with this data.
     */
    create: XOR<UserAddressesCreateInput, UserAddressesUncheckedCreateInput>
    /**
     * In case the UserAddresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressesUpdateInput, UserAddressesUncheckedUpdateInput>
  }

  /**
   * UserAddresses delete
   */
  export type UserAddressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
    /**
     * Filter which UserAddresses to delete.
     */
    where: UserAddressesWhereUniqueInput
  }

  /**
   * UserAddresses deleteMany
   */
  export type UserAddressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressesWhereInput
  }

  /**
   * UserAddresses.AspNetUsers
   */
  export type UserAddresses$AspNetUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspNetUsers
     */
    select?: AspNetUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspNetUsersInclude<ExtArgs> | null
    where?: AspNetUsersWhereInput
    orderBy?: AspNetUsersOrderByWithRelationInput | AspNetUsersOrderByWithRelationInput[]
    cursor?: AspNetUsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspNetUsersScalarFieldEnum | AspNetUsersScalarFieldEnum[]
  }

  /**
   * UserAddresses without action
   */
  export type UserAddressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddresses
     */
    select?: UserAddressesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressesInclude<ExtArgs> | null
  }


  /**
   * Model Wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    Id: number | null
    Balance: number | null
  }

  export type WalletsSumAggregateOutputType = {
    Id: number | null
    Balance: number | null
  }

  export type WalletsMinAggregateOutputType = {
    Id: number | null
    ApplicationUserId: string | null
    Balance: number | null
  }

  export type WalletsMaxAggregateOutputType = {
    Id: number | null
    ApplicationUserId: string | null
    Balance: number | null
  }

  export type WalletsCountAggregateOutputType = {
    Id: number
    ApplicationUserId: number
    Balance: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    Id?: true
    Balance?: true
  }

  export type WalletsSumAggregateInputType = {
    Id?: true
    Balance?: true
  }

  export type WalletsMinAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    Balance?: true
  }

  export type WalletsMaxAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    Balance?: true
  }

  export type WalletsCountAggregateInputType = {
    Id?: true
    ApplicationUserId?: true
    Balance?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to aggregate.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type WalletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletsWhereInput
    orderBy?: WalletsOrderByWithAggregationInput | WalletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: WalletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    Id: number
    ApplicationUserId: string
    Balance: number
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends WalletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type WalletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApplicationUserId?: boolean
    Balance?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type WalletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ApplicationUserId?: boolean
    Balance?: boolean
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type WalletsSelectScalar = {
    Id?: boolean
    ApplicationUserId?: boolean
    Balance?: boolean
  }

  export type WalletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }
  export type WalletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AspNetUsers?: boolean | AspNetUsersDefaultArgs<ExtArgs>
  }

  export type $WalletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallets"
    objects: {
      AspNetUsers: Prisma.$AspNetUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ApplicationUserId: string
      Balance: number
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type WalletsGetPayload<S extends boolean | null | undefined | WalletsDefaultArgs> = $Result.GetResult<Prisma.$WalletsPayload, S>

  type WalletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface WalletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallets'], meta: { name: 'Wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {WalletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletsFindUniqueArgs>(args: SelectSubset<T, WalletsFindUniqueArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletsFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletsFindFirstArgs>(args?: SelectSubset<T, WalletsFindFirstArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletsFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const walletsWithIdOnly = await prisma.wallets.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends WalletsFindManyArgs>(args?: SelectSubset<T, WalletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Wallets.
     * @param {WalletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends WalletsCreateArgs>(args: SelectSubset<T, WalletsCreateArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wallets.
     * @param {WalletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletsCreateManyArgs>(args?: SelectSubset<T, WalletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletsCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `Id`
     * const walletsWithIdOnly = await prisma.wallets.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletsCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Wallets.
     * @param {WalletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends WalletsDeleteArgs>(args: SelectSubset<T, WalletsDeleteArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Wallets.
     * @param {WalletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletsUpdateArgs>(args: SelectSubset<T, WalletsUpdateArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {WalletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletsDeleteManyArgs>(args?: SelectSubset<T, WalletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletsUpdateManyArgs>(args: SelectSubset<T, WalletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallets.
     * @param {WalletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends WalletsUpsertArgs>(args: SelectSubset<T, WalletsUpsertArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletsCountArgs>(
      args?: Subset<T, WalletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletsGroupByArgs['orderBy'] }
        : { orderBy?: WalletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallets model
   */
  readonly fields: WalletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AspNetUsers<T extends AspNetUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AspNetUsersDefaultArgs<ExtArgs>>): Prisma__AspNetUsersClient<$Result.GetResult<Prisma.$AspNetUsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallets model
   */ 
  interface WalletsFieldRefs {
    readonly Id: FieldRef<"Wallets", 'Int'>
    readonly ApplicationUserId: FieldRef<"Wallets", 'String'>
    readonly Balance: FieldRef<"Wallets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Wallets findUnique
   */
  export type WalletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets findUniqueOrThrow
   */
  export type WalletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets findFirst
   */
  export type WalletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets findFirstOrThrow
   */
  export type WalletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets findMany
   */
  export type WalletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets create
   */
  export type WalletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallets.
     */
    data: XOR<WalletsCreateInput, WalletsUncheckedCreateInput>
  }

  /**
   * Wallets createMany
   */
  export type WalletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletsCreateManyInput | WalletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallets createManyAndReturn
   */
  export type WalletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletsCreateManyInput | WalletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallets update
   */
  export type WalletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallets.
     */
    data: XOR<WalletsUpdateInput, WalletsUncheckedUpdateInput>
    /**
     * Choose, which Wallets to update.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets updateMany
   */
  export type WalletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletsUpdateManyMutationInput, WalletsUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletsWhereInput
  }

  /**
   * Wallets upsert
   */
  export type WalletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallets to update in case it exists.
     */
    where: WalletsWhereUniqueInput
    /**
     * In case the Wallets found by the `where` argument doesn't exist, create a new Wallets with this data.
     */
    create: XOR<WalletsCreateInput, WalletsUncheckedCreateInput>
    /**
     * In case the Wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletsUpdateInput, WalletsUncheckedUpdateInput>
  }

  /**
   * Wallets delete
   */
  export type WalletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter which Wallets to delete.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets deleteMany
   */
  export type WalletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletsWhereInput
  }

  /**
   * Wallets without action
   */
  export type WalletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
  }


  /**
   * Model EFMigrationsHistory
   */

  export type AggregateEFMigrationsHistory = {
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  export type EFMigrationsHistoryMinAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryMaxAggregateOutputType = {
    MigrationId: string | null
    ProductVersion: string | null
  }

  export type EFMigrationsHistoryCountAggregateOutputType = {
    MigrationId: number
    ProductVersion: number
    _all: number
  }


  export type EFMigrationsHistoryMinAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryMaxAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
  }

  export type EFMigrationsHistoryCountAggregateInputType = {
    MigrationId?: true
    ProductVersion?: true
    _all?: true
  }

  export type EFMigrationsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistory to aggregate.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EFMigrationsHistories
    **/
    _count?: true | EFMigrationsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EFMigrationsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type GetEFMigrationsHistoryAggregateType<T extends EFMigrationsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEFMigrationsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
      : GetScalarType<T[P], AggregateEFMigrationsHistory[P]>
  }




  export type EFMigrationsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EFMigrationsHistoryWhereInput
    orderBy?: EFMigrationsHistoryOrderByWithAggregationInput | EFMigrationsHistoryOrderByWithAggregationInput[]
    by: EFMigrationsHistoryScalarFieldEnum[] | EFMigrationsHistoryScalarFieldEnum
    having?: EFMigrationsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EFMigrationsHistoryCountAggregateInputType | true
    _min?: EFMigrationsHistoryMinAggregateInputType
    _max?: EFMigrationsHistoryMaxAggregateInputType
  }

  export type EFMigrationsHistoryGroupByOutputType = {
    MigrationId: string
    ProductVersion: string
    _count: EFMigrationsHistoryCountAggregateOutputType | null
    _min: EFMigrationsHistoryMinAggregateOutputType | null
    _max: EFMigrationsHistoryMaxAggregateOutputType | null
  }

  type GetEFMigrationsHistoryGroupByPayload<T extends EFMigrationsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EFMigrationsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EFMigrationsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], EFMigrationsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type EFMigrationsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>

  export type EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MigrationId?: boolean
    ProductVersion?: boolean
  }, ExtArgs["result"]["eFMigrationsHistory"]>

  export type EFMigrationsHistorySelectScalar = {
    MigrationId?: boolean
    ProductVersion?: boolean
  }


  export type $EFMigrationsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EFMigrationsHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MigrationId: string
      ProductVersion: string
    }, ExtArgs["result"]["eFMigrationsHistory"]>
    composites: {}
  }

  type EFMigrationsHistoryGetPayload<S extends boolean | null | undefined | EFMigrationsHistoryDefaultArgs> = $Result.GetResult<Prisma.$EFMigrationsHistoryPayload, S>

  type EFMigrationsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EFMigrationsHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EFMigrationsHistoryCountAggregateInputType | true
    }

  export interface EFMigrationsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EFMigrationsHistory'], meta: { name: 'EFMigrationsHistory' } }
    /**
     * Find zero or one EFMigrationsHistory that matches the filter.
     * @param {EFMigrationsHistoryFindUniqueArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EFMigrationsHistoryFindUniqueArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EFMigrationsHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EFMigrationsHistoryFindUniqueOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EFMigrationsHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EFMigrationsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EFMigrationsHistoryFindFirstArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EFMigrationsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindFirstOrThrowArgs} args - Arguments to find a EFMigrationsHistory
     * @example
     * // Get one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EFMigrationsHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EFMigrationsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany()
     * 
     * // Get first 10 EFMigrationsHistories
     * const eFMigrationsHistories = await prisma.eFMigrationsHistory.findMany({ take: 10 })
     * 
     * // Only select the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.findMany({ select: { MigrationId: true } })
     * 
     */
    findMany<T extends EFMigrationsHistoryFindManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EFMigrationsHistory.
     * @param {EFMigrationsHistoryCreateArgs} args - Arguments to create a EFMigrationsHistory.
     * @example
     * // Create one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.create({
     *   data: {
     *     // ... data to create a EFMigrationsHistory
     *   }
     * })
     * 
     */
    create<T extends EFMigrationsHistoryCreateArgs>(args: SelectSubset<T, EFMigrationsHistoryCreateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EFMigrationsHistories.
     * @param {EFMigrationsHistoryCreateManyArgs} args - Arguments to create many EFMigrationsHistories.
     * @example
     * // Create many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EFMigrationsHistoryCreateManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EFMigrationsHistories and returns the data saved in the database.
     * @param {EFMigrationsHistoryCreateManyAndReturnArgs} args - Arguments to create many EFMigrationsHistories.
     * @example
     * // Create many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EFMigrationsHistories and only return the `MigrationId`
     * const eFMigrationsHistoryWithMigrationIdOnly = await prisma.eFMigrationsHistory.createManyAndReturn({ 
     *   select: { MigrationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EFMigrationsHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EFMigrationsHistory.
     * @param {EFMigrationsHistoryDeleteArgs} args - Arguments to delete one EFMigrationsHistory.
     * @example
     * // Delete one EFMigrationsHistory
     * const EFMigrationsHistory = await prisma.eFMigrationsHistory.delete({
     *   where: {
     *     // ... filter to delete one EFMigrationsHistory
     *   }
     * })
     * 
     */
    delete<T extends EFMigrationsHistoryDeleteArgs>(args: SelectSubset<T, EFMigrationsHistoryDeleteArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpdateArgs} args - Arguments to update one EFMigrationsHistory.
     * @example
     * // Update one EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EFMigrationsHistoryUpdateArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EFMigrationsHistories.
     * @param {EFMigrationsHistoryDeleteManyArgs} args - Arguments to filter EFMigrationsHistories to delete.
     * @example
     * // Delete a few EFMigrationsHistories
     * const { count } = await prisma.eFMigrationsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EFMigrationsHistoryDeleteManyArgs>(args?: SelectSubset<T, EFMigrationsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EFMigrationsHistories
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EFMigrationsHistoryUpdateManyArgs>(args: SelectSubset<T, EFMigrationsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EFMigrationsHistory.
     * @param {EFMigrationsHistoryUpsertArgs} args - Arguments to update or create a EFMigrationsHistory.
     * @example
     * // Update or create a EFMigrationsHistory
     * const eFMigrationsHistory = await prisma.eFMigrationsHistory.upsert({
     *   create: {
     *     // ... data to create a EFMigrationsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EFMigrationsHistory we want to update
     *   }
     * })
     */
    upsert<T extends EFMigrationsHistoryUpsertArgs>(args: SelectSubset<T, EFMigrationsHistoryUpsertArgs<ExtArgs>>): Prisma__EFMigrationsHistoryClient<$Result.GetResult<Prisma.$EFMigrationsHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EFMigrationsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryCountArgs} args - Arguments to filter EFMigrationsHistories to count.
     * @example
     * // Count the number of EFMigrationsHistories
     * const count = await prisma.eFMigrationsHistory.count({
     *   where: {
     *     // ... the filter for the EFMigrationsHistories we want to count
     *   }
     * })
    **/
    count<T extends EFMigrationsHistoryCountArgs>(
      args?: Subset<T, EFMigrationsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EFMigrationsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EFMigrationsHistoryAggregateArgs>(args: Subset<T, EFMigrationsHistoryAggregateArgs>): Prisma.PrismaPromise<GetEFMigrationsHistoryAggregateType<T>>

    /**
     * Group by EFMigrationsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EFMigrationsHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EFMigrationsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EFMigrationsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: EFMigrationsHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EFMigrationsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEFMigrationsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EFMigrationsHistory model
   */
  readonly fields: EFMigrationsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EFMigrationsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EFMigrationsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EFMigrationsHistory model
   */ 
  interface EFMigrationsHistoryFieldRefs {
    readonly MigrationId: FieldRef<"EFMigrationsHistory", 'String'>
    readonly ProductVersion: FieldRef<"EFMigrationsHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EFMigrationsHistory findUnique
   */
  export type EFMigrationsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findUniqueOrThrow
   */
  export type EFMigrationsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory findFirst
   */
  export type EFMigrationsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findFirstOrThrow
   */
  export type EFMigrationsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistory to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EFMigrationsHistories.
     */
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory findMany
   */
  export type EFMigrationsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter, which EFMigrationsHistories to fetch.
     */
    where?: EFMigrationsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EFMigrationsHistories to fetch.
     */
    orderBy?: EFMigrationsHistoryOrderByWithRelationInput | EFMigrationsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EFMigrationsHistories.
     */
    cursor?: EFMigrationsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EFMigrationsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EFMigrationsHistories.
     */
    skip?: number
    distinct?: EFMigrationsHistoryScalarFieldEnum | EFMigrationsHistoryScalarFieldEnum[]
  }

  /**
   * EFMigrationsHistory create
   */
  export type EFMigrationsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * The data needed to create a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
  }

  /**
   * EFMigrationsHistory createMany
   */
  export type EFMigrationsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EFMigrationsHistories.
     */
    data: EFMigrationsHistoryCreateManyInput | EFMigrationsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EFMigrationsHistory createManyAndReturn
   */
  export type EFMigrationsHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EFMigrationsHistories.
     */
    data: EFMigrationsHistoryCreateManyInput | EFMigrationsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EFMigrationsHistory update
   */
  export type EFMigrationsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * The data needed to update a EFMigrationsHistory.
     */
    data: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
    /**
     * Choose, which EFMigrationsHistory to update.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory updateMany
   */
  export type EFMigrationsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EFMigrationsHistories.
     */
    data: XOR<EFMigrationsHistoryUpdateManyMutationInput, EFMigrationsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which EFMigrationsHistories to update
     */
    where?: EFMigrationsHistoryWhereInput
  }

  /**
   * EFMigrationsHistory upsert
   */
  export type EFMigrationsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * The filter to search for the EFMigrationsHistory to update in case it exists.
     */
    where: EFMigrationsHistoryWhereUniqueInput
    /**
     * In case the EFMigrationsHistory found by the `where` argument doesn't exist, create a new EFMigrationsHistory with this data.
     */
    create: XOR<EFMigrationsHistoryCreateInput, EFMigrationsHistoryUncheckedCreateInput>
    /**
     * In case the EFMigrationsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EFMigrationsHistoryUpdateInput, EFMigrationsHistoryUncheckedUpdateInput>
  }

  /**
   * EFMigrationsHistory delete
   */
  export type EFMigrationsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
    /**
     * Filter which EFMigrationsHistory to delete.
     */
    where: EFMigrationsHistoryWhereUniqueInput
  }

  /**
   * EFMigrationsHistory deleteMany
   */
  export type EFMigrationsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EFMigrationsHistories to delete
     */
    where?: EFMigrationsHistoryWhereInput
  }

  /**
   * EFMigrationsHistory without action
   */
  export type EFMigrationsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EFMigrationsHistory
     */
    select?: EFMigrationsHistorySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AspNetUsersScalarFieldEnum: {
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

  export type AspNetUsersScalarFieldEnum = (typeof AspNetUsersScalarFieldEnum)[keyof typeof AspNetUsersScalarFieldEnum]


  export const AspNetRoleClaimsScalarFieldEnum: {
    Id: 'Id',
    RoleId: 'RoleId',
    ClaimType: 'ClaimType',
    ClaimValue: 'ClaimValue'
  };

  export type AspNetRoleClaimsScalarFieldEnum = (typeof AspNetRoleClaimsScalarFieldEnum)[keyof typeof AspNetRoleClaimsScalarFieldEnum]


  export const AspNetRolesScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    NormalizedName: 'NormalizedName',
    ConcurrencyStamp: 'ConcurrencyStamp'
  };

  export type AspNetRolesScalarFieldEnum = (typeof AspNetRolesScalarFieldEnum)[keyof typeof AspNetRolesScalarFieldEnum]


  export const AspNetUserClaimsScalarFieldEnum: {
    Id: 'Id',
    UserId: 'UserId',
    ClaimType: 'ClaimType',
    ClaimValue: 'ClaimValue'
  };

  export type AspNetUserClaimsScalarFieldEnum = (typeof AspNetUserClaimsScalarFieldEnum)[keyof typeof AspNetUserClaimsScalarFieldEnum]


  export const AspNetUserLoginsScalarFieldEnum: {
    LoginProvider: 'LoginProvider',
    ProviderKey: 'ProviderKey',
    ProviderDisplayName: 'ProviderDisplayName',
    UserId: 'UserId'
  };

  export type AspNetUserLoginsScalarFieldEnum = (typeof AspNetUserLoginsScalarFieldEnum)[keyof typeof AspNetUserLoginsScalarFieldEnum]


  export const AspNetUserRolesScalarFieldEnum: {
    UserId: 'UserId',
    RoleId: 'RoleId'
  };

  export type AspNetUserRolesScalarFieldEnum = (typeof AspNetUserRolesScalarFieldEnum)[keyof typeof AspNetUserRolesScalarFieldEnum]


  export const AspNetUserTokensScalarFieldEnum: {
    UserId: 'UserId',
    LoginProvider: 'LoginProvider',
    Name: 'Name',
    Value: 'Value'
  };

  export type AspNetUserTokensScalarFieldEnum = (typeof AspNetUserTokensScalarFieldEnum)[keyof typeof AspNetUserTokensScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Secret: 'Secret',
    TenantId: 'TenantId'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const CoinEventsScalarFieldEnum: {
    Id: 'Id',
    EventType: 'EventType',
    Date: 'Date',
    RelatedEntityId: 'RelatedEntityId'
  };

  export type CoinEventsScalarFieldEnum = (typeof CoinEventsScalarFieldEnum)[keyof typeof CoinEventsScalarFieldEnum]


  export const PasswordRecoveryCodesScalarFieldEnum: {
    Id: 'Id',
    Email: 'Email',
    Code: 'Code',
    ExpiresAt: 'ExpiresAt'
  };

  export type PasswordRecoveryCodesScalarFieldEnum = (typeof PasswordRecoveryCodesScalarFieldEnum)[keyof typeof PasswordRecoveryCodesScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    SurName: 'SurName',
    CpfCnpj: 'CpfCnpj',
    DocumentType: 'DocumentType',
    Phone: 'Phone'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const TenantsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type TenantsScalarFieldEnum = (typeof TenantsScalarFieldEnum)[keyof typeof TenantsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    Id: 'Id',
    ApplicationUserId: 'ApplicationUserId',
    CoinEventId: 'CoinEventId',
    Date: 'Date',
    Amount: 'Amount'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const UserAddressesScalarFieldEnum: {
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

  export type UserAddressesScalarFieldEnum = (typeof UserAddressesScalarFieldEnum)[keyof typeof UserAddressesScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    Id: 'Id',
    ApplicationUserId: 'ApplicationUserId',
    Balance: 'Balance'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


  export const EFMigrationsHistoryScalarFieldEnum: {
    MigrationId: 'MigrationId',
    ProductVersion: 'ProductVersion'
  };

  export type EFMigrationsHistoryScalarFieldEnum = (typeof EFMigrationsHistoryScalarFieldEnum)[keyof typeof EFMigrationsHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AspNetUsersWhereInput = {
    AND?: AspNetUsersWhereInput | AspNetUsersWhereInput[]
    OR?: AspNetUsersWhereInput[]
    NOT?: AspNetUsersWhereInput | AspNetUsersWhereInput[]
    Id?: StringFilter<"AspNetUsers"> | string
    ProfileId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserName?: StringNullableFilter<"AspNetUsers"> | string | null
    NormalizedUserName?: StringNullableFilter<"AspNetUsers"> | string | null
    Email?: StringNullableFilter<"AspNetUsers"> | string | null
    NormalizedEmail?: StringNullableFilter<"AspNetUsers"> | string | null
    EmailConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    PasswordHash?: StringNullableFilter<"AspNetUsers"> | string | null
    SecurityStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    ConcurrencyStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumber?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumberConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    TwoFactorEnabled?: BoolFilter<"AspNetUsers"> | boolean
    LockoutEnd?: DateTimeNullableFilter<"AspNetUsers"> | Date | string | null
    LockoutEnabled?: BoolFilter<"AspNetUsers"> | boolean
    AccessFailedCount?: IntFilter<"AspNetUsers"> | number
    UserAddressId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserOrigin?: IntFilter<"AspNetUsers"> | number
    AspNetUserClaims?: AspNetUserClaimsListRelationFilter
    AspNetUserLogins?: AspNetUserLoginsListRelationFilter
    AspNetUserRoles?: AspNetUserRolesListRelationFilter
    AspNetUserTokens?: AspNetUserTokensListRelationFilter
    Profiles?: XOR<ProfilesNullableRelationFilter, ProfilesWhereInput> | null
    UserAddresses?: XOR<UserAddressesNullableRelationFilter, UserAddressesWhereInput> | null
    Transactions?: TransactionsListRelationFilter
    Wallets?: XOR<WalletsNullableRelationFilter, WalletsWhereInput> | null
  }

  export type AspNetUsersOrderByWithRelationInput = {
    Id?: SortOrder
    ProfileId?: SortOrderInput | SortOrder
    UserName?: SortOrderInput | SortOrder
    NormalizedUserName?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    NormalizedEmail?: SortOrderInput | SortOrder
    EmailConfirmed?: SortOrder
    PasswordHash?: SortOrderInput | SortOrder
    SecurityStamp?: SortOrderInput | SortOrder
    ConcurrencyStamp?: SortOrderInput | SortOrder
    PhoneNumber?: SortOrderInput | SortOrder
    PhoneNumberConfirmed?: SortOrder
    TwoFactorEnabled?: SortOrder
    LockoutEnd?: SortOrderInput | SortOrder
    LockoutEnabled?: SortOrder
    AccessFailedCount?: SortOrder
    UserAddressId?: SortOrderInput | SortOrder
    UserOrigin?: SortOrder
    AspNetUserClaims?: AspNetUserClaimsOrderByRelationAggregateInput
    AspNetUserLogins?: AspNetUserLoginsOrderByRelationAggregateInput
    AspNetUserRoles?: AspNetUserRolesOrderByRelationAggregateInput
    AspNetUserTokens?: AspNetUserTokensOrderByRelationAggregateInput
    Profiles?: ProfilesOrderByWithRelationInput
    UserAddresses?: UserAddressesOrderByWithRelationInput
    Transactions?: TransactionsOrderByRelationAggregateInput
    Wallets?: WalletsOrderByWithRelationInput
  }

  export type AspNetUsersWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    NormalizedUserName?: string
    AND?: AspNetUsersWhereInput | AspNetUsersWhereInput[]
    OR?: AspNetUsersWhereInput[]
    NOT?: AspNetUsersWhereInput | AspNetUsersWhereInput[]
    ProfileId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserName?: StringNullableFilter<"AspNetUsers"> | string | null
    Email?: StringNullableFilter<"AspNetUsers"> | string | null
    NormalizedEmail?: StringNullableFilter<"AspNetUsers"> | string | null
    EmailConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    PasswordHash?: StringNullableFilter<"AspNetUsers"> | string | null
    SecurityStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    ConcurrencyStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumber?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumberConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    TwoFactorEnabled?: BoolFilter<"AspNetUsers"> | boolean
    LockoutEnd?: DateTimeNullableFilter<"AspNetUsers"> | Date | string | null
    LockoutEnabled?: BoolFilter<"AspNetUsers"> | boolean
    AccessFailedCount?: IntFilter<"AspNetUsers"> | number
    UserAddressId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserOrigin?: IntFilter<"AspNetUsers"> | number
    AspNetUserClaims?: AspNetUserClaimsListRelationFilter
    AspNetUserLogins?: AspNetUserLoginsListRelationFilter
    AspNetUserRoles?: AspNetUserRolesListRelationFilter
    AspNetUserTokens?: AspNetUserTokensListRelationFilter
    Profiles?: XOR<ProfilesNullableRelationFilter, ProfilesWhereInput> | null
    UserAddresses?: XOR<UserAddressesNullableRelationFilter, UserAddressesWhereInput> | null
    Transactions?: TransactionsListRelationFilter
    Wallets?: XOR<WalletsNullableRelationFilter, WalletsWhereInput> | null
  }, "Id" | "NormalizedUserName">

  export type AspNetUsersOrderByWithAggregationInput = {
    Id?: SortOrder
    ProfileId?: SortOrderInput | SortOrder
    UserName?: SortOrderInput | SortOrder
    NormalizedUserName?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    NormalizedEmail?: SortOrderInput | SortOrder
    EmailConfirmed?: SortOrder
    PasswordHash?: SortOrderInput | SortOrder
    SecurityStamp?: SortOrderInput | SortOrder
    ConcurrencyStamp?: SortOrderInput | SortOrder
    PhoneNumber?: SortOrderInput | SortOrder
    PhoneNumberConfirmed?: SortOrder
    TwoFactorEnabled?: SortOrder
    LockoutEnd?: SortOrderInput | SortOrder
    LockoutEnabled?: SortOrder
    AccessFailedCount?: SortOrder
    UserAddressId?: SortOrderInput | SortOrder
    UserOrigin?: SortOrder
    _count?: AspNetUsersCountOrderByAggregateInput
    _avg?: AspNetUsersAvgOrderByAggregateInput
    _max?: AspNetUsersMaxOrderByAggregateInput
    _min?: AspNetUsersMinOrderByAggregateInput
    _sum?: AspNetUsersSumOrderByAggregateInput
  }

  export type AspNetUsersScalarWhereWithAggregatesInput = {
    AND?: AspNetUsersScalarWhereWithAggregatesInput | AspNetUsersScalarWhereWithAggregatesInput[]
    OR?: AspNetUsersScalarWhereWithAggregatesInput[]
    NOT?: AspNetUsersScalarWhereWithAggregatesInput | AspNetUsersScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"AspNetUsers"> | string
    ProfileId?: UuidNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    UserName?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    NormalizedUserName?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    Email?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    NormalizedEmail?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    EmailConfirmed?: BoolWithAggregatesFilter<"AspNetUsers"> | boolean
    PasswordHash?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    SecurityStamp?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    ConcurrencyStamp?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    PhoneNumber?: StringNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    PhoneNumberConfirmed?: BoolWithAggregatesFilter<"AspNetUsers"> | boolean
    TwoFactorEnabled?: BoolWithAggregatesFilter<"AspNetUsers"> | boolean
    LockoutEnd?: DateTimeNullableWithAggregatesFilter<"AspNetUsers"> | Date | string | null
    LockoutEnabled?: BoolWithAggregatesFilter<"AspNetUsers"> | boolean
    AccessFailedCount?: IntWithAggregatesFilter<"AspNetUsers"> | number
    UserAddressId?: UuidNullableWithAggregatesFilter<"AspNetUsers"> | string | null
    UserOrigin?: IntWithAggregatesFilter<"AspNetUsers"> | number
  }

  export type AspNetRoleClaimsWhereInput = {
    AND?: AspNetRoleClaimsWhereInput | AspNetRoleClaimsWhereInput[]
    OR?: AspNetRoleClaimsWhereInput[]
    NOT?: AspNetRoleClaimsWhereInput | AspNetRoleClaimsWhereInput[]
    Id?: IntFilter<"AspNetRoleClaims"> | number
    RoleId?: StringFilter<"AspNetRoleClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetRoleClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetRoleClaims"> | string | null
    AspNetRoles?: XOR<AspNetRolesRelationFilter, AspNetRolesWhereInput>
  }

  export type AspNetRoleClaimsOrderByWithRelationInput = {
    Id?: SortOrder
    RoleId?: SortOrder
    ClaimType?: SortOrderInput | SortOrder
    ClaimValue?: SortOrderInput | SortOrder
    AspNetRoles?: AspNetRolesOrderByWithRelationInput
  }

  export type AspNetRoleClaimsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: AspNetRoleClaimsWhereInput | AspNetRoleClaimsWhereInput[]
    OR?: AspNetRoleClaimsWhereInput[]
    NOT?: AspNetRoleClaimsWhereInput | AspNetRoleClaimsWhereInput[]
    RoleId?: StringFilter<"AspNetRoleClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetRoleClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetRoleClaims"> | string | null
    AspNetRoles?: XOR<AspNetRolesRelationFilter, AspNetRolesWhereInput>
  }, "Id">

  export type AspNetRoleClaimsOrderByWithAggregationInput = {
    Id?: SortOrder
    RoleId?: SortOrder
    ClaimType?: SortOrderInput | SortOrder
    ClaimValue?: SortOrderInput | SortOrder
    _count?: AspNetRoleClaimsCountOrderByAggregateInput
    _avg?: AspNetRoleClaimsAvgOrderByAggregateInput
    _max?: AspNetRoleClaimsMaxOrderByAggregateInput
    _min?: AspNetRoleClaimsMinOrderByAggregateInput
    _sum?: AspNetRoleClaimsSumOrderByAggregateInput
  }

  export type AspNetRoleClaimsScalarWhereWithAggregatesInput = {
    AND?: AspNetRoleClaimsScalarWhereWithAggregatesInput | AspNetRoleClaimsScalarWhereWithAggregatesInput[]
    OR?: AspNetRoleClaimsScalarWhereWithAggregatesInput[]
    NOT?: AspNetRoleClaimsScalarWhereWithAggregatesInput | AspNetRoleClaimsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"AspNetRoleClaims"> | number
    RoleId?: StringWithAggregatesFilter<"AspNetRoleClaims"> | string
    ClaimType?: StringNullableWithAggregatesFilter<"AspNetRoleClaims"> | string | null
    ClaimValue?: StringNullableWithAggregatesFilter<"AspNetRoleClaims"> | string | null
  }

  export type AspNetRolesWhereInput = {
    AND?: AspNetRolesWhereInput | AspNetRolesWhereInput[]
    OR?: AspNetRolesWhereInput[]
    NOT?: AspNetRolesWhereInput | AspNetRolesWhereInput[]
    Id?: StringFilter<"AspNetRoles"> | string
    Name?: StringNullableFilter<"AspNetRoles"> | string | null
    NormalizedName?: StringNullableFilter<"AspNetRoles"> | string | null
    ConcurrencyStamp?: StringNullableFilter<"AspNetRoles"> | string | null
    AspNetRoleClaims?: AspNetRoleClaimsListRelationFilter
    AspNetUserRoles?: AspNetUserRolesListRelationFilter
  }

  export type AspNetRolesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrderInput | SortOrder
    NormalizedName?: SortOrderInput | SortOrder
    ConcurrencyStamp?: SortOrderInput | SortOrder
    AspNetRoleClaims?: AspNetRoleClaimsOrderByRelationAggregateInput
    AspNetUserRoles?: AspNetUserRolesOrderByRelationAggregateInput
  }

  export type AspNetRolesWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    NormalizedName?: string
    AND?: AspNetRolesWhereInput | AspNetRolesWhereInput[]
    OR?: AspNetRolesWhereInput[]
    NOT?: AspNetRolesWhereInput | AspNetRolesWhereInput[]
    Name?: StringNullableFilter<"AspNetRoles"> | string | null
    ConcurrencyStamp?: StringNullableFilter<"AspNetRoles"> | string | null
    AspNetRoleClaims?: AspNetRoleClaimsListRelationFilter
    AspNetUserRoles?: AspNetUserRolesListRelationFilter
  }, "Id" | "NormalizedName">

  export type AspNetRolesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrderInput | SortOrder
    NormalizedName?: SortOrderInput | SortOrder
    ConcurrencyStamp?: SortOrderInput | SortOrder
    _count?: AspNetRolesCountOrderByAggregateInput
    _max?: AspNetRolesMaxOrderByAggregateInput
    _min?: AspNetRolesMinOrderByAggregateInput
  }

  export type AspNetRolesScalarWhereWithAggregatesInput = {
    AND?: AspNetRolesScalarWhereWithAggregatesInput | AspNetRolesScalarWhereWithAggregatesInput[]
    OR?: AspNetRolesScalarWhereWithAggregatesInput[]
    NOT?: AspNetRolesScalarWhereWithAggregatesInput | AspNetRolesScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"AspNetRoles"> | string
    Name?: StringNullableWithAggregatesFilter<"AspNetRoles"> | string | null
    NormalizedName?: StringNullableWithAggregatesFilter<"AspNetRoles"> | string | null
    ConcurrencyStamp?: StringNullableWithAggregatesFilter<"AspNetRoles"> | string | null
  }

  export type AspNetUserClaimsWhereInput = {
    AND?: AspNetUserClaimsWhereInput | AspNetUserClaimsWhereInput[]
    OR?: AspNetUserClaimsWhereInput[]
    NOT?: AspNetUserClaimsWhereInput | AspNetUserClaimsWhereInput[]
    Id?: IntFilter<"AspNetUserClaims"> | number
    UserId?: StringFilter<"AspNetUserClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetUserClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetUserClaims"> | string | null
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }

  export type AspNetUserClaimsOrderByWithRelationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ClaimType?: SortOrderInput | SortOrder
    ClaimValue?: SortOrderInput | SortOrder
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
  }

  export type AspNetUserClaimsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: AspNetUserClaimsWhereInput | AspNetUserClaimsWhereInput[]
    OR?: AspNetUserClaimsWhereInput[]
    NOT?: AspNetUserClaimsWhereInput | AspNetUserClaimsWhereInput[]
    UserId?: StringFilter<"AspNetUserClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetUserClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetUserClaims"> | string | null
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }, "Id">

  export type AspNetUserClaimsOrderByWithAggregationInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ClaimType?: SortOrderInput | SortOrder
    ClaimValue?: SortOrderInput | SortOrder
    _count?: AspNetUserClaimsCountOrderByAggregateInput
    _avg?: AspNetUserClaimsAvgOrderByAggregateInput
    _max?: AspNetUserClaimsMaxOrderByAggregateInput
    _min?: AspNetUserClaimsMinOrderByAggregateInput
    _sum?: AspNetUserClaimsSumOrderByAggregateInput
  }

  export type AspNetUserClaimsScalarWhereWithAggregatesInput = {
    AND?: AspNetUserClaimsScalarWhereWithAggregatesInput | AspNetUserClaimsScalarWhereWithAggregatesInput[]
    OR?: AspNetUserClaimsScalarWhereWithAggregatesInput[]
    NOT?: AspNetUserClaimsScalarWhereWithAggregatesInput | AspNetUserClaimsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"AspNetUserClaims"> | number
    UserId?: StringWithAggregatesFilter<"AspNetUserClaims"> | string
    ClaimType?: StringNullableWithAggregatesFilter<"AspNetUserClaims"> | string | null
    ClaimValue?: StringNullableWithAggregatesFilter<"AspNetUserClaims"> | string | null
  }

  export type AspNetUserLoginsWhereInput = {
    AND?: AspNetUserLoginsWhereInput | AspNetUserLoginsWhereInput[]
    OR?: AspNetUserLoginsWhereInput[]
    NOT?: AspNetUserLoginsWhereInput | AspNetUserLoginsWhereInput[]
    LoginProvider?: StringFilter<"AspNetUserLogins"> | string
    ProviderKey?: StringFilter<"AspNetUserLogins"> | string
    ProviderDisplayName?: StringNullableFilter<"AspNetUserLogins"> | string | null
    UserId?: StringFilter<"AspNetUserLogins"> | string
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }

  export type AspNetUserLoginsOrderByWithRelationInput = {
    LoginProvider?: SortOrder
    ProviderKey?: SortOrder
    ProviderDisplayName?: SortOrderInput | SortOrder
    UserId?: SortOrder
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
  }

  export type AspNetUserLoginsWhereUniqueInput = Prisma.AtLeast<{
    LoginProvider_ProviderKey?: AspNetUserLoginsLoginProviderProviderKeyCompoundUniqueInput
    AND?: AspNetUserLoginsWhereInput | AspNetUserLoginsWhereInput[]
    OR?: AspNetUserLoginsWhereInput[]
    NOT?: AspNetUserLoginsWhereInput | AspNetUserLoginsWhereInput[]
    LoginProvider?: StringFilter<"AspNetUserLogins"> | string
    ProviderKey?: StringFilter<"AspNetUserLogins"> | string
    ProviderDisplayName?: StringNullableFilter<"AspNetUserLogins"> | string | null
    UserId?: StringFilter<"AspNetUserLogins"> | string
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }, "LoginProvider_ProviderKey">

  export type AspNetUserLoginsOrderByWithAggregationInput = {
    LoginProvider?: SortOrder
    ProviderKey?: SortOrder
    ProviderDisplayName?: SortOrderInput | SortOrder
    UserId?: SortOrder
    _count?: AspNetUserLoginsCountOrderByAggregateInput
    _max?: AspNetUserLoginsMaxOrderByAggregateInput
    _min?: AspNetUserLoginsMinOrderByAggregateInput
  }

  export type AspNetUserLoginsScalarWhereWithAggregatesInput = {
    AND?: AspNetUserLoginsScalarWhereWithAggregatesInput | AspNetUserLoginsScalarWhereWithAggregatesInput[]
    OR?: AspNetUserLoginsScalarWhereWithAggregatesInput[]
    NOT?: AspNetUserLoginsScalarWhereWithAggregatesInput | AspNetUserLoginsScalarWhereWithAggregatesInput[]
    LoginProvider?: StringWithAggregatesFilter<"AspNetUserLogins"> | string
    ProviderKey?: StringWithAggregatesFilter<"AspNetUserLogins"> | string
    ProviderDisplayName?: StringNullableWithAggregatesFilter<"AspNetUserLogins"> | string | null
    UserId?: StringWithAggregatesFilter<"AspNetUserLogins"> | string
  }

  export type AspNetUserRolesWhereInput = {
    AND?: AspNetUserRolesWhereInput | AspNetUserRolesWhereInput[]
    OR?: AspNetUserRolesWhereInput[]
    NOT?: AspNetUserRolesWhereInput | AspNetUserRolesWhereInput[]
    UserId?: StringFilter<"AspNetUserRoles"> | string
    RoleId?: StringFilter<"AspNetUserRoles"> | string
    AspNetRoles?: XOR<AspNetRolesRelationFilter, AspNetRolesWhereInput>
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }

  export type AspNetUserRolesOrderByWithRelationInput = {
    UserId?: SortOrder
    RoleId?: SortOrder
    AspNetRoles?: AspNetRolesOrderByWithRelationInput
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
  }

  export type AspNetUserRolesWhereUniqueInput = Prisma.AtLeast<{
    UserId_RoleId?: AspNetUserRolesUserIdRoleIdCompoundUniqueInput
    AND?: AspNetUserRolesWhereInput | AspNetUserRolesWhereInput[]
    OR?: AspNetUserRolesWhereInput[]
    NOT?: AspNetUserRolesWhereInput | AspNetUserRolesWhereInput[]
    UserId?: StringFilter<"AspNetUserRoles"> | string
    RoleId?: StringFilter<"AspNetUserRoles"> | string
    AspNetRoles?: XOR<AspNetRolesRelationFilter, AspNetRolesWhereInput>
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }, "UserId_RoleId">

  export type AspNetUserRolesOrderByWithAggregationInput = {
    UserId?: SortOrder
    RoleId?: SortOrder
    _count?: AspNetUserRolesCountOrderByAggregateInput
    _max?: AspNetUserRolesMaxOrderByAggregateInput
    _min?: AspNetUserRolesMinOrderByAggregateInput
  }

  export type AspNetUserRolesScalarWhereWithAggregatesInput = {
    AND?: AspNetUserRolesScalarWhereWithAggregatesInput | AspNetUserRolesScalarWhereWithAggregatesInput[]
    OR?: AspNetUserRolesScalarWhereWithAggregatesInput[]
    NOT?: AspNetUserRolesScalarWhereWithAggregatesInput | AspNetUserRolesScalarWhereWithAggregatesInput[]
    UserId?: StringWithAggregatesFilter<"AspNetUserRoles"> | string
    RoleId?: StringWithAggregatesFilter<"AspNetUserRoles"> | string
  }

  export type AspNetUserTokensWhereInput = {
    AND?: AspNetUserTokensWhereInput | AspNetUserTokensWhereInput[]
    OR?: AspNetUserTokensWhereInput[]
    NOT?: AspNetUserTokensWhereInput | AspNetUserTokensWhereInput[]
    UserId?: StringFilter<"AspNetUserTokens"> | string
    LoginProvider?: StringFilter<"AspNetUserTokens"> | string
    Name?: StringFilter<"AspNetUserTokens"> | string
    Value?: StringNullableFilter<"AspNetUserTokens"> | string | null
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }

  export type AspNetUserTokensOrderByWithRelationInput = {
    UserId?: SortOrder
    LoginProvider?: SortOrder
    Name?: SortOrder
    Value?: SortOrderInput | SortOrder
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
  }

  export type AspNetUserTokensWhereUniqueInput = Prisma.AtLeast<{
    UserId_LoginProvider_Name?: AspNetUserTokensUserIdLoginProviderNameCompoundUniqueInput
    AND?: AspNetUserTokensWhereInput | AspNetUserTokensWhereInput[]
    OR?: AspNetUserTokensWhereInput[]
    NOT?: AspNetUserTokensWhereInput | AspNetUserTokensWhereInput[]
    UserId?: StringFilter<"AspNetUserTokens"> | string
    LoginProvider?: StringFilter<"AspNetUserTokens"> | string
    Name?: StringFilter<"AspNetUserTokens"> | string
    Value?: StringNullableFilter<"AspNetUserTokens"> | string | null
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }, "UserId_LoginProvider_Name">

  export type AspNetUserTokensOrderByWithAggregationInput = {
    UserId?: SortOrder
    LoginProvider?: SortOrder
    Name?: SortOrder
    Value?: SortOrderInput | SortOrder
    _count?: AspNetUserTokensCountOrderByAggregateInput
    _max?: AspNetUserTokensMaxOrderByAggregateInput
    _min?: AspNetUserTokensMinOrderByAggregateInput
  }

  export type AspNetUserTokensScalarWhereWithAggregatesInput = {
    AND?: AspNetUserTokensScalarWhereWithAggregatesInput | AspNetUserTokensScalarWhereWithAggregatesInput[]
    OR?: AspNetUserTokensScalarWhereWithAggregatesInput[]
    NOT?: AspNetUserTokensScalarWhereWithAggregatesInput | AspNetUserTokensScalarWhereWithAggregatesInput[]
    UserId?: StringWithAggregatesFilter<"AspNetUserTokens"> | string
    LoginProvider?: StringWithAggregatesFilter<"AspNetUserTokens"> | string
    Name?: StringWithAggregatesFilter<"AspNetUserTokens"> | string
    Value?: StringNullableWithAggregatesFilter<"AspNetUserTokens"> | string | null
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    Id?: UuidFilter<"Clients"> | string
    Name?: StringFilter<"Clients"> | string
    Secret?: StringFilter<"Clients"> | string
    TenantId?: UuidFilter<"Clients"> | string
    Tenants?: XOR<TenantsRelationFilter, TenantsWhereInput>
  }

  export type ClientsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Secret?: SortOrder
    TenantId?: SortOrder
    Tenants?: TenantsOrderByWithRelationInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    Name?: StringFilter<"Clients"> | string
    Secret?: StringFilter<"Clients"> | string
    TenantId?: UuidFilter<"Clients"> | string
    Tenants?: XOR<TenantsRelationFilter, TenantsWhereInput>
  }, "Id">

  export type ClientsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Secret?: SortOrder
    TenantId?: SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Clients"> | string
    Name?: StringWithAggregatesFilter<"Clients"> | string
    Secret?: StringWithAggregatesFilter<"Clients"> | string
    TenantId?: UuidWithAggregatesFilter<"Clients"> | string
  }

  export type CoinEventsWhereInput = {
    AND?: CoinEventsWhereInput | CoinEventsWhereInput[]
    OR?: CoinEventsWhereInput[]
    NOT?: CoinEventsWhereInput | CoinEventsWhereInput[]
    Id?: UuidFilter<"CoinEvents"> | string
    EventType?: IntFilter<"CoinEvents"> | number
    Date?: DateTimeFilter<"CoinEvents"> | Date | string
    RelatedEntityId?: UuidFilter<"CoinEvents"> | string
    Transactions?: TransactionsListRelationFilter
  }

  export type CoinEventsOrderByWithRelationInput = {
    Id?: SortOrder
    EventType?: SortOrder
    Date?: SortOrder
    RelatedEntityId?: SortOrder
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type CoinEventsWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: CoinEventsWhereInput | CoinEventsWhereInput[]
    OR?: CoinEventsWhereInput[]
    NOT?: CoinEventsWhereInput | CoinEventsWhereInput[]
    EventType?: IntFilter<"CoinEvents"> | number
    Date?: DateTimeFilter<"CoinEvents"> | Date | string
    RelatedEntityId?: UuidFilter<"CoinEvents"> | string
    Transactions?: TransactionsListRelationFilter
  }, "Id">

  export type CoinEventsOrderByWithAggregationInput = {
    Id?: SortOrder
    EventType?: SortOrder
    Date?: SortOrder
    RelatedEntityId?: SortOrder
    _count?: CoinEventsCountOrderByAggregateInput
    _avg?: CoinEventsAvgOrderByAggregateInput
    _max?: CoinEventsMaxOrderByAggregateInput
    _min?: CoinEventsMinOrderByAggregateInput
    _sum?: CoinEventsSumOrderByAggregateInput
  }

  export type CoinEventsScalarWhereWithAggregatesInput = {
    AND?: CoinEventsScalarWhereWithAggregatesInput | CoinEventsScalarWhereWithAggregatesInput[]
    OR?: CoinEventsScalarWhereWithAggregatesInput[]
    NOT?: CoinEventsScalarWhereWithAggregatesInput | CoinEventsScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"CoinEvents"> | string
    EventType?: IntWithAggregatesFilter<"CoinEvents"> | number
    Date?: DateTimeWithAggregatesFilter<"CoinEvents"> | Date | string
    RelatedEntityId?: UuidWithAggregatesFilter<"CoinEvents"> | string
  }

  export type PasswordRecoveryCodesWhereInput = {
    AND?: PasswordRecoveryCodesWhereInput | PasswordRecoveryCodesWhereInput[]
    OR?: PasswordRecoveryCodesWhereInput[]
    NOT?: PasswordRecoveryCodesWhereInput | PasswordRecoveryCodesWhereInput[]
    Id?: UuidFilter<"PasswordRecoveryCodes"> | string
    Email?: StringFilter<"PasswordRecoveryCodes"> | string
    Code?: StringFilter<"PasswordRecoveryCodes"> | string
    ExpiresAt?: DateTimeFilter<"PasswordRecoveryCodes"> | Date | string
  }

  export type PasswordRecoveryCodesOrderByWithRelationInput = {
    Id?: SortOrder
    Email?: SortOrder
    Code?: SortOrder
    ExpiresAt?: SortOrder
  }

  export type PasswordRecoveryCodesWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Email?: string
    AND?: PasswordRecoveryCodesWhereInput | PasswordRecoveryCodesWhereInput[]
    OR?: PasswordRecoveryCodesWhereInput[]
    NOT?: PasswordRecoveryCodesWhereInput | PasswordRecoveryCodesWhereInput[]
    Code?: StringFilter<"PasswordRecoveryCodes"> | string
    ExpiresAt?: DateTimeFilter<"PasswordRecoveryCodes"> | Date | string
  }, "Id" | "Email">

  export type PasswordRecoveryCodesOrderByWithAggregationInput = {
    Id?: SortOrder
    Email?: SortOrder
    Code?: SortOrder
    ExpiresAt?: SortOrder
    _count?: PasswordRecoveryCodesCountOrderByAggregateInput
    _max?: PasswordRecoveryCodesMaxOrderByAggregateInput
    _min?: PasswordRecoveryCodesMinOrderByAggregateInput
  }

  export type PasswordRecoveryCodesScalarWhereWithAggregatesInput = {
    AND?: PasswordRecoveryCodesScalarWhereWithAggregatesInput | PasswordRecoveryCodesScalarWhereWithAggregatesInput[]
    OR?: PasswordRecoveryCodesScalarWhereWithAggregatesInput[]
    NOT?: PasswordRecoveryCodesScalarWhereWithAggregatesInput | PasswordRecoveryCodesScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"PasswordRecoveryCodes"> | string
    Email?: StringWithAggregatesFilter<"PasswordRecoveryCodes"> | string
    Code?: StringWithAggregatesFilter<"PasswordRecoveryCodes"> | string
    ExpiresAt?: DateTimeWithAggregatesFilter<"PasswordRecoveryCodes"> | Date | string
  }

  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    Id?: UuidFilter<"Profiles"> | string
    Name?: StringFilter<"Profiles"> | string
    SurName?: StringFilter<"Profiles"> | string
    CpfCnpj?: StringFilter<"Profiles"> | string
    DocumentType?: IntFilter<"Profiles"> | number
    Phone?: StringFilter<"Profiles"> | string
    AspNetUsers?: AspNetUsersListRelationFilter
  }

  export type ProfilesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    SurName?: SortOrder
    CpfCnpj?: SortOrder
    DocumentType?: SortOrder
    Phone?: SortOrder
    AspNetUsers?: AspNetUsersOrderByRelationAggregateInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    Name?: StringFilter<"Profiles"> | string
    SurName?: StringFilter<"Profiles"> | string
    CpfCnpj?: StringFilter<"Profiles"> | string
    DocumentType?: IntFilter<"Profiles"> | number
    Phone?: StringFilter<"Profiles"> | string
    AspNetUsers?: AspNetUsersListRelationFilter
  }, "Id">

  export type ProfilesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    SurName?: SortOrder
    CpfCnpj?: SortOrder
    DocumentType?: SortOrder
    Phone?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _avg?: ProfilesAvgOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
    _sum?: ProfilesSumOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Profiles"> | string
    Name?: StringWithAggregatesFilter<"Profiles"> | string
    SurName?: StringWithAggregatesFilter<"Profiles"> | string
    CpfCnpj?: StringWithAggregatesFilter<"Profiles"> | string
    DocumentType?: IntWithAggregatesFilter<"Profiles"> | number
    Phone?: StringWithAggregatesFilter<"Profiles"> | string
  }

  export type TenantsWhereInput = {
    AND?: TenantsWhereInput | TenantsWhereInput[]
    OR?: TenantsWhereInput[]
    NOT?: TenantsWhereInput | TenantsWhereInput[]
    Id?: UuidFilter<"Tenants"> | string
    Name?: StringFilter<"Tenants"> | string
    Clients?: ClientsListRelationFilter
  }

  export type TenantsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Clients?: ClientsOrderByRelationAggregateInput
  }

  export type TenantsWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: TenantsWhereInput | TenantsWhereInput[]
    OR?: TenantsWhereInput[]
    NOT?: TenantsWhereInput | TenantsWhereInput[]
    Name?: StringFilter<"Tenants"> | string
    Clients?: ClientsListRelationFilter
  }, "Id">

  export type TenantsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: TenantsCountOrderByAggregateInput
    _max?: TenantsMaxOrderByAggregateInput
    _min?: TenantsMinOrderByAggregateInput
  }

  export type TenantsScalarWhereWithAggregatesInput = {
    AND?: TenantsScalarWhereWithAggregatesInput | TenantsScalarWhereWithAggregatesInput[]
    OR?: TenantsScalarWhereWithAggregatesInput[]
    NOT?: TenantsScalarWhereWithAggregatesInput | TenantsScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Tenants"> | string
    Name?: StringWithAggregatesFilter<"Tenants"> | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    Id?: UuidFilter<"Transactions"> | string
    ApplicationUserId?: StringFilter<"Transactions"> | string
    CoinEventId?: UuidNullableFilter<"Transactions"> | string | null
    Date?: DateTimeFilter<"Transactions"> | Date | string
    Amount?: IntFilter<"Transactions"> | number
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
    CoinEvents?: XOR<CoinEventsNullableRelationFilter, CoinEventsWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    CoinEventId?: SortOrderInput | SortOrder
    Date?: SortOrder
    Amount?: SortOrder
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
    CoinEvents?: CoinEventsOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    ApplicationUserId?: StringFilter<"Transactions"> | string
    CoinEventId?: UuidNullableFilter<"Transactions"> | string | null
    Date?: DateTimeFilter<"Transactions"> | Date | string
    Amount?: IntFilter<"Transactions"> | number
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
    CoinEvents?: XOR<CoinEventsNullableRelationFilter, CoinEventsWhereInput> | null
  }, "Id">

  export type TransactionsOrderByWithAggregationInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    CoinEventId?: SortOrderInput | SortOrder
    Date?: SortOrder
    Amount?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"Transactions"> | string
    ApplicationUserId?: StringWithAggregatesFilter<"Transactions"> | string
    CoinEventId?: UuidNullableWithAggregatesFilter<"Transactions"> | string | null
    Date?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    Amount?: IntWithAggregatesFilter<"Transactions"> | number
  }

  export type UserAddressesWhereInput = {
    AND?: UserAddressesWhereInput | UserAddressesWhereInput[]
    OR?: UserAddressesWhereInput[]
    NOT?: UserAddressesWhereInput | UserAddressesWhereInput[]
    Id?: UuidFilter<"UserAddresses"> | string
    PostalCode?: StringFilter<"UserAddresses"> | string
    Street?: StringFilter<"UserAddresses"> | string
    Number?: StringFilter<"UserAddresses"> | string
    Country?: StringFilter<"UserAddresses"> | string
    State?: StringFilter<"UserAddresses"> | string
    City?: StringFilter<"UserAddresses"> | string
    Neighborhood?: StringFilter<"UserAddresses"> | string
    Complement?: StringFilter<"UserAddresses"> | string
    AspNetUsers?: AspNetUsersListRelationFilter
  }

  export type UserAddressesOrderByWithRelationInput = {
    Id?: SortOrder
    PostalCode?: SortOrder
    Street?: SortOrder
    Number?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Neighborhood?: SortOrder
    Complement?: SortOrder
    AspNetUsers?: AspNetUsersOrderByRelationAggregateInput
  }

  export type UserAddressesWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: UserAddressesWhereInput | UserAddressesWhereInput[]
    OR?: UserAddressesWhereInput[]
    NOT?: UserAddressesWhereInput | UserAddressesWhereInput[]
    PostalCode?: StringFilter<"UserAddresses"> | string
    Street?: StringFilter<"UserAddresses"> | string
    Number?: StringFilter<"UserAddresses"> | string
    Country?: StringFilter<"UserAddresses"> | string
    State?: StringFilter<"UserAddresses"> | string
    City?: StringFilter<"UserAddresses"> | string
    Neighborhood?: StringFilter<"UserAddresses"> | string
    Complement?: StringFilter<"UserAddresses"> | string
    AspNetUsers?: AspNetUsersListRelationFilter
  }, "Id">

  export type UserAddressesOrderByWithAggregationInput = {
    Id?: SortOrder
    PostalCode?: SortOrder
    Street?: SortOrder
    Number?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Neighborhood?: SortOrder
    Complement?: SortOrder
    _count?: UserAddressesCountOrderByAggregateInput
    _max?: UserAddressesMaxOrderByAggregateInput
    _min?: UserAddressesMinOrderByAggregateInput
  }

  export type UserAddressesScalarWhereWithAggregatesInput = {
    AND?: UserAddressesScalarWhereWithAggregatesInput | UserAddressesScalarWhereWithAggregatesInput[]
    OR?: UserAddressesScalarWhereWithAggregatesInput[]
    NOT?: UserAddressesScalarWhereWithAggregatesInput | UserAddressesScalarWhereWithAggregatesInput[]
    Id?: UuidWithAggregatesFilter<"UserAddresses"> | string
    PostalCode?: StringWithAggregatesFilter<"UserAddresses"> | string
    Street?: StringWithAggregatesFilter<"UserAddresses"> | string
    Number?: StringWithAggregatesFilter<"UserAddresses"> | string
    Country?: StringWithAggregatesFilter<"UserAddresses"> | string
    State?: StringWithAggregatesFilter<"UserAddresses"> | string
    City?: StringWithAggregatesFilter<"UserAddresses"> | string
    Neighborhood?: StringWithAggregatesFilter<"UserAddresses"> | string
    Complement?: StringWithAggregatesFilter<"UserAddresses"> | string
  }

  export type WalletsWhereInput = {
    AND?: WalletsWhereInput | WalletsWhereInput[]
    OR?: WalletsWhereInput[]
    NOT?: WalletsWhereInput | WalletsWhereInput[]
    Id?: IntFilter<"Wallets"> | number
    ApplicationUserId?: StringFilter<"Wallets"> | string
    Balance?: IntFilter<"Wallets"> | number
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }

  export type WalletsOrderByWithRelationInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    Balance?: SortOrder
    AspNetUsers?: AspNetUsersOrderByWithRelationInput
  }

  export type WalletsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    ApplicationUserId?: string
    AND?: WalletsWhereInput | WalletsWhereInput[]
    OR?: WalletsWhereInput[]
    NOT?: WalletsWhereInput | WalletsWhereInput[]
    Balance?: IntFilter<"Wallets"> | number
    AspNetUsers?: XOR<AspNetUsersRelationFilter, AspNetUsersWhereInput>
  }, "Id" | "ApplicationUserId">

  export type WalletsOrderByWithAggregationInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    Balance?: SortOrder
    _count?: WalletsCountOrderByAggregateInput
    _avg?: WalletsAvgOrderByAggregateInput
    _max?: WalletsMaxOrderByAggregateInput
    _min?: WalletsMinOrderByAggregateInput
    _sum?: WalletsSumOrderByAggregateInput
  }

  export type WalletsScalarWhereWithAggregatesInput = {
    AND?: WalletsScalarWhereWithAggregatesInput | WalletsScalarWhereWithAggregatesInput[]
    OR?: WalletsScalarWhereWithAggregatesInput[]
    NOT?: WalletsScalarWhereWithAggregatesInput | WalletsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Wallets"> | number
    ApplicationUserId?: StringWithAggregatesFilter<"Wallets"> | string
    Balance?: IntWithAggregatesFilter<"Wallets"> | number
  }

  export type EFMigrationsHistoryWhereInput = {
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    MigrationId?: StringFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }

  export type EFMigrationsHistoryOrderByWithRelationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryWhereUniqueInput = Prisma.AtLeast<{
    MigrationId?: string
    AND?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    OR?: EFMigrationsHistoryWhereInput[]
    NOT?: EFMigrationsHistoryWhereInput | EFMigrationsHistoryWhereInput[]
    ProductVersion?: StringFilter<"EFMigrationsHistory"> | string
  }, "MigrationId">

  export type EFMigrationsHistoryOrderByWithAggregationInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
    _count?: EFMigrationsHistoryCountOrderByAggregateInput
    _max?: EFMigrationsHistoryMaxOrderByAggregateInput
    _min?: EFMigrationsHistoryMinOrderByAggregateInput
  }

  export type EFMigrationsHistoryScalarWhereWithAggregatesInput = {
    AND?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    OR?: EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    NOT?: EFMigrationsHistoryScalarWhereWithAggregatesInput | EFMigrationsHistoryScalarWhereWithAggregatesInput[]
    MigrationId?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
    ProductVersion?: StringWithAggregatesFilter<"EFMigrationsHistory"> | string
  }

  export type AspNetUsersCreateInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersCreateManyInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
  }

  export type AspNetUsersUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
  }

  export type AspNetUsersUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
  }

  export type AspNetRoleClaimsCreateInput = {
    ClaimType?: string | null
    ClaimValue?: string | null
    AspNetRoles: AspNetRolesCreateNestedOneWithoutAspNetRoleClaimsInput
  }

  export type AspNetRoleClaimsUncheckedCreateInput = {
    Id?: number
    RoleId: string
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetRoleClaimsUpdateInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetRoles?: AspNetRolesUpdateOneRequiredWithoutAspNetRoleClaimsNestedInput
  }

  export type AspNetRoleClaimsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    RoleId?: StringFieldUpdateOperationsInput | string
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRoleClaimsCreateManyInput = {
    Id?: number
    RoleId: string
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetRoleClaimsUpdateManyMutationInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRoleClaimsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    RoleId?: StringFieldUpdateOperationsInput | string
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRolesCreateInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetRoleClaims?: AspNetRoleClaimsCreateNestedManyWithoutAspNetRolesInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesUncheckedCreateInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetRoleClaims?: AspNetRoleClaimsUncheckedCreateNestedManyWithoutAspNetRolesInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetRoleClaims?: AspNetRoleClaimsUpdateManyWithoutAspNetRolesNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetRolesUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetRoleClaims?: AspNetRoleClaimsUncheckedUpdateManyWithoutAspNetRolesNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetRolesCreateManyInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
  }

  export type AspNetRolesUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRolesUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserClaimsCreateInput = {
    ClaimType?: string | null
    ClaimValue?: string | null
    AspNetUsers: AspNetUsersCreateNestedOneWithoutAspNetUserClaimsInput
  }

  export type AspNetUserClaimsUncheckedCreateInput = {
    Id?: number
    UserId: string
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserClaimsUpdateInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutAspNetUserClaimsNestedInput
  }

  export type AspNetUserClaimsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserClaimsCreateManyInput = {
    Id?: number
    UserId: string
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserClaimsUpdateManyMutationInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserClaimsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserLoginsCreateInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
    AspNetUsers: AspNetUsersCreateNestedOneWithoutAspNetUserLoginsInput
  }

  export type AspNetUserLoginsUncheckedCreateInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
    UserId: string
  }

  export type AspNetUserLoginsUpdateInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutAspNetUserLoginsNestedInput
  }

  export type AspNetUserLoginsUncheckedUpdateInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserLoginsCreateManyInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
    UserId: string
  }

  export type AspNetUserLoginsUpdateManyMutationInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserLoginsUncheckedUpdateManyInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserRolesCreateInput = {
    AspNetRoles: AspNetRolesCreateNestedOneWithoutAspNetUserRolesInput
    AspNetUsers: AspNetUsersCreateNestedOneWithoutAspNetUserRolesInput
  }

  export type AspNetUserRolesUncheckedCreateInput = {
    UserId: string
    RoleId: string
  }

  export type AspNetUserRolesUpdateInput = {
    AspNetRoles?: AspNetRolesUpdateOneRequiredWithoutAspNetUserRolesNestedInput
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutAspNetUserRolesNestedInput
  }

  export type AspNetUserRolesUncheckedUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    RoleId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserRolesCreateManyInput = {
    UserId: string
    RoleId: string
  }

  export type AspNetUserRolesUpdateManyMutationInput = {

  }

  export type AspNetUserRolesUncheckedUpdateManyInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    RoleId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserTokensCreateInput = {
    LoginProvider: string
    Name: string
    Value?: string | null
    AspNetUsers: AspNetUsersCreateNestedOneWithoutAspNetUserTokensInput
  }

  export type AspNetUserTokensUncheckedCreateInput = {
    UserId: string
    LoginProvider: string
    Name: string
    Value?: string | null
  }

  export type AspNetUserTokensUpdateInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutAspNetUserTokensNestedInput
  }

  export type AspNetUserTokensUncheckedUpdateInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserTokensCreateManyInput = {
    UserId: string
    LoginProvider: string
    Name: string
    Value?: string | null
  }

  export type AspNetUserTokensUpdateManyMutationInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserTokensUncheckedUpdateManyInput = {
    UserId?: StringFieldUpdateOperationsInput | string
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsCreateInput = {
    Id: string
    Name: string
    Secret: string
    Tenants: TenantsCreateNestedOneWithoutClientsInput
  }

  export type ClientsUncheckedCreateInput = {
    Id: string
    Name: string
    Secret: string
    TenantId: string
  }

  export type ClientsUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
    Tenants?: TenantsUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
    TenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateManyInput = {
    Id: string
    Name: string
    Secret: string
    TenantId: string
  }

  export type ClientsUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
    TenantId?: StringFieldUpdateOperationsInput | string
  }

  export type CoinEventsCreateInput = {
    Id: string
    EventType: number
    Date: Date | string
    RelatedEntityId: string
    Transactions?: TransactionsCreateNestedManyWithoutCoinEventsInput
  }

  export type CoinEventsUncheckedCreateInput = {
    Id: string
    EventType: number
    Date: Date | string
    RelatedEntityId: string
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutCoinEventsInput
  }

  export type CoinEventsUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUpdateManyWithoutCoinEventsNestedInput
  }

  export type CoinEventsUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUncheckedUpdateManyWithoutCoinEventsNestedInput
  }

  export type CoinEventsCreateManyInput = {
    Id: string
    EventType: number
    Date: Date | string
    RelatedEntityId: string
  }

  export type CoinEventsUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type CoinEventsUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryCodesCreateInput = {
    Id: string
    Email: string
    Code: string
    ExpiresAt: Date | string
  }

  export type PasswordRecoveryCodesUncheckedCreateInput = {
    Id: string
    Email: string
    Code: string
    ExpiresAt: Date | string
  }

  export type PasswordRecoveryCodesUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    ExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryCodesUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    ExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryCodesCreateManyInput = {
    Id: string
    Email: string
    Code: string
    ExpiresAt: Date | string
  }

  export type PasswordRecoveryCodesUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    ExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordRecoveryCodesUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    ExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilesCreateInput = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType?: number
    Phone?: string
    AspNetUsers?: AspNetUsersCreateNestedManyWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateInput = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType?: number
    Phone?: string
    AspNetUsers?: AspNetUsersUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type ProfilesUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
    AspNetUsers?: AspNetUsersUpdateManyWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
    AspNetUsers?: AspNetUsersUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type ProfilesCreateManyInput = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType?: number
    Phone?: string
  }

  export type ProfilesUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
  }

  export type ProfilesUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
  }

  export type TenantsCreateInput = {
    Id: string
    Name: string
    Clients?: ClientsCreateNestedManyWithoutTenantsInput
  }

  export type TenantsUncheckedCreateInput = {
    Id: string
    Name: string
    Clients?: ClientsUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantsUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUpdateManyWithoutTenantsNestedInput
  }

  export type TenantsUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type TenantsCreateManyInput = {
    Id: string
    Name: string
  }

  export type TenantsUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type TenantsUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateInput = {
    Id: string
    Date: Date | string
    Amount: number
    AspNetUsers: AspNetUsersCreateNestedOneWithoutTransactionsInput
    CoinEvents?: CoinEventsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    Id: string
    ApplicationUserId: string
    CoinEventId?: string | null
    Date: Date | string
    Amount: number
  }

  export type TransactionsUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutTransactionsNestedInput
    CoinEvents?: CoinEventsUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    CoinEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateManyInput = {
    Id: string
    ApplicationUserId: string
    CoinEventId?: string | null
    Date: Date | string
    Amount: number
  }

  export type TransactionsUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    CoinEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type UserAddressesCreateInput = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood?: string
    Complement?: string
    AspNetUsers?: AspNetUsersCreateNestedManyWithoutUserAddressesInput
  }

  export type UserAddressesUncheckedCreateInput = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood?: string
    Complement?: string
    AspNetUsers?: AspNetUsersUncheckedCreateNestedManyWithoutUserAddressesInput
  }

  export type UserAddressesUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
    AspNetUsers?: AspNetUsersUpdateManyWithoutUserAddressesNestedInput
  }

  export type UserAddressesUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
    AspNetUsers?: AspNetUsersUncheckedUpdateManyWithoutUserAddressesNestedInput
  }

  export type UserAddressesCreateManyInput = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood?: string
    Complement?: string
  }

  export type UserAddressesUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
  }

  export type UserAddressesUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
  }

  export type WalletsCreateInput = {
    Balance: number
    AspNetUsers: AspNetUsersCreateNestedOneWithoutWalletsInput
  }

  export type WalletsUncheckedCreateInput = {
    Id?: number
    ApplicationUserId: string
    Balance: number
  }

  export type WalletsUpdateInput = {
    Balance?: IntFieldUpdateOperationsInput | number
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type WalletsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
  }

  export type WalletsCreateManyInput = {
    Id?: number
    ApplicationUserId: string
    Balance: number
  }

  export type WalletsUpdateManyMutationInput = {
    Balance?: IntFieldUpdateOperationsInput | number
  }

  export type WalletsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
  }

  export type EFMigrationsHistoryCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUncheckedCreateInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryCreateManyInput = {
    MigrationId: string
    ProductVersion: string
  }

  export type EFMigrationsHistoryUpdateManyMutationInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type EFMigrationsHistoryUncheckedUpdateManyInput = {
    MigrationId?: StringFieldUpdateOperationsInput | string
    ProductVersion?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AspNetUserClaimsListRelationFilter = {
    every?: AspNetUserClaimsWhereInput
    some?: AspNetUserClaimsWhereInput
    none?: AspNetUserClaimsWhereInput
  }

  export type AspNetUserLoginsListRelationFilter = {
    every?: AspNetUserLoginsWhereInput
    some?: AspNetUserLoginsWhereInput
    none?: AspNetUserLoginsWhereInput
  }

  export type AspNetUserRolesListRelationFilter = {
    every?: AspNetUserRolesWhereInput
    some?: AspNetUserRolesWhereInput
    none?: AspNetUserRolesWhereInput
  }

  export type AspNetUserTokensListRelationFilter = {
    every?: AspNetUserTokensWhereInput
    some?: AspNetUserTokensWhereInput
    none?: AspNetUserTokensWhereInput
  }

  export type ProfilesNullableRelationFilter = {
    is?: ProfilesWhereInput | null
    isNot?: ProfilesWhereInput | null
  }

  export type UserAddressesNullableRelationFilter = {
    is?: UserAddressesWhereInput | null
    isNot?: UserAddressesWhereInput | null
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type WalletsNullableRelationFilter = {
    is?: WalletsWhereInput | null
    isNot?: WalletsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AspNetUserClaimsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspNetUserLoginsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspNetUserRolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspNetUserTokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspNetUsersCountOrderByAggregateInput = {
    Id?: SortOrder
    ProfileId?: SortOrder
    UserName?: SortOrder
    NormalizedUserName?: SortOrder
    Email?: SortOrder
    NormalizedEmail?: SortOrder
    EmailConfirmed?: SortOrder
    PasswordHash?: SortOrder
    SecurityStamp?: SortOrder
    ConcurrencyStamp?: SortOrder
    PhoneNumber?: SortOrder
    PhoneNumberConfirmed?: SortOrder
    TwoFactorEnabled?: SortOrder
    LockoutEnd?: SortOrder
    LockoutEnabled?: SortOrder
    AccessFailedCount?: SortOrder
    UserAddressId?: SortOrder
    UserOrigin?: SortOrder
  }

  export type AspNetUsersAvgOrderByAggregateInput = {
    AccessFailedCount?: SortOrder
    UserOrigin?: SortOrder
  }

  export type AspNetUsersMaxOrderByAggregateInput = {
    Id?: SortOrder
    ProfileId?: SortOrder
    UserName?: SortOrder
    NormalizedUserName?: SortOrder
    Email?: SortOrder
    NormalizedEmail?: SortOrder
    EmailConfirmed?: SortOrder
    PasswordHash?: SortOrder
    SecurityStamp?: SortOrder
    ConcurrencyStamp?: SortOrder
    PhoneNumber?: SortOrder
    PhoneNumberConfirmed?: SortOrder
    TwoFactorEnabled?: SortOrder
    LockoutEnd?: SortOrder
    LockoutEnabled?: SortOrder
    AccessFailedCount?: SortOrder
    UserAddressId?: SortOrder
    UserOrigin?: SortOrder
  }

  export type AspNetUsersMinOrderByAggregateInput = {
    Id?: SortOrder
    ProfileId?: SortOrder
    UserName?: SortOrder
    NormalizedUserName?: SortOrder
    Email?: SortOrder
    NormalizedEmail?: SortOrder
    EmailConfirmed?: SortOrder
    PasswordHash?: SortOrder
    SecurityStamp?: SortOrder
    ConcurrencyStamp?: SortOrder
    PhoneNumber?: SortOrder
    PhoneNumberConfirmed?: SortOrder
    TwoFactorEnabled?: SortOrder
    LockoutEnd?: SortOrder
    LockoutEnabled?: SortOrder
    AccessFailedCount?: SortOrder
    UserAddressId?: SortOrder
    UserOrigin?: SortOrder
  }

  export type AspNetUsersSumOrderByAggregateInput = {
    AccessFailedCount?: SortOrder
    UserOrigin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AspNetRolesRelationFilter = {
    is?: AspNetRolesWhereInput
    isNot?: AspNetRolesWhereInput
  }

  export type AspNetRoleClaimsCountOrderByAggregateInput = {
    Id?: SortOrder
    RoleId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetRoleClaimsAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AspNetRoleClaimsMaxOrderByAggregateInput = {
    Id?: SortOrder
    RoleId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetRoleClaimsMinOrderByAggregateInput = {
    Id?: SortOrder
    RoleId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetRoleClaimsSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AspNetRoleClaimsListRelationFilter = {
    every?: AspNetRoleClaimsWhereInput
    some?: AspNetRoleClaimsWhereInput
    none?: AspNetRoleClaimsWhereInput
  }

  export type AspNetRoleClaimsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspNetRolesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    NormalizedName?: SortOrder
    ConcurrencyStamp?: SortOrder
  }

  export type AspNetRolesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    NormalizedName?: SortOrder
    ConcurrencyStamp?: SortOrder
  }

  export type AspNetRolesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    NormalizedName?: SortOrder
    ConcurrencyStamp?: SortOrder
  }

  export type AspNetUsersRelationFilter = {
    is?: AspNetUsersWhereInput
    isNot?: AspNetUsersWhereInput
  }

  export type AspNetUserClaimsCountOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetUserClaimsAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AspNetUserClaimsMaxOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetUserClaimsMinOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    ClaimType?: SortOrder
    ClaimValue?: SortOrder
  }

  export type AspNetUserClaimsSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AspNetUserLoginsLoginProviderProviderKeyCompoundUniqueInput = {
    LoginProvider: string
    ProviderKey: string
  }

  export type AspNetUserLoginsCountOrderByAggregateInput = {
    LoginProvider?: SortOrder
    ProviderKey?: SortOrder
    ProviderDisplayName?: SortOrder
    UserId?: SortOrder
  }

  export type AspNetUserLoginsMaxOrderByAggregateInput = {
    LoginProvider?: SortOrder
    ProviderKey?: SortOrder
    ProviderDisplayName?: SortOrder
    UserId?: SortOrder
  }

  export type AspNetUserLoginsMinOrderByAggregateInput = {
    LoginProvider?: SortOrder
    ProviderKey?: SortOrder
    ProviderDisplayName?: SortOrder
    UserId?: SortOrder
  }

  export type AspNetUserRolesUserIdRoleIdCompoundUniqueInput = {
    UserId: string
    RoleId: string
  }

  export type AspNetUserRolesCountOrderByAggregateInput = {
    UserId?: SortOrder
    RoleId?: SortOrder
  }

  export type AspNetUserRolesMaxOrderByAggregateInput = {
    UserId?: SortOrder
    RoleId?: SortOrder
  }

  export type AspNetUserRolesMinOrderByAggregateInput = {
    UserId?: SortOrder
    RoleId?: SortOrder
  }

  export type AspNetUserTokensUserIdLoginProviderNameCompoundUniqueInput = {
    UserId: string
    LoginProvider: string
    Name: string
  }

  export type AspNetUserTokensCountOrderByAggregateInput = {
    UserId?: SortOrder
    LoginProvider?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
  }

  export type AspNetUserTokensMaxOrderByAggregateInput = {
    UserId?: SortOrder
    LoginProvider?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
  }

  export type AspNetUserTokensMinOrderByAggregateInput = {
    UserId?: SortOrder
    LoginProvider?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type TenantsRelationFilter = {
    is?: TenantsWhereInput
    isNot?: TenantsWhereInput
  }

  export type ClientsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Secret?: SortOrder
    TenantId?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Secret?: SortOrder
    TenantId?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Secret?: SortOrder
    TenantId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CoinEventsCountOrderByAggregateInput = {
    Id?: SortOrder
    EventType?: SortOrder
    Date?: SortOrder
    RelatedEntityId?: SortOrder
  }

  export type CoinEventsAvgOrderByAggregateInput = {
    EventType?: SortOrder
  }

  export type CoinEventsMaxOrderByAggregateInput = {
    Id?: SortOrder
    EventType?: SortOrder
    Date?: SortOrder
    RelatedEntityId?: SortOrder
  }

  export type CoinEventsMinOrderByAggregateInput = {
    Id?: SortOrder
    EventType?: SortOrder
    Date?: SortOrder
    RelatedEntityId?: SortOrder
  }

  export type CoinEventsSumOrderByAggregateInput = {
    EventType?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PasswordRecoveryCodesCountOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Code?: SortOrder
    ExpiresAt?: SortOrder
  }

  export type PasswordRecoveryCodesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Code?: SortOrder
    ExpiresAt?: SortOrder
  }

  export type PasswordRecoveryCodesMinOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Code?: SortOrder
    ExpiresAt?: SortOrder
  }

  export type AspNetUsersListRelationFilter = {
    every?: AspNetUsersWhereInput
    some?: AspNetUsersWhereInput
    none?: AspNetUsersWhereInput
  }

  export type AspNetUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    SurName?: SortOrder
    CpfCnpj?: SortOrder
    DocumentType?: SortOrder
    Phone?: SortOrder
  }

  export type ProfilesAvgOrderByAggregateInput = {
    DocumentType?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    SurName?: SortOrder
    CpfCnpj?: SortOrder
    DocumentType?: SortOrder
    Phone?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    SurName?: SortOrder
    CpfCnpj?: SortOrder
    DocumentType?: SortOrder
    Phone?: SortOrder
  }

  export type ProfilesSumOrderByAggregateInput = {
    DocumentType?: SortOrder
  }

  export type ClientsListRelationFilter = {
    every?: ClientsWhereInput
    some?: ClientsWhereInput
    none?: ClientsWhereInput
  }

  export type ClientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type TenantsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type TenantsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type CoinEventsNullableRelationFilter = {
    is?: CoinEventsWhereInput | null
    isNot?: CoinEventsWhereInput | null
  }

  export type TransactionsCountOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    CoinEventId?: SortOrder
    Date?: SortOrder
    Amount?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    CoinEventId?: SortOrder
    Date?: SortOrder
    Amount?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    CoinEventId?: SortOrder
    Date?: SortOrder
    Amount?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type UserAddressesCountOrderByAggregateInput = {
    Id?: SortOrder
    PostalCode?: SortOrder
    Street?: SortOrder
    Number?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Neighborhood?: SortOrder
    Complement?: SortOrder
  }

  export type UserAddressesMaxOrderByAggregateInput = {
    Id?: SortOrder
    PostalCode?: SortOrder
    Street?: SortOrder
    Number?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Neighborhood?: SortOrder
    Complement?: SortOrder
  }

  export type UserAddressesMinOrderByAggregateInput = {
    Id?: SortOrder
    PostalCode?: SortOrder
    Street?: SortOrder
    Number?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Neighborhood?: SortOrder
    Complement?: SortOrder
  }

  export type WalletsCountOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    Balance?: SortOrder
  }

  export type WalletsAvgOrderByAggregateInput = {
    Id?: SortOrder
    Balance?: SortOrder
  }

  export type WalletsMaxOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    Balance?: SortOrder
  }

  export type WalletsMinOrderByAggregateInput = {
    Id?: SortOrder
    ApplicationUserId?: SortOrder
    Balance?: SortOrder
  }

  export type WalletsSumOrderByAggregateInput = {
    Id?: SortOrder
    Balance?: SortOrder
  }

  export type EFMigrationsHistoryCountOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMaxOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type EFMigrationsHistoryMinOrderByAggregateInput = {
    MigrationId?: SortOrder
    ProductVersion?: SortOrder
  }

  export type AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserClaimsCreateWithoutAspNetUsersInput[] | AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput | AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserClaimsCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
  }

  export type AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserLoginsCreateWithoutAspNetUsersInput[] | AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput | AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserLoginsCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
  }

  export type AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput> | AspNetUserRolesCreateWithoutAspNetUsersInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput | AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserRolesCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
  }

  export type AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput> | AspNetUserTokensCreateWithoutAspNetUsersInput[] | AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput | AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserTokensCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
  }

  export type ProfilesCreateNestedOneWithoutAspNetUsersInput = {
    create?: XOR<ProfilesCreateWithoutAspNetUsersInput, ProfilesUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutAspNetUsersInput
    connect?: ProfilesWhereUniqueInput
  }

  export type UserAddressesCreateNestedOneWithoutAspNetUsersInput = {
    create?: XOR<UserAddressesCreateWithoutAspNetUsersInput, UserAddressesUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: UserAddressesCreateOrConnectWithoutAspNetUsersInput
    connect?: UserAddressesWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput> | TransactionsCreateWithoutAspNetUsersInput[] | TransactionsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAspNetUsersInput | TransactionsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: TransactionsCreateManyAspNetUsersInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type WalletsCreateNestedOneWithoutAspNetUsersInput = {
    create?: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutAspNetUsersInput
    connect?: WalletsWhereUniqueInput
  }

  export type AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserClaimsCreateWithoutAspNetUsersInput[] | AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput | AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserClaimsCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
  }

  export type AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserLoginsCreateWithoutAspNetUsersInput[] | AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput | AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserLoginsCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
  }

  export type AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput> | AspNetUserRolesCreateWithoutAspNetUsersInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput | AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserRolesCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
  }

  export type AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput> | AspNetUserTokensCreateWithoutAspNetUsersInput[] | AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput | AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: AspNetUserTokensCreateManyAspNetUsersInputEnvelope
    connect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput = {
    create?: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput> | TransactionsCreateWithoutAspNetUsersInput[] | TransactionsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAspNetUsersInput | TransactionsCreateOrConnectWithoutAspNetUsersInput[]
    createMany?: TransactionsCreateManyAspNetUsersInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput = {
    create?: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutAspNetUsersInput
    connect?: WalletsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserClaimsCreateWithoutAspNetUsersInput[] | AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput | AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserClaimsUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserClaimsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserClaimsCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    disconnect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    delete?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    connect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    update?: AspNetUserClaimsUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserClaimsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserClaimsUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserClaimsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserClaimsScalarWhereInput | AspNetUserClaimsScalarWhereInput[]
  }

  export type AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserLoginsCreateWithoutAspNetUsersInput[] | AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput | AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserLoginsUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserLoginsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserLoginsCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    disconnect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    delete?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    connect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    update?: AspNetUserLoginsUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserLoginsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserLoginsUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserLoginsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserLoginsScalarWhereInput | AspNetUserLoginsScalarWhereInput[]
  }

  export type AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput> | AspNetUserRolesCreateWithoutAspNetUsersInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput | AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserRolesCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    disconnect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    delete?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    update?: AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserRolesUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserRolesUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
  }

  export type AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput> | AspNetUserTokensCreateWithoutAspNetUsersInput[] | AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput | AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserTokensUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserTokensUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserTokensCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    disconnect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    delete?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    connect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    update?: AspNetUserTokensUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserTokensUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserTokensUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserTokensUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserTokensScalarWhereInput | AspNetUserTokensScalarWhereInput[]
  }

  export type ProfilesUpdateOneWithoutAspNetUsersNestedInput = {
    create?: XOR<ProfilesCreateWithoutAspNetUsersInput, ProfilesUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: ProfilesCreateOrConnectWithoutAspNetUsersInput
    upsert?: ProfilesUpsertWithoutAspNetUsersInput
    disconnect?: ProfilesWhereInput | boolean
    delete?: ProfilesWhereInput | boolean
    connect?: ProfilesWhereUniqueInput
    update?: XOR<XOR<ProfilesUpdateToOneWithWhereWithoutAspNetUsersInput, ProfilesUpdateWithoutAspNetUsersInput>, ProfilesUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type UserAddressesUpdateOneWithoutAspNetUsersNestedInput = {
    create?: XOR<UserAddressesCreateWithoutAspNetUsersInput, UserAddressesUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: UserAddressesCreateOrConnectWithoutAspNetUsersInput
    upsert?: UserAddressesUpsertWithoutAspNetUsersInput
    disconnect?: UserAddressesWhereInput | boolean
    delete?: UserAddressesWhereInput | boolean
    connect?: UserAddressesWhereUniqueInput
    update?: XOR<XOR<UserAddressesUpdateToOneWithWhereWithoutAspNetUsersInput, UserAddressesUpdateWithoutAspNetUsersInput>, UserAddressesUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type TransactionsUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput> | TransactionsCreateWithoutAspNetUsersInput[] | TransactionsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAspNetUsersInput | TransactionsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutAspNetUsersInput | TransactionsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: TransactionsCreateManyAspNetUsersInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutAspNetUsersInput | TransactionsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutAspNetUsersInput | TransactionsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type WalletsUpdateOneWithoutAspNetUsersNestedInput = {
    create?: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutAspNetUsersInput
    upsert?: WalletsUpsertWithoutAspNetUsersInput
    disconnect?: WalletsWhereInput | boolean
    delete?: WalletsWhereInput | boolean
    connect?: WalletsWhereUniqueInput
    update?: XOR<XOR<WalletsUpdateToOneWithWhereWithoutAspNetUsersInput, WalletsUpdateWithoutAspNetUsersInput>, WalletsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserClaimsCreateWithoutAspNetUsersInput[] | AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput | AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserClaimsUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserClaimsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserClaimsCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    disconnect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    delete?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    connect?: AspNetUserClaimsWhereUniqueInput | AspNetUserClaimsWhereUniqueInput[]
    update?: AspNetUserClaimsUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserClaimsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserClaimsUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserClaimsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserClaimsScalarWhereInput | AspNetUserClaimsScalarWhereInput[]
  }

  export type AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput> | AspNetUserLoginsCreateWithoutAspNetUsersInput[] | AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput | AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserLoginsUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserLoginsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserLoginsCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    disconnect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    delete?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    connect?: AspNetUserLoginsWhereUniqueInput | AspNetUserLoginsWhereUniqueInput[]
    update?: AspNetUserLoginsUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserLoginsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserLoginsUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserLoginsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserLoginsScalarWhereInput | AspNetUserLoginsScalarWhereInput[]
  }

  export type AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput> | AspNetUserRolesCreateWithoutAspNetUsersInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput | AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserRolesCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    disconnect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    delete?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    update?: AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserRolesUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserRolesUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
  }

  export type AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput> | AspNetUserTokensCreateWithoutAspNetUsersInput[] | AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput | AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: AspNetUserTokensUpsertWithWhereUniqueWithoutAspNetUsersInput | AspNetUserTokensUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: AspNetUserTokensCreateManyAspNetUsersInputEnvelope
    set?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    disconnect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    delete?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    connect?: AspNetUserTokensWhereUniqueInput | AspNetUserTokensWhereUniqueInput[]
    update?: AspNetUserTokensUpdateWithWhereUniqueWithoutAspNetUsersInput | AspNetUserTokensUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: AspNetUserTokensUpdateManyWithWhereWithoutAspNetUsersInput | AspNetUserTokensUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: AspNetUserTokensScalarWhereInput | AspNetUserTokensScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput = {
    create?: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput> | TransactionsCreateWithoutAspNetUsersInput[] | TransactionsUncheckedCreateWithoutAspNetUsersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutAspNetUsersInput | TransactionsCreateOrConnectWithoutAspNetUsersInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutAspNetUsersInput | TransactionsUpsertWithWhereUniqueWithoutAspNetUsersInput[]
    createMany?: TransactionsCreateManyAspNetUsersInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutAspNetUsersInput | TransactionsUpdateWithWhereUniqueWithoutAspNetUsersInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutAspNetUsersInput | TransactionsUpdateManyWithWhereWithoutAspNetUsersInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput = {
    create?: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutAspNetUsersInput
    upsert?: WalletsUpsertWithoutAspNetUsersInput
    disconnect?: WalletsWhereInput | boolean
    delete?: WalletsWhereInput | boolean
    connect?: WalletsWhereUniqueInput
    update?: XOR<XOR<WalletsUpdateToOneWithWhereWithoutAspNetUsersInput, WalletsUpdateWithoutAspNetUsersInput>, WalletsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetRolesCreateNestedOneWithoutAspNetRoleClaimsInput = {
    create?: XOR<AspNetRolesCreateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedCreateWithoutAspNetRoleClaimsInput>
    connectOrCreate?: AspNetRolesCreateOrConnectWithoutAspNetRoleClaimsInput
    connect?: AspNetRolesWhereUniqueInput
  }

  export type AspNetRolesUpdateOneRequiredWithoutAspNetRoleClaimsNestedInput = {
    create?: XOR<AspNetRolesCreateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedCreateWithoutAspNetRoleClaimsInput>
    connectOrCreate?: AspNetRolesCreateOrConnectWithoutAspNetRoleClaimsInput
    upsert?: AspNetRolesUpsertWithoutAspNetRoleClaimsInput
    connect?: AspNetRolesWhereUniqueInput
    update?: XOR<XOR<AspNetRolesUpdateToOneWithWhereWithoutAspNetRoleClaimsInput, AspNetRolesUpdateWithoutAspNetRoleClaimsInput>, AspNetRolesUncheckedUpdateWithoutAspNetRoleClaimsInput>
  }

  export type AspNetRoleClaimsCreateNestedManyWithoutAspNetRolesInput = {
    create?: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput> | AspNetRoleClaimsCreateWithoutAspNetRolesInput[] | AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput | AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput[]
    createMany?: AspNetRoleClaimsCreateManyAspNetRolesInputEnvelope
    connect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
  }

  export type AspNetUserRolesCreateNestedManyWithoutAspNetRolesInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput> | AspNetUserRolesCreateWithoutAspNetRolesInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput | AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput[]
    createMany?: AspNetUserRolesCreateManyAspNetRolesInputEnvelope
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
  }

  export type AspNetRoleClaimsUncheckedCreateNestedManyWithoutAspNetRolesInput = {
    create?: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput> | AspNetRoleClaimsCreateWithoutAspNetRolesInput[] | AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput | AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput[]
    createMany?: AspNetRoleClaimsCreateManyAspNetRolesInputEnvelope
    connect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
  }

  export type AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetRolesInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput> | AspNetUserRolesCreateWithoutAspNetRolesInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput | AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput[]
    createMany?: AspNetUserRolesCreateManyAspNetRolesInputEnvelope
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
  }

  export type AspNetRoleClaimsUpdateManyWithoutAspNetRolesNestedInput = {
    create?: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput> | AspNetRoleClaimsCreateWithoutAspNetRolesInput[] | AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput | AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput[]
    upsert?: AspNetRoleClaimsUpsertWithWhereUniqueWithoutAspNetRolesInput | AspNetRoleClaimsUpsertWithWhereUniqueWithoutAspNetRolesInput[]
    createMany?: AspNetRoleClaimsCreateManyAspNetRolesInputEnvelope
    set?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    disconnect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    delete?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    connect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    update?: AspNetRoleClaimsUpdateWithWhereUniqueWithoutAspNetRolesInput | AspNetRoleClaimsUpdateWithWhereUniqueWithoutAspNetRolesInput[]
    updateMany?: AspNetRoleClaimsUpdateManyWithWhereWithoutAspNetRolesInput | AspNetRoleClaimsUpdateManyWithWhereWithoutAspNetRolesInput[]
    deleteMany?: AspNetRoleClaimsScalarWhereInput | AspNetRoleClaimsScalarWhereInput[]
  }

  export type AspNetUserRolesUpdateManyWithoutAspNetRolesNestedInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput> | AspNetUserRolesCreateWithoutAspNetRolesInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput | AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput[]
    upsert?: AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetRolesInput | AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetRolesInput[]
    createMany?: AspNetUserRolesCreateManyAspNetRolesInputEnvelope
    set?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    disconnect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    delete?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    update?: AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetRolesInput | AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetRolesInput[]
    updateMany?: AspNetUserRolesUpdateManyWithWhereWithoutAspNetRolesInput | AspNetUserRolesUpdateManyWithWhereWithoutAspNetRolesInput[]
    deleteMany?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
  }

  export type AspNetRoleClaimsUncheckedUpdateManyWithoutAspNetRolesNestedInput = {
    create?: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput> | AspNetRoleClaimsCreateWithoutAspNetRolesInput[] | AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput | AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput[]
    upsert?: AspNetRoleClaimsUpsertWithWhereUniqueWithoutAspNetRolesInput | AspNetRoleClaimsUpsertWithWhereUniqueWithoutAspNetRolesInput[]
    createMany?: AspNetRoleClaimsCreateManyAspNetRolesInputEnvelope
    set?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    disconnect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    delete?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    connect?: AspNetRoleClaimsWhereUniqueInput | AspNetRoleClaimsWhereUniqueInput[]
    update?: AspNetRoleClaimsUpdateWithWhereUniqueWithoutAspNetRolesInput | AspNetRoleClaimsUpdateWithWhereUniqueWithoutAspNetRolesInput[]
    updateMany?: AspNetRoleClaimsUpdateManyWithWhereWithoutAspNetRolesInput | AspNetRoleClaimsUpdateManyWithWhereWithoutAspNetRolesInput[]
    deleteMany?: AspNetRoleClaimsScalarWhereInput | AspNetRoleClaimsScalarWhereInput[]
  }

  export type AspNetUserRolesUncheckedUpdateManyWithoutAspNetRolesNestedInput = {
    create?: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput> | AspNetUserRolesCreateWithoutAspNetRolesInput[] | AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput[]
    connectOrCreate?: AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput | AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput[]
    upsert?: AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetRolesInput | AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetRolesInput[]
    createMany?: AspNetUserRolesCreateManyAspNetRolesInputEnvelope
    set?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    disconnect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    delete?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    connect?: AspNetUserRolesWhereUniqueInput | AspNetUserRolesWhereUniqueInput[]
    update?: AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetRolesInput | AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetRolesInput[]
    updateMany?: AspNetUserRolesUpdateManyWithWhereWithoutAspNetRolesInput | AspNetUserRolesUpdateManyWithWhereWithoutAspNetRolesInput[]
    deleteMany?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
  }

  export type AspNetUsersCreateNestedOneWithoutAspNetUserClaimsInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedCreateWithoutAspNetUserClaimsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserClaimsInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type AspNetUsersUpdateOneRequiredWithoutAspNetUserClaimsNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedCreateWithoutAspNetUserClaimsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserClaimsInput
    upsert?: AspNetUsersUpsertWithoutAspNetUserClaimsInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutAspNetUserClaimsInput, AspNetUsersUpdateWithoutAspNetUserClaimsInput>, AspNetUsersUncheckedUpdateWithoutAspNetUserClaimsInput>
  }

  export type AspNetUsersCreateNestedOneWithoutAspNetUserLoginsInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedCreateWithoutAspNetUserLoginsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserLoginsInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type AspNetUsersUpdateOneRequiredWithoutAspNetUserLoginsNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedCreateWithoutAspNetUserLoginsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserLoginsInput
    upsert?: AspNetUsersUpsertWithoutAspNetUserLoginsInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutAspNetUserLoginsInput, AspNetUsersUpdateWithoutAspNetUserLoginsInput>, AspNetUsersUncheckedUpdateWithoutAspNetUserLoginsInput>
  }

  export type AspNetRolesCreateNestedOneWithoutAspNetUserRolesInput = {
    create?: XOR<AspNetRolesCreateWithoutAspNetUserRolesInput, AspNetRolesUncheckedCreateWithoutAspNetUserRolesInput>
    connectOrCreate?: AspNetRolesCreateOrConnectWithoutAspNetUserRolesInput
    connect?: AspNetRolesWhereUniqueInput
  }

  export type AspNetUsersCreateNestedOneWithoutAspNetUserRolesInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserRolesInput, AspNetUsersUncheckedCreateWithoutAspNetUserRolesInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserRolesInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type AspNetRolesUpdateOneRequiredWithoutAspNetUserRolesNestedInput = {
    create?: XOR<AspNetRolesCreateWithoutAspNetUserRolesInput, AspNetRolesUncheckedCreateWithoutAspNetUserRolesInput>
    connectOrCreate?: AspNetRolesCreateOrConnectWithoutAspNetUserRolesInput
    upsert?: AspNetRolesUpsertWithoutAspNetUserRolesInput
    connect?: AspNetRolesWhereUniqueInput
    update?: XOR<XOR<AspNetRolesUpdateToOneWithWhereWithoutAspNetUserRolesInput, AspNetRolesUpdateWithoutAspNetUserRolesInput>, AspNetRolesUncheckedUpdateWithoutAspNetUserRolesInput>
  }

  export type AspNetUsersUpdateOneRequiredWithoutAspNetUserRolesNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserRolesInput, AspNetUsersUncheckedCreateWithoutAspNetUserRolesInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserRolesInput
    upsert?: AspNetUsersUpsertWithoutAspNetUserRolesInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutAspNetUserRolesInput, AspNetUsersUpdateWithoutAspNetUserRolesInput>, AspNetUsersUncheckedUpdateWithoutAspNetUserRolesInput>
  }

  export type AspNetUsersCreateNestedOneWithoutAspNetUserTokensInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserTokensInput, AspNetUsersUncheckedCreateWithoutAspNetUserTokensInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserTokensInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type AspNetUsersUpdateOneRequiredWithoutAspNetUserTokensNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutAspNetUserTokensInput, AspNetUsersUncheckedCreateWithoutAspNetUserTokensInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutAspNetUserTokensInput
    upsert?: AspNetUsersUpsertWithoutAspNetUserTokensInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutAspNetUserTokensInput, AspNetUsersUpdateWithoutAspNetUserTokensInput>, AspNetUsersUncheckedUpdateWithoutAspNetUserTokensInput>
  }

  export type TenantsCreateNestedOneWithoutClientsInput = {
    create?: XOR<TenantsCreateWithoutClientsInput, TenantsUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantsCreateOrConnectWithoutClientsInput
    connect?: TenantsWhereUniqueInput
  }

  export type TenantsUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<TenantsCreateWithoutClientsInput, TenantsUncheckedCreateWithoutClientsInput>
    connectOrCreate?: TenantsCreateOrConnectWithoutClientsInput
    upsert?: TenantsUpsertWithoutClientsInput
    connect?: TenantsWhereUniqueInput
    update?: XOR<XOR<TenantsUpdateToOneWithWhereWithoutClientsInput, TenantsUpdateWithoutClientsInput>, TenantsUncheckedUpdateWithoutClientsInput>
  }

  export type TransactionsCreateNestedManyWithoutCoinEventsInput = {
    create?: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput> | TransactionsCreateWithoutCoinEventsInput[] | TransactionsUncheckedCreateWithoutCoinEventsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoinEventsInput | TransactionsCreateOrConnectWithoutCoinEventsInput[]
    createMany?: TransactionsCreateManyCoinEventsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutCoinEventsInput = {
    create?: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput> | TransactionsCreateWithoutCoinEventsInput[] | TransactionsUncheckedCreateWithoutCoinEventsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoinEventsInput | TransactionsCreateOrConnectWithoutCoinEventsInput[]
    createMany?: TransactionsCreateManyCoinEventsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionsUpdateManyWithoutCoinEventsNestedInput = {
    create?: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput> | TransactionsCreateWithoutCoinEventsInput[] | TransactionsUncheckedCreateWithoutCoinEventsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoinEventsInput | TransactionsCreateOrConnectWithoutCoinEventsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCoinEventsInput | TransactionsUpsertWithWhereUniqueWithoutCoinEventsInput[]
    createMany?: TransactionsCreateManyCoinEventsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCoinEventsInput | TransactionsUpdateWithWhereUniqueWithoutCoinEventsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCoinEventsInput | TransactionsUpdateManyWithWhereWithoutCoinEventsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutCoinEventsNestedInput = {
    create?: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput> | TransactionsCreateWithoutCoinEventsInput[] | TransactionsUncheckedCreateWithoutCoinEventsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoinEventsInput | TransactionsCreateOrConnectWithoutCoinEventsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCoinEventsInput | TransactionsUpsertWithWhereUniqueWithoutCoinEventsInput[]
    createMany?: TransactionsCreateManyCoinEventsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCoinEventsInput | TransactionsUpdateWithWhereUniqueWithoutCoinEventsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCoinEventsInput | TransactionsUpdateManyWithWhereWithoutCoinEventsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type AspNetUsersCreateNestedManyWithoutProfilesInput = {
    create?: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput> | AspNetUsersCreateWithoutProfilesInput[] | AspNetUsersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutProfilesInput | AspNetUsersCreateOrConnectWithoutProfilesInput[]
    createMany?: AspNetUsersCreateManyProfilesInputEnvelope
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
  }

  export type AspNetUsersUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput> | AspNetUsersCreateWithoutProfilesInput[] | AspNetUsersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutProfilesInput | AspNetUsersCreateOrConnectWithoutProfilesInput[]
    createMany?: AspNetUsersCreateManyProfilesInputEnvelope
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
  }

  export type AspNetUsersUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput> | AspNetUsersCreateWithoutProfilesInput[] | AspNetUsersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutProfilesInput | AspNetUsersCreateOrConnectWithoutProfilesInput[]
    upsert?: AspNetUsersUpsertWithWhereUniqueWithoutProfilesInput | AspNetUsersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: AspNetUsersCreateManyProfilesInputEnvelope
    set?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    disconnect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    delete?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    update?: AspNetUsersUpdateWithWhereUniqueWithoutProfilesInput | AspNetUsersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: AspNetUsersUpdateManyWithWhereWithoutProfilesInput | AspNetUsersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
  }

  export type AspNetUsersUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput> | AspNetUsersCreateWithoutProfilesInput[] | AspNetUsersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutProfilesInput | AspNetUsersCreateOrConnectWithoutProfilesInput[]
    upsert?: AspNetUsersUpsertWithWhereUniqueWithoutProfilesInput | AspNetUsersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: AspNetUsersCreateManyProfilesInputEnvelope
    set?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    disconnect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    delete?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    update?: AspNetUsersUpdateWithWhereUniqueWithoutProfilesInput | AspNetUsersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: AspNetUsersUpdateManyWithWhereWithoutProfilesInput | AspNetUsersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
  }

  export type ClientsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput> | ClientsCreateWithoutTenantsInput[] | ClientsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutTenantsInput | ClientsCreateOrConnectWithoutTenantsInput[]
    createMany?: ClientsCreateManyTenantsInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type ClientsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput> | ClientsCreateWithoutTenantsInput[] | ClientsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutTenantsInput | ClientsCreateOrConnectWithoutTenantsInput[]
    createMany?: ClientsCreateManyTenantsInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type ClientsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput> | ClientsCreateWithoutTenantsInput[] | ClientsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutTenantsInput | ClientsCreateOrConnectWithoutTenantsInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutTenantsInput | ClientsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: ClientsCreateManyTenantsInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutTenantsInput | ClientsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutTenantsInput | ClientsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type ClientsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput> | ClientsCreateWithoutTenantsInput[] | ClientsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutTenantsInput | ClientsCreateOrConnectWithoutTenantsInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutTenantsInput | ClientsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: ClientsCreateManyTenantsInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutTenantsInput | ClientsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutTenantsInput | ClientsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type AspNetUsersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AspNetUsersCreateWithoutTransactionsInput, AspNetUsersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutTransactionsInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type CoinEventsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CoinEventsCreateWithoutTransactionsInput, CoinEventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CoinEventsCreateOrConnectWithoutTransactionsInput
    connect?: CoinEventsWhereUniqueInput
  }

  export type AspNetUsersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutTransactionsInput, AspNetUsersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutTransactionsInput
    upsert?: AspNetUsersUpsertWithoutTransactionsInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutTransactionsInput, AspNetUsersUpdateWithoutTransactionsInput>, AspNetUsersUncheckedUpdateWithoutTransactionsInput>
  }

  export type CoinEventsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CoinEventsCreateWithoutTransactionsInput, CoinEventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CoinEventsCreateOrConnectWithoutTransactionsInput
    upsert?: CoinEventsUpsertWithoutTransactionsInput
    disconnect?: CoinEventsWhereInput | boolean
    delete?: CoinEventsWhereInput | boolean
    connect?: CoinEventsWhereUniqueInput
    update?: XOR<XOR<CoinEventsUpdateToOneWithWhereWithoutTransactionsInput, CoinEventsUpdateWithoutTransactionsInput>, CoinEventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type AspNetUsersCreateNestedManyWithoutUserAddressesInput = {
    create?: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput> | AspNetUsersCreateWithoutUserAddressesInput[] | AspNetUsersUncheckedCreateWithoutUserAddressesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutUserAddressesInput | AspNetUsersCreateOrConnectWithoutUserAddressesInput[]
    createMany?: AspNetUsersCreateManyUserAddressesInputEnvelope
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
  }

  export type AspNetUsersUncheckedCreateNestedManyWithoutUserAddressesInput = {
    create?: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput> | AspNetUsersCreateWithoutUserAddressesInput[] | AspNetUsersUncheckedCreateWithoutUserAddressesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutUserAddressesInput | AspNetUsersCreateOrConnectWithoutUserAddressesInput[]
    createMany?: AspNetUsersCreateManyUserAddressesInputEnvelope
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
  }

  export type AspNetUsersUpdateManyWithoutUserAddressesNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput> | AspNetUsersCreateWithoutUserAddressesInput[] | AspNetUsersUncheckedCreateWithoutUserAddressesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutUserAddressesInput | AspNetUsersCreateOrConnectWithoutUserAddressesInput[]
    upsert?: AspNetUsersUpsertWithWhereUniqueWithoutUserAddressesInput | AspNetUsersUpsertWithWhereUniqueWithoutUserAddressesInput[]
    createMany?: AspNetUsersCreateManyUserAddressesInputEnvelope
    set?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    disconnect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    delete?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    update?: AspNetUsersUpdateWithWhereUniqueWithoutUserAddressesInput | AspNetUsersUpdateWithWhereUniqueWithoutUserAddressesInput[]
    updateMany?: AspNetUsersUpdateManyWithWhereWithoutUserAddressesInput | AspNetUsersUpdateManyWithWhereWithoutUserAddressesInput[]
    deleteMany?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
  }

  export type AspNetUsersUncheckedUpdateManyWithoutUserAddressesNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput> | AspNetUsersCreateWithoutUserAddressesInput[] | AspNetUsersUncheckedCreateWithoutUserAddressesInput[]
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutUserAddressesInput | AspNetUsersCreateOrConnectWithoutUserAddressesInput[]
    upsert?: AspNetUsersUpsertWithWhereUniqueWithoutUserAddressesInput | AspNetUsersUpsertWithWhereUniqueWithoutUserAddressesInput[]
    createMany?: AspNetUsersCreateManyUserAddressesInputEnvelope
    set?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    disconnect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    delete?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    connect?: AspNetUsersWhereUniqueInput | AspNetUsersWhereUniqueInput[]
    update?: AspNetUsersUpdateWithWhereUniqueWithoutUserAddressesInput | AspNetUsersUpdateWithWhereUniqueWithoutUserAddressesInput[]
    updateMany?: AspNetUsersUpdateManyWithWhereWithoutUserAddressesInput | AspNetUsersUpdateManyWithWhereWithoutUserAddressesInput[]
    deleteMany?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
  }

  export type AspNetUsersCreateNestedOneWithoutWalletsInput = {
    create?: XOR<AspNetUsersCreateWithoutWalletsInput, AspNetUsersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutWalletsInput
    connect?: AspNetUsersWhereUniqueInput
  }

  export type AspNetUsersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<AspNetUsersCreateWithoutWalletsInput, AspNetUsersUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: AspNetUsersCreateOrConnectWithoutWalletsInput
    upsert?: AspNetUsersUpsertWithoutWalletsInput
    connect?: AspNetUsersWhereUniqueInput
    update?: XOR<XOR<AspNetUsersUpdateToOneWithWhereWithoutWalletsInput, AspNetUsersUpdateWithoutWalletsInput>, AspNetUsersUncheckedUpdateWithoutWalletsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AspNetUserClaimsCreateWithoutAspNetUsersInput = {
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput = {
    Id?: number
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserClaimsCreateOrConnectWithoutAspNetUsersInput = {
    where: AspNetUserClaimsWhereUniqueInput
    create: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsCreateManyAspNetUsersInputEnvelope = {
    data: AspNetUserClaimsCreateManyAspNetUsersInput | AspNetUserClaimsCreateManyAspNetUsersInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUserLoginsCreateWithoutAspNetUsersInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
  }

  export type AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
  }

  export type AspNetUserLoginsCreateOrConnectWithoutAspNetUsersInput = {
    where: AspNetUserLoginsWhereUniqueInput
    create: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserLoginsCreateManyAspNetUsersInputEnvelope = {
    data: AspNetUserLoginsCreateManyAspNetUsersInput | AspNetUserLoginsCreateManyAspNetUsersInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUserRolesCreateWithoutAspNetUsersInput = {
    AspNetRoles: AspNetRolesCreateNestedOneWithoutAspNetUserRolesInput
  }

  export type AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput = {
    RoleId: string
  }

  export type AspNetUserRolesCreateOrConnectWithoutAspNetUsersInput = {
    where: AspNetUserRolesWhereUniqueInput
    create: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserRolesCreateManyAspNetUsersInputEnvelope = {
    data: AspNetUserRolesCreateManyAspNetUsersInput | AspNetUserRolesCreateManyAspNetUsersInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUserTokensCreateWithoutAspNetUsersInput = {
    LoginProvider: string
    Name: string
    Value?: string | null
  }

  export type AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput = {
    LoginProvider: string
    Name: string
    Value?: string | null
  }

  export type AspNetUserTokensCreateOrConnectWithoutAspNetUsersInput = {
    where: AspNetUserTokensWhereUniqueInput
    create: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserTokensCreateManyAspNetUsersInputEnvelope = {
    data: AspNetUserTokensCreateManyAspNetUsersInput | AspNetUserTokensCreateManyAspNetUsersInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesCreateWithoutAspNetUsersInput = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType?: number
    Phone?: string
  }

  export type ProfilesUncheckedCreateWithoutAspNetUsersInput = {
    Id: string
    Name: string
    SurName: string
    CpfCnpj: string
    DocumentType?: number
    Phone?: string
  }

  export type ProfilesCreateOrConnectWithoutAspNetUsersInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutAspNetUsersInput, ProfilesUncheckedCreateWithoutAspNetUsersInput>
  }

  export type UserAddressesCreateWithoutAspNetUsersInput = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood?: string
    Complement?: string
  }

  export type UserAddressesUncheckedCreateWithoutAspNetUsersInput = {
    Id: string
    PostalCode: string
    Street: string
    Number: string
    Country: string
    State: string
    City: string
    Neighborhood?: string
    Complement?: string
  }

  export type UserAddressesCreateOrConnectWithoutAspNetUsersInput = {
    where: UserAddressesWhereUniqueInput
    create: XOR<UserAddressesCreateWithoutAspNetUsersInput, UserAddressesUncheckedCreateWithoutAspNetUsersInput>
  }

  export type TransactionsCreateWithoutAspNetUsersInput = {
    Id: string
    Date: Date | string
    Amount: number
    CoinEvents?: CoinEventsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutAspNetUsersInput = {
    Id: string
    CoinEventId?: string | null
    Date: Date | string
    Amount: number
  }

  export type TransactionsCreateOrConnectWithoutAspNetUsersInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type TransactionsCreateManyAspNetUsersInputEnvelope = {
    data: TransactionsCreateManyAspNetUsersInput | TransactionsCreateManyAspNetUsersInput[]
    skipDuplicates?: boolean
  }

  export type WalletsCreateWithoutAspNetUsersInput = {
    Balance: number
  }

  export type WalletsUncheckedCreateWithoutAspNetUsersInput = {
    Id?: number
    Balance: number
  }

  export type WalletsCreateOrConnectWithoutAspNetUsersInput = {
    where: WalletsWhereUniqueInput
    create: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsUpsertWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserClaimsWhereUniqueInput
    update: XOR<AspNetUserClaimsUpdateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<AspNetUserClaimsCreateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsUpdateWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserClaimsWhereUniqueInput
    data: XOR<AspNetUserClaimsUpdateWithoutAspNetUsersInput, AspNetUserClaimsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsUpdateManyWithWhereWithoutAspNetUsersInput = {
    where: AspNetUserClaimsScalarWhereInput
    data: XOR<AspNetUserClaimsUpdateManyMutationInput, AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersInput>
  }

  export type AspNetUserClaimsScalarWhereInput = {
    AND?: AspNetUserClaimsScalarWhereInput | AspNetUserClaimsScalarWhereInput[]
    OR?: AspNetUserClaimsScalarWhereInput[]
    NOT?: AspNetUserClaimsScalarWhereInput | AspNetUserClaimsScalarWhereInput[]
    Id?: IntFilter<"AspNetUserClaims"> | number
    UserId?: StringFilter<"AspNetUserClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetUserClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetUserClaims"> | string | null
  }

  export type AspNetUserLoginsUpsertWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserLoginsWhereUniqueInput
    update: XOR<AspNetUserLoginsUpdateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<AspNetUserLoginsCreateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserLoginsUpdateWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserLoginsWhereUniqueInput
    data: XOR<AspNetUserLoginsUpdateWithoutAspNetUsersInput, AspNetUserLoginsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetUserLoginsUpdateManyWithWhereWithoutAspNetUsersInput = {
    where: AspNetUserLoginsScalarWhereInput
    data: XOR<AspNetUserLoginsUpdateManyMutationInput, AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersInput>
  }

  export type AspNetUserLoginsScalarWhereInput = {
    AND?: AspNetUserLoginsScalarWhereInput | AspNetUserLoginsScalarWhereInput[]
    OR?: AspNetUserLoginsScalarWhereInput[]
    NOT?: AspNetUserLoginsScalarWhereInput | AspNetUserLoginsScalarWhereInput[]
    LoginProvider?: StringFilter<"AspNetUserLogins"> | string
    ProviderKey?: StringFilter<"AspNetUserLogins"> | string
    ProviderDisplayName?: StringNullableFilter<"AspNetUserLogins"> | string | null
    UserId?: StringFilter<"AspNetUserLogins"> | string
  }

  export type AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserRolesWhereUniqueInput
    update: XOR<AspNetUserRolesUpdateWithoutAspNetUsersInput, AspNetUserRolesUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<AspNetUserRolesCreateWithoutAspNetUsersInput, AspNetUserRolesUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserRolesWhereUniqueInput
    data: XOR<AspNetUserRolesUpdateWithoutAspNetUsersInput, AspNetUserRolesUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetUserRolesUpdateManyWithWhereWithoutAspNetUsersInput = {
    where: AspNetUserRolesScalarWhereInput
    data: XOR<AspNetUserRolesUpdateManyMutationInput, AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersInput>
  }

  export type AspNetUserRolesScalarWhereInput = {
    AND?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
    OR?: AspNetUserRolesScalarWhereInput[]
    NOT?: AspNetUserRolesScalarWhereInput | AspNetUserRolesScalarWhereInput[]
    UserId?: StringFilter<"AspNetUserRoles"> | string
    RoleId?: StringFilter<"AspNetUserRoles"> | string
  }

  export type AspNetUserTokensUpsertWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserTokensWhereUniqueInput
    update: XOR<AspNetUserTokensUpdateWithoutAspNetUsersInput, AspNetUserTokensUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<AspNetUserTokensCreateWithoutAspNetUsersInput, AspNetUserTokensUncheckedCreateWithoutAspNetUsersInput>
  }

  export type AspNetUserTokensUpdateWithWhereUniqueWithoutAspNetUsersInput = {
    where: AspNetUserTokensWhereUniqueInput
    data: XOR<AspNetUserTokensUpdateWithoutAspNetUsersInput, AspNetUserTokensUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type AspNetUserTokensUpdateManyWithWhereWithoutAspNetUsersInput = {
    where: AspNetUserTokensScalarWhereInput
    data: XOR<AspNetUserTokensUpdateManyMutationInput, AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersInput>
  }

  export type AspNetUserTokensScalarWhereInput = {
    AND?: AspNetUserTokensScalarWhereInput | AspNetUserTokensScalarWhereInput[]
    OR?: AspNetUserTokensScalarWhereInput[]
    NOT?: AspNetUserTokensScalarWhereInput | AspNetUserTokensScalarWhereInput[]
    UserId?: StringFilter<"AspNetUserTokens"> | string
    LoginProvider?: StringFilter<"AspNetUserTokens"> | string
    Name?: StringFilter<"AspNetUserTokens"> | string
    Value?: StringNullableFilter<"AspNetUserTokens"> | string | null
  }

  export type ProfilesUpsertWithoutAspNetUsersInput = {
    update: XOR<ProfilesUpdateWithoutAspNetUsersInput, ProfilesUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<ProfilesCreateWithoutAspNetUsersInput, ProfilesUncheckedCreateWithoutAspNetUsersInput>
    where?: ProfilesWhereInput
  }

  export type ProfilesUpdateToOneWithWhereWithoutAspNetUsersInput = {
    where?: ProfilesWhereInput
    data: XOR<ProfilesUpdateWithoutAspNetUsersInput, ProfilesUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type ProfilesUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
  }

  export type ProfilesUncheckedUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    SurName?: StringFieldUpdateOperationsInput | string
    CpfCnpj?: StringFieldUpdateOperationsInput | string
    DocumentType?: IntFieldUpdateOperationsInput | number
    Phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserAddressesUpsertWithoutAspNetUsersInput = {
    update: XOR<UserAddressesUpdateWithoutAspNetUsersInput, UserAddressesUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<UserAddressesCreateWithoutAspNetUsersInput, UserAddressesUncheckedCreateWithoutAspNetUsersInput>
    where?: UserAddressesWhereInput
  }

  export type UserAddressesUpdateToOneWithWhereWithoutAspNetUsersInput = {
    where?: UserAddressesWhereInput
    data: XOR<UserAddressesUpdateWithoutAspNetUsersInput, UserAddressesUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type UserAddressesUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
  }

  export type UserAddressesUncheckedUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PostalCode?: StringFieldUpdateOperationsInput | string
    Street?: StringFieldUpdateOperationsInput | string
    Number?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Neighborhood?: StringFieldUpdateOperationsInput | string
    Complement?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutAspNetUsersInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutAspNetUsersInput, TransactionsUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<TransactionsCreateWithoutAspNetUsersInput, TransactionsUncheckedCreateWithoutAspNetUsersInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutAspNetUsersInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutAspNetUsersInput, TransactionsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutAspNetUsersInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutAspNetUsersInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    Id?: UuidFilter<"Transactions"> | string
    ApplicationUserId?: StringFilter<"Transactions"> | string
    CoinEventId?: UuidNullableFilter<"Transactions"> | string | null
    Date?: DateTimeFilter<"Transactions"> | Date | string
    Amount?: IntFilter<"Transactions"> | number
  }

  export type WalletsUpsertWithoutAspNetUsersInput = {
    update: XOR<WalletsUpdateWithoutAspNetUsersInput, WalletsUncheckedUpdateWithoutAspNetUsersInput>
    create: XOR<WalletsCreateWithoutAspNetUsersInput, WalletsUncheckedCreateWithoutAspNetUsersInput>
    where?: WalletsWhereInput
  }

  export type WalletsUpdateToOneWithWhereWithoutAspNetUsersInput = {
    where?: WalletsWhereInput
    data: XOR<WalletsUpdateWithoutAspNetUsersInput, WalletsUncheckedUpdateWithoutAspNetUsersInput>
  }

  export type WalletsUpdateWithoutAspNetUsersInput = {
    Balance?: IntFieldUpdateOperationsInput | number
  }

  export type WalletsUncheckedUpdateWithoutAspNetUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Balance?: IntFieldUpdateOperationsInput | number
  }

  export type AspNetRolesCreateWithoutAspNetRoleClaimsInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesUncheckedCreateWithoutAspNetRoleClaimsInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesCreateOrConnectWithoutAspNetRoleClaimsInput = {
    where: AspNetRolesWhereUniqueInput
    create: XOR<AspNetRolesCreateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedCreateWithoutAspNetRoleClaimsInput>
  }

  export type AspNetRolesUpsertWithoutAspNetRoleClaimsInput = {
    update: XOR<AspNetRolesUpdateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedUpdateWithoutAspNetRoleClaimsInput>
    create: XOR<AspNetRolesCreateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedCreateWithoutAspNetRoleClaimsInput>
    where?: AspNetRolesWhereInput
  }

  export type AspNetRolesUpdateToOneWithWhereWithoutAspNetRoleClaimsInput = {
    where?: AspNetRolesWhereInput
    data: XOR<AspNetRolesUpdateWithoutAspNetRoleClaimsInput, AspNetRolesUncheckedUpdateWithoutAspNetRoleClaimsInput>
  }

  export type AspNetRolesUpdateWithoutAspNetRoleClaimsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetRolesUncheckedUpdateWithoutAspNetRoleClaimsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetRoleClaimsCreateWithoutAspNetRolesInput = {
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput = {
    Id?: number
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetRoleClaimsCreateOrConnectWithoutAspNetRolesInput = {
    where: AspNetRoleClaimsWhereUniqueInput
    create: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput>
  }

  export type AspNetRoleClaimsCreateManyAspNetRolesInputEnvelope = {
    data: AspNetRoleClaimsCreateManyAspNetRolesInput | AspNetRoleClaimsCreateManyAspNetRolesInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUserRolesCreateWithoutAspNetRolesInput = {
    AspNetUsers: AspNetUsersCreateNestedOneWithoutAspNetUserRolesInput
  }

  export type AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput = {
    UserId: string
  }

  export type AspNetUserRolesCreateOrConnectWithoutAspNetRolesInput = {
    where: AspNetUserRolesWhereUniqueInput
    create: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput>
  }

  export type AspNetUserRolesCreateManyAspNetRolesInputEnvelope = {
    data: AspNetUserRolesCreateManyAspNetRolesInput | AspNetUserRolesCreateManyAspNetRolesInput[]
    skipDuplicates?: boolean
  }

  export type AspNetRoleClaimsUpsertWithWhereUniqueWithoutAspNetRolesInput = {
    where: AspNetRoleClaimsWhereUniqueInput
    update: XOR<AspNetRoleClaimsUpdateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedUpdateWithoutAspNetRolesInput>
    create: XOR<AspNetRoleClaimsCreateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedCreateWithoutAspNetRolesInput>
  }

  export type AspNetRoleClaimsUpdateWithWhereUniqueWithoutAspNetRolesInput = {
    where: AspNetRoleClaimsWhereUniqueInput
    data: XOR<AspNetRoleClaimsUpdateWithoutAspNetRolesInput, AspNetRoleClaimsUncheckedUpdateWithoutAspNetRolesInput>
  }

  export type AspNetRoleClaimsUpdateManyWithWhereWithoutAspNetRolesInput = {
    where: AspNetRoleClaimsScalarWhereInput
    data: XOR<AspNetRoleClaimsUpdateManyMutationInput, AspNetRoleClaimsUncheckedUpdateManyWithoutAspNetRolesInput>
  }

  export type AspNetRoleClaimsScalarWhereInput = {
    AND?: AspNetRoleClaimsScalarWhereInput | AspNetRoleClaimsScalarWhereInput[]
    OR?: AspNetRoleClaimsScalarWhereInput[]
    NOT?: AspNetRoleClaimsScalarWhereInput | AspNetRoleClaimsScalarWhereInput[]
    Id?: IntFilter<"AspNetRoleClaims"> | number
    RoleId?: StringFilter<"AspNetRoleClaims"> | string
    ClaimType?: StringNullableFilter<"AspNetRoleClaims"> | string | null
    ClaimValue?: StringNullableFilter<"AspNetRoleClaims"> | string | null
  }

  export type AspNetUserRolesUpsertWithWhereUniqueWithoutAspNetRolesInput = {
    where: AspNetUserRolesWhereUniqueInput
    update: XOR<AspNetUserRolesUpdateWithoutAspNetRolesInput, AspNetUserRolesUncheckedUpdateWithoutAspNetRolesInput>
    create: XOR<AspNetUserRolesCreateWithoutAspNetRolesInput, AspNetUserRolesUncheckedCreateWithoutAspNetRolesInput>
  }

  export type AspNetUserRolesUpdateWithWhereUniqueWithoutAspNetRolesInput = {
    where: AspNetUserRolesWhereUniqueInput
    data: XOR<AspNetUserRolesUpdateWithoutAspNetRolesInput, AspNetUserRolesUncheckedUpdateWithoutAspNetRolesInput>
  }

  export type AspNetUserRolesUpdateManyWithWhereWithoutAspNetRolesInput = {
    where: AspNetUserRolesScalarWhereInput
    data: XOR<AspNetUserRolesUpdateManyMutationInput, AspNetUserRolesUncheckedUpdateManyWithoutAspNetRolesInput>
  }

  export type AspNetUsersCreateWithoutAspNetUserClaimsInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutAspNetUserClaimsInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutAspNetUserClaimsInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedCreateWithoutAspNetUserClaimsInput>
  }

  export type AspNetUsersUpsertWithoutAspNetUserClaimsInput = {
    update: XOR<AspNetUsersUpdateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedUpdateWithoutAspNetUserClaimsInput>
    create: XOR<AspNetUsersCreateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedCreateWithoutAspNetUserClaimsInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutAspNetUserClaimsInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutAspNetUserClaimsInput, AspNetUsersUncheckedUpdateWithoutAspNetUserClaimsInput>
  }

  export type AspNetUsersUpdateWithoutAspNetUserClaimsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutAspNetUserClaimsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersCreateWithoutAspNetUserLoginsInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutAspNetUserLoginsInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutAspNetUserLoginsInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedCreateWithoutAspNetUserLoginsInput>
  }

  export type AspNetUsersUpsertWithoutAspNetUserLoginsInput = {
    update: XOR<AspNetUsersUpdateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedUpdateWithoutAspNetUserLoginsInput>
    create: XOR<AspNetUsersCreateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedCreateWithoutAspNetUserLoginsInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutAspNetUserLoginsInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutAspNetUserLoginsInput, AspNetUsersUncheckedUpdateWithoutAspNetUserLoginsInput>
  }

  export type AspNetUsersUpdateWithoutAspNetUserLoginsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutAspNetUserLoginsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetRolesCreateWithoutAspNetUserRolesInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetRoleClaims?: AspNetRoleClaimsCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesUncheckedCreateWithoutAspNetUserRolesInput = {
    Id: string
    Name?: string | null
    NormalizedName?: string | null
    ConcurrencyStamp?: string | null
    AspNetRoleClaims?: AspNetRoleClaimsUncheckedCreateNestedManyWithoutAspNetRolesInput
  }

  export type AspNetRolesCreateOrConnectWithoutAspNetUserRolesInput = {
    where: AspNetRolesWhereUniqueInput
    create: XOR<AspNetRolesCreateWithoutAspNetUserRolesInput, AspNetRolesUncheckedCreateWithoutAspNetUserRolesInput>
  }

  export type AspNetUsersCreateWithoutAspNetUserRolesInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutAspNetUserRolesInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutAspNetUserRolesInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutAspNetUserRolesInput, AspNetUsersUncheckedCreateWithoutAspNetUserRolesInput>
  }

  export type AspNetRolesUpsertWithoutAspNetUserRolesInput = {
    update: XOR<AspNetRolesUpdateWithoutAspNetUserRolesInput, AspNetRolesUncheckedUpdateWithoutAspNetUserRolesInput>
    create: XOR<AspNetRolesCreateWithoutAspNetUserRolesInput, AspNetRolesUncheckedCreateWithoutAspNetUserRolesInput>
    where?: AspNetRolesWhereInput
  }

  export type AspNetRolesUpdateToOneWithWhereWithoutAspNetUserRolesInput = {
    where?: AspNetRolesWhereInput
    data: XOR<AspNetRolesUpdateWithoutAspNetUserRolesInput, AspNetRolesUncheckedUpdateWithoutAspNetUserRolesInput>
  }

  export type AspNetRolesUpdateWithoutAspNetUserRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetRoleClaims?: AspNetRoleClaimsUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetRolesUncheckedUpdateWithoutAspNetUserRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    AspNetRoleClaims?: AspNetRoleClaimsUncheckedUpdateManyWithoutAspNetRolesNestedInput
  }

  export type AspNetUsersUpsertWithoutAspNetUserRolesInput = {
    update: XOR<AspNetUsersUpdateWithoutAspNetUserRolesInput, AspNetUsersUncheckedUpdateWithoutAspNetUserRolesInput>
    create: XOR<AspNetUsersCreateWithoutAspNetUserRolesInput, AspNetUsersUncheckedCreateWithoutAspNetUserRolesInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutAspNetUserRolesInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutAspNetUserRolesInput, AspNetUsersUncheckedUpdateWithoutAspNetUserRolesInput>
  }

  export type AspNetUsersUpdateWithoutAspNetUserRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutAspNetUserRolesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersCreateWithoutAspNetUserTokensInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutAspNetUserTokensInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutAspNetUserTokensInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutAspNetUserTokensInput, AspNetUsersUncheckedCreateWithoutAspNetUserTokensInput>
  }

  export type AspNetUsersUpsertWithoutAspNetUserTokensInput = {
    update: XOR<AspNetUsersUpdateWithoutAspNetUserTokensInput, AspNetUsersUncheckedUpdateWithoutAspNetUserTokensInput>
    create: XOR<AspNetUsersCreateWithoutAspNetUserTokensInput, AspNetUsersUncheckedCreateWithoutAspNetUserTokensInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutAspNetUserTokensInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutAspNetUserTokensInput, AspNetUsersUncheckedUpdateWithoutAspNetUserTokensInput>
  }

  export type AspNetUsersUpdateWithoutAspNetUserTokensInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutAspNetUserTokensInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type TenantsCreateWithoutClientsInput = {
    Id: string
    Name: string
  }

  export type TenantsUncheckedCreateWithoutClientsInput = {
    Id: string
    Name: string
  }

  export type TenantsCreateOrConnectWithoutClientsInput = {
    where: TenantsWhereUniqueInput
    create: XOR<TenantsCreateWithoutClientsInput, TenantsUncheckedCreateWithoutClientsInput>
  }

  export type TenantsUpsertWithoutClientsInput = {
    update: XOR<TenantsUpdateWithoutClientsInput, TenantsUncheckedUpdateWithoutClientsInput>
    create: XOR<TenantsCreateWithoutClientsInput, TenantsUncheckedCreateWithoutClientsInput>
    where?: TenantsWhereInput
  }

  export type TenantsUpdateToOneWithWhereWithoutClientsInput = {
    where?: TenantsWhereInput
    data: XOR<TenantsUpdateWithoutClientsInput, TenantsUncheckedUpdateWithoutClientsInput>
  }

  export type TenantsUpdateWithoutClientsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type TenantsUncheckedUpdateWithoutClientsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateWithoutCoinEventsInput = {
    Id: string
    Date: Date | string
    Amount: number
    AspNetUsers: AspNetUsersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutCoinEventsInput = {
    Id: string
    ApplicationUserId: string
    Date: Date | string
    Amount: number
  }

  export type TransactionsCreateOrConnectWithoutCoinEventsInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput>
  }

  export type TransactionsCreateManyCoinEventsInputEnvelope = {
    data: TransactionsCreateManyCoinEventsInput | TransactionsCreateManyCoinEventsInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutCoinEventsInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutCoinEventsInput, TransactionsUncheckedUpdateWithoutCoinEventsInput>
    create: XOR<TransactionsCreateWithoutCoinEventsInput, TransactionsUncheckedCreateWithoutCoinEventsInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutCoinEventsInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutCoinEventsInput, TransactionsUncheckedUpdateWithoutCoinEventsInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutCoinEventsInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutCoinEventsInput>
  }

  export type AspNetUsersCreateWithoutProfilesInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutProfilesInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutProfilesInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput>
  }

  export type AspNetUsersCreateManyProfilesInputEnvelope = {
    data: AspNetUsersCreateManyProfilesInput | AspNetUsersCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUsersUpsertWithWhereUniqueWithoutProfilesInput = {
    where: AspNetUsersWhereUniqueInput
    update: XOR<AspNetUsersUpdateWithoutProfilesInput, AspNetUsersUncheckedUpdateWithoutProfilesInput>
    create: XOR<AspNetUsersCreateWithoutProfilesInput, AspNetUsersUncheckedCreateWithoutProfilesInput>
  }

  export type AspNetUsersUpdateWithWhereUniqueWithoutProfilesInput = {
    where: AspNetUsersWhereUniqueInput
    data: XOR<AspNetUsersUpdateWithoutProfilesInput, AspNetUsersUncheckedUpdateWithoutProfilesInput>
  }

  export type AspNetUsersUpdateManyWithWhereWithoutProfilesInput = {
    where: AspNetUsersScalarWhereInput
    data: XOR<AspNetUsersUpdateManyMutationInput, AspNetUsersUncheckedUpdateManyWithoutProfilesInput>
  }

  export type AspNetUsersScalarWhereInput = {
    AND?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
    OR?: AspNetUsersScalarWhereInput[]
    NOT?: AspNetUsersScalarWhereInput | AspNetUsersScalarWhereInput[]
    Id?: StringFilter<"AspNetUsers"> | string
    ProfileId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserName?: StringNullableFilter<"AspNetUsers"> | string | null
    NormalizedUserName?: StringNullableFilter<"AspNetUsers"> | string | null
    Email?: StringNullableFilter<"AspNetUsers"> | string | null
    NormalizedEmail?: StringNullableFilter<"AspNetUsers"> | string | null
    EmailConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    PasswordHash?: StringNullableFilter<"AspNetUsers"> | string | null
    SecurityStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    ConcurrencyStamp?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumber?: StringNullableFilter<"AspNetUsers"> | string | null
    PhoneNumberConfirmed?: BoolFilter<"AspNetUsers"> | boolean
    TwoFactorEnabled?: BoolFilter<"AspNetUsers"> | boolean
    LockoutEnd?: DateTimeNullableFilter<"AspNetUsers"> | Date | string | null
    LockoutEnabled?: BoolFilter<"AspNetUsers"> | boolean
    AccessFailedCount?: IntFilter<"AspNetUsers"> | number
    UserAddressId?: UuidNullableFilter<"AspNetUsers"> | string | null
    UserOrigin?: IntFilter<"AspNetUsers"> | number
  }

  export type ClientsCreateWithoutTenantsInput = {
    Id: string
    Name: string
    Secret: string
  }

  export type ClientsUncheckedCreateWithoutTenantsInput = {
    Id: string
    Name: string
    Secret: string
  }

  export type ClientsCreateOrConnectWithoutTenantsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput>
  }

  export type ClientsCreateManyTenantsInputEnvelope = {
    data: ClientsCreateManyTenantsInput | ClientsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: ClientsWhereUniqueInput
    update: XOR<ClientsUpdateWithoutTenantsInput, ClientsUncheckedUpdateWithoutTenantsInput>
    create: XOR<ClientsCreateWithoutTenantsInput, ClientsUncheckedCreateWithoutTenantsInput>
  }

  export type ClientsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: ClientsWhereUniqueInput
    data: XOR<ClientsUpdateWithoutTenantsInput, ClientsUncheckedUpdateWithoutTenantsInput>
  }

  export type ClientsUpdateManyWithWhereWithoutTenantsInput = {
    where: ClientsScalarWhereInput
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type ClientsScalarWhereInput = {
    AND?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    OR?: ClientsScalarWhereInput[]
    NOT?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    Id?: UuidFilter<"Clients"> | string
    Name?: StringFilter<"Clients"> | string
    Secret?: StringFilter<"Clients"> | string
    TenantId?: UuidFilter<"Clients"> | string
  }

  export type AspNetUsersCreateWithoutTransactionsInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutTransactionsInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutTransactionsInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutTransactionsInput, AspNetUsersUncheckedCreateWithoutTransactionsInput>
  }

  export type CoinEventsCreateWithoutTransactionsInput = {
    Id: string
    EventType: number
    Date: Date | string
    RelatedEntityId: string
  }

  export type CoinEventsUncheckedCreateWithoutTransactionsInput = {
    Id: string
    EventType: number
    Date: Date | string
    RelatedEntityId: string
  }

  export type CoinEventsCreateOrConnectWithoutTransactionsInput = {
    where: CoinEventsWhereUniqueInput
    create: XOR<CoinEventsCreateWithoutTransactionsInput, CoinEventsUncheckedCreateWithoutTransactionsInput>
  }

  export type AspNetUsersUpsertWithoutTransactionsInput = {
    update: XOR<AspNetUsersUpdateWithoutTransactionsInput, AspNetUsersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AspNetUsersCreateWithoutTransactionsInput, AspNetUsersUncheckedCreateWithoutTransactionsInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutTransactionsInput, AspNetUsersUncheckedUpdateWithoutTransactionsInput>
  }

  export type AspNetUsersUpdateWithoutTransactionsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutTransactionsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type CoinEventsUpsertWithoutTransactionsInput = {
    update: XOR<CoinEventsUpdateWithoutTransactionsInput, CoinEventsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CoinEventsCreateWithoutTransactionsInput, CoinEventsUncheckedCreateWithoutTransactionsInput>
    where?: CoinEventsWhereInput
  }

  export type CoinEventsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CoinEventsWhereInput
    data: XOR<CoinEventsUpdateWithoutTransactionsInput, CoinEventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type CoinEventsUpdateWithoutTransactionsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type CoinEventsUncheckedUpdateWithoutTransactionsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    EventType?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    RelatedEntityId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUsersCreateWithoutUserAddressesInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutUserAddressesInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
    Wallets?: WalletsUncheckedCreateNestedOneWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutUserAddressesInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput>
  }

  export type AspNetUsersCreateManyUserAddressesInputEnvelope = {
    data: AspNetUsersCreateManyUserAddressesInput | AspNetUsersCreateManyUserAddressesInput[]
    skipDuplicates?: boolean
  }

  export type AspNetUsersUpsertWithWhereUniqueWithoutUserAddressesInput = {
    where: AspNetUsersWhereUniqueInput
    update: XOR<AspNetUsersUpdateWithoutUserAddressesInput, AspNetUsersUncheckedUpdateWithoutUserAddressesInput>
    create: XOR<AspNetUsersCreateWithoutUserAddressesInput, AspNetUsersUncheckedCreateWithoutUserAddressesInput>
  }

  export type AspNetUsersUpdateWithWhereUniqueWithoutUserAddressesInput = {
    where: AspNetUsersWhereUniqueInput
    data: XOR<AspNetUsersUpdateWithoutUserAddressesInput, AspNetUsersUncheckedUpdateWithoutUserAddressesInput>
  }

  export type AspNetUsersUpdateManyWithWhereWithoutUserAddressesInput = {
    where: AspNetUsersScalarWhereInput
    data: XOR<AspNetUsersUpdateManyMutationInput, AspNetUsersUncheckedUpdateManyWithoutUserAddressesInput>
  }

  export type AspNetUsersCreateWithoutWalletsInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensCreateNestedManyWithoutAspNetUsersInput
    Profiles?: ProfilesCreateNestedOneWithoutAspNetUsersInput
    UserAddresses?: UserAddressesCreateNestedOneWithoutAspNetUsersInput
    Transactions?: TransactionsCreateNestedManyWithoutAspNetUsersInput
  }

  export type AspNetUsersUncheckedCreateWithoutWalletsInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
    AspNetUserClaims?: AspNetUserClaimsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserRoles?: AspNetUserRolesUncheckedCreateNestedManyWithoutAspNetUsersInput
    AspNetUserTokens?: AspNetUserTokensUncheckedCreateNestedManyWithoutAspNetUsersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutAspNetUsersInput
  }

  export type AspNetUsersCreateOrConnectWithoutWalletsInput = {
    where: AspNetUsersWhereUniqueInput
    create: XOR<AspNetUsersCreateWithoutWalletsInput, AspNetUsersUncheckedCreateWithoutWalletsInput>
  }

  export type AspNetUsersUpsertWithoutWalletsInput = {
    update: XOR<AspNetUsersUpdateWithoutWalletsInput, AspNetUsersUncheckedUpdateWithoutWalletsInput>
    create: XOR<AspNetUsersCreateWithoutWalletsInput, AspNetUsersUncheckedCreateWithoutWalletsInput>
    where?: AspNetUsersWhereInput
  }

  export type AspNetUsersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: AspNetUsersWhereInput
    data: XOR<AspNetUsersUpdateWithoutWalletsInput, AspNetUsersUncheckedUpdateWithoutWalletsInput>
  }

  export type AspNetUsersUpdateWithoutWalletsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutWalletsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
  }

  export type AspNetUserClaimsCreateManyAspNetUsersInput = {
    Id?: number
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserLoginsCreateManyAspNetUsersInput = {
    LoginProvider: string
    ProviderKey: string
    ProviderDisplayName?: string | null
  }

  export type AspNetUserRolesCreateManyAspNetUsersInput = {
    RoleId: string
  }

  export type AspNetUserTokensCreateManyAspNetUsersInput = {
    LoginProvider: string
    Name: string
    Value?: string | null
  }

  export type TransactionsCreateManyAspNetUsersInput = {
    Id: string
    CoinEventId?: string | null
    Date: Date | string
    Amount: number
  }

  export type AspNetUserClaimsUpdateWithoutAspNetUsersInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserClaimsUncheckedUpdateWithoutAspNetUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserLoginsUpdateWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserLoginsUncheckedUpdateWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    ProviderKey?: StringFieldUpdateOperationsInput | string
    ProviderDisplayName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserRolesUpdateWithoutAspNetUsersInput = {
    AspNetRoles?: AspNetRolesUpdateOneRequiredWithoutAspNetUserRolesNestedInput
  }

  export type AspNetUserRolesUncheckedUpdateWithoutAspNetUsersInput = {
    RoleId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersInput = {
    RoleId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserTokensUpdateWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserTokensUncheckedUpdateWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersInput = {
    LoginProvider?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
    CoinEvents?: CoinEventsUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CoinEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateManyWithoutAspNetUsersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    CoinEventId?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type AspNetRoleClaimsCreateManyAspNetRolesInput = {
    Id?: number
    ClaimType?: string | null
    ClaimValue?: string | null
  }

  export type AspNetUserRolesCreateManyAspNetRolesInput = {
    UserId: string
  }

  export type AspNetRoleClaimsUpdateWithoutAspNetRolesInput = {
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRoleClaimsUncheckedUpdateWithoutAspNetRolesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetRoleClaimsUncheckedUpdateManyWithoutAspNetRolesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ClaimType?: NullableStringFieldUpdateOperationsInput | string | null
    ClaimValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AspNetUserRolesUpdateWithoutAspNetRolesInput = {
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutAspNetUserRolesNestedInput
  }

  export type AspNetUserRolesUncheckedUpdateWithoutAspNetRolesInput = {
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUserRolesUncheckedUpdateManyWithoutAspNetRolesInput = {
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateManyCoinEventsInput = {
    Id: string
    ApplicationUserId: string
    Date: Date | string
    Amount: number
  }

  export type TransactionsUpdateWithoutCoinEventsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
    AspNetUsers?: AspNetUsersUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutCoinEventsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsUncheckedUpdateManyWithoutCoinEventsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ApplicationUserId?: StringFieldUpdateOperationsInput | string
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: IntFieldUpdateOperationsInput | number
  }

  export type AspNetUsersCreateManyProfilesInput = {
    Id: string
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserAddressId?: string | null
    UserOrigin?: number
  }

  export type AspNetUsersUpdateWithoutProfilesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    UserAddresses?: UserAddressesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutProfilesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateManyWithoutProfilesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserAddressId?: NullableStringFieldUpdateOperationsInput | string | null
    UserOrigin?: IntFieldUpdateOperationsInput | number
  }

  export type ClientsCreateManyTenantsInput = {
    Id: string
    Name: string
    Secret: string
  }

  export type ClientsUpdateWithoutTenantsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateWithoutTenantsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsUncheckedUpdateManyWithoutTenantsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Secret?: StringFieldUpdateOperationsInput | string
  }

  export type AspNetUsersCreateManyUserAddressesInput = {
    Id: string
    ProfileId?: string | null
    UserName?: string | null
    NormalizedUserName?: string | null
    Email?: string | null
    NormalizedEmail?: string | null
    EmailConfirmed: boolean
    PasswordHash?: string | null
    SecurityStamp?: string | null
    ConcurrencyStamp?: string | null
    PhoneNumber?: string | null
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEnd?: Date | string | null
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserOrigin?: number
  }

  export type AspNetUsersUpdateWithoutUserAddressesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUpdateManyWithoutAspNetUsersNestedInput
    Profiles?: ProfilesUpdateOneWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateWithoutUserAddressesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
    AspNetUserClaims?: AspNetUserClaimsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserLogins?: AspNetUserLoginsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserRoles?: AspNetUserRolesUncheckedUpdateManyWithoutAspNetUsersNestedInput
    AspNetUserTokens?: AspNetUserTokensUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutAspNetUsersNestedInput
    Wallets?: WalletsUncheckedUpdateOneWithoutAspNetUsersNestedInput
  }

  export type AspNetUsersUncheckedUpdateManyWithoutUserAddressesInput = {
    Id?: StringFieldUpdateOperationsInput | string
    ProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedUserName?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    NormalizedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    EmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    PasswordHash?: NullableStringFieldUpdateOperationsInput | string | null
    SecurityStamp?: NullableStringFieldUpdateOperationsInput | string | null
    ConcurrencyStamp?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNumberConfirmed?: BoolFieldUpdateOperationsInput | boolean
    TwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    LockoutEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LockoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    AccessFailedCount?: IntFieldUpdateOperationsInput | number
    UserOrigin?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AspNetUsersCountOutputTypeDefaultArgs instead
     */
    export type AspNetUsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetRolesCountOutputTypeDefaultArgs instead
     */
    export type AspNetRolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetRolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoinEventsCountOutputTypeDefaultArgs instead
     */
    export type CoinEventsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoinEventsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfilesCountOutputTypeDefaultArgs instead
     */
    export type ProfilesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfilesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantsCountOutputTypeDefaultArgs instead
     */
    export type TenantsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAddressesCountOutputTypeDefaultArgs instead
     */
    export type UserAddressesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAddressesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetUsersDefaultArgs instead
     */
    export type AspNetUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetRoleClaimsDefaultArgs instead
     */
    export type AspNetRoleClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetRoleClaimsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetRolesDefaultArgs instead
     */
    export type AspNetRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetRolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetUserClaimsDefaultArgs instead
     */
    export type AspNetUserClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUserClaimsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetUserLoginsDefaultArgs instead
     */
    export type AspNetUserLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUserLoginsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetUserRolesDefaultArgs instead
     */
    export type AspNetUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUserRolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AspNetUserTokensDefaultArgs instead
     */
    export type AspNetUserTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AspNetUserTokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientsDefaultArgs instead
     */
    export type ClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoinEventsDefaultArgs instead
     */
    export type CoinEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoinEventsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasswordRecoveryCodesDefaultArgs instead
     */
    export type PasswordRecoveryCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasswordRecoveryCodesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfilesDefaultArgs instead
     */
    export type ProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantsDefaultArgs instead
     */
    export type TenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAddressesDefaultArgs instead
     */
    export type UserAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAddressesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletsDefaultArgs instead
     */
    export type WalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EFMigrationsHistoryDefaultArgs instead
     */
    export type EFMigrationsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EFMigrationsHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}