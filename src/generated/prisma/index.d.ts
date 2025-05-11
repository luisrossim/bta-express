
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Anexo
 * 
 */
export type Anexo = $Result.DefaultSelection<Prisma.$AnexoPayload>
/**
 * Model Etapa
 * 
 */
export type Etapa = $Result.DefaultSelection<Prisma.$EtapaPayload>
/**
 * Model EtapaUsuario
 * 
 */
export type EtapaUsuario = $Result.DefaultSelection<Prisma.$EtapaUsuarioPayload>
/**
 * Model OrdemServico
 * 
 */
export type OrdemServico = $Result.DefaultSelection<Prisma.$OrdemServicoPayload>
/**
 * Model Assistencia
 * 
 */
export type Assistencia = $Result.DefaultSelection<Prisma.$AssistenciaPayload>
/**
 * Model HistoricoOS
 * 
 */
export type HistoricoOS = $Result.DefaultSelection<Prisma.$HistoricoOSPayload>
/**
 * Model Atribuicao
 * 
 */
export type Atribuicao = $Result.DefaultSelection<Prisma.$AtribuicaoPayload>
/**
 * Model TipoAnexo
 * 
 */
export type TipoAnexo = $Result.DefaultSelection<Prisma.$TipoAnexoPayload>
/**
 * Model TipoEnergia
 * 
 */
export type TipoEnergia = $Result.DefaultSelection<Prisma.$TipoEnergiaPayload>
/**
 * Model Motobomba
 * 
 */
export type Motobomba = $Result.DefaultSelection<Prisma.$MotobombaPayload>
/**
 * Model Marca
 * 
 */
export type Marca = $Result.DefaultSelection<Prisma.$MarcaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anexo`: Exposes CRUD operations for the **Anexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anexos
    * const anexos = await prisma.anexo.findMany()
    * ```
    */
  get anexo(): Prisma.AnexoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etapa`: Exposes CRUD operations for the **Etapa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etapas
    * const etapas = await prisma.etapa.findMany()
    * ```
    */
  get etapa(): Prisma.EtapaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etapaUsuario`: Exposes CRUD operations for the **EtapaUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EtapaUsuarios
    * const etapaUsuarios = await prisma.etapaUsuario.findMany()
    * ```
    */
  get etapaUsuario(): Prisma.EtapaUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordemServico`: Exposes CRUD operations for the **OrdemServico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdemServicos
    * const ordemServicos = await prisma.ordemServico.findMany()
    * ```
    */
  get ordemServico(): Prisma.OrdemServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assistencia`: Exposes CRUD operations for the **Assistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assistencias
    * const assistencias = await prisma.assistencia.findMany()
    * ```
    */
  get assistencia(): Prisma.AssistenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoOS`: Exposes CRUD operations for the **HistoricoOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoOS
    * const historicoOS = await prisma.historicoOS.findMany()
    * ```
    */
  get historicoOS(): Prisma.HistoricoOSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atribuicao`: Exposes CRUD operations for the **Atribuicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atribuicaos
    * const atribuicaos = await prisma.atribuicao.findMany()
    * ```
    */
  get atribuicao(): Prisma.AtribuicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoAnexo`: Exposes CRUD operations for the **TipoAnexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoAnexos
    * const tipoAnexos = await prisma.tipoAnexo.findMany()
    * ```
    */
  get tipoAnexo(): Prisma.TipoAnexoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoEnergia`: Exposes CRUD operations for the **TipoEnergia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoEnergias
    * const tipoEnergias = await prisma.tipoEnergia.findMany()
    * ```
    */
  get tipoEnergia(): Prisma.TipoEnergiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motobomba`: Exposes CRUD operations for the **Motobomba** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motobombas
    * const motobombas = await prisma.motobomba.findMany()
    * ```
    */
  get motobomba(): Prisma.MotobombaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marca`: Exposes CRUD operations for the **Marca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marca.findMany()
    * ```
    */
  get marca(): Prisma.MarcaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Cliente: 'Cliente',
    Endereco: 'Endereco',
    Usuario: 'Usuario',
    Role: 'Role',
    Anexo: 'Anexo',
    Etapa: 'Etapa',
    EtapaUsuario: 'EtapaUsuario',
    OrdemServico: 'OrdemServico',
    Assistencia: 'Assistencia',
    HistoricoOS: 'HistoricoOS',
    Atribuicao: 'Atribuicao',
    TipoAnexo: 'TipoAnexo',
    TipoEnergia: 'TipoEnergia',
    Motobomba: 'Motobomba',
    Marca: 'Marca'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "endereco" | "usuario" | "role" | "anexo" | "etapa" | "etapaUsuario" | "ordemServico" | "assistencia" | "historicoOS" | "atribuicao" | "tipoAnexo" | "tipoEnergia" | "motobomba" | "marca"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Anexo: {
        payload: Prisma.$AnexoPayload<ExtArgs>
        fields: Prisma.AnexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findFirst: {
            args: Prisma.AnexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          findMany: {
            args: Prisma.AnexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          create: {
            args: Prisma.AnexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          createMany: {
            args: Prisma.AnexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          delete: {
            args: Prisma.AnexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          update: {
            args: Prisma.AnexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          deleteMany: {
            args: Prisma.AnexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>[]
          }
          upsert: {
            args: Prisma.AnexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnexoPayload>
          }
          aggregate: {
            args: Prisma.AnexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnexo>
          }
          groupBy: {
            args: Prisma.AnexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnexoCountArgs<ExtArgs>
            result: $Utils.Optional<AnexoCountAggregateOutputType> | number
          }
        }
      }
      Etapa: {
        payload: Prisma.$EtapaPayload<ExtArgs>
        fields: Prisma.EtapaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtapaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtapaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          findFirst: {
            args: Prisma.EtapaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtapaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          findMany: {
            args: Prisma.EtapaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          create: {
            args: Prisma.EtapaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          createMany: {
            args: Prisma.EtapaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtapaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          delete: {
            args: Prisma.EtapaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          update: {
            args: Prisma.EtapaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          deleteMany: {
            args: Prisma.EtapaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtapaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtapaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>[]
          }
          upsert: {
            args: Prisma.EtapaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaPayload>
          }
          aggregate: {
            args: Prisma.EtapaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtapa>
          }
          groupBy: {
            args: Prisma.EtapaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtapaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtapaCountArgs<ExtArgs>
            result: $Utils.Optional<EtapaCountAggregateOutputType> | number
          }
        }
      }
      EtapaUsuario: {
        payload: Prisma.$EtapaUsuarioPayload<ExtArgs>
        fields: Prisma.EtapaUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtapaUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtapaUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          findFirst: {
            args: Prisma.EtapaUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtapaUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          findMany: {
            args: Prisma.EtapaUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>[]
          }
          create: {
            args: Prisma.EtapaUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          createMany: {
            args: Prisma.EtapaUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtapaUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>[]
          }
          delete: {
            args: Prisma.EtapaUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          update: {
            args: Prisma.EtapaUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.EtapaUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtapaUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtapaUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.EtapaUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtapaUsuarioPayload>
          }
          aggregate: {
            args: Prisma.EtapaUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtapaUsuario>
          }
          groupBy: {
            args: Prisma.EtapaUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtapaUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtapaUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<EtapaUsuarioCountAggregateOutputType> | number
          }
        }
      }
      OrdemServico: {
        payload: Prisma.$OrdemServicoPayload<ExtArgs>
        fields: Prisma.OrdemServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdemServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdemServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          findFirst: {
            args: Prisma.OrdemServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdemServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          findMany: {
            args: Prisma.OrdemServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          create: {
            args: Prisma.OrdemServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          createMany: {
            args: Prisma.OrdemServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdemServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          delete: {
            args: Prisma.OrdemServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          update: {
            args: Prisma.OrdemServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          deleteMany: {
            args: Prisma.OrdemServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdemServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdemServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          upsert: {
            args: Prisma.OrdemServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          aggregate: {
            args: Prisma.OrdemServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdemServico>
          }
          groupBy: {
            args: Prisma.OrdemServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdemServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdemServicoCountArgs<ExtArgs>
            result: $Utils.Optional<OrdemServicoCountAggregateOutputType> | number
          }
        }
      }
      Assistencia: {
        payload: Prisma.$AssistenciaPayload<ExtArgs>
        fields: Prisma.AssistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          findFirst: {
            args: Prisma.AssistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          findMany: {
            args: Prisma.AssistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>[]
          }
          create: {
            args: Prisma.AssistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          createMany: {
            args: Prisma.AssistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>[]
          }
          delete: {
            args: Prisma.AssistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          update: {
            args: Prisma.AssistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AssistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>[]
          }
          upsert: {
            args: Prisma.AssistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssistenciaPayload>
          }
          aggregate: {
            args: Prisma.AssistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssistencia>
          }
          groupBy: {
            args: Prisma.AssistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AssistenciaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoOS: {
        payload: Prisma.$HistoricoOSPayload<ExtArgs>
        fields: Prisma.HistoricoOSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoOSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoOSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          findFirst: {
            args: Prisma.HistoricoOSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoOSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          findMany: {
            args: Prisma.HistoricoOSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>[]
          }
          create: {
            args: Prisma.HistoricoOSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          createMany: {
            args: Prisma.HistoricoOSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoOSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>[]
          }
          delete: {
            args: Prisma.HistoricoOSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          update: {
            args: Prisma.HistoricoOSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoOSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoOSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoOSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoOSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoOSPayload>
          }
          aggregate: {
            args: Prisma.HistoricoOSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoOS>
          }
          groupBy: {
            args: Prisma.HistoricoOSGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoOSGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoOSCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoOSCountAggregateOutputType> | number
          }
        }
      }
      Atribuicao: {
        payload: Prisma.$AtribuicaoPayload<ExtArgs>
        fields: Prisma.AtribuicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtribuicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtribuicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          findFirst: {
            args: Prisma.AtribuicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtribuicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          findMany: {
            args: Prisma.AtribuicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>[]
          }
          create: {
            args: Prisma.AtribuicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          createMany: {
            args: Prisma.AtribuicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtribuicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>[]
          }
          delete: {
            args: Prisma.AtribuicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          update: {
            args: Prisma.AtribuicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          deleteMany: {
            args: Prisma.AtribuicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtribuicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtribuicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>[]
          }
          upsert: {
            args: Prisma.AtribuicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtribuicaoPayload>
          }
          aggregate: {
            args: Prisma.AtribuicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtribuicao>
          }
          groupBy: {
            args: Prisma.AtribuicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtribuicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtribuicaoCountArgs<ExtArgs>
            result: $Utils.Optional<AtribuicaoCountAggregateOutputType> | number
          }
        }
      }
      TipoAnexo: {
        payload: Prisma.$TipoAnexoPayload<ExtArgs>
        fields: Prisma.TipoAnexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoAnexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoAnexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          findFirst: {
            args: Prisma.TipoAnexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoAnexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          findMany: {
            args: Prisma.TipoAnexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>[]
          }
          create: {
            args: Prisma.TipoAnexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          createMany: {
            args: Prisma.TipoAnexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoAnexoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>[]
          }
          delete: {
            args: Prisma.TipoAnexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          update: {
            args: Prisma.TipoAnexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          deleteMany: {
            args: Prisma.TipoAnexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoAnexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoAnexoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>[]
          }
          upsert: {
            args: Prisma.TipoAnexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoAnexoPayload>
          }
          aggregate: {
            args: Prisma.TipoAnexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoAnexo>
          }
          groupBy: {
            args: Prisma.TipoAnexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoAnexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoAnexoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoAnexoCountAggregateOutputType> | number
          }
        }
      }
      TipoEnergia: {
        payload: Prisma.$TipoEnergiaPayload<ExtArgs>
        fields: Prisma.TipoEnergiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoEnergiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoEnergiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          findFirst: {
            args: Prisma.TipoEnergiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoEnergiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          findMany: {
            args: Prisma.TipoEnergiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>[]
          }
          create: {
            args: Prisma.TipoEnergiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          createMany: {
            args: Prisma.TipoEnergiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoEnergiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>[]
          }
          delete: {
            args: Prisma.TipoEnergiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          update: {
            args: Prisma.TipoEnergiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          deleteMany: {
            args: Prisma.TipoEnergiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoEnergiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoEnergiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>[]
          }
          upsert: {
            args: Prisma.TipoEnergiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEnergiaPayload>
          }
          aggregate: {
            args: Prisma.TipoEnergiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoEnergia>
          }
          groupBy: {
            args: Prisma.TipoEnergiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoEnergiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoEnergiaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoEnergiaCountAggregateOutputType> | number
          }
        }
      }
      Motobomba: {
        payload: Prisma.$MotobombaPayload<ExtArgs>
        fields: Prisma.MotobombaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotobombaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotobombaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          findFirst: {
            args: Prisma.MotobombaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotobombaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          findMany: {
            args: Prisma.MotobombaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>[]
          }
          create: {
            args: Prisma.MotobombaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          createMany: {
            args: Prisma.MotobombaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotobombaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>[]
          }
          delete: {
            args: Prisma.MotobombaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          update: {
            args: Prisma.MotobombaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          deleteMany: {
            args: Prisma.MotobombaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotobombaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotobombaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>[]
          }
          upsert: {
            args: Prisma.MotobombaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotobombaPayload>
          }
          aggregate: {
            args: Prisma.MotobombaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotobomba>
          }
          groupBy: {
            args: Prisma.MotobombaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotobombaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotobombaCountArgs<ExtArgs>
            result: $Utils.Optional<MotobombaCountAggregateOutputType> | number
          }
        }
      }
      Marca: {
        payload: Prisma.$MarcaPayload<ExtArgs>
        fields: Prisma.MarcaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findFirst: {
            args: Prisma.MarcaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          findMany: {
            args: Prisma.MarcaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          create: {
            args: Prisma.MarcaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          createMany: {
            args: Prisma.MarcaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          delete: {
            args: Prisma.MarcaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          update: {
            args: Prisma.MarcaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          deleteMany: {
            args: Prisma.MarcaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>[]
          }
          upsert: {
            args: Prisma.MarcaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaPayload>
          }
          aggregate: {
            args: Prisma.MarcaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarca>
          }
          groupBy: {
            args: Prisma.MarcaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    endereco?: EnderecoOmit
    usuario?: UsuarioOmit
    role?: RoleOmit
    anexo?: AnexoOmit
    etapa?: EtapaOmit
    etapaUsuario?: EtapaUsuarioOmit
    ordemServico?: OrdemServicoOmit
    assistencia?: AssistenciaOmit
    historicoOS?: HistoricoOSOmit
    atribuicao?: AtribuicaoOmit
    tipoAnexo?: TipoAnexoOmit
    tipoEnergia?: TipoEnergiaOmit
    motobomba?: MotobombaOmit
    marca?: MarcaOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    enderecos: number
    ordemServico: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | ClienteCountOutputTypeCountEnderecosArgs
    ordemServico?: boolean | ClienteCountOutputTypeCountOrdemServicoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOrdemServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdemServicoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    etapaUsuario: number
    atribuicoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapaUsuario?: boolean | UsuarioCountOutputTypeCountEtapaUsuarioArgs
    atribuicoes?: boolean | UsuarioCountOutputTypeCountAtribuicoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEtapaUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtribuicaoWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    usuarios: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RoleCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type EtapaCountOutputType
   */

  export type EtapaCountOutputType = {
    etapaUsuario: number
    historicoOs: number
  }

  export type EtapaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapaUsuario?: boolean | EtapaCountOutputTypeCountEtapaUsuarioArgs
    historicoOs?: boolean | EtapaCountOutputTypeCountHistoricoOsArgs
  }

  // Custom InputTypes
  /**
   * EtapaCountOutputType without action
   */
  export type EtapaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaCountOutputType
     */
    select?: EtapaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtapaCountOutputType without action
   */
  export type EtapaCountOutputTypeCountEtapaUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaUsuarioWhereInput
  }

  /**
   * EtapaCountOutputType without action
   */
  export type EtapaCountOutputTypeCountHistoricoOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoOSWhereInput
  }


  /**
   * Count Type OrdemServicoCountOutputType
   */

  export type OrdemServicoCountOutputType = {
    historicoOs: number
  }

  export type OrdemServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | OrdemServicoCountOutputTypeCountHistoricoOsArgs
  }

  // Custom InputTypes
  /**
   * OrdemServicoCountOutputType without action
   */
  export type OrdemServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServicoCountOutputType
     */
    select?: OrdemServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdemServicoCountOutputType without action
   */
  export type OrdemServicoCountOutputTypeCountHistoricoOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoOSWhereInput
  }


  /**
   * Count Type HistoricoOSCountOutputType
   */

  export type HistoricoOSCountOutputType = {
    anexos: number
    atribuicoes: number
  }

  export type HistoricoOSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | HistoricoOSCountOutputTypeCountAnexosArgs
    atribuicoes?: boolean | HistoricoOSCountOutputTypeCountAtribuicoesArgs
  }

  // Custom InputTypes
  /**
   * HistoricoOSCountOutputType without action
   */
  export type HistoricoOSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOSCountOutputType
     */
    select?: HistoricoOSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HistoricoOSCountOutputType without action
   */
  export type HistoricoOSCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
  }

  /**
   * HistoricoOSCountOutputType without action
   */
  export type HistoricoOSCountOutputTypeCountAtribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtribuicaoWhereInput
  }


  /**
   * Count Type TipoAnexoCountOutputType
   */

  export type TipoAnexoCountOutputType = {
    anexos: number
  }

  export type TipoAnexoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | TipoAnexoCountOutputTypeCountAnexosArgs
  }

  // Custom InputTypes
  /**
   * TipoAnexoCountOutputType without action
   */
  export type TipoAnexoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexoCountOutputType
     */
    select?: TipoAnexoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoAnexoCountOutputType without action
   */
  export type TipoAnexoCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
  }


  /**
   * Count Type TipoEnergiaCountOutputType
   */

  export type TipoEnergiaCountOutputType = {
    assistencias: number
  }

  export type TipoEnergiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistencias?: boolean | TipoEnergiaCountOutputTypeCountAssistenciasArgs
  }

  // Custom InputTypes
  /**
   * TipoEnergiaCountOutputType without action
   */
  export type TipoEnergiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergiaCountOutputType
     */
    select?: TipoEnergiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoEnergiaCountOutputType without action
   */
  export type TipoEnergiaCountOutputTypeCountAssistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistenciaWhereInput
  }


  /**
   * Count Type MotobombaCountOutputType
   */

  export type MotobombaCountOutputType = {
    assistencias: number
  }

  export type MotobombaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistencias?: boolean | MotobombaCountOutputTypeCountAssistenciasArgs
  }

  // Custom InputTypes
  /**
   * MotobombaCountOutputType without action
   */
  export type MotobombaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotobombaCountOutputType
     */
    select?: MotobombaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotobombaCountOutputType without action
   */
  export type MotobombaCountOutputTypeCountAssistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistenciaWhereInput
  }


  /**
   * Count Type MarcaCountOutputType
   */

  export type MarcaCountOutputType = {
    motobombas: number
  }

  export type MarcaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motobombas?: boolean | MarcaCountOutputTypeCountMotobombasArgs
  }

  // Custom InputTypes
  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaCountOutputType
     */
    select?: MarcaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcaCountOutputType without action
   */
  export type MarcaCountOutputTypeCountMotobombasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotobombaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    telefone: string | null
    isAtivo: boolean | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    telefone: string | null
    isAtivo: boolean | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    telefone: number
    isAtivo: number
    atualizadoEm: number
    criadoEm: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    isAtivo?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    isAtivo?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    isAtivo?: true
    atualizadoEm?: true
    criadoEm?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    telefone: string
    isAtivo: boolean
    atualizadoEm: Date
    criadoEm: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    isAtivo?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    enderecos?: boolean | Cliente$enderecosArgs<ExtArgs>
    ordemServico?: boolean | Cliente$ordemServicoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    isAtivo?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    isAtivo?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    isAtivo?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "telefone" | "isAtivo" | "atualizadoEm" | "criadoEm", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Cliente$enderecosArgs<ExtArgs>
    ordemServico?: boolean | Cliente$ordemServicoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      ordemServico: Prisma.$OrdemServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      telefone: string
      isAtivo: boolean
      atualizadoEm: Date
      criadoEm: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends Cliente$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordemServico<T extends Cliente$ordemServicoArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ordemServicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly isAtivo: FieldRef<"Cliente", 'Boolean'>
    readonly atualizadoEm: FieldRef<"Cliente", 'DateTime'>
    readonly criadoEm: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.enderecos
   */
  export type Cliente$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Cliente.ordemServico
   */
  export type Cliente$ordemServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    where?: OrdemServicoWhereInput
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    cursor?: OrdemServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    hectare: Decimal | null
    kmLojaCliente: Decimal | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    hectare: Decimal | null
    kmLojaCliente: Decimal | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    cidade: string | null
    estado: string | null
    hectare: Decimal | null
    coordenadasGeograficas: string | null
    kmLojaCliente: Decimal | null
    referencia: string | null
    descricao: string | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    cidade: string | null
    estado: string | null
    hectare: Decimal | null
    coordenadasGeograficas: string | null
    kmLojaCliente: Decimal | null
    referencia: string | null
    descricao: string | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    clienteId: number
    cidade: number
    estado: number
    hectare: number
    coordenadasGeograficas: number
    kmLojaCliente: number
    referencia: number
    descricao: number
    atualizadoEm: number
    criadoEm: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
    clienteId?: true
    hectare?: true
    kmLojaCliente?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
    clienteId?: true
    hectare?: true
    kmLojaCliente?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    clienteId?: true
    cidade?: true
    estado?: true
    hectare?: true
    coordenadasGeograficas?: true
    kmLojaCliente?: true
    referencia?: true
    descricao?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    cidade?: true
    estado?: true
    hectare?: true
    coordenadasGeograficas?: true
    kmLojaCliente?: true
    referencia?: true
    descricao?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    clienteId?: true
    cidade?: true
    estado?: true
    hectare?: true
    coordenadasGeograficas?: true
    kmLojaCliente?: true
    referencia?: true
    descricao?: true
    atualizadoEm?: true
    criadoEm?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    clienteId: number
    cidade: string
    estado: string
    hectare: Decimal | null
    coordenadasGeograficas: string | null
    kmLojaCliente: Decimal | null
    referencia: string | null
    descricao: string | null
    atualizadoEm: Date
    criadoEm: Date
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    cidade?: boolean
    estado?: boolean
    hectare?: boolean
    coordenadasGeograficas?: boolean
    kmLojaCliente?: boolean
    referencia?: boolean
    descricao?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    cidade?: boolean
    estado?: boolean
    hectare?: boolean
    coordenadasGeograficas?: boolean
    kmLojaCliente?: boolean
    referencia?: boolean
    descricao?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    cidade?: boolean
    estado?: boolean
    hectare?: boolean
    coordenadasGeograficas?: boolean
    kmLojaCliente?: boolean
    referencia?: boolean
    descricao?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type EnderecoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    cidade?: boolean
    estado?: boolean
    hectare?: boolean
    coordenadasGeograficas?: boolean
    kmLojaCliente?: boolean
    referencia?: boolean
    descricao?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "cidade" | "estado" | "hectare" | "coordenadasGeograficas" | "kmLojaCliente" | "referencia" | "descricao" | "atualizadoEm" | "criadoEm", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EnderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      cidade: string
      estado: string
      hectare: Prisma.Decimal | null
      coordenadasGeograficas: string | null
      kmLojaCliente: Prisma.Decimal | null
      referencia: string | null
      descricao: string | null
      atualizadoEm: Date
      criadoEm: Date
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {EnderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, EnderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {EnderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, EnderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'Int'>
    readonly clienteId: FieldRef<"Endereco", 'Int'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly estado: FieldRef<"Endereco", 'String'>
    readonly hectare: FieldRef<"Endereco", 'Decimal'>
    readonly coordenadasGeograficas: FieldRef<"Endereco", 'String'>
    readonly kmLojaCliente: FieldRef<"Endereco", 'Decimal'>
    readonly referencia: FieldRef<"Endereco", 'String'>
    readonly descricao: FieldRef<"Endereco", 'String'>
    readonly atualizadoEm: FieldRef<"Endereco", 'DateTime'>
    readonly criadoEm: FieldRef<"Endereco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco createManyAndReturn
   */
  export type EnderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco updateManyAndReturn
   */
  export type EnderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    roleId: number | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    roleId: number | null
    atualizadoEm: Date | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    roleId: number
    atualizadoEm: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    roleId?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    roleId?: true
    atualizadoEm?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    roleId?: true
    atualizadoEm?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string
    roleId: number
    atualizadoEm: Date
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    roleId?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    etapaUsuario?: boolean | Usuario$etapaUsuarioArgs<ExtArgs>
    atribuicoes?: boolean | Usuario$atribuicoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    roleId?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    roleId?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    roleId?: boolean
    atualizadoEm?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "roleId" | "atualizadoEm" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    etapaUsuario?: boolean | Usuario$etapaUsuarioArgs<ExtArgs>
    atribuicoes?: boolean | Usuario$atribuicoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      etapaUsuario: Prisma.$EtapaUsuarioPayload<ExtArgs>[]
      atribuicoes: Prisma.$AtribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      roleId: number
      atualizadoEm: Date
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etapaUsuario<T extends Usuario$etapaUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$etapaUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atribuicoes<T extends Usuario$atribuicoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atribuicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly roleId: FieldRef<"Usuario", 'Int'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.etapaUsuario
   */
  export type Usuario$etapaUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    where?: EtapaUsuarioWhereInput
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    cursor?: EtapaUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtapaUsuarioScalarFieldEnum | EtapaUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.atribuicoes
   */
  export type Usuario$atribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    where?: AtribuicaoWhereInput
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    cursor?: AtribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtribuicaoScalarFieldEnum | AtribuicaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    sigla: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    sigla: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    sigla: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    sigla?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    sigla?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    sigla?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    sigla: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    usuarios?: boolean | Role$usuariosArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    sigla?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sigla", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Role$usuariosArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sigla: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Role$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Role$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly sigla: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.usuarios
   */
  export type Role$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Anexo
   */

  export type AggregateAnexo = {
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  export type AnexoAvgAggregateOutputType = {
    tipoAnexoId: number | null
  }

  export type AnexoSumAggregateOutputType = {
    tipoAnexoId: number | null
  }

  export type AnexoMinAggregateOutputType = {
    id: string | null
    historicoOsId: string | null
    tipoAnexoId: number | null
    url: string | null
    descricao: string | null
    criadoEm: Date | null
  }

  export type AnexoMaxAggregateOutputType = {
    id: string | null
    historicoOsId: string | null
    tipoAnexoId: number | null
    url: string | null
    descricao: string | null
    criadoEm: Date | null
  }

  export type AnexoCountAggregateOutputType = {
    id: number
    historicoOsId: number
    tipoAnexoId: number
    url: number
    descricao: number
    criadoEm: number
    _all: number
  }


  export type AnexoAvgAggregateInputType = {
    tipoAnexoId?: true
  }

  export type AnexoSumAggregateInputType = {
    tipoAnexoId?: true
  }

  export type AnexoMinAggregateInputType = {
    id?: true
    historicoOsId?: true
    tipoAnexoId?: true
    url?: true
    descricao?: true
    criadoEm?: true
  }

  export type AnexoMaxAggregateInputType = {
    id?: true
    historicoOsId?: true
    tipoAnexoId?: true
    url?: true
    descricao?: true
    criadoEm?: true
  }

  export type AnexoCountAggregateInputType = {
    id?: true
    historicoOsId?: true
    tipoAnexoId?: true
    url?: true
    descricao?: true
    criadoEm?: true
    _all?: true
  }

  export type AnexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexo to aggregate.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anexos
    **/
    _count?: true | AnexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnexoMaxAggregateInputType
  }

  export type GetAnexoAggregateType<T extends AnexoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnexo[P]>
      : GetScalarType<T[P], AggregateAnexo[P]>
  }




  export type AnexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithAggregationInput | AnexoOrderByWithAggregationInput[]
    by: AnexoScalarFieldEnum[] | AnexoScalarFieldEnum
    having?: AnexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnexoCountAggregateInputType | true
    _avg?: AnexoAvgAggregateInputType
    _sum?: AnexoSumAggregateInputType
    _min?: AnexoMinAggregateInputType
    _max?: AnexoMaxAggregateInputType
  }

  export type AnexoGroupByOutputType = {
    id: string
    historicoOsId: string
    tipoAnexoId: number
    url: string
    descricao: string | null
    criadoEm: Date
    _count: AnexoCountAggregateOutputType | null
    _avg: AnexoAvgAggregateOutputType | null
    _sum: AnexoSumAggregateOutputType | null
    _min: AnexoMinAggregateOutputType | null
    _max: AnexoMaxAggregateOutputType | null
  }

  type GetAnexoGroupByPayload<T extends AnexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnexoGroupByOutputType[P]>
            : GetScalarType<T[P], AnexoGroupByOutputType[P]>
        }
      >
    >


  export type AnexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historicoOsId?: boolean
    tipoAnexoId?: boolean
    url?: boolean
    descricao?: boolean
    criadoEm?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historicoOsId?: boolean
    tipoAnexoId?: boolean
    url?: boolean
    descricao?: boolean
    criadoEm?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historicoOsId?: boolean
    tipoAnexoId?: boolean
    url?: boolean
    descricao?: boolean
    criadoEm?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anexo"]>

  export type AnexoSelectScalar = {
    id?: boolean
    historicoOsId?: boolean
    tipoAnexoId?: boolean
    url?: boolean
    descricao?: boolean
    criadoEm?: boolean
  }

  export type AnexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "historicoOsId" | "tipoAnexoId" | "url" | "descricao" | "criadoEm", ExtArgs["result"]["anexo"]>
  export type AnexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }
  export type AnexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }
  export type AnexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    tipoAnexo?: boolean | TipoAnexoDefaultArgs<ExtArgs>
  }

  export type $AnexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anexo"
    objects: {
      historicoOs: Prisma.$HistoricoOSPayload<ExtArgs>
      tipoAnexo: Prisma.$TipoAnexoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      historicoOsId: string
      tipoAnexoId: number
      url: string
      descricao: string | null
      criadoEm: Date
    }, ExtArgs["result"]["anexo"]>
    composites: {}
  }

  type AnexoGetPayload<S extends boolean | null | undefined | AnexoDefaultArgs> = $Result.GetResult<Prisma.$AnexoPayload, S>

  type AnexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnexoCountAggregateInputType | true
    }

  export interface AnexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anexo'], meta: { name: 'Anexo' } }
    /**
     * Find zero or one Anexo that matches the filter.
     * @param {AnexoFindUniqueArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnexoFindUniqueArgs>(args: SelectSubset<T, AnexoFindUniqueArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnexoFindUniqueOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnexoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnexoFindFirstArgs>(args?: SelectSubset<T, AnexoFindFirstArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindFirstOrThrowArgs} args - Arguments to find a Anexo
     * @example
     * // Get one Anexo
     * const anexo = await prisma.anexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnexoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anexos
     * const anexos = await prisma.anexo.findMany()
     * 
     * // Get first 10 Anexos
     * const anexos = await prisma.anexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anexoWithIdOnly = await prisma.anexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnexoFindManyArgs>(args?: SelectSubset<T, AnexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anexo.
     * @param {AnexoCreateArgs} args - Arguments to create a Anexo.
     * @example
     * // Create one Anexo
     * const Anexo = await prisma.anexo.create({
     *   data: {
     *     // ... data to create a Anexo
     *   }
     * })
     * 
     */
    create<T extends AnexoCreateArgs>(args: SelectSubset<T, AnexoCreateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anexos.
     * @param {AnexoCreateManyArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnexoCreateManyArgs>(args?: SelectSubset<T, AnexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anexos and returns the data saved in the database.
     * @param {AnexoCreateManyAndReturnArgs} args - Arguments to create many Anexos.
     * @example
     * // Create many Anexos
     * const anexo = await prisma.anexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnexoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anexo.
     * @param {AnexoDeleteArgs} args - Arguments to delete one Anexo.
     * @example
     * // Delete one Anexo
     * const Anexo = await prisma.anexo.delete({
     *   where: {
     *     // ... filter to delete one Anexo
     *   }
     * })
     * 
     */
    delete<T extends AnexoDeleteArgs>(args: SelectSubset<T, AnexoDeleteArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anexo.
     * @param {AnexoUpdateArgs} args - Arguments to update one Anexo.
     * @example
     * // Update one Anexo
     * const anexo = await prisma.anexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnexoUpdateArgs>(args: SelectSubset<T, AnexoUpdateArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anexos.
     * @param {AnexoDeleteManyArgs} args - Arguments to filter Anexos to delete.
     * @example
     * // Delete a few Anexos
     * const { count } = await prisma.anexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnexoDeleteManyArgs>(args?: SelectSubset<T, AnexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnexoUpdateManyArgs>(args: SelectSubset<T, AnexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anexos and returns the data updated in the database.
     * @param {AnexoUpdateManyAndReturnArgs} args - Arguments to update many Anexos.
     * @example
     * // Update many Anexos
     * const anexo = await prisma.anexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anexos and only return the `id`
     * const anexoWithIdOnly = await prisma.anexo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnexoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anexo.
     * @param {AnexoUpsertArgs} args - Arguments to update or create a Anexo.
     * @example
     * // Update or create a Anexo
     * const anexo = await prisma.anexo.upsert({
     *   create: {
     *     // ... data to create a Anexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anexo we want to update
     *   }
     * })
     */
    upsert<T extends AnexoUpsertArgs>(args: SelectSubset<T, AnexoUpsertArgs<ExtArgs>>): Prisma__AnexoClient<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoCountArgs} args - Arguments to filter Anexos to count.
     * @example
     * // Count the number of Anexos
     * const count = await prisma.anexo.count({
     *   where: {
     *     // ... the filter for the Anexos we want to count
     *   }
     * })
    **/
    count<T extends AnexoCountArgs>(
      args?: Subset<T, AnexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnexoAggregateArgs>(args: Subset<T, AnexoAggregateArgs>): Prisma.PrismaPromise<GetAnexoAggregateType<T>>

    /**
     * Group by Anexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnexoGroupByArgs} args - Group by arguments.
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
      T extends AnexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnexoGroupByArgs['orderBy'] }
        : { orderBy?: AnexoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anexo model
   */
  readonly fields: AnexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicoOs<T extends HistoricoOSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoricoOSDefaultArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoAnexo<T extends TipoAnexoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoAnexoDefaultArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Anexo model
   */
  interface AnexoFieldRefs {
    readonly id: FieldRef<"Anexo", 'String'>
    readonly historicoOsId: FieldRef<"Anexo", 'String'>
    readonly tipoAnexoId: FieldRef<"Anexo", 'Int'>
    readonly url: FieldRef<"Anexo", 'String'>
    readonly descricao: FieldRef<"Anexo", 'String'>
    readonly criadoEm: FieldRef<"Anexo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Anexo findUnique
   */
  export type AnexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findUniqueOrThrow
   */
  export type AnexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo findFirst
   */
  export type AnexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findFirstOrThrow
   */
  export type AnexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexo to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anexos.
     */
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo findMany
   */
  export type AnexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter, which Anexos to fetch.
     */
    where?: AnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anexos to fetch.
     */
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anexos.
     */
    cursor?: AnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anexos.
     */
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * Anexo create
   */
  export type AnexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to create a Anexo.
     */
    data: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
  }

  /**
   * Anexo createMany
   */
  export type AnexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anexo createManyAndReturn
   */
  export type AnexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to create many Anexos.
     */
    data: AnexoCreateManyInput | AnexoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anexo update
   */
  export type AnexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The data needed to update a Anexo.
     */
    data: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
    /**
     * Choose, which Anexo to update.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo updateMany
   */
  export type AnexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
  }

  /**
   * Anexo updateManyAndReturn
   */
  export type AnexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * The data used to update Anexos.
     */
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyInput>
    /**
     * Filter which Anexos to update
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anexo upsert
   */
  export type AnexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * The filter to search for the Anexo to update in case it exists.
     */
    where: AnexoWhereUniqueInput
    /**
     * In case the Anexo found by the `where` argument doesn't exist, create a new Anexo with this data.
     */
    create: XOR<AnexoCreateInput, AnexoUncheckedCreateInput>
    /**
     * In case the Anexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnexoUpdateInput, AnexoUncheckedUpdateInput>
  }

  /**
   * Anexo delete
   */
  export type AnexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    /**
     * Filter which Anexo to delete.
     */
    where: AnexoWhereUniqueInput
  }

  /**
   * Anexo deleteMany
   */
  export type AnexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anexos to delete
     */
    where?: AnexoWhereInput
    /**
     * Limit how many Anexos to delete.
     */
    limit?: number
  }

  /**
   * Anexo without action
   */
  export type AnexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
  }


  /**
   * Model Etapa
   */

  export type AggregateEtapa = {
    _count: EtapaCountAggregateOutputType | null
    _avg: EtapaAvgAggregateOutputType | null
    _sum: EtapaSumAggregateOutputType | null
    _min: EtapaMinAggregateOutputType | null
    _max: EtapaMaxAggregateOutputType | null
  }

  export type EtapaAvgAggregateOutputType = {
    id: number | null
  }

  export type EtapaSumAggregateOutputType = {
    id: number | null
  }

  export type EtapaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type EtapaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type EtapaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type EtapaAvgAggregateInputType = {
    id?: true
  }

  export type EtapaSumAggregateInputType = {
    id?: true
  }

  export type EtapaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type EtapaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type EtapaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type EtapaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etapa to aggregate.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etapas
    **/
    _count?: true | EtapaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtapaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtapaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtapaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtapaMaxAggregateInputType
  }

  export type GetEtapaAggregateType<T extends EtapaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtapa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtapa[P]>
      : GetScalarType<T[P], AggregateEtapa[P]>
  }




  export type EtapaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaWhereInput
    orderBy?: EtapaOrderByWithAggregationInput | EtapaOrderByWithAggregationInput[]
    by: EtapaScalarFieldEnum[] | EtapaScalarFieldEnum
    having?: EtapaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtapaCountAggregateInputType | true
    _avg?: EtapaAvgAggregateInputType
    _sum?: EtapaSumAggregateInputType
    _min?: EtapaMinAggregateInputType
    _max?: EtapaMaxAggregateInputType
  }

  export type EtapaGroupByOutputType = {
    id: number
    descricao: string
    _count: EtapaCountAggregateOutputType | null
    _avg: EtapaAvgAggregateOutputType | null
    _sum: EtapaSumAggregateOutputType | null
    _min: EtapaMinAggregateOutputType | null
    _max: EtapaMaxAggregateOutputType | null
  }

  type GetEtapaGroupByPayload<T extends EtapaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtapaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtapaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtapaGroupByOutputType[P]>
            : GetScalarType<T[P], EtapaGroupByOutputType[P]>
        }
      >
    >


  export type EtapaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    etapaUsuario?: boolean | Etapa$etapaUsuarioArgs<ExtArgs>
    historicoOs?: boolean | Etapa$historicoOsArgs<ExtArgs>
    _count?: boolean | EtapaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["etapa"]>

  export type EtapaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type EtapaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["etapa"]>
  export type EtapaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapaUsuario?: boolean | Etapa$etapaUsuarioArgs<ExtArgs>
    historicoOs?: boolean | Etapa$historicoOsArgs<ExtArgs>
    _count?: boolean | EtapaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EtapaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EtapaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EtapaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etapa"
    objects: {
      etapaUsuario: Prisma.$EtapaUsuarioPayload<ExtArgs>[]
      historicoOs: Prisma.$HistoricoOSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["etapa"]>
    composites: {}
  }

  type EtapaGetPayload<S extends boolean | null | undefined | EtapaDefaultArgs> = $Result.GetResult<Prisma.$EtapaPayload, S>

  type EtapaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtapaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtapaCountAggregateInputType | true
    }

  export interface EtapaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etapa'], meta: { name: 'Etapa' } }
    /**
     * Find zero or one Etapa that matches the filter.
     * @param {EtapaFindUniqueArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtapaFindUniqueArgs>(args: SelectSubset<T, EtapaFindUniqueArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etapa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtapaFindUniqueOrThrowArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtapaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtapaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etapa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindFirstArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtapaFindFirstArgs>(args?: SelectSubset<T, EtapaFindFirstArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etapa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindFirstOrThrowArgs} args - Arguments to find a Etapa
     * @example
     * // Get one Etapa
     * const etapa = await prisma.etapa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtapaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtapaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etapas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etapas
     * const etapas = await prisma.etapa.findMany()
     * 
     * // Get first 10 Etapas
     * const etapas = await prisma.etapa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etapaWithIdOnly = await prisma.etapa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtapaFindManyArgs>(args?: SelectSubset<T, EtapaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etapa.
     * @param {EtapaCreateArgs} args - Arguments to create a Etapa.
     * @example
     * // Create one Etapa
     * const Etapa = await prisma.etapa.create({
     *   data: {
     *     // ... data to create a Etapa
     *   }
     * })
     * 
     */
    create<T extends EtapaCreateArgs>(args: SelectSubset<T, EtapaCreateArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etapas.
     * @param {EtapaCreateManyArgs} args - Arguments to create many Etapas.
     * @example
     * // Create many Etapas
     * const etapa = await prisma.etapa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtapaCreateManyArgs>(args?: SelectSubset<T, EtapaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etapas and returns the data saved in the database.
     * @param {EtapaCreateManyAndReturnArgs} args - Arguments to create many Etapas.
     * @example
     * // Create many Etapas
     * const etapa = await prisma.etapa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etapas and only return the `id`
     * const etapaWithIdOnly = await prisma.etapa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtapaCreateManyAndReturnArgs>(args?: SelectSubset<T, EtapaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etapa.
     * @param {EtapaDeleteArgs} args - Arguments to delete one Etapa.
     * @example
     * // Delete one Etapa
     * const Etapa = await prisma.etapa.delete({
     *   where: {
     *     // ... filter to delete one Etapa
     *   }
     * })
     * 
     */
    delete<T extends EtapaDeleteArgs>(args: SelectSubset<T, EtapaDeleteArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etapa.
     * @param {EtapaUpdateArgs} args - Arguments to update one Etapa.
     * @example
     * // Update one Etapa
     * const etapa = await prisma.etapa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtapaUpdateArgs>(args: SelectSubset<T, EtapaUpdateArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etapas.
     * @param {EtapaDeleteManyArgs} args - Arguments to filter Etapas to delete.
     * @example
     * // Delete a few Etapas
     * const { count } = await prisma.etapa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtapaDeleteManyArgs>(args?: SelectSubset<T, EtapaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etapas
     * const etapa = await prisma.etapa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtapaUpdateManyArgs>(args: SelectSubset<T, EtapaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etapas and returns the data updated in the database.
     * @param {EtapaUpdateManyAndReturnArgs} args - Arguments to update many Etapas.
     * @example
     * // Update many Etapas
     * const etapa = await prisma.etapa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etapas and only return the `id`
     * const etapaWithIdOnly = await prisma.etapa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtapaUpdateManyAndReturnArgs>(args: SelectSubset<T, EtapaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etapa.
     * @param {EtapaUpsertArgs} args - Arguments to update or create a Etapa.
     * @example
     * // Update or create a Etapa
     * const etapa = await prisma.etapa.upsert({
     *   create: {
     *     // ... data to create a Etapa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etapa we want to update
     *   }
     * })
     */
    upsert<T extends EtapaUpsertArgs>(args: SelectSubset<T, EtapaUpsertArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaCountArgs} args - Arguments to filter Etapas to count.
     * @example
     * // Count the number of Etapas
     * const count = await prisma.etapa.count({
     *   where: {
     *     // ... the filter for the Etapas we want to count
     *   }
     * })
    **/
    count<T extends EtapaCountArgs>(
      args?: Subset<T, EtapaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtapaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtapaAggregateArgs>(args: Subset<T, EtapaAggregateArgs>): Prisma.PrismaPromise<GetEtapaAggregateType<T>>

    /**
     * Group by Etapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaGroupByArgs} args - Group by arguments.
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
      T extends EtapaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtapaGroupByArgs['orderBy'] }
        : { orderBy?: EtapaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtapaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtapaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etapa model
   */
  readonly fields: EtapaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etapa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtapaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etapaUsuario<T extends Etapa$etapaUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Etapa$etapaUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoOs<T extends Etapa$historicoOsArgs<ExtArgs> = {}>(args?: Subset<T, Etapa$historicoOsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Etapa model
   */
  interface EtapaFieldRefs {
    readonly id: FieldRef<"Etapa", 'Int'>
    readonly descricao: FieldRef<"Etapa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Etapa findUnique
   */
  export type EtapaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa findUniqueOrThrow
   */
  export type EtapaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa findFirst
   */
  export type EtapaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etapas.
     */
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa findFirstOrThrow
   */
  export type EtapaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapa to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etapas.
     */
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa findMany
   */
  export type EtapaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter, which Etapas to fetch.
     */
    where?: EtapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etapas to fetch.
     */
    orderBy?: EtapaOrderByWithRelationInput | EtapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etapas.
     */
    cursor?: EtapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etapas.
     */
    skip?: number
    distinct?: EtapaScalarFieldEnum | EtapaScalarFieldEnum[]
  }

  /**
   * Etapa create
   */
  export type EtapaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etapa.
     */
    data: XOR<EtapaCreateInput, EtapaUncheckedCreateInput>
  }

  /**
   * Etapa createMany
   */
  export type EtapaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etapas.
     */
    data: EtapaCreateManyInput | EtapaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etapa createManyAndReturn
   */
  export type EtapaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * The data used to create many Etapas.
     */
    data: EtapaCreateManyInput | EtapaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etapa update
   */
  export type EtapaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etapa.
     */
    data: XOR<EtapaUpdateInput, EtapaUncheckedUpdateInput>
    /**
     * Choose, which Etapa to update.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa updateMany
   */
  export type EtapaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etapas.
     */
    data: XOR<EtapaUpdateManyMutationInput, EtapaUncheckedUpdateManyInput>
    /**
     * Filter which Etapas to update
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to update.
     */
    limit?: number
  }

  /**
   * Etapa updateManyAndReturn
   */
  export type EtapaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * The data used to update Etapas.
     */
    data: XOR<EtapaUpdateManyMutationInput, EtapaUncheckedUpdateManyInput>
    /**
     * Filter which Etapas to update
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to update.
     */
    limit?: number
  }

  /**
   * Etapa upsert
   */
  export type EtapaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etapa to update in case it exists.
     */
    where: EtapaWhereUniqueInput
    /**
     * In case the Etapa found by the `where` argument doesn't exist, create a new Etapa with this data.
     */
    create: XOR<EtapaCreateInput, EtapaUncheckedCreateInput>
    /**
     * In case the Etapa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtapaUpdateInput, EtapaUncheckedUpdateInput>
  }

  /**
   * Etapa delete
   */
  export type EtapaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
    /**
     * Filter which Etapa to delete.
     */
    where: EtapaWhereUniqueInput
  }

  /**
   * Etapa deleteMany
   */
  export type EtapaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etapas to delete
     */
    where?: EtapaWhereInput
    /**
     * Limit how many Etapas to delete.
     */
    limit?: number
  }

  /**
   * Etapa.etapaUsuario
   */
  export type Etapa$etapaUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    where?: EtapaUsuarioWhereInput
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    cursor?: EtapaUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtapaUsuarioScalarFieldEnum | EtapaUsuarioScalarFieldEnum[]
  }

  /**
   * Etapa.historicoOs
   */
  export type Etapa$historicoOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    where?: HistoricoOSWhereInput
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    cursor?: HistoricoOSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoOSScalarFieldEnum | HistoricoOSScalarFieldEnum[]
  }

  /**
   * Etapa without action
   */
  export type EtapaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etapa
     */
    select?: EtapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etapa
     */
    omit?: EtapaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaInclude<ExtArgs> | null
  }


  /**
   * Model EtapaUsuario
   */

  export type AggregateEtapaUsuario = {
    _count: EtapaUsuarioCountAggregateOutputType | null
    _avg: EtapaUsuarioAvgAggregateOutputType | null
    _sum: EtapaUsuarioSumAggregateOutputType | null
    _min: EtapaUsuarioMinAggregateOutputType | null
    _max: EtapaUsuarioMaxAggregateOutputType | null
  }

  export type EtapaUsuarioAvgAggregateOutputType = {
    etapaId: number | null
    usuarioId: number | null
  }

  export type EtapaUsuarioSumAggregateOutputType = {
    etapaId: number | null
    usuarioId: number | null
  }

  export type EtapaUsuarioMinAggregateOutputType = {
    etapaId: number | null
    usuarioId: number | null
  }

  export type EtapaUsuarioMaxAggregateOutputType = {
    etapaId: number | null
    usuarioId: number | null
  }

  export type EtapaUsuarioCountAggregateOutputType = {
    etapaId: number
    usuarioId: number
    _all: number
  }


  export type EtapaUsuarioAvgAggregateInputType = {
    etapaId?: true
    usuarioId?: true
  }

  export type EtapaUsuarioSumAggregateInputType = {
    etapaId?: true
    usuarioId?: true
  }

  export type EtapaUsuarioMinAggregateInputType = {
    etapaId?: true
    usuarioId?: true
  }

  export type EtapaUsuarioMaxAggregateInputType = {
    etapaId?: true
    usuarioId?: true
  }

  export type EtapaUsuarioCountAggregateInputType = {
    etapaId?: true
    usuarioId?: true
    _all?: true
  }

  export type EtapaUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaUsuario to aggregate.
     */
    where?: EtapaUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaUsuarios to fetch.
     */
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtapaUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EtapaUsuarios
    **/
    _count?: true | EtapaUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtapaUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtapaUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtapaUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtapaUsuarioMaxAggregateInputType
  }

  export type GetEtapaUsuarioAggregateType<T extends EtapaUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEtapaUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtapaUsuario[P]>
      : GetScalarType<T[P], AggregateEtapaUsuario[P]>
  }




  export type EtapaUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtapaUsuarioWhereInput
    orderBy?: EtapaUsuarioOrderByWithAggregationInput | EtapaUsuarioOrderByWithAggregationInput[]
    by: EtapaUsuarioScalarFieldEnum[] | EtapaUsuarioScalarFieldEnum
    having?: EtapaUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtapaUsuarioCountAggregateInputType | true
    _avg?: EtapaUsuarioAvgAggregateInputType
    _sum?: EtapaUsuarioSumAggregateInputType
    _min?: EtapaUsuarioMinAggregateInputType
    _max?: EtapaUsuarioMaxAggregateInputType
  }

  export type EtapaUsuarioGroupByOutputType = {
    etapaId: number
    usuarioId: number
    _count: EtapaUsuarioCountAggregateOutputType | null
    _avg: EtapaUsuarioAvgAggregateOutputType | null
    _sum: EtapaUsuarioSumAggregateOutputType | null
    _min: EtapaUsuarioMinAggregateOutputType | null
    _max: EtapaUsuarioMaxAggregateOutputType | null
  }

  type GetEtapaUsuarioGroupByPayload<T extends EtapaUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtapaUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtapaUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtapaUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], EtapaUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type EtapaUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etapaId?: boolean
    usuarioId?: boolean
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapaUsuario"]>

  export type EtapaUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etapaId?: boolean
    usuarioId?: boolean
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapaUsuario"]>

  export type EtapaUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    etapaId?: boolean
    usuarioId?: boolean
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etapaUsuario"]>

  export type EtapaUsuarioSelectScalar = {
    etapaId?: boolean
    usuarioId?: boolean
  }

  export type EtapaUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"etapaId" | "usuarioId", ExtArgs["result"]["etapaUsuario"]>
  export type EtapaUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EtapaUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EtapaUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EtapaUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EtapaUsuario"
    objects: {
      etapa: Prisma.$EtapaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      etapaId: number
      usuarioId: number
    }, ExtArgs["result"]["etapaUsuario"]>
    composites: {}
  }

  type EtapaUsuarioGetPayload<S extends boolean | null | undefined | EtapaUsuarioDefaultArgs> = $Result.GetResult<Prisma.$EtapaUsuarioPayload, S>

  type EtapaUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtapaUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtapaUsuarioCountAggregateInputType | true
    }

  export interface EtapaUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EtapaUsuario'], meta: { name: 'EtapaUsuario' } }
    /**
     * Find zero or one EtapaUsuario that matches the filter.
     * @param {EtapaUsuarioFindUniqueArgs} args - Arguments to find a EtapaUsuario
     * @example
     * // Get one EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtapaUsuarioFindUniqueArgs>(args: SelectSubset<T, EtapaUsuarioFindUniqueArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EtapaUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtapaUsuarioFindUniqueOrThrowArgs} args - Arguments to find a EtapaUsuario
     * @example
     * // Get one EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtapaUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EtapaUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EtapaUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioFindFirstArgs} args - Arguments to find a EtapaUsuario
     * @example
     * // Get one EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtapaUsuarioFindFirstArgs>(args?: SelectSubset<T, EtapaUsuarioFindFirstArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EtapaUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioFindFirstOrThrowArgs} args - Arguments to find a EtapaUsuario
     * @example
     * // Get one EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtapaUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EtapaUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EtapaUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EtapaUsuarios
     * const etapaUsuarios = await prisma.etapaUsuario.findMany()
     * 
     * // Get first 10 EtapaUsuarios
     * const etapaUsuarios = await prisma.etapaUsuario.findMany({ take: 10 })
     * 
     * // Only select the `etapaId`
     * const etapaUsuarioWithEtapaIdOnly = await prisma.etapaUsuario.findMany({ select: { etapaId: true } })
     * 
     */
    findMany<T extends EtapaUsuarioFindManyArgs>(args?: SelectSubset<T, EtapaUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EtapaUsuario.
     * @param {EtapaUsuarioCreateArgs} args - Arguments to create a EtapaUsuario.
     * @example
     * // Create one EtapaUsuario
     * const EtapaUsuario = await prisma.etapaUsuario.create({
     *   data: {
     *     // ... data to create a EtapaUsuario
     *   }
     * })
     * 
     */
    create<T extends EtapaUsuarioCreateArgs>(args: SelectSubset<T, EtapaUsuarioCreateArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EtapaUsuarios.
     * @param {EtapaUsuarioCreateManyArgs} args - Arguments to create many EtapaUsuarios.
     * @example
     * // Create many EtapaUsuarios
     * const etapaUsuario = await prisma.etapaUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtapaUsuarioCreateManyArgs>(args?: SelectSubset<T, EtapaUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EtapaUsuarios and returns the data saved in the database.
     * @param {EtapaUsuarioCreateManyAndReturnArgs} args - Arguments to create many EtapaUsuarios.
     * @example
     * // Create many EtapaUsuarios
     * const etapaUsuario = await prisma.etapaUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EtapaUsuarios and only return the `etapaId`
     * const etapaUsuarioWithEtapaIdOnly = await prisma.etapaUsuario.createManyAndReturn({
     *   select: { etapaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtapaUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, EtapaUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EtapaUsuario.
     * @param {EtapaUsuarioDeleteArgs} args - Arguments to delete one EtapaUsuario.
     * @example
     * // Delete one EtapaUsuario
     * const EtapaUsuario = await prisma.etapaUsuario.delete({
     *   where: {
     *     // ... filter to delete one EtapaUsuario
     *   }
     * })
     * 
     */
    delete<T extends EtapaUsuarioDeleteArgs>(args: SelectSubset<T, EtapaUsuarioDeleteArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EtapaUsuario.
     * @param {EtapaUsuarioUpdateArgs} args - Arguments to update one EtapaUsuario.
     * @example
     * // Update one EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtapaUsuarioUpdateArgs>(args: SelectSubset<T, EtapaUsuarioUpdateArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EtapaUsuarios.
     * @param {EtapaUsuarioDeleteManyArgs} args - Arguments to filter EtapaUsuarios to delete.
     * @example
     * // Delete a few EtapaUsuarios
     * const { count } = await prisma.etapaUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtapaUsuarioDeleteManyArgs>(args?: SelectSubset<T, EtapaUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtapaUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EtapaUsuarios
     * const etapaUsuario = await prisma.etapaUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtapaUsuarioUpdateManyArgs>(args: SelectSubset<T, EtapaUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EtapaUsuarios and returns the data updated in the database.
     * @param {EtapaUsuarioUpdateManyAndReturnArgs} args - Arguments to update many EtapaUsuarios.
     * @example
     * // Update many EtapaUsuarios
     * const etapaUsuario = await prisma.etapaUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EtapaUsuarios and only return the `etapaId`
     * const etapaUsuarioWithEtapaIdOnly = await prisma.etapaUsuario.updateManyAndReturn({
     *   select: { etapaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EtapaUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, EtapaUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EtapaUsuario.
     * @param {EtapaUsuarioUpsertArgs} args - Arguments to update or create a EtapaUsuario.
     * @example
     * // Update or create a EtapaUsuario
     * const etapaUsuario = await prisma.etapaUsuario.upsert({
     *   create: {
     *     // ... data to create a EtapaUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EtapaUsuario we want to update
     *   }
     * })
     */
    upsert<T extends EtapaUsuarioUpsertArgs>(args: SelectSubset<T, EtapaUsuarioUpsertArgs<ExtArgs>>): Prisma__EtapaUsuarioClient<$Result.GetResult<Prisma.$EtapaUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EtapaUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioCountArgs} args - Arguments to filter EtapaUsuarios to count.
     * @example
     * // Count the number of EtapaUsuarios
     * const count = await prisma.etapaUsuario.count({
     *   where: {
     *     // ... the filter for the EtapaUsuarios we want to count
     *   }
     * })
    **/
    count<T extends EtapaUsuarioCountArgs>(
      args?: Subset<T, EtapaUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtapaUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EtapaUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtapaUsuarioAggregateArgs>(args: Subset<T, EtapaUsuarioAggregateArgs>): Prisma.PrismaPromise<GetEtapaUsuarioAggregateType<T>>

    /**
     * Group by EtapaUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtapaUsuarioGroupByArgs} args - Group by arguments.
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
      T extends EtapaUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtapaUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: EtapaUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtapaUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtapaUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EtapaUsuario model
   */
  readonly fields: EtapaUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EtapaUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtapaUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etapa<T extends EtapaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtapaDefaultArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EtapaUsuario model
   */
  interface EtapaUsuarioFieldRefs {
    readonly etapaId: FieldRef<"EtapaUsuario", 'Int'>
    readonly usuarioId: FieldRef<"EtapaUsuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EtapaUsuario findUnique
   */
  export type EtapaUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EtapaUsuario to fetch.
     */
    where: EtapaUsuarioWhereUniqueInput
  }

  /**
   * EtapaUsuario findUniqueOrThrow
   */
  export type EtapaUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EtapaUsuario to fetch.
     */
    where: EtapaUsuarioWhereUniqueInput
  }

  /**
   * EtapaUsuario findFirst
   */
  export type EtapaUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EtapaUsuario to fetch.
     */
    where?: EtapaUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaUsuarios to fetch.
     */
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaUsuarios.
     */
    cursor?: EtapaUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaUsuarios.
     */
    distinct?: EtapaUsuarioScalarFieldEnum | EtapaUsuarioScalarFieldEnum[]
  }

  /**
   * EtapaUsuario findFirstOrThrow
   */
  export type EtapaUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EtapaUsuario to fetch.
     */
    where?: EtapaUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaUsuarios to fetch.
     */
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EtapaUsuarios.
     */
    cursor?: EtapaUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EtapaUsuarios.
     */
    distinct?: EtapaUsuarioScalarFieldEnum | EtapaUsuarioScalarFieldEnum[]
  }

  /**
   * EtapaUsuario findMany
   */
  export type EtapaUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which EtapaUsuarios to fetch.
     */
    where?: EtapaUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EtapaUsuarios to fetch.
     */
    orderBy?: EtapaUsuarioOrderByWithRelationInput | EtapaUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EtapaUsuarios.
     */
    cursor?: EtapaUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EtapaUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EtapaUsuarios.
     */
    skip?: number
    distinct?: EtapaUsuarioScalarFieldEnum | EtapaUsuarioScalarFieldEnum[]
  }

  /**
   * EtapaUsuario create
   */
  export type EtapaUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a EtapaUsuario.
     */
    data: XOR<EtapaUsuarioCreateInput, EtapaUsuarioUncheckedCreateInput>
  }

  /**
   * EtapaUsuario createMany
   */
  export type EtapaUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EtapaUsuarios.
     */
    data: EtapaUsuarioCreateManyInput | EtapaUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EtapaUsuario createManyAndReturn
   */
  export type EtapaUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many EtapaUsuarios.
     */
    data: EtapaUsuarioCreateManyInput | EtapaUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EtapaUsuario update
   */
  export type EtapaUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a EtapaUsuario.
     */
    data: XOR<EtapaUsuarioUpdateInput, EtapaUsuarioUncheckedUpdateInput>
    /**
     * Choose, which EtapaUsuario to update.
     */
    where: EtapaUsuarioWhereUniqueInput
  }

  /**
   * EtapaUsuario updateMany
   */
  export type EtapaUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EtapaUsuarios.
     */
    data: XOR<EtapaUsuarioUpdateManyMutationInput, EtapaUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which EtapaUsuarios to update
     */
    where?: EtapaUsuarioWhereInput
    /**
     * Limit how many EtapaUsuarios to update.
     */
    limit?: number
  }

  /**
   * EtapaUsuario updateManyAndReturn
   */
  export type EtapaUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update EtapaUsuarios.
     */
    data: XOR<EtapaUsuarioUpdateManyMutationInput, EtapaUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which EtapaUsuarios to update
     */
    where?: EtapaUsuarioWhereInput
    /**
     * Limit how many EtapaUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EtapaUsuario upsert
   */
  export type EtapaUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the EtapaUsuario to update in case it exists.
     */
    where: EtapaUsuarioWhereUniqueInput
    /**
     * In case the EtapaUsuario found by the `where` argument doesn't exist, create a new EtapaUsuario with this data.
     */
    create: XOR<EtapaUsuarioCreateInput, EtapaUsuarioUncheckedCreateInput>
    /**
     * In case the EtapaUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtapaUsuarioUpdateInput, EtapaUsuarioUncheckedUpdateInput>
  }

  /**
   * EtapaUsuario delete
   */
  export type EtapaUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
    /**
     * Filter which EtapaUsuario to delete.
     */
    where: EtapaUsuarioWhereUniqueInput
  }

  /**
   * EtapaUsuario deleteMany
   */
  export type EtapaUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EtapaUsuarios to delete
     */
    where?: EtapaUsuarioWhereInput
    /**
     * Limit how many EtapaUsuarios to delete.
     */
    limit?: number
  }

  /**
   * EtapaUsuario without action
   */
  export type EtapaUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtapaUsuario
     */
    select?: EtapaUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EtapaUsuario
     */
    omit?: EtapaUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtapaUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model OrdemServico
   */

  export type AggregateOrdemServico = {
    _count: OrdemServicoCountAggregateOutputType | null
    _avg: OrdemServicoAvgAggregateOutputType | null
    _sum: OrdemServicoSumAggregateOutputType | null
    _min: OrdemServicoMinAggregateOutputType | null
    _max: OrdemServicoMaxAggregateOutputType | null
  }

  export type OrdemServicoAvgAggregateOutputType = {
    clienteId: number | null
    quantidadeSetores: number | null
  }

  export type OrdemServicoSumAggregateOutputType = {
    clienteId: number | null
    quantidadeSetores: number | null
  }

  export type OrdemServicoMinAggregateOutputType = {
    id: string | null
    clienteId: number | null
    hasAutomacao: boolean | null
    hasOrcamento_banco: boolean | null
    hasProjetoPlantio: boolean | null
    quantidadeSetores: number | null
    criadoEm: Date | null
  }

  export type OrdemServicoMaxAggregateOutputType = {
    id: string | null
    clienteId: number | null
    hasAutomacao: boolean | null
    hasOrcamento_banco: boolean | null
    hasProjetoPlantio: boolean | null
    quantidadeSetores: number | null
    criadoEm: Date | null
  }

  export type OrdemServicoCountAggregateOutputType = {
    id: number
    clienteId: number
    hasAutomacao: number
    hasOrcamento_banco: number
    hasProjetoPlantio: number
    quantidadeSetores: number
    criadoEm: number
    _all: number
  }


  export type OrdemServicoAvgAggregateInputType = {
    clienteId?: true
    quantidadeSetores?: true
  }

  export type OrdemServicoSumAggregateInputType = {
    clienteId?: true
    quantidadeSetores?: true
  }

  export type OrdemServicoMinAggregateInputType = {
    id?: true
    clienteId?: true
    hasAutomacao?: true
    hasOrcamento_banco?: true
    hasProjetoPlantio?: true
    quantidadeSetores?: true
    criadoEm?: true
  }

  export type OrdemServicoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    hasAutomacao?: true
    hasOrcamento_banco?: true
    hasProjetoPlantio?: true
    quantidadeSetores?: true
    criadoEm?: true
  }

  export type OrdemServicoCountAggregateInputType = {
    id?: true
    clienteId?: true
    hasAutomacao?: true
    hasOrcamento_banco?: true
    hasProjetoPlantio?: true
    quantidadeSetores?: true
    criadoEm?: true
    _all?: true
  }

  export type OrdemServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdemServico to aggregate.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdemServicos
    **/
    _count?: true | OrdemServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdemServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdemServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdemServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdemServicoMaxAggregateInputType
  }

  export type GetOrdemServicoAggregateType<T extends OrdemServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdemServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdemServico[P]>
      : GetScalarType<T[P], AggregateOrdemServico[P]>
  }




  export type OrdemServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdemServicoWhereInput
    orderBy?: OrdemServicoOrderByWithAggregationInput | OrdemServicoOrderByWithAggregationInput[]
    by: OrdemServicoScalarFieldEnum[] | OrdemServicoScalarFieldEnum
    having?: OrdemServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdemServicoCountAggregateInputType | true
    _avg?: OrdemServicoAvgAggregateInputType
    _sum?: OrdemServicoSumAggregateInputType
    _min?: OrdemServicoMinAggregateInputType
    _max?: OrdemServicoMaxAggregateInputType
  }

  export type OrdemServicoGroupByOutputType = {
    id: string
    clienteId: number
    hasAutomacao: boolean | null
    hasOrcamento_banco: boolean | null
    hasProjetoPlantio: boolean | null
    quantidadeSetores: number | null
    criadoEm: Date
    _count: OrdemServicoCountAggregateOutputType | null
    _avg: OrdemServicoAvgAggregateOutputType | null
    _sum: OrdemServicoSumAggregateOutputType | null
    _min: OrdemServicoMinAggregateOutputType | null
    _max: OrdemServicoMaxAggregateOutputType | null
  }

  type GetOrdemServicoGroupByPayload<T extends OrdemServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdemServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdemServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdemServicoGroupByOutputType[P]>
            : GetScalarType<T[P], OrdemServicoGroupByOutputType[P]>
        }
      >
    >


  export type OrdemServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    hasAutomacao?: boolean
    hasOrcamento_banco?: boolean
    hasProjetoPlantio?: boolean
    quantidadeSetores?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    assistencia?: boolean | OrdemServico$assistenciaArgs<ExtArgs>
    historicoOs?: boolean | OrdemServico$historicoOsArgs<ExtArgs>
    _count?: boolean | OrdemServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    hasAutomacao?: boolean
    hasOrcamento_banco?: boolean
    hasProjetoPlantio?: boolean
    quantidadeSetores?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    hasAutomacao?: boolean
    hasOrcamento_banco?: boolean
    hasProjetoPlantio?: boolean
    quantidadeSetores?: boolean
    criadoEm?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    hasAutomacao?: boolean
    hasOrcamento_banco?: boolean
    hasProjetoPlantio?: boolean
    quantidadeSetores?: boolean
    criadoEm?: boolean
  }

  export type OrdemServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "hasAutomacao" | "hasOrcamento_banco" | "hasProjetoPlantio" | "quantidadeSetores" | "criadoEm", ExtArgs["result"]["ordemServico"]>
  export type OrdemServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    assistencia?: boolean | OrdemServico$assistenciaArgs<ExtArgs>
    historicoOs?: boolean | OrdemServico$historicoOsArgs<ExtArgs>
    _count?: boolean | OrdemServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdemServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type OrdemServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $OrdemServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdemServico"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      assistencia: Prisma.$AssistenciaPayload<ExtArgs> | null
      historicoOs: Prisma.$HistoricoOSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: number
      hasAutomacao: boolean | null
      hasOrcamento_banco: boolean | null
      hasProjetoPlantio: boolean | null
      quantidadeSetores: number | null
      criadoEm: Date
    }, ExtArgs["result"]["ordemServico"]>
    composites: {}
  }

  type OrdemServicoGetPayload<S extends boolean | null | undefined | OrdemServicoDefaultArgs> = $Result.GetResult<Prisma.$OrdemServicoPayload, S>

  type OrdemServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdemServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdemServicoCountAggregateInputType | true
    }

  export interface OrdemServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdemServico'], meta: { name: 'OrdemServico' } }
    /**
     * Find zero or one OrdemServico that matches the filter.
     * @param {OrdemServicoFindUniqueArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdemServicoFindUniqueArgs>(args: SelectSubset<T, OrdemServicoFindUniqueArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdemServico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdemServicoFindUniqueOrThrowArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdemServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdemServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdemServico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindFirstArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdemServicoFindFirstArgs>(args?: SelectSubset<T, OrdemServicoFindFirstArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdemServico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindFirstOrThrowArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdemServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdemServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdemServicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdemServicos
     * const ordemServicos = await prisma.ordemServico.findMany()
     * 
     * // Get first 10 OrdemServicos
     * const ordemServicos = await prisma.ordemServico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdemServicoFindManyArgs>(args?: SelectSubset<T, OrdemServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdemServico.
     * @param {OrdemServicoCreateArgs} args - Arguments to create a OrdemServico.
     * @example
     * // Create one OrdemServico
     * const OrdemServico = await prisma.ordemServico.create({
     *   data: {
     *     // ... data to create a OrdemServico
     *   }
     * })
     * 
     */
    create<T extends OrdemServicoCreateArgs>(args: SelectSubset<T, OrdemServicoCreateArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdemServicos.
     * @param {OrdemServicoCreateManyArgs} args - Arguments to create many OrdemServicos.
     * @example
     * // Create many OrdemServicos
     * const ordemServico = await prisma.ordemServico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdemServicoCreateManyArgs>(args?: SelectSubset<T, OrdemServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdemServicos and returns the data saved in the database.
     * @param {OrdemServicoCreateManyAndReturnArgs} args - Arguments to create many OrdemServicos.
     * @example
     * // Create many OrdemServicos
     * const ordemServico = await prisma.ordemServico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdemServicos and only return the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdemServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdemServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdemServico.
     * @param {OrdemServicoDeleteArgs} args - Arguments to delete one OrdemServico.
     * @example
     * // Delete one OrdemServico
     * const OrdemServico = await prisma.ordemServico.delete({
     *   where: {
     *     // ... filter to delete one OrdemServico
     *   }
     * })
     * 
     */
    delete<T extends OrdemServicoDeleteArgs>(args: SelectSubset<T, OrdemServicoDeleteArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdemServico.
     * @param {OrdemServicoUpdateArgs} args - Arguments to update one OrdemServico.
     * @example
     * // Update one OrdemServico
     * const ordemServico = await prisma.ordemServico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdemServicoUpdateArgs>(args: SelectSubset<T, OrdemServicoUpdateArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdemServicos.
     * @param {OrdemServicoDeleteManyArgs} args - Arguments to filter OrdemServicos to delete.
     * @example
     * // Delete a few OrdemServicos
     * const { count } = await prisma.ordemServico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdemServicoDeleteManyArgs>(args?: SelectSubset<T, OrdemServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdemServicos
     * const ordemServico = await prisma.ordemServico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdemServicoUpdateManyArgs>(args: SelectSubset<T, OrdemServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdemServicos and returns the data updated in the database.
     * @param {OrdemServicoUpdateManyAndReturnArgs} args - Arguments to update many OrdemServicos.
     * @example
     * // Update many OrdemServicos
     * const ordemServico = await prisma.ordemServico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdemServicos and only return the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdemServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdemServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdemServico.
     * @param {OrdemServicoUpsertArgs} args - Arguments to update or create a OrdemServico.
     * @example
     * // Update or create a OrdemServico
     * const ordemServico = await prisma.ordemServico.upsert({
     *   create: {
     *     // ... data to create a OrdemServico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdemServico we want to update
     *   }
     * })
     */
    upsert<T extends OrdemServicoUpsertArgs>(args: SelectSubset<T, OrdemServicoUpsertArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoCountArgs} args - Arguments to filter OrdemServicos to count.
     * @example
     * // Count the number of OrdemServicos
     * const count = await prisma.ordemServico.count({
     *   where: {
     *     // ... the filter for the OrdemServicos we want to count
     *   }
     * })
    **/
    count<T extends OrdemServicoCountArgs>(
      args?: Subset<T, OrdemServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdemServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdemServicoAggregateArgs>(args: Subset<T, OrdemServicoAggregateArgs>): Prisma.PrismaPromise<GetOrdemServicoAggregateType<T>>

    /**
     * Group by OrdemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoGroupByArgs} args - Group by arguments.
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
      T extends OrdemServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdemServicoGroupByArgs['orderBy'] }
        : { orderBy?: OrdemServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdemServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdemServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdemServico model
   */
  readonly fields: OrdemServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdemServico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdemServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assistencia<T extends OrdemServico$assistenciaArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServico$assistenciaArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historicoOs<T extends OrdemServico$historicoOsArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServico$historicoOsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrdemServico model
   */
  interface OrdemServicoFieldRefs {
    readonly id: FieldRef<"OrdemServico", 'String'>
    readonly clienteId: FieldRef<"OrdemServico", 'Int'>
    readonly hasAutomacao: FieldRef<"OrdemServico", 'Boolean'>
    readonly hasOrcamento_banco: FieldRef<"OrdemServico", 'Boolean'>
    readonly hasProjetoPlantio: FieldRef<"OrdemServico", 'Boolean'>
    readonly quantidadeSetores: FieldRef<"OrdemServico", 'Int'>
    readonly criadoEm: FieldRef<"OrdemServico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdemServico findUnique
   */
  export type OrdemServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico findUniqueOrThrow
   */
  export type OrdemServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico findFirst
   */
  export type OrdemServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdemServicos.
     */
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico findFirstOrThrow
   */
  export type OrdemServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdemServicos.
     */
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico findMany
   */
  export type OrdemServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServicos to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico create
   */
  export type OrdemServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdemServico.
     */
    data: XOR<OrdemServicoCreateInput, OrdemServicoUncheckedCreateInput>
  }

  /**
   * OrdemServico createMany
   */
  export type OrdemServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdemServicos.
     */
    data: OrdemServicoCreateManyInput | OrdemServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdemServico createManyAndReturn
   */
  export type OrdemServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * The data used to create many OrdemServicos.
     */
    data: OrdemServicoCreateManyInput | OrdemServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdemServico update
   */
  export type OrdemServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdemServico.
     */
    data: XOR<OrdemServicoUpdateInput, OrdemServicoUncheckedUpdateInput>
    /**
     * Choose, which OrdemServico to update.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico updateMany
   */
  export type OrdemServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdemServicos.
     */
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyInput>
    /**
     * Filter which OrdemServicos to update
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to update.
     */
    limit?: number
  }

  /**
   * OrdemServico updateManyAndReturn
   */
  export type OrdemServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * The data used to update OrdemServicos.
     */
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyInput>
    /**
     * Filter which OrdemServicos to update
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdemServico upsert
   */
  export type OrdemServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdemServico to update in case it exists.
     */
    where: OrdemServicoWhereUniqueInput
    /**
     * In case the OrdemServico found by the `where` argument doesn't exist, create a new OrdemServico with this data.
     */
    create: XOR<OrdemServicoCreateInput, OrdemServicoUncheckedCreateInput>
    /**
     * In case the OrdemServico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdemServicoUpdateInput, OrdemServicoUncheckedUpdateInput>
  }

  /**
   * OrdemServico delete
   */
  export type OrdemServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter which OrdemServico to delete.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico deleteMany
   */
  export type OrdemServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdemServicos to delete
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to delete.
     */
    limit?: number
  }

  /**
   * OrdemServico.assistencia
   */
  export type OrdemServico$assistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    where?: AssistenciaWhereInput
  }

  /**
   * OrdemServico.historicoOs
   */
  export type OrdemServico$historicoOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    where?: HistoricoOSWhereInput
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    cursor?: HistoricoOSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoOSScalarFieldEnum | HistoricoOSScalarFieldEnum[]
  }

  /**
   * OrdemServico without action
   */
  export type OrdemServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
  }


  /**
   * Model Assistencia
   */

  export type AggregateAssistencia = {
    _count: AssistenciaCountAggregateOutputType | null
    _avg: AssistenciaAvgAggregateOutputType | null
    _sum: AssistenciaSumAggregateOutputType | null
    _min: AssistenciaMinAggregateOutputType | null
    _max: AssistenciaMaxAggregateOutputType | null
  }

  export type AssistenciaAvgAggregateOutputType = {
    tipoEnergiaId: number | null
    motobombaId: number | null
    polegadasValvulasRegistro: number | null
  }

  export type AssistenciaSumAggregateOutputType = {
    tipoEnergiaId: number | null
    motobombaId: number | null
    polegadasValvulasRegistro: number | null
  }

  export type AssistenciaMinAggregateOutputType = {
    ordemServicoId: string | null
    problema: string | null
    tipoEnergiaId: number | null
    motobombaId: number | null
    polegadasValvulasRegistro: number | null
    diametroAdutoraMestre: string | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type AssistenciaMaxAggregateOutputType = {
    ordemServicoId: string | null
    problema: string | null
    tipoEnergiaId: number | null
    motobombaId: number | null
    polegadasValvulasRegistro: number | null
    diametroAdutoraMestre: string | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type AssistenciaCountAggregateOutputType = {
    ordemServicoId: number
    problema: number
    tipoEnergiaId: number
    motobombaId: number
    polegadasValvulasRegistro: number
    diametroAdutoraMestre: number
    observacoes: number
    criadoEm: number
    _all: number
  }


  export type AssistenciaAvgAggregateInputType = {
    tipoEnergiaId?: true
    motobombaId?: true
    polegadasValvulasRegistro?: true
  }

  export type AssistenciaSumAggregateInputType = {
    tipoEnergiaId?: true
    motobombaId?: true
    polegadasValvulasRegistro?: true
  }

  export type AssistenciaMinAggregateInputType = {
    ordemServicoId?: true
    problema?: true
    tipoEnergiaId?: true
    motobombaId?: true
    polegadasValvulasRegistro?: true
    diametroAdutoraMestre?: true
    observacoes?: true
    criadoEm?: true
  }

  export type AssistenciaMaxAggregateInputType = {
    ordemServicoId?: true
    problema?: true
    tipoEnergiaId?: true
    motobombaId?: true
    polegadasValvulasRegistro?: true
    diametroAdutoraMestre?: true
    observacoes?: true
    criadoEm?: true
  }

  export type AssistenciaCountAggregateInputType = {
    ordemServicoId?: true
    problema?: true
    tipoEnergiaId?: true
    motobombaId?: true
    polegadasValvulasRegistro?: true
    diametroAdutoraMestre?: true
    observacoes?: true
    criadoEm?: true
    _all?: true
  }

  export type AssistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assistencia to aggregate.
     */
    where?: AssistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistencias to fetch.
     */
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assistencias
    **/
    _count?: true | AssistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssistenciaMaxAggregateInputType
  }

  export type GetAssistenciaAggregateType<T extends AssistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAssistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssistencia[P]>
      : GetScalarType<T[P], AggregateAssistencia[P]>
  }




  export type AssistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssistenciaWhereInput
    orderBy?: AssistenciaOrderByWithAggregationInput | AssistenciaOrderByWithAggregationInput[]
    by: AssistenciaScalarFieldEnum[] | AssistenciaScalarFieldEnum
    having?: AssistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssistenciaCountAggregateInputType | true
    _avg?: AssistenciaAvgAggregateInputType
    _sum?: AssistenciaSumAggregateInputType
    _min?: AssistenciaMinAggregateInputType
    _max?: AssistenciaMaxAggregateInputType
  }

  export type AssistenciaGroupByOutputType = {
    ordemServicoId: string
    problema: string | null
    tipoEnergiaId: number | null
    motobombaId: number | null
    polegadasValvulasRegistro: number | null
    diametroAdutoraMestre: string | null
    observacoes: string | null
    criadoEm: Date
    _count: AssistenciaCountAggregateOutputType | null
    _avg: AssistenciaAvgAggregateOutputType | null
    _sum: AssistenciaSumAggregateOutputType | null
    _min: AssistenciaMinAggregateOutputType | null
    _max: AssistenciaMaxAggregateOutputType | null
  }

  type GetAssistenciaGroupByPayload<T extends AssistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AssistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AssistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ordemServicoId?: boolean
    problema?: boolean
    tipoEnergiaId?: boolean
    motobombaId?: boolean
    polegadasValvulasRegistro?: boolean
    diametroAdutoraMestre?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }, ExtArgs["result"]["assistencia"]>

  export type AssistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ordemServicoId?: boolean
    problema?: boolean
    tipoEnergiaId?: boolean
    motobombaId?: boolean
    polegadasValvulasRegistro?: boolean
    diametroAdutoraMestre?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }, ExtArgs["result"]["assistencia"]>

  export type AssistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ordemServicoId?: boolean
    problema?: boolean
    tipoEnergiaId?: boolean
    motobombaId?: boolean
    polegadasValvulasRegistro?: boolean
    diametroAdutoraMestre?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }, ExtArgs["result"]["assistencia"]>

  export type AssistenciaSelectScalar = {
    ordemServicoId?: boolean
    problema?: boolean
    tipoEnergiaId?: boolean
    motobombaId?: boolean
    polegadasValvulasRegistro?: boolean
    diametroAdutoraMestre?: boolean
    observacoes?: boolean
    criadoEm?: boolean
  }

  export type AssistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ordemServicoId" | "problema" | "tipoEnergiaId" | "motobombaId" | "polegadasValvulasRegistro" | "diametroAdutoraMestre" | "observacoes" | "criadoEm", ExtArgs["result"]["assistencia"]>
  export type AssistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }
  export type AssistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }
  export type AssistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoEnergia?: boolean | Assistencia$tipoEnergiaArgs<ExtArgs>
    motobomba?: boolean | Assistencia$motobombaArgs<ExtArgs>
  }

  export type $AssistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assistencia"
    objects: {
      ordemServico: Prisma.$OrdemServicoPayload<ExtArgs>
      tipoEnergia: Prisma.$TipoEnergiaPayload<ExtArgs> | null
      motobomba: Prisma.$MotobombaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ordemServicoId: string
      problema: string | null
      tipoEnergiaId: number | null
      motobombaId: number | null
      polegadasValvulasRegistro: number | null
      diametroAdutoraMestre: string | null
      observacoes: string | null
      criadoEm: Date
    }, ExtArgs["result"]["assistencia"]>
    composites: {}
  }

  type AssistenciaGetPayload<S extends boolean | null | undefined | AssistenciaDefaultArgs> = $Result.GetResult<Prisma.$AssistenciaPayload, S>

  type AssistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssistenciaCountAggregateInputType | true
    }

  export interface AssistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assistencia'], meta: { name: 'Assistencia' } }
    /**
     * Find zero or one Assistencia that matches the filter.
     * @param {AssistenciaFindUniqueArgs} args - Arguments to find a Assistencia
     * @example
     * // Get one Assistencia
     * const assistencia = await prisma.assistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssistenciaFindUniqueArgs>(args: SelectSubset<T, AssistenciaFindUniqueArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssistenciaFindUniqueOrThrowArgs} args - Arguments to find a Assistencia
     * @example
     * // Get one Assistencia
     * const assistencia = await prisma.assistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AssistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaFindFirstArgs} args - Arguments to find a Assistencia
     * @example
     * // Get one Assistencia
     * const assistencia = await prisma.assistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssistenciaFindFirstArgs>(args?: SelectSubset<T, AssistenciaFindFirstArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaFindFirstOrThrowArgs} args - Arguments to find a Assistencia
     * @example
     * // Get one Assistencia
     * const assistencia = await prisma.assistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AssistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assistencias
     * const assistencias = await prisma.assistencia.findMany()
     * 
     * // Get first 10 Assistencias
     * const assistencias = await prisma.assistencia.findMany({ take: 10 })
     * 
     * // Only select the `ordemServicoId`
     * const assistenciaWithOrdemServicoIdOnly = await prisma.assistencia.findMany({ select: { ordemServicoId: true } })
     * 
     */
    findMany<T extends AssistenciaFindManyArgs>(args?: SelectSubset<T, AssistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assistencia.
     * @param {AssistenciaCreateArgs} args - Arguments to create a Assistencia.
     * @example
     * // Create one Assistencia
     * const Assistencia = await prisma.assistencia.create({
     *   data: {
     *     // ... data to create a Assistencia
     *   }
     * })
     * 
     */
    create<T extends AssistenciaCreateArgs>(args: SelectSubset<T, AssistenciaCreateArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assistencias.
     * @param {AssistenciaCreateManyArgs} args - Arguments to create many Assistencias.
     * @example
     * // Create many Assistencias
     * const assistencia = await prisma.assistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssistenciaCreateManyArgs>(args?: SelectSubset<T, AssistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assistencias and returns the data saved in the database.
     * @param {AssistenciaCreateManyAndReturnArgs} args - Arguments to create many Assistencias.
     * @example
     * // Create many Assistencias
     * const assistencia = await prisma.assistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assistencias and only return the `ordemServicoId`
     * const assistenciaWithOrdemServicoIdOnly = await prisma.assistencia.createManyAndReturn({
     *   select: { ordemServicoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AssistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assistencia.
     * @param {AssistenciaDeleteArgs} args - Arguments to delete one Assistencia.
     * @example
     * // Delete one Assistencia
     * const Assistencia = await prisma.assistencia.delete({
     *   where: {
     *     // ... filter to delete one Assistencia
     *   }
     * })
     * 
     */
    delete<T extends AssistenciaDeleteArgs>(args: SelectSubset<T, AssistenciaDeleteArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assistencia.
     * @param {AssistenciaUpdateArgs} args - Arguments to update one Assistencia.
     * @example
     * // Update one Assistencia
     * const assistencia = await prisma.assistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssistenciaUpdateArgs>(args: SelectSubset<T, AssistenciaUpdateArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assistencias.
     * @param {AssistenciaDeleteManyArgs} args - Arguments to filter Assistencias to delete.
     * @example
     * // Delete a few Assistencias
     * const { count } = await prisma.assistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssistenciaDeleteManyArgs>(args?: SelectSubset<T, AssistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assistencias
     * const assistencia = await prisma.assistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssistenciaUpdateManyArgs>(args: SelectSubset<T, AssistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assistencias and returns the data updated in the database.
     * @param {AssistenciaUpdateManyAndReturnArgs} args - Arguments to update many Assistencias.
     * @example
     * // Update many Assistencias
     * const assistencia = await prisma.assistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assistencias and only return the `ordemServicoId`
     * const assistenciaWithOrdemServicoIdOnly = await prisma.assistencia.updateManyAndReturn({
     *   select: { ordemServicoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AssistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assistencia.
     * @param {AssistenciaUpsertArgs} args - Arguments to update or create a Assistencia.
     * @example
     * // Update or create a Assistencia
     * const assistencia = await prisma.assistencia.upsert({
     *   create: {
     *     // ... data to create a Assistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assistencia we want to update
     *   }
     * })
     */
    upsert<T extends AssistenciaUpsertArgs>(args: SelectSubset<T, AssistenciaUpsertArgs<ExtArgs>>): Prisma__AssistenciaClient<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaCountArgs} args - Arguments to filter Assistencias to count.
     * @example
     * // Count the number of Assistencias
     * const count = await prisma.assistencia.count({
     *   where: {
     *     // ... the filter for the Assistencias we want to count
     *   }
     * })
    **/
    count<T extends AssistenciaCountArgs>(
      args?: Subset<T, AssistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssistenciaAggregateArgs>(args: Subset<T, AssistenciaAggregateArgs>): Prisma.PrismaPromise<GetAssistenciaAggregateType<T>>

    /**
     * Group by Assistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssistenciaGroupByArgs} args - Group by arguments.
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
      T extends AssistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AssistenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assistencia model
   */
  readonly fields: AssistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordemServico<T extends OrdemServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServicoDefaultArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoEnergia<T extends Assistencia$tipoEnergiaArgs<ExtArgs> = {}>(args?: Subset<T, Assistencia$tipoEnergiaArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    motobomba<T extends Assistencia$motobombaArgs<ExtArgs> = {}>(args?: Subset<T, Assistencia$motobombaArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assistencia model
   */
  interface AssistenciaFieldRefs {
    readonly ordemServicoId: FieldRef<"Assistencia", 'String'>
    readonly problema: FieldRef<"Assistencia", 'String'>
    readonly tipoEnergiaId: FieldRef<"Assistencia", 'Int'>
    readonly motobombaId: FieldRef<"Assistencia", 'Int'>
    readonly polegadasValvulasRegistro: FieldRef<"Assistencia", 'Int'>
    readonly diametroAdutoraMestre: FieldRef<"Assistencia", 'String'>
    readonly observacoes: FieldRef<"Assistencia", 'String'>
    readonly criadoEm: FieldRef<"Assistencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assistencia findUnique
   */
  export type AssistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Assistencia to fetch.
     */
    where: AssistenciaWhereUniqueInput
  }

  /**
   * Assistencia findUniqueOrThrow
   */
  export type AssistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Assistencia to fetch.
     */
    where: AssistenciaWhereUniqueInput
  }

  /**
   * Assistencia findFirst
   */
  export type AssistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Assistencia to fetch.
     */
    where?: AssistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistencias to fetch.
     */
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assistencias.
     */
    cursor?: AssistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assistencias.
     */
    distinct?: AssistenciaScalarFieldEnum | AssistenciaScalarFieldEnum[]
  }

  /**
   * Assistencia findFirstOrThrow
   */
  export type AssistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Assistencia to fetch.
     */
    where?: AssistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistencias to fetch.
     */
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assistencias.
     */
    cursor?: AssistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assistencias.
     */
    distinct?: AssistenciaScalarFieldEnum | AssistenciaScalarFieldEnum[]
  }

  /**
   * Assistencia findMany
   */
  export type AssistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Assistencias to fetch.
     */
    where?: AssistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assistencias to fetch.
     */
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assistencias.
     */
    cursor?: AssistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assistencias.
     */
    skip?: number
    distinct?: AssistenciaScalarFieldEnum | AssistenciaScalarFieldEnum[]
  }

  /**
   * Assistencia create
   */
  export type AssistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Assistencia.
     */
    data: XOR<AssistenciaCreateInput, AssistenciaUncheckedCreateInput>
  }

  /**
   * Assistencia createMany
   */
  export type AssistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assistencias.
     */
    data: AssistenciaCreateManyInput | AssistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assistencia createManyAndReturn
   */
  export type AssistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Assistencias.
     */
    data: AssistenciaCreateManyInput | AssistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assistencia update
   */
  export type AssistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Assistencia.
     */
    data: XOR<AssistenciaUpdateInput, AssistenciaUncheckedUpdateInput>
    /**
     * Choose, which Assistencia to update.
     */
    where: AssistenciaWhereUniqueInput
  }

  /**
   * Assistencia updateMany
   */
  export type AssistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assistencias.
     */
    data: XOR<AssistenciaUpdateManyMutationInput, AssistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Assistencias to update
     */
    where?: AssistenciaWhereInput
    /**
     * Limit how many Assistencias to update.
     */
    limit?: number
  }

  /**
   * Assistencia updateManyAndReturn
   */
  export type AssistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * The data used to update Assistencias.
     */
    data: XOR<AssistenciaUpdateManyMutationInput, AssistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Assistencias to update
     */
    where?: AssistenciaWhereInput
    /**
     * Limit how many Assistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assistencia upsert
   */
  export type AssistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Assistencia to update in case it exists.
     */
    where: AssistenciaWhereUniqueInput
    /**
     * In case the Assistencia found by the `where` argument doesn't exist, create a new Assistencia with this data.
     */
    create: XOR<AssistenciaCreateInput, AssistenciaUncheckedCreateInput>
    /**
     * In case the Assistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssistenciaUpdateInput, AssistenciaUncheckedUpdateInput>
  }

  /**
   * Assistencia delete
   */
  export type AssistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    /**
     * Filter which Assistencia to delete.
     */
    where: AssistenciaWhereUniqueInput
  }

  /**
   * Assistencia deleteMany
   */
  export type AssistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assistencias to delete
     */
    where?: AssistenciaWhereInput
    /**
     * Limit how many Assistencias to delete.
     */
    limit?: number
  }

  /**
   * Assistencia.tipoEnergia
   */
  export type Assistencia$tipoEnergiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    where?: TipoEnergiaWhereInput
  }

  /**
   * Assistencia.motobomba
   */
  export type Assistencia$motobombaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    where?: MotobombaWhereInput
  }

  /**
   * Assistencia without action
   */
  export type AssistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoOS
   */

  export type AggregateHistoricoOS = {
    _count: HistoricoOSCountAggregateOutputType | null
    _avg: HistoricoOSAvgAggregateOutputType | null
    _sum: HistoricoOSSumAggregateOutputType | null
    _min: HistoricoOSMinAggregateOutputType | null
    _max: HistoricoOSMaxAggregateOutputType | null
  }

  export type HistoricoOSAvgAggregateOutputType = {
    etapaId: number | null
  }

  export type HistoricoOSSumAggregateOutputType = {
    etapaId: number | null
  }

  export type HistoricoOSMinAggregateOutputType = {
    id: string | null
    ordemServicoId: string | null
    etapaId: number | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type HistoricoOSMaxAggregateOutputType = {
    id: string | null
    ordemServicoId: string | null
    etapaId: number | null
    observacoes: string | null
    criadoEm: Date | null
  }

  export type HistoricoOSCountAggregateOutputType = {
    id: number
    ordemServicoId: number
    etapaId: number
    observacoes: number
    criadoEm: number
    _all: number
  }


  export type HistoricoOSAvgAggregateInputType = {
    etapaId?: true
  }

  export type HistoricoOSSumAggregateInputType = {
    etapaId?: true
  }

  export type HistoricoOSMinAggregateInputType = {
    id?: true
    ordemServicoId?: true
    etapaId?: true
    observacoes?: true
    criadoEm?: true
  }

  export type HistoricoOSMaxAggregateInputType = {
    id?: true
    ordemServicoId?: true
    etapaId?: true
    observacoes?: true
    criadoEm?: true
  }

  export type HistoricoOSCountAggregateInputType = {
    id?: true
    ordemServicoId?: true
    etapaId?: true
    observacoes?: true
    criadoEm?: true
    _all?: true
  }

  export type HistoricoOSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoOS to aggregate.
     */
    where?: HistoricoOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoOS to fetch.
     */
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoOS
    **/
    _count?: true | HistoricoOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoOSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoOSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoOSMaxAggregateInputType
  }

  export type GetHistoricoOSAggregateType<T extends HistoricoOSAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoOS[P]>
      : GetScalarType<T[P], AggregateHistoricoOS[P]>
  }




  export type HistoricoOSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoOSWhereInput
    orderBy?: HistoricoOSOrderByWithAggregationInput | HistoricoOSOrderByWithAggregationInput[]
    by: HistoricoOSScalarFieldEnum[] | HistoricoOSScalarFieldEnum
    having?: HistoricoOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoOSCountAggregateInputType | true
    _avg?: HistoricoOSAvgAggregateInputType
    _sum?: HistoricoOSSumAggregateInputType
    _min?: HistoricoOSMinAggregateInputType
    _max?: HistoricoOSMaxAggregateInputType
  }

  export type HistoricoOSGroupByOutputType = {
    id: string
    ordemServicoId: string
    etapaId: number
    observacoes: string | null
    criadoEm: Date
    _count: HistoricoOSCountAggregateOutputType | null
    _avg: HistoricoOSAvgAggregateOutputType | null
    _sum: HistoricoOSSumAggregateOutputType | null
    _min: HistoricoOSMinAggregateOutputType | null
    _max: HistoricoOSMaxAggregateOutputType | null
  }

  type GetHistoricoOSGroupByPayload<T extends HistoricoOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoOSGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoOSGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoOSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    etapaId?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    anexos?: boolean | HistoricoOS$anexosArgs<ExtArgs>
    atribuicoes?: boolean | HistoricoOS$atribuicoesArgs<ExtArgs>
    _count?: boolean | HistoricoOSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoOS"]>

  export type HistoricoOSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    etapaId?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoOS"]>

  export type HistoricoOSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    etapaId?: boolean
    observacoes?: boolean
    criadoEm?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoOS"]>

  export type HistoricoOSSelectScalar = {
    id?: boolean
    ordemServicoId?: boolean
    etapaId?: boolean
    observacoes?: boolean
    criadoEm?: boolean
  }

  export type HistoricoOSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordemServicoId" | "etapaId" | "observacoes" | "criadoEm", ExtArgs["result"]["historicoOS"]>
  export type HistoricoOSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
    anexos?: boolean | HistoricoOS$anexosArgs<ExtArgs>
    atribuicoes?: boolean | HistoricoOS$atribuicoesArgs<ExtArgs>
    _count?: boolean | HistoricoOSCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HistoricoOSIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
  }
  export type HistoricoOSIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    etapa?: boolean | EtapaDefaultArgs<ExtArgs>
  }

  export type $HistoricoOSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoOS"
    objects: {
      ordemServico: Prisma.$OrdemServicoPayload<ExtArgs>
      etapa: Prisma.$EtapaPayload<ExtArgs>
      anexos: Prisma.$AnexoPayload<ExtArgs>[]
      atribuicoes: Prisma.$AtribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ordemServicoId: string
      etapaId: number
      observacoes: string | null
      criadoEm: Date
    }, ExtArgs["result"]["historicoOS"]>
    composites: {}
  }

  type HistoricoOSGetPayload<S extends boolean | null | undefined | HistoricoOSDefaultArgs> = $Result.GetResult<Prisma.$HistoricoOSPayload, S>

  type HistoricoOSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoOSCountAggregateInputType | true
    }

  export interface HistoricoOSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoOS'], meta: { name: 'HistoricoOS' } }
    /**
     * Find zero or one HistoricoOS that matches the filter.
     * @param {HistoricoOSFindUniqueArgs} args - Arguments to find a HistoricoOS
     * @example
     * // Get one HistoricoOS
     * const historicoOS = await prisma.historicoOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoOSFindUniqueArgs>(args: SelectSubset<T, HistoricoOSFindUniqueArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoOS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoOSFindUniqueOrThrowArgs} args - Arguments to find a HistoricoOS
     * @example
     * // Get one HistoricoOS
     * const historicoOS = await prisma.historicoOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoOSFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSFindFirstArgs} args - Arguments to find a HistoricoOS
     * @example
     * // Get one HistoricoOS
     * const historicoOS = await prisma.historicoOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoOSFindFirstArgs>(args?: SelectSubset<T, HistoricoOSFindFirstArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoOS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSFindFirstOrThrowArgs} args - Arguments to find a HistoricoOS
     * @example
     * // Get one HistoricoOS
     * const historicoOS = await prisma.historicoOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoOSFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoOSFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoOS
     * const historicoOS = await prisma.historicoOS.findMany()
     * 
     * // Get first 10 HistoricoOS
     * const historicoOS = await prisma.historicoOS.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoOSWithIdOnly = await prisma.historicoOS.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoOSFindManyArgs>(args?: SelectSubset<T, HistoricoOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoOS.
     * @param {HistoricoOSCreateArgs} args - Arguments to create a HistoricoOS.
     * @example
     * // Create one HistoricoOS
     * const HistoricoOS = await prisma.historicoOS.create({
     *   data: {
     *     // ... data to create a HistoricoOS
     *   }
     * })
     * 
     */
    create<T extends HistoricoOSCreateArgs>(args: SelectSubset<T, HistoricoOSCreateArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoOS.
     * @param {HistoricoOSCreateManyArgs} args - Arguments to create many HistoricoOS.
     * @example
     * // Create many HistoricoOS
     * const historicoOS = await prisma.historicoOS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoOSCreateManyArgs>(args?: SelectSubset<T, HistoricoOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoOS and returns the data saved in the database.
     * @param {HistoricoOSCreateManyAndReturnArgs} args - Arguments to create many HistoricoOS.
     * @example
     * // Create many HistoricoOS
     * const historicoOS = await prisma.historicoOS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoOS and only return the `id`
     * const historicoOSWithIdOnly = await prisma.historicoOS.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoOSCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoOSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoOS.
     * @param {HistoricoOSDeleteArgs} args - Arguments to delete one HistoricoOS.
     * @example
     * // Delete one HistoricoOS
     * const HistoricoOS = await prisma.historicoOS.delete({
     *   where: {
     *     // ... filter to delete one HistoricoOS
     *   }
     * })
     * 
     */
    delete<T extends HistoricoOSDeleteArgs>(args: SelectSubset<T, HistoricoOSDeleteArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoOS.
     * @param {HistoricoOSUpdateArgs} args - Arguments to update one HistoricoOS.
     * @example
     * // Update one HistoricoOS
     * const historicoOS = await prisma.historicoOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoOSUpdateArgs>(args: SelectSubset<T, HistoricoOSUpdateArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoOS.
     * @param {HistoricoOSDeleteManyArgs} args - Arguments to filter HistoricoOS to delete.
     * @example
     * // Delete a few HistoricoOS
     * const { count } = await prisma.historicoOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoOSDeleteManyArgs>(args?: SelectSubset<T, HistoricoOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoOS
     * const historicoOS = await prisma.historicoOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoOSUpdateManyArgs>(args: SelectSubset<T, HistoricoOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoOS and returns the data updated in the database.
     * @param {HistoricoOSUpdateManyAndReturnArgs} args - Arguments to update many HistoricoOS.
     * @example
     * // Update many HistoricoOS
     * const historicoOS = await prisma.historicoOS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoOS and only return the `id`
     * const historicoOSWithIdOnly = await prisma.historicoOS.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoricoOSUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoOSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoOS.
     * @param {HistoricoOSUpsertArgs} args - Arguments to update or create a HistoricoOS.
     * @example
     * // Update or create a HistoricoOS
     * const historicoOS = await prisma.historicoOS.upsert({
     *   create: {
     *     // ... data to create a HistoricoOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoOS we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoOSUpsertArgs>(args: SelectSubset<T, HistoricoOSUpsertArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSCountArgs} args - Arguments to filter HistoricoOS to count.
     * @example
     * // Count the number of HistoricoOS
     * const count = await prisma.historicoOS.count({
     *   where: {
     *     // ... the filter for the HistoricoOS we want to count
     *   }
     * })
    **/
    count<T extends HistoricoOSCountArgs>(
      args?: Subset<T, HistoricoOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoricoOSAggregateArgs>(args: Subset<T, HistoricoOSAggregateArgs>): Prisma.PrismaPromise<GetHistoricoOSAggregateType<T>>

    /**
     * Group by HistoricoOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoOSGroupByArgs} args - Group by arguments.
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
      T extends HistoricoOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoOSGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoOSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoricoOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoOS model
   */
  readonly fields: HistoricoOSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoOSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordemServico<T extends OrdemServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServicoDefaultArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etapa<T extends EtapaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtapaDefaultArgs<ExtArgs>>): Prisma__EtapaClient<$Result.GetResult<Prisma.$EtapaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anexos<T extends HistoricoOS$anexosArgs<ExtArgs> = {}>(args?: Subset<T, HistoricoOS$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atribuicoes<T extends HistoricoOS$atribuicoesArgs<ExtArgs> = {}>(args?: Subset<T, HistoricoOS$atribuicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HistoricoOS model
   */
  interface HistoricoOSFieldRefs {
    readonly id: FieldRef<"HistoricoOS", 'String'>
    readonly ordemServicoId: FieldRef<"HistoricoOS", 'String'>
    readonly etapaId: FieldRef<"HistoricoOS", 'Int'>
    readonly observacoes: FieldRef<"HistoricoOS", 'String'>
    readonly criadoEm: FieldRef<"HistoricoOS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoOS findUnique
   */
  export type HistoricoOSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoOS to fetch.
     */
    where: HistoricoOSWhereUniqueInput
  }

  /**
   * HistoricoOS findUniqueOrThrow
   */
  export type HistoricoOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoOS to fetch.
     */
    where: HistoricoOSWhereUniqueInput
  }

  /**
   * HistoricoOS findFirst
   */
  export type HistoricoOSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoOS to fetch.
     */
    where?: HistoricoOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoOS to fetch.
     */
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoOS.
     */
    cursor?: HistoricoOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoOS.
     */
    distinct?: HistoricoOSScalarFieldEnum | HistoricoOSScalarFieldEnum[]
  }

  /**
   * HistoricoOS findFirstOrThrow
   */
  export type HistoricoOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoOS to fetch.
     */
    where?: HistoricoOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoOS to fetch.
     */
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoOS.
     */
    cursor?: HistoricoOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoOS.
     */
    distinct?: HistoricoOSScalarFieldEnum | HistoricoOSScalarFieldEnum[]
  }

  /**
   * HistoricoOS findMany
   */
  export type HistoricoOSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoOS to fetch.
     */
    where?: HistoricoOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoOS to fetch.
     */
    orderBy?: HistoricoOSOrderByWithRelationInput | HistoricoOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoOS.
     */
    cursor?: HistoricoOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoOS.
     */
    skip?: number
    distinct?: HistoricoOSScalarFieldEnum | HistoricoOSScalarFieldEnum[]
  }

  /**
   * HistoricoOS create
   */
  export type HistoricoOSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoOS.
     */
    data: XOR<HistoricoOSCreateInput, HistoricoOSUncheckedCreateInput>
  }

  /**
   * HistoricoOS createMany
   */
  export type HistoricoOSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoOS.
     */
    data: HistoricoOSCreateManyInput | HistoricoOSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoOS createManyAndReturn
   */
  export type HistoricoOSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoOS.
     */
    data: HistoricoOSCreateManyInput | HistoricoOSCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoOS update
   */
  export type HistoricoOSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoOS.
     */
    data: XOR<HistoricoOSUpdateInput, HistoricoOSUncheckedUpdateInput>
    /**
     * Choose, which HistoricoOS to update.
     */
    where: HistoricoOSWhereUniqueInput
  }

  /**
   * HistoricoOS updateMany
   */
  export type HistoricoOSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoOS.
     */
    data: XOR<HistoricoOSUpdateManyMutationInput, HistoricoOSUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoOS to update
     */
    where?: HistoricoOSWhereInput
    /**
     * Limit how many HistoricoOS to update.
     */
    limit?: number
  }

  /**
   * HistoricoOS updateManyAndReturn
   */
  export type HistoricoOSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoOS.
     */
    data: XOR<HistoricoOSUpdateManyMutationInput, HistoricoOSUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoOS to update
     */
    where?: HistoricoOSWhereInput
    /**
     * Limit how many HistoricoOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoOS upsert
   */
  export type HistoricoOSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoOS to update in case it exists.
     */
    where: HistoricoOSWhereUniqueInput
    /**
     * In case the HistoricoOS found by the `where` argument doesn't exist, create a new HistoricoOS with this data.
     */
    create: XOR<HistoricoOSCreateInput, HistoricoOSUncheckedCreateInput>
    /**
     * In case the HistoricoOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoOSUpdateInput, HistoricoOSUncheckedUpdateInput>
  }

  /**
   * HistoricoOS delete
   */
  export type HistoricoOSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
    /**
     * Filter which HistoricoOS to delete.
     */
    where: HistoricoOSWhereUniqueInput
  }

  /**
   * HistoricoOS deleteMany
   */
  export type HistoricoOSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoOS to delete
     */
    where?: HistoricoOSWhereInput
    /**
     * Limit how many HistoricoOS to delete.
     */
    limit?: number
  }

  /**
   * HistoricoOS.anexos
   */
  export type HistoricoOS$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    cursor?: AnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * HistoricoOS.atribuicoes
   */
  export type HistoricoOS$atribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    where?: AtribuicaoWhereInput
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    cursor?: AtribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtribuicaoScalarFieldEnum | AtribuicaoScalarFieldEnum[]
  }

  /**
   * HistoricoOS without action
   */
  export type HistoricoOSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoOS
     */
    select?: HistoricoOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoOS
     */
    omit?: HistoricoOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoOSInclude<ExtArgs> | null
  }


  /**
   * Model Atribuicao
   */

  export type AggregateAtribuicao = {
    _count: AtribuicaoCountAggregateOutputType | null
    _avg: AtribuicaoAvgAggregateOutputType | null
    _sum: AtribuicaoSumAggregateOutputType | null
    _min: AtribuicaoMinAggregateOutputType | null
    _max: AtribuicaoMaxAggregateOutputType | null
  }

  export type AtribuicaoAvgAggregateOutputType = {
    usuarioId: number | null
  }

  export type AtribuicaoSumAggregateOutputType = {
    usuarioId: number | null
  }

  export type AtribuicaoMinAggregateOutputType = {
    historicoOsId: string | null
    usuarioId: number | null
  }

  export type AtribuicaoMaxAggregateOutputType = {
    historicoOsId: string | null
    usuarioId: number | null
  }

  export type AtribuicaoCountAggregateOutputType = {
    historicoOsId: number
    usuarioId: number
    _all: number
  }


  export type AtribuicaoAvgAggregateInputType = {
    usuarioId?: true
  }

  export type AtribuicaoSumAggregateInputType = {
    usuarioId?: true
  }

  export type AtribuicaoMinAggregateInputType = {
    historicoOsId?: true
    usuarioId?: true
  }

  export type AtribuicaoMaxAggregateInputType = {
    historicoOsId?: true
    usuarioId?: true
  }

  export type AtribuicaoCountAggregateInputType = {
    historicoOsId?: true
    usuarioId?: true
    _all?: true
  }

  export type AtribuicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atribuicao to aggregate.
     */
    where?: AtribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atribuicaos to fetch.
     */
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atribuicaos
    **/
    _count?: true | AtribuicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtribuicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtribuicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtribuicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtribuicaoMaxAggregateInputType
  }

  export type GetAtribuicaoAggregateType<T extends AtribuicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtribuicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtribuicao[P]>
      : GetScalarType<T[P], AggregateAtribuicao[P]>
  }




  export type AtribuicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtribuicaoWhereInput
    orderBy?: AtribuicaoOrderByWithAggregationInput | AtribuicaoOrderByWithAggregationInput[]
    by: AtribuicaoScalarFieldEnum[] | AtribuicaoScalarFieldEnum
    having?: AtribuicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtribuicaoCountAggregateInputType | true
    _avg?: AtribuicaoAvgAggregateInputType
    _sum?: AtribuicaoSumAggregateInputType
    _min?: AtribuicaoMinAggregateInputType
    _max?: AtribuicaoMaxAggregateInputType
  }

  export type AtribuicaoGroupByOutputType = {
    historicoOsId: string
    usuarioId: number
    _count: AtribuicaoCountAggregateOutputType | null
    _avg: AtribuicaoAvgAggregateOutputType | null
    _sum: AtribuicaoSumAggregateOutputType | null
    _min: AtribuicaoMinAggregateOutputType | null
    _max: AtribuicaoMaxAggregateOutputType | null
  }

  type GetAtribuicaoGroupByPayload<T extends AtribuicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtribuicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtribuicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtribuicaoGroupByOutputType[P]>
            : GetScalarType<T[P], AtribuicaoGroupByOutputType[P]>
        }
      >
    >


  export type AtribuicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historicoOsId?: boolean
    usuarioId?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atribuicao"]>

  export type AtribuicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historicoOsId?: boolean
    usuarioId?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atribuicao"]>

  export type AtribuicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historicoOsId?: boolean
    usuarioId?: boolean
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atribuicao"]>

  export type AtribuicaoSelectScalar = {
    historicoOsId?: boolean
    usuarioId?: boolean
  }

  export type AtribuicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"historicoOsId" | "usuarioId", ExtArgs["result"]["atribuicao"]>
  export type AtribuicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AtribuicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AtribuicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoOs?: boolean | HistoricoOSDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AtribuicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atribuicao"
    objects: {
      historicoOs: Prisma.$HistoricoOSPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      historicoOsId: string
      usuarioId: number
    }, ExtArgs["result"]["atribuicao"]>
    composites: {}
  }

  type AtribuicaoGetPayload<S extends boolean | null | undefined | AtribuicaoDefaultArgs> = $Result.GetResult<Prisma.$AtribuicaoPayload, S>

  type AtribuicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtribuicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtribuicaoCountAggregateInputType | true
    }

  export interface AtribuicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atribuicao'], meta: { name: 'Atribuicao' } }
    /**
     * Find zero or one Atribuicao that matches the filter.
     * @param {AtribuicaoFindUniqueArgs} args - Arguments to find a Atribuicao
     * @example
     * // Get one Atribuicao
     * const atribuicao = await prisma.atribuicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtribuicaoFindUniqueArgs>(args: SelectSubset<T, AtribuicaoFindUniqueArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atribuicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtribuicaoFindUniqueOrThrowArgs} args - Arguments to find a Atribuicao
     * @example
     * // Get one Atribuicao
     * const atribuicao = await prisma.atribuicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtribuicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtribuicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atribuicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoFindFirstArgs} args - Arguments to find a Atribuicao
     * @example
     * // Get one Atribuicao
     * const atribuicao = await prisma.atribuicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtribuicaoFindFirstArgs>(args?: SelectSubset<T, AtribuicaoFindFirstArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atribuicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoFindFirstOrThrowArgs} args - Arguments to find a Atribuicao
     * @example
     * // Get one Atribuicao
     * const atribuicao = await prisma.atribuicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtribuicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtribuicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atribuicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atribuicaos
     * const atribuicaos = await prisma.atribuicao.findMany()
     * 
     * // Get first 10 Atribuicaos
     * const atribuicaos = await prisma.atribuicao.findMany({ take: 10 })
     * 
     * // Only select the `historicoOsId`
     * const atribuicaoWithHistoricoOsIdOnly = await prisma.atribuicao.findMany({ select: { historicoOsId: true } })
     * 
     */
    findMany<T extends AtribuicaoFindManyArgs>(args?: SelectSubset<T, AtribuicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atribuicao.
     * @param {AtribuicaoCreateArgs} args - Arguments to create a Atribuicao.
     * @example
     * // Create one Atribuicao
     * const Atribuicao = await prisma.atribuicao.create({
     *   data: {
     *     // ... data to create a Atribuicao
     *   }
     * })
     * 
     */
    create<T extends AtribuicaoCreateArgs>(args: SelectSubset<T, AtribuicaoCreateArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atribuicaos.
     * @param {AtribuicaoCreateManyArgs} args - Arguments to create many Atribuicaos.
     * @example
     * // Create many Atribuicaos
     * const atribuicao = await prisma.atribuicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtribuicaoCreateManyArgs>(args?: SelectSubset<T, AtribuicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atribuicaos and returns the data saved in the database.
     * @param {AtribuicaoCreateManyAndReturnArgs} args - Arguments to create many Atribuicaos.
     * @example
     * // Create many Atribuicaos
     * const atribuicao = await prisma.atribuicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atribuicaos and only return the `historicoOsId`
     * const atribuicaoWithHistoricoOsIdOnly = await prisma.atribuicao.createManyAndReturn({
     *   select: { historicoOsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtribuicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtribuicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atribuicao.
     * @param {AtribuicaoDeleteArgs} args - Arguments to delete one Atribuicao.
     * @example
     * // Delete one Atribuicao
     * const Atribuicao = await prisma.atribuicao.delete({
     *   where: {
     *     // ... filter to delete one Atribuicao
     *   }
     * })
     * 
     */
    delete<T extends AtribuicaoDeleteArgs>(args: SelectSubset<T, AtribuicaoDeleteArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atribuicao.
     * @param {AtribuicaoUpdateArgs} args - Arguments to update one Atribuicao.
     * @example
     * // Update one Atribuicao
     * const atribuicao = await prisma.atribuicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtribuicaoUpdateArgs>(args: SelectSubset<T, AtribuicaoUpdateArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atribuicaos.
     * @param {AtribuicaoDeleteManyArgs} args - Arguments to filter Atribuicaos to delete.
     * @example
     * // Delete a few Atribuicaos
     * const { count } = await prisma.atribuicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtribuicaoDeleteManyArgs>(args?: SelectSubset<T, AtribuicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atribuicaos
     * const atribuicao = await prisma.atribuicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtribuicaoUpdateManyArgs>(args: SelectSubset<T, AtribuicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atribuicaos and returns the data updated in the database.
     * @param {AtribuicaoUpdateManyAndReturnArgs} args - Arguments to update many Atribuicaos.
     * @example
     * // Update many Atribuicaos
     * const atribuicao = await prisma.atribuicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atribuicaos and only return the `historicoOsId`
     * const atribuicaoWithHistoricoOsIdOnly = await prisma.atribuicao.updateManyAndReturn({
     *   select: { historicoOsId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtribuicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtribuicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atribuicao.
     * @param {AtribuicaoUpsertArgs} args - Arguments to update or create a Atribuicao.
     * @example
     * // Update or create a Atribuicao
     * const atribuicao = await prisma.atribuicao.upsert({
     *   create: {
     *     // ... data to create a Atribuicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atribuicao we want to update
     *   }
     * })
     */
    upsert<T extends AtribuicaoUpsertArgs>(args: SelectSubset<T, AtribuicaoUpsertArgs<ExtArgs>>): Prisma__AtribuicaoClient<$Result.GetResult<Prisma.$AtribuicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoCountArgs} args - Arguments to filter Atribuicaos to count.
     * @example
     * // Count the number of Atribuicaos
     * const count = await prisma.atribuicao.count({
     *   where: {
     *     // ... the filter for the Atribuicaos we want to count
     *   }
     * })
    **/
    count<T extends AtribuicaoCountArgs>(
      args?: Subset<T, AtribuicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtribuicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtribuicaoAggregateArgs>(args: Subset<T, AtribuicaoAggregateArgs>): Prisma.PrismaPromise<GetAtribuicaoAggregateType<T>>

    /**
     * Group by Atribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtribuicaoGroupByArgs} args - Group by arguments.
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
      T extends AtribuicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtribuicaoGroupByArgs['orderBy'] }
        : { orderBy?: AtribuicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtribuicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtribuicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atribuicao model
   */
  readonly fields: AtribuicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atribuicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtribuicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicoOs<T extends HistoricoOSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HistoricoOSDefaultArgs<ExtArgs>>): Prisma__HistoricoOSClient<$Result.GetResult<Prisma.$HistoricoOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atribuicao model
   */
  interface AtribuicaoFieldRefs {
    readonly historicoOsId: FieldRef<"Atribuicao", 'String'>
    readonly usuarioId: FieldRef<"Atribuicao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Atribuicao findUnique
   */
  export type AtribuicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Atribuicao to fetch.
     */
    where: AtribuicaoWhereUniqueInput
  }

  /**
   * Atribuicao findUniqueOrThrow
   */
  export type AtribuicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Atribuicao to fetch.
     */
    where: AtribuicaoWhereUniqueInput
  }

  /**
   * Atribuicao findFirst
   */
  export type AtribuicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Atribuicao to fetch.
     */
    where?: AtribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atribuicaos to fetch.
     */
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atribuicaos.
     */
    cursor?: AtribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atribuicaos.
     */
    distinct?: AtribuicaoScalarFieldEnum | AtribuicaoScalarFieldEnum[]
  }

  /**
   * Atribuicao findFirstOrThrow
   */
  export type AtribuicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Atribuicao to fetch.
     */
    where?: AtribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atribuicaos to fetch.
     */
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atribuicaos.
     */
    cursor?: AtribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atribuicaos.
     */
    distinct?: AtribuicaoScalarFieldEnum | AtribuicaoScalarFieldEnum[]
  }

  /**
   * Atribuicao findMany
   */
  export type AtribuicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Atribuicaos to fetch.
     */
    where?: AtribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atribuicaos to fetch.
     */
    orderBy?: AtribuicaoOrderByWithRelationInput | AtribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atribuicaos.
     */
    cursor?: AtribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atribuicaos.
     */
    skip?: number
    distinct?: AtribuicaoScalarFieldEnum | AtribuicaoScalarFieldEnum[]
  }

  /**
   * Atribuicao create
   */
  export type AtribuicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atribuicao.
     */
    data: XOR<AtribuicaoCreateInput, AtribuicaoUncheckedCreateInput>
  }

  /**
   * Atribuicao createMany
   */
  export type AtribuicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atribuicaos.
     */
    data: AtribuicaoCreateManyInput | AtribuicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atribuicao createManyAndReturn
   */
  export type AtribuicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Atribuicaos.
     */
    data: AtribuicaoCreateManyInput | AtribuicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atribuicao update
   */
  export type AtribuicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atribuicao.
     */
    data: XOR<AtribuicaoUpdateInput, AtribuicaoUncheckedUpdateInput>
    /**
     * Choose, which Atribuicao to update.
     */
    where: AtribuicaoWhereUniqueInput
  }

  /**
   * Atribuicao updateMany
   */
  export type AtribuicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atribuicaos.
     */
    data: XOR<AtribuicaoUpdateManyMutationInput, AtribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which Atribuicaos to update
     */
    where?: AtribuicaoWhereInput
    /**
     * Limit how many Atribuicaos to update.
     */
    limit?: number
  }

  /**
   * Atribuicao updateManyAndReturn
   */
  export type AtribuicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * The data used to update Atribuicaos.
     */
    data: XOR<AtribuicaoUpdateManyMutationInput, AtribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which Atribuicaos to update
     */
    where?: AtribuicaoWhereInput
    /**
     * Limit how many Atribuicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atribuicao upsert
   */
  export type AtribuicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atribuicao to update in case it exists.
     */
    where: AtribuicaoWhereUniqueInput
    /**
     * In case the Atribuicao found by the `where` argument doesn't exist, create a new Atribuicao with this data.
     */
    create: XOR<AtribuicaoCreateInput, AtribuicaoUncheckedCreateInput>
    /**
     * In case the Atribuicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtribuicaoUpdateInput, AtribuicaoUncheckedUpdateInput>
  }

  /**
   * Atribuicao delete
   */
  export type AtribuicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
    /**
     * Filter which Atribuicao to delete.
     */
    where: AtribuicaoWhereUniqueInput
  }

  /**
   * Atribuicao deleteMany
   */
  export type AtribuicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atribuicaos to delete
     */
    where?: AtribuicaoWhereInput
    /**
     * Limit how many Atribuicaos to delete.
     */
    limit?: number
  }

  /**
   * Atribuicao without action
   */
  export type AtribuicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribuicao
     */
    select?: AtribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribuicao
     */
    omit?: AtribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtribuicaoInclude<ExtArgs> | null
  }


  /**
   * Model TipoAnexo
   */

  export type AggregateTipoAnexo = {
    _count: TipoAnexoCountAggregateOutputType | null
    _avg: TipoAnexoAvgAggregateOutputType | null
    _sum: TipoAnexoSumAggregateOutputType | null
    _min: TipoAnexoMinAggregateOutputType | null
    _max: TipoAnexoMaxAggregateOutputType | null
  }

  export type TipoAnexoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoAnexoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoAnexoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoAnexoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoAnexoCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type TipoAnexoAvgAggregateInputType = {
    id?: true
  }

  export type TipoAnexoSumAggregateInputType = {
    id?: true
  }

  export type TipoAnexoMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoAnexoMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoAnexoCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type TipoAnexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoAnexo to aggregate.
     */
    where?: TipoAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoAnexos to fetch.
     */
    orderBy?: TipoAnexoOrderByWithRelationInput | TipoAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoAnexos
    **/
    _count?: true | TipoAnexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoAnexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoAnexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoAnexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoAnexoMaxAggregateInputType
  }

  export type GetTipoAnexoAggregateType<T extends TipoAnexoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoAnexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoAnexo[P]>
      : GetScalarType<T[P], AggregateTipoAnexo[P]>
  }




  export type TipoAnexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoAnexoWhereInput
    orderBy?: TipoAnexoOrderByWithAggregationInput | TipoAnexoOrderByWithAggregationInput[]
    by: TipoAnexoScalarFieldEnum[] | TipoAnexoScalarFieldEnum
    having?: TipoAnexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoAnexoCountAggregateInputType | true
    _avg?: TipoAnexoAvgAggregateInputType
    _sum?: TipoAnexoSumAggregateInputType
    _min?: TipoAnexoMinAggregateInputType
    _max?: TipoAnexoMaxAggregateInputType
  }

  export type TipoAnexoGroupByOutputType = {
    id: number
    descricao: string
    _count: TipoAnexoCountAggregateOutputType | null
    _avg: TipoAnexoAvgAggregateOutputType | null
    _sum: TipoAnexoSumAggregateOutputType | null
    _min: TipoAnexoMinAggregateOutputType | null
    _max: TipoAnexoMaxAggregateOutputType | null
  }

  type GetTipoAnexoGroupByPayload<T extends TipoAnexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoAnexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoAnexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoAnexoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoAnexoGroupByOutputType[P]>
        }
      >
    >


  export type TipoAnexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    anexos?: boolean | TipoAnexo$anexosArgs<ExtArgs>
    _count?: boolean | TipoAnexoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoAnexo"]>

  export type TipoAnexoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipoAnexo"]>

  export type TipoAnexoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipoAnexo"]>

  export type TipoAnexoSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type TipoAnexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["tipoAnexo"]>
  export type TipoAnexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | TipoAnexo$anexosArgs<ExtArgs>
    _count?: boolean | TipoAnexoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoAnexoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoAnexoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoAnexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoAnexo"
    objects: {
      anexos: Prisma.$AnexoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["tipoAnexo"]>
    composites: {}
  }

  type TipoAnexoGetPayload<S extends boolean | null | undefined | TipoAnexoDefaultArgs> = $Result.GetResult<Prisma.$TipoAnexoPayload, S>

  type TipoAnexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoAnexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoAnexoCountAggregateInputType | true
    }

  export interface TipoAnexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoAnexo'], meta: { name: 'TipoAnexo' } }
    /**
     * Find zero or one TipoAnexo that matches the filter.
     * @param {TipoAnexoFindUniqueArgs} args - Arguments to find a TipoAnexo
     * @example
     * // Get one TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoAnexoFindUniqueArgs>(args: SelectSubset<T, TipoAnexoFindUniqueArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoAnexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoAnexoFindUniqueOrThrowArgs} args - Arguments to find a TipoAnexo
     * @example
     * // Get one TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoAnexoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoAnexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoAnexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoFindFirstArgs} args - Arguments to find a TipoAnexo
     * @example
     * // Get one TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoAnexoFindFirstArgs>(args?: SelectSubset<T, TipoAnexoFindFirstArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoAnexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoFindFirstOrThrowArgs} args - Arguments to find a TipoAnexo
     * @example
     * // Get one TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoAnexoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoAnexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoAnexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoAnexos
     * const tipoAnexos = await prisma.tipoAnexo.findMany()
     * 
     * // Get first 10 TipoAnexos
     * const tipoAnexos = await prisma.tipoAnexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoAnexoWithIdOnly = await prisma.tipoAnexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoAnexoFindManyArgs>(args?: SelectSubset<T, TipoAnexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoAnexo.
     * @param {TipoAnexoCreateArgs} args - Arguments to create a TipoAnexo.
     * @example
     * // Create one TipoAnexo
     * const TipoAnexo = await prisma.tipoAnexo.create({
     *   data: {
     *     // ... data to create a TipoAnexo
     *   }
     * })
     * 
     */
    create<T extends TipoAnexoCreateArgs>(args: SelectSubset<T, TipoAnexoCreateArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoAnexos.
     * @param {TipoAnexoCreateManyArgs} args - Arguments to create many TipoAnexos.
     * @example
     * // Create many TipoAnexos
     * const tipoAnexo = await prisma.tipoAnexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoAnexoCreateManyArgs>(args?: SelectSubset<T, TipoAnexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoAnexos and returns the data saved in the database.
     * @param {TipoAnexoCreateManyAndReturnArgs} args - Arguments to create many TipoAnexos.
     * @example
     * // Create many TipoAnexos
     * const tipoAnexo = await prisma.tipoAnexo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoAnexos and only return the `id`
     * const tipoAnexoWithIdOnly = await prisma.tipoAnexo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoAnexoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoAnexoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoAnexo.
     * @param {TipoAnexoDeleteArgs} args - Arguments to delete one TipoAnexo.
     * @example
     * // Delete one TipoAnexo
     * const TipoAnexo = await prisma.tipoAnexo.delete({
     *   where: {
     *     // ... filter to delete one TipoAnexo
     *   }
     * })
     * 
     */
    delete<T extends TipoAnexoDeleteArgs>(args: SelectSubset<T, TipoAnexoDeleteArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoAnexo.
     * @param {TipoAnexoUpdateArgs} args - Arguments to update one TipoAnexo.
     * @example
     * // Update one TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoAnexoUpdateArgs>(args: SelectSubset<T, TipoAnexoUpdateArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoAnexos.
     * @param {TipoAnexoDeleteManyArgs} args - Arguments to filter TipoAnexos to delete.
     * @example
     * // Delete a few TipoAnexos
     * const { count } = await prisma.tipoAnexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoAnexoDeleteManyArgs>(args?: SelectSubset<T, TipoAnexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoAnexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoAnexos
     * const tipoAnexo = await prisma.tipoAnexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoAnexoUpdateManyArgs>(args: SelectSubset<T, TipoAnexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoAnexos and returns the data updated in the database.
     * @param {TipoAnexoUpdateManyAndReturnArgs} args - Arguments to update many TipoAnexos.
     * @example
     * // Update many TipoAnexos
     * const tipoAnexo = await prisma.tipoAnexo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoAnexos and only return the `id`
     * const tipoAnexoWithIdOnly = await prisma.tipoAnexo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoAnexoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoAnexoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoAnexo.
     * @param {TipoAnexoUpsertArgs} args - Arguments to update or create a TipoAnexo.
     * @example
     * // Update or create a TipoAnexo
     * const tipoAnexo = await prisma.tipoAnexo.upsert({
     *   create: {
     *     // ... data to create a TipoAnexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoAnexo we want to update
     *   }
     * })
     */
    upsert<T extends TipoAnexoUpsertArgs>(args: SelectSubset<T, TipoAnexoUpsertArgs<ExtArgs>>): Prisma__TipoAnexoClient<$Result.GetResult<Prisma.$TipoAnexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoAnexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoCountArgs} args - Arguments to filter TipoAnexos to count.
     * @example
     * // Count the number of TipoAnexos
     * const count = await prisma.tipoAnexo.count({
     *   where: {
     *     // ... the filter for the TipoAnexos we want to count
     *   }
     * })
    **/
    count<T extends TipoAnexoCountArgs>(
      args?: Subset<T, TipoAnexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoAnexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoAnexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoAnexoAggregateArgs>(args: Subset<T, TipoAnexoAggregateArgs>): Prisma.PrismaPromise<GetTipoAnexoAggregateType<T>>

    /**
     * Group by TipoAnexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAnexoGroupByArgs} args - Group by arguments.
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
      T extends TipoAnexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoAnexoGroupByArgs['orderBy'] }
        : { orderBy?: TipoAnexoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoAnexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoAnexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoAnexo model
   */
  readonly fields: TipoAnexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoAnexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoAnexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexos<T extends TipoAnexo$anexosArgs<ExtArgs> = {}>(args?: Subset<T, TipoAnexo$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoAnexo model
   */
  interface TipoAnexoFieldRefs {
    readonly id: FieldRef<"TipoAnexo", 'Int'>
    readonly descricao: FieldRef<"TipoAnexo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoAnexo findUnique
   */
  export type TipoAnexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter, which TipoAnexo to fetch.
     */
    where: TipoAnexoWhereUniqueInput
  }

  /**
   * TipoAnexo findUniqueOrThrow
   */
  export type TipoAnexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter, which TipoAnexo to fetch.
     */
    where: TipoAnexoWhereUniqueInput
  }

  /**
   * TipoAnexo findFirst
   */
  export type TipoAnexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter, which TipoAnexo to fetch.
     */
    where?: TipoAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoAnexos to fetch.
     */
    orderBy?: TipoAnexoOrderByWithRelationInput | TipoAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoAnexos.
     */
    cursor?: TipoAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoAnexos.
     */
    distinct?: TipoAnexoScalarFieldEnum | TipoAnexoScalarFieldEnum[]
  }

  /**
   * TipoAnexo findFirstOrThrow
   */
  export type TipoAnexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter, which TipoAnexo to fetch.
     */
    where?: TipoAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoAnexos to fetch.
     */
    orderBy?: TipoAnexoOrderByWithRelationInput | TipoAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoAnexos.
     */
    cursor?: TipoAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoAnexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoAnexos.
     */
    distinct?: TipoAnexoScalarFieldEnum | TipoAnexoScalarFieldEnum[]
  }

  /**
   * TipoAnexo findMany
   */
  export type TipoAnexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter, which TipoAnexos to fetch.
     */
    where?: TipoAnexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoAnexos to fetch.
     */
    orderBy?: TipoAnexoOrderByWithRelationInput | TipoAnexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoAnexos.
     */
    cursor?: TipoAnexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoAnexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoAnexos.
     */
    skip?: number
    distinct?: TipoAnexoScalarFieldEnum | TipoAnexoScalarFieldEnum[]
  }

  /**
   * TipoAnexo create
   */
  export type TipoAnexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoAnexo.
     */
    data: XOR<TipoAnexoCreateInput, TipoAnexoUncheckedCreateInput>
  }

  /**
   * TipoAnexo createMany
   */
  export type TipoAnexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoAnexos.
     */
    data: TipoAnexoCreateManyInput | TipoAnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoAnexo createManyAndReturn
   */
  export type TipoAnexoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoAnexos.
     */
    data: TipoAnexoCreateManyInput | TipoAnexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoAnexo update
   */
  export type TipoAnexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoAnexo.
     */
    data: XOR<TipoAnexoUpdateInput, TipoAnexoUncheckedUpdateInput>
    /**
     * Choose, which TipoAnexo to update.
     */
    where: TipoAnexoWhereUniqueInput
  }

  /**
   * TipoAnexo updateMany
   */
  export type TipoAnexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoAnexos.
     */
    data: XOR<TipoAnexoUpdateManyMutationInput, TipoAnexoUncheckedUpdateManyInput>
    /**
     * Filter which TipoAnexos to update
     */
    where?: TipoAnexoWhereInput
    /**
     * Limit how many TipoAnexos to update.
     */
    limit?: number
  }

  /**
   * TipoAnexo updateManyAndReturn
   */
  export type TipoAnexoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * The data used to update TipoAnexos.
     */
    data: XOR<TipoAnexoUpdateManyMutationInput, TipoAnexoUncheckedUpdateManyInput>
    /**
     * Filter which TipoAnexos to update
     */
    where?: TipoAnexoWhereInput
    /**
     * Limit how many TipoAnexos to update.
     */
    limit?: number
  }

  /**
   * TipoAnexo upsert
   */
  export type TipoAnexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoAnexo to update in case it exists.
     */
    where: TipoAnexoWhereUniqueInput
    /**
     * In case the TipoAnexo found by the `where` argument doesn't exist, create a new TipoAnexo with this data.
     */
    create: XOR<TipoAnexoCreateInput, TipoAnexoUncheckedCreateInput>
    /**
     * In case the TipoAnexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoAnexoUpdateInput, TipoAnexoUncheckedUpdateInput>
  }

  /**
   * TipoAnexo delete
   */
  export type TipoAnexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
    /**
     * Filter which TipoAnexo to delete.
     */
    where: TipoAnexoWhereUniqueInput
  }

  /**
   * TipoAnexo deleteMany
   */
  export type TipoAnexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoAnexos to delete
     */
    where?: TipoAnexoWhereInput
    /**
     * Limit how many TipoAnexos to delete.
     */
    limit?: number
  }

  /**
   * TipoAnexo.anexos
   */
  export type TipoAnexo$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anexo
     */
    select?: AnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anexo
     */
    omit?: AnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnexoInclude<ExtArgs> | null
    where?: AnexoWhereInput
    orderBy?: AnexoOrderByWithRelationInput | AnexoOrderByWithRelationInput[]
    cursor?: AnexoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnexoScalarFieldEnum | AnexoScalarFieldEnum[]
  }

  /**
   * TipoAnexo without action
   */
  export type TipoAnexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoAnexo
     */
    select?: TipoAnexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoAnexo
     */
    omit?: TipoAnexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoAnexoInclude<ExtArgs> | null
  }


  /**
   * Model TipoEnergia
   */

  export type AggregateTipoEnergia = {
    _count: TipoEnergiaCountAggregateOutputType | null
    _avg: TipoEnergiaAvgAggregateOutputType | null
    _sum: TipoEnergiaSumAggregateOutputType | null
    _min: TipoEnergiaMinAggregateOutputType | null
    _max: TipoEnergiaMaxAggregateOutputType | null
  }

  export type TipoEnergiaAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoEnergiaSumAggregateOutputType = {
    id: number | null
  }

  export type TipoEnergiaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoEnergiaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoEnergiaCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type TipoEnergiaAvgAggregateInputType = {
    id?: true
  }

  export type TipoEnergiaSumAggregateInputType = {
    id?: true
  }

  export type TipoEnergiaMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoEnergiaMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoEnergiaCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type TipoEnergiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEnergia to aggregate.
     */
    where?: TipoEnergiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEnergias to fetch.
     */
    orderBy?: TipoEnergiaOrderByWithRelationInput | TipoEnergiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoEnergiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEnergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEnergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoEnergias
    **/
    _count?: true | TipoEnergiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoEnergiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoEnergiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoEnergiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoEnergiaMaxAggregateInputType
  }

  export type GetTipoEnergiaAggregateType<T extends TipoEnergiaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoEnergia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoEnergia[P]>
      : GetScalarType<T[P], AggregateTipoEnergia[P]>
  }




  export type TipoEnergiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoEnergiaWhereInput
    orderBy?: TipoEnergiaOrderByWithAggregationInput | TipoEnergiaOrderByWithAggregationInput[]
    by: TipoEnergiaScalarFieldEnum[] | TipoEnergiaScalarFieldEnum
    having?: TipoEnergiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoEnergiaCountAggregateInputType | true
    _avg?: TipoEnergiaAvgAggregateInputType
    _sum?: TipoEnergiaSumAggregateInputType
    _min?: TipoEnergiaMinAggregateInputType
    _max?: TipoEnergiaMaxAggregateInputType
  }

  export type TipoEnergiaGroupByOutputType = {
    id: number
    descricao: string
    _count: TipoEnergiaCountAggregateOutputType | null
    _avg: TipoEnergiaAvgAggregateOutputType | null
    _sum: TipoEnergiaSumAggregateOutputType | null
    _min: TipoEnergiaMinAggregateOutputType | null
    _max: TipoEnergiaMaxAggregateOutputType | null
  }

  type GetTipoEnergiaGroupByPayload<T extends TipoEnergiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoEnergiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoEnergiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoEnergiaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoEnergiaGroupByOutputType[P]>
        }
      >
    >


  export type TipoEnergiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    assistencias?: boolean | TipoEnergia$assistenciasArgs<ExtArgs>
    _count?: boolean | TipoEnergiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoEnergia"]>

  export type TipoEnergiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipoEnergia"]>

  export type TipoEnergiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipoEnergia"]>

  export type TipoEnergiaSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type TipoEnergiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["tipoEnergia"]>
  export type TipoEnergiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assistencias?: boolean | TipoEnergia$assistenciasArgs<ExtArgs>
    _count?: boolean | TipoEnergiaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoEnergiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoEnergiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoEnergiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoEnergia"
    objects: {
      assistencias: Prisma.$AssistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["tipoEnergia"]>
    composites: {}
  }

  type TipoEnergiaGetPayload<S extends boolean | null | undefined | TipoEnergiaDefaultArgs> = $Result.GetResult<Prisma.$TipoEnergiaPayload, S>

  type TipoEnergiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoEnergiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoEnergiaCountAggregateInputType | true
    }

  export interface TipoEnergiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoEnergia'], meta: { name: 'TipoEnergia' } }
    /**
     * Find zero or one TipoEnergia that matches the filter.
     * @param {TipoEnergiaFindUniqueArgs} args - Arguments to find a TipoEnergia
     * @example
     * // Get one TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoEnergiaFindUniqueArgs>(args: SelectSubset<T, TipoEnergiaFindUniqueArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoEnergia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoEnergiaFindUniqueOrThrowArgs} args - Arguments to find a TipoEnergia
     * @example
     * // Get one TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoEnergiaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoEnergiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoEnergia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaFindFirstArgs} args - Arguments to find a TipoEnergia
     * @example
     * // Get one TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoEnergiaFindFirstArgs>(args?: SelectSubset<T, TipoEnergiaFindFirstArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoEnergia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaFindFirstOrThrowArgs} args - Arguments to find a TipoEnergia
     * @example
     * // Get one TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoEnergiaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoEnergiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoEnergias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoEnergias
     * const tipoEnergias = await prisma.tipoEnergia.findMany()
     * 
     * // Get first 10 TipoEnergias
     * const tipoEnergias = await prisma.tipoEnergia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoEnergiaWithIdOnly = await prisma.tipoEnergia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoEnergiaFindManyArgs>(args?: SelectSubset<T, TipoEnergiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoEnergia.
     * @param {TipoEnergiaCreateArgs} args - Arguments to create a TipoEnergia.
     * @example
     * // Create one TipoEnergia
     * const TipoEnergia = await prisma.tipoEnergia.create({
     *   data: {
     *     // ... data to create a TipoEnergia
     *   }
     * })
     * 
     */
    create<T extends TipoEnergiaCreateArgs>(args: SelectSubset<T, TipoEnergiaCreateArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoEnergias.
     * @param {TipoEnergiaCreateManyArgs} args - Arguments to create many TipoEnergias.
     * @example
     * // Create many TipoEnergias
     * const tipoEnergia = await prisma.tipoEnergia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoEnergiaCreateManyArgs>(args?: SelectSubset<T, TipoEnergiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoEnergias and returns the data saved in the database.
     * @param {TipoEnergiaCreateManyAndReturnArgs} args - Arguments to create many TipoEnergias.
     * @example
     * // Create many TipoEnergias
     * const tipoEnergia = await prisma.tipoEnergia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoEnergias and only return the `id`
     * const tipoEnergiaWithIdOnly = await prisma.tipoEnergia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoEnergiaCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoEnergiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoEnergia.
     * @param {TipoEnergiaDeleteArgs} args - Arguments to delete one TipoEnergia.
     * @example
     * // Delete one TipoEnergia
     * const TipoEnergia = await prisma.tipoEnergia.delete({
     *   where: {
     *     // ... filter to delete one TipoEnergia
     *   }
     * })
     * 
     */
    delete<T extends TipoEnergiaDeleteArgs>(args: SelectSubset<T, TipoEnergiaDeleteArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoEnergia.
     * @param {TipoEnergiaUpdateArgs} args - Arguments to update one TipoEnergia.
     * @example
     * // Update one TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoEnergiaUpdateArgs>(args: SelectSubset<T, TipoEnergiaUpdateArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoEnergias.
     * @param {TipoEnergiaDeleteManyArgs} args - Arguments to filter TipoEnergias to delete.
     * @example
     * // Delete a few TipoEnergias
     * const { count } = await prisma.tipoEnergia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoEnergiaDeleteManyArgs>(args?: SelectSubset<T, TipoEnergiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoEnergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoEnergias
     * const tipoEnergia = await prisma.tipoEnergia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoEnergiaUpdateManyArgs>(args: SelectSubset<T, TipoEnergiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoEnergias and returns the data updated in the database.
     * @param {TipoEnergiaUpdateManyAndReturnArgs} args - Arguments to update many TipoEnergias.
     * @example
     * // Update many TipoEnergias
     * const tipoEnergia = await prisma.tipoEnergia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoEnergias and only return the `id`
     * const tipoEnergiaWithIdOnly = await prisma.tipoEnergia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoEnergiaUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoEnergiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoEnergia.
     * @param {TipoEnergiaUpsertArgs} args - Arguments to update or create a TipoEnergia.
     * @example
     * // Update or create a TipoEnergia
     * const tipoEnergia = await prisma.tipoEnergia.upsert({
     *   create: {
     *     // ... data to create a TipoEnergia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoEnergia we want to update
     *   }
     * })
     */
    upsert<T extends TipoEnergiaUpsertArgs>(args: SelectSubset<T, TipoEnergiaUpsertArgs<ExtArgs>>): Prisma__TipoEnergiaClient<$Result.GetResult<Prisma.$TipoEnergiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoEnergias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaCountArgs} args - Arguments to filter TipoEnergias to count.
     * @example
     * // Count the number of TipoEnergias
     * const count = await prisma.tipoEnergia.count({
     *   where: {
     *     // ... the filter for the TipoEnergias we want to count
     *   }
     * })
    **/
    count<T extends TipoEnergiaCountArgs>(
      args?: Subset<T, TipoEnergiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoEnergiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoEnergia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoEnergiaAggregateArgs>(args: Subset<T, TipoEnergiaAggregateArgs>): Prisma.PrismaPromise<GetTipoEnergiaAggregateType<T>>

    /**
     * Group by TipoEnergia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEnergiaGroupByArgs} args - Group by arguments.
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
      T extends TipoEnergiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoEnergiaGroupByArgs['orderBy'] }
        : { orderBy?: TipoEnergiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoEnergiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoEnergiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoEnergia model
   */
  readonly fields: TipoEnergiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoEnergia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoEnergiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assistencias<T extends TipoEnergia$assistenciasArgs<ExtArgs> = {}>(args?: Subset<T, TipoEnergia$assistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoEnergia model
   */
  interface TipoEnergiaFieldRefs {
    readonly id: FieldRef<"TipoEnergia", 'Int'>
    readonly descricao: FieldRef<"TipoEnergia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoEnergia findUnique
   */
  export type TipoEnergiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter, which TipoEnergia to fetch.
     */
    where: TipoEnergiaWhereUniqueInput
  }

  /**
   * TipoEnergia findUniqueOrThrow
   */
  export type TipoEnergiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter, which TipoEnergia to fetch.
     */
    where: TipoEnergiaWhereUniqueInput
  }

  /**
   * TipoEnergia findFirst
   */
  export type TipoEnergiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter, which TipoEnergia to fetch.
     */
    where?: TipoEnergiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEnergias to fetch.
     */
    orderBy?: TipoEnergiaOrderByWithRelationInput | TipoEnergiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEnergias.
     */
    cursor?: TipoEnergiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEnergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEnergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEnergias.
     */
    distinct?: TipoEnergiaScalarFieldEnum | TipoEnergiaScalarFieldEnum[]
  }

  /**
   * TipoEnergia findFirstOrThrow
   */
  export type TipoEnergiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter, which TipoEnergia to fetch.
     */
    where?: TipoEnergiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEnergias to fetch.
     */
    orderBy?: TipoEnergiaOrderByWithRelationInput | TipoEnergiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEnergias.
     */
    cursor?: TipoEnergiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEnergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEnergias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEnergias.
     */
    distinct?: TipoEnergiaScalarFieldEnum | TipoEnergiaScalarFieldEnum[]
  }

  /**
   * TipoEnergia findMany
   */
  export type TipoEnergiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter, which TipoEnergias to fetch.
     */
    where?: TipoEnergiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEnergias to fetch.
     */
    orderBy?: TipoEnergiaOrderByWithRelationInput | TipoEnergiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoEnergias.
     */
    cursor?: TipoEnergiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEnergias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEnergias.
     */
    skip?: number
    distinct?: TipoEnergiaScalarFieldEnum | TipoEnergiaScalarFieldEnum[]
  }

  /**
   * TipoEnergia create
   */
  export type TipoEnergiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoEnergia.
     */
    data: XOR<TipoEnergiaCreateInput, TipoEnergiaUncheckedCreateInput>
  }

  /**
   * TipoEnergia createMany
   */
  export type TipoEnergiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoEnergias.
     */
    data: TipoEnergiaCreateManyInput | TipoEnergiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoEnergia createManyAndReturn
   */
  export type TipoEnergiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * The data used to create many TipoEnergias.
     */
    data: TipoEnergiaCreateManyInput | TipoEnergiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoEnergia update
   */
  export type TipoEnergiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoEnergia.
     */
    data: XOR<TipoEnergiaUpdateInput, TipoEnergiaUncheckedUpdateInput>
    /**
     * Choose, which TipoEnergia to update.
     */
    where: TipoEnergiaWhereUniqueInput
  }

  /**
   * TipoEnergia updateMany
   */
  export type TipoEnergiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoEnergias.
     */
    data: XOR<TipoEnergiaUpdateManyMutationInput, TipoEnergiaUncheckedUpdateManyInput>
    /**
     * Filter which TipoEnergias to update
     */
    where?: TipoEnergiaWhereInput
    /**
     * Limit how many TipoEnergias to update.
     */
    limit?: number
  }

  /**
   * TipoEnergia updateManyAndReturn
   */
  export type TipoEnergiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * The data used to update TipoEnergias.
     */
    data: XOR<TipoEnergiaUpdateManyMutationInput, TipoEnergiaUncheckedUpdateManyInput>
    /**
     * Filter which TipoEnergias to update
     */
    where?: TipoEnergiaWhereInput
    /**
     * Limit how many TipoEnergias to update.
     */
    limit?: number
  }

  /**
   * TipoEnergia upsert
   */
  export type TipoEnergiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoEnergia to update in case it exists.
     */
    where: TipoEnergiaWhereUniqueInput
    /**
     * In case the TipoEnergia found by the `where` argument doesn't exist, create a new TipoEnergia with this data.
     */
    create: XOR<TipoEnergiaCreateInput, TipoEnergiaUncheckedCreateInput>
    /**
     * In case the TipoEnergia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoEnergiaUpdateInput, TipoEnergiaUncheckedUpdateInput>
  }

  /**
   * TipoEnergia delete
   */
  export type TipoEnergiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
    /**
     * Filter which TipoEnergia to delete.
     */
    where: TipoEnergiaWhereUniqueInput
  }

  /**
   * TipoEnergia deleteMany
   */
  export type TipoEnergiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEnergias to delete
     */
    where?: TipoEnergiaWhereInput
    /**
     * Limit how many TipoEnergias to delete.
     */
    limit?: number
  }

  /**
   * TipoEnergia.assistencias
   */
  export type TipoEnergia$assistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    where?: AssistenciaWhereInput
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    cursor?: AssistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssistenciaScalarFieldEnum | AssistenciaScalarFieldEnum[]
  }

  /**
   * TipoEnergia without action
   */
  export type TipoEnergiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEnergia
     */
    select?: TipoEnergiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEnergia
     */
    omit?: TipoEnergiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEnergiaInclude<ExtArgs> | null
  }


  /**
   * Model Motobomba
   */

  export type AggregateMotobomba = {
    _count: MotobombaCountAggregateOutputType | null
    _avg: MotobombaAvgAggregateOutputType | null
    _sum: MotobombaSumAggregateOutputType | null
    _min: MotobombaMinAggregateOutputType | null
    _max: MotobombaMaxAggregateOutputType | null
  }

  export type MotobombaAvgAggregateOutputType = {
    id: number | null
    marcaId: number | null
  }

  export type MotobombaSumAggregateOutputType = {
    id: number | null
    marcaId: number | null
  }

  export type MotobombaMinAggregateOutputType = {
    id: number | null
    codigoIdentificacao: string | null
    modelo: string | null
    marcaId: number | null
    cv: string | null
    isAtivo: boolean | null
    criadoEm: Date | null
  }

  export type MotobombaMaxAggregateOutputType = {
    id: number | null
    codigoIdentificacao: string | null
    modelo: string | null
    marcaId: number | null
    cv: string | null
    isAtivo: boolean | null
    criadoEm: Date | null
  }

  export type MotobombaCountAggregateOutputType = {
    id: number
    codigoIdentificacao: number
    modelo: number
    marcaId: number
    cv: number
    isAtivo: number
    criadoEm: number
    _all: number
  }


  export type MotobombaAvgAggregateInputType = {
    id?: true
    marcaId?: true
  }

  export type MotobombaSumAggregateInputType = {
    id?: true
    marcaId?: true
  }

  export type MotobombaMinAggregateInputType = {
    id?: true
    codigoIdentificacao?: true
    modelo?: true
    marcaId?: true
    cv?: true
    isAtivo?: true
    criadoEm?: true
  }

  export type MotobombaMaxAggregateInputType = {
    id?: true
    codigoIdentificacao?: true
    modelo?: true
    marcaId?: true
    cv?: true
    isAtivo?: true
    criadoEm?: true
  }

  export type MotobombaCountAggregateInputType = {
    id?: true
    codigoIdentificacao?: true
    modelo?: true
    marcaId?: true
    cv?: true
    isAtivo?: true
    criadoEm?: true
    _all?: true
  }

  export type MotobombaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motobomba to aggregate.
     */
    where?: MotobombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motobombas to fetch.
     */
    orderBy?: MotobombaOrderByWithRelationInput | MotobombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotobombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motobombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motobombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motobombas
    **/
    _count?: true | MotobombaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotobombaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotobombaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotobombaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotobombaMaxAggregateInputType
  }

  export type GetMotobombaAggregateType<T extends MotobombaAggregateArgs> = {
        [P in keyof T & keyof AggregateMotobomba]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotobomba[P]>
      : GetScalarType<T[P], AggregateMotobomba[P]>
  }




  export type MotobombaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotobombaWhereInput
    orderBy?: MotobombaOrderByWithAggregationInput | MotobombaOrderByWithAggregationInput[]
    by: MotobombaScalarFieldEnum[] | MotobombaScalarFieldEnum
    having?: MotobombaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotobombaCountAggregateInputType | true
    _avg?: MotobombaAvgAggregateInputType
    _sum?: MotobombaSumAggregateInputType
    _min?: MotobombaMinAggregateInputType
    _max?: MotobombaMaxAggregateInputType
  }

  export type MotobombaGroupByOutputType = {
    id: number
    codigoIdentificacao: string
    modelo: string
    marcaId: number
    cv: string
    isAtivo: boolean
    criadoEm: Date
    _count: MotobombaCountAggregateOutputType | null
    _avg: MotobombaAvgAggregateOutputType | null
    _sum: MotobombaSumAggregateOutputType | null
    _min: MotobombaMinAggregateOutputType | null
    _max: MotobombaMaxAggregateOutputType | null
  }

  type GetMotobombaGroupByPayload<T extends MotobombaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotobombaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotobombaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotobombaGroupByOutputType[P]>
            : GetScalarType<T[P], MotobombaGroupByOutputType[P]>
        }
      >
    >


  export type MotobombaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoIdentificacao?: boolean
    modelo?: boolean
    marcaId?: boolean
    cv?: boolean
    isAtivo?: boolean
    criadoEm?: boolean
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
    assistencias?: boolean | Motobomba$assistenciasArgs<ExtArgs>
    _count?: boolean | MotobombaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motobomba"]>

  export type MotobombaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoIdentificacao?: boolean
    modelo?: boolean
    marcaId?: boolean
    cv?: boolean
    isAtivo?: boolean
    criadoEm?: boolean
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motobomba"]>

  export type MotobombaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigoIdentificacao?: boolean
    modelo?: boolean
    marcaId?: boolean
    cv?: boolean
    isAtivo?: boolean
    criadoEm?: boolean
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motobomba"]>

  export type MotobombaSelectScalar = {
    id?: boolean
    codigoIdentificacao?: boolean
    modelo?: boolean
    marcaId?: boolean
    cv?: boolean
    isAtivo?: boolean
    criadoEm?: boolean
  }

  export type MotobombaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigoIdentificacao" | "modelo" | "marcaId" | "cv" | "isAtivo" | "criadoEm", ExtArgs["result"]["motobomba"]>
  export type MotobombaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
    assistencias?: boolean | Motobomba$assistenciasArgs<ExtArgs>
    _count?: boolean | MotobombaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotobombaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }
  export type MotobombaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaDefaultArgs<ExtArgs>
  }

  export type $MotobombaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motobomba"
    objects: {
      marca: Prisma.$MarcaPayload<ExtArgs>
      assistencias: Prisma.$AssistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigoIdentificacao: string
      modelo: string
      marcaId: number
      cv: string
      isAtivo: boolean
      criadoEm: Date
    }, ExtArgs["result"]["motobomba"]>
    composites: {}
  }

  type MotobombaGetPayload<S extends boolean | null | undefined | MotobombaDefaultArgs> = $Result.GetResult<Prisma.$MotobombaPayload, S>

  type MotobombaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotobombaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotobombaCountAggregateInputType | true
    }

  export interface MotobombaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motobomba'], meta: { name: 'Motobomba' } }
    /**
     * Find zero or one Motobomba that matches the filter.
     * @param {MotobombaFindUniqueArgs} args - Arguments to find a Motobomba
     * @example
     * // Get one Motobomba
     * const motobomba = await prisma.motobomba.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotobombaFindUniqueArgs>(args: SelectSubset<T, MotobombaFindUniqueArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motobomba that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotobombaFindUniqueOrThrowArgs} args - Arguments to find a Motobomba
     * @example
     * // Get one Motobomba
     * const motobomba = await prisma.motobomba.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotobombaFindUniqueOrThrowArgs>(args: SelectSubset<T, MotobombaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motobomba that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaFindFirstArgs} args - Arguments to find a Motobomba
     * @example
     * // Get one Motobomba
     * const motobomba = await prisma.motobomba.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotobombaFindFirstArgs>(args?: SelectSubset<T, MotobombaFindFirstArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motobomba that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaFindFirstOrThrowArgs} args - Arguments to find a Motobomba
     * @example
     * // Get one Motobomba
     * const motobomba = await prisma.motobomba.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotobombaFindFirstOrThrowArgs>(args?: SelectSubset<T, MotobombaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motobombas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motobombas
     * const motobombas = await prisma.motobomba.findMany()
     * 
     * // Get first 10 Motobombas
     * const motobombas = await prisma.motobomba.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motobombaWithIdOnly = await prisma.motobomba.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotobombaFindManyArgs>(args?: SelectSubset<T, MotobombaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motobomba.
     * @param {MotobombaCreateArgs} args - Arguments to create a Motobomba.
     * @example
     * // Create one Motobomba
     * const Motobomba = await prisma.motobomba.create({
     *   data: {
     *     // ... data to create a Motobomba
     *   }
     * })
     * 
     */
    create<T extends MotobombaCreateArgs>(args: SelectSubset<T, MotobombaCreateArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motobombas.
     * @param {MotobombaCreateManyArgs} args - Arguments to create many Motobombas.
     * @example
     * // Create many Motobombas
     * const motobomba = await prisma.motobomba.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotobombaCreateManyArgs>(args?: SelectSubset<T, MotobombaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motobombas and returns the data saved in the database.
     * @param {MotobombaCreateManyAndReturnArgs} args - Arguments to create many Motobombas.
     * @example
     * // Create many Motobombas
     * const motobomba = await prisma.motobomba.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motobombas and only return the `id`
     * const motobombaWithIdOnly = await prisma.motobomba.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotobombaCreateManyAndReturnArgs>(args?: SelectSubset<T, MotobombaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motobomba.
     * @param {MotobombaDeleteArgs} args - Arguments to delete one Motobomba.
     * @example
     * // Delete one Motobomba
     * const Motobomba = await prisma.motobomba.delete({
     *   where: {
     *     // ... filter to delete one Motobomba
     *   }
     * })
     * 
     */
    delete<T extends MotobombaDeleteArgs>(args: SelectSubset<T, MotobombaDeleteArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motobomba.
     * @param {MotobombaUpdateArgs} args - Arguments to update one Motobomba.
     * @example
     * // Update one Motobomba
     * const motobomba = await prisma.motobomba.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotobombaUpdateArgs>(args: SelectSubset<T, MotobombaUpdateArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motobombas.
     * @param {MotobombaDeleteManyArgs} args - Arguments to filter Motobombas to delete.
     * @example
     * // Delete a few Motobombas
     * const { count } = await prisma.motobomba.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotobombaDeleteManyArgs>(args?: SelectSubset<T, MotobombaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motobombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motobombas
     * const motobomba = await prisma.motobomba.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotobombaUpdateManyArgs>(args: SelectSubset<T, MotobombaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motobombas and returns the data updated in the database.
     * @param {MotobombaUpdateManyAndReturnArgs} args - Arguments to update many Motobombas.
     * @example
     * // Update many Motobombas
     * const motobomba = await prisma.motobomba.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motobombas and only return the `id`
     * const motobombaWithIdOnly = await prisma.motobomba.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotobombaUpdateManyAndReturnArgs>(args: SelectSubset<T, MotobombaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motobomba.
     * @param {MotobombaUpsertArgs} args - Arguments to update or create a Motobomba.
     * @example
     * // Update or create a Motobomba
     * const motobomba = await prisma.motobomba.upsert({
     *   create: {
     *     // ... data to create a Motobomba
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motobomba we want to update
     *   }
     * })
     */
    upsert<T extends MotobombaUpsertArgs>(args: SelectSubset<T, MotobombaUpsertArgs<ExtArgs>>): Prisma__MotobombaClient<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motobombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaCountArgs} args - Arguments to filter Motobombas to count.
     * @example
     * // Count the number of Motobombas
     * const count = await prisma.motobomba.count({
     *   where: {
     *     // ... the filter for the Motobombas we want to count
     *   }
     * })
    **/
    count<T extends MotobombaCountArgs>(
      args?: Subset<T, MotobombaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotobombaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motobomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MotobombaAggregateArgs>(args: Subset<T, MotobombaAggregateArgs>): Prisma.PrismaPromise<GetMotobombaAggregateType<T>>

    /**
     * Group by Motobomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotobombaGroupByArgs} args - Group by arguments.
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
      T extends MotobombaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotobombaGroupByArgs['orderBy'] }
        : { orderBy?: MotobombaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MotobombaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotobombaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motobomba model
   */
  readonly fields: MotobombaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motobomba.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotobombaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marca<T extends MarcaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaDefaultArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assistencias<T extends Motobomba$assistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Motobomba$assistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Motobomba model
   */
  interface MotobombaFieldRefs {
    readonly id: FieldRef<"Motobomba", 'Int'>
    readonly codigoIdentificacao: FieldRef<"Motobomba", 'String'>
    readonly modelo: FieldRef<"Motobomba", 'String'>
    readonly marcaId: FieldRef<"Motobomba", 'Int'>
    readonly cv: FieldRef<"Motobomba", 'String'>
    readonly isAtivo: FieldRef<"Motobomba", 'Boolean'>
    readonly criadoEm: FieldRef<"Motobomba", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Motobomba findUnique
   */
  export type MotobombaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter, which Motobomba to fetch.
     */
    where: MotobombaWhereUniqueInput
  }

  /**
   * Motobomba findUniqueOrThrow
   */
  export type MotobombaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter, which Motobomba to fetch.
     */
    where: MotobombaWhereUniqueInput
  }

  /**
   * Motobomba findFirst
   */
  export type MotobombaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter, which Motobomba to fetch.
     */
    where?: MotobombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motobombas to fetch.
     */
    orderBy?: MotobombaOrderByWithRelationInput | MotobombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motobombas.
     */
    cursor?: MotobombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motobombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motobombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motobombas.
     */
    distinct?: MotobombaScalarFieldEnum | MotobombaScalarFieldEnum[]
  }

  /**
   * Motobomba findFirstOrThrow
   */
  export type MotobombaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter, which Motobomba to fetch.
     */
    where?: MotobombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motobombas to fetch.
     */
    orderBy?: MotobombaOrderByWithRelationInput | MotobombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motobombas.
     */
    cursor?: MotobombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motobombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motobombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motobombas.
     */
    distinct?: MotobombaScalarFieldEnum | MotobombaScalarFieldEnum[]
  }

  /**
   * Motobomba findMany
   */
  export type MotobombaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter, which Motobombas to fetch.
     */
    where?: MotobombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motobombas to fetch.
     */
    orderBy?: MotobombaOrderByWithRelationInput | MotobombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motobombas.
     */
    cursor?: MotobombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motobombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motobombas.
     */
    skip?: number
    distinct?: MotobombaScalarFieldEnum | MotobombaScalarFieldEnum[]
  }

  /**
   * Motobomba create
   */
  export type MotobombaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * The data needed to create a Motobomba.
     */
    data: XOR<MotobombaCreateInput, MotobombaUncheckedCreateInput>
  }

  /**
   * Motobomba createMany
   */
  export type MotobombaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motobombas.
     */
    data: MotobombaCreateManyInput | MotobombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motobomba createManyAndReturn
   */
  export type MotobombaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * The data used to create many Motobombas.
     */
    data: MotobombaCreateManyInput | MotobombaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motobomba update
   */
  export type MotobombaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * The data needed to update a Motobomba.
     */
    data: XOR<MotobombaUpdateInput, MotobombaUncheckedUpdateInput>
    /**
     * Choose, which Motobomba to update.
     */
    where: MotobombaWhereUniqueInput
  }

  /**
   * Motobomba updateMany
   */
  export type MotobombaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motobombas.
     */
    data: XOR<MotobombaUpdateManyMutationInput, MotobombaUncheckedUpdateManyInput>
    /**
     * Filter which Motobombas to update
     */
    where?: MotobombaWhereInput
    /**
     * Limit how many Motobombas to update.
     */
    limit?: number
  }

  /**
   * Motobomba updateManyAndReturn
   */
  export type MotobombaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * The data used to update Motobombas.
     */
    data: XOR<MotobombaUpdateManyMutationInput, MotobombaUncheckedUpdateManyInput>
    /**
     * Filter which Motobombas to update
     */
    where?: MotobombaWhereInput
    /**
     * Limit how many Motobombas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Motobomba upsert
   */
  export type MotobombaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * The filter to search for the Motobomba to update in case it exists.
     */
    where: MotobombaWhereUniqueInput
    /**
     * In case the Motobomba found by the `where` argument doesn't exist, create a new Motobomba with this data.
     */
    create: XOR<MotobombaCreateInput, MotobombaUncheckedCreateInput>
    /**
     * In case the Motobomba was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotobombaUpdateInput, MotobombaUncheckedUpdateInput>
  }

  /**
   * Motobomba delete
   */
  export type MotobombaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    /**
     * Filter which Motobomba to delete.
     */
    where: MotobombaWhereUniqueInput
  }

  /**
   * Motobomba deleteMany
   */
  export type MotobombaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motobombas to delete
     */
    where?: MotobombaWhereInput
    /**
     * Limit how many Motobombas to delete.
     */
    limit?: number
  }

  /**
   * Motobomba.assistencias
   */
  export type Motobomba$assistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assistencia
     */
    select?: AssistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assistencia
     */
    omit?: AssistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssistenciaInclude<ExtArgs> | null
    where?: AssistenciaWhereInput
    orderBy?: AssistenciaOrderByWithRelationInput | AssistenciaOrderByWithRelationInput[]
    cursor?: AssistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssistenciaScalarFieldEnum | AssistenciaScalarFieldEnum[]
  }

  /**
   * Motobomba without action
   */
  export type MotobombaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
  }


  /**
   * Model Marca
   */

  export type AggregateMarca = {
    _count: MarcaCountAggregateOutputType | null
    _avg: MarcaAvgAggregateOutputType | null
    _sum: MarcaSumAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  export type MarcaAvgAggregateOutputType = {
    id: number | null
  }

  export type MarcaSumAggregateOutputType = {
    id: number | null
  }

  export type MarcaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type MarcaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type MarcaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type MarcaAvgAggregateInputType = {
    id?: true
  }

  export type MarcaSumAggregateInputType = {
    id?: true
  }

  export type MarcaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type MarcaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type MarcaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type MarcaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marca to aggregate.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marcas
    **/
    _count?: true | MarcaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaMaxAggregateInputType
  }

  export type GetMarcaAggregateType<T extends MarcaAggregateArgs> = {
        [P in keyof T & keyof AggregateMarca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarca[P]>
      : GetScalarType<T[P], AggregateMarca[P]>
  }




  export type MarcaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaWhereInput
    orderBy?: MarcaOrderByWithAggregationInput | MarcaOrderByWithAggregationInput[]
    by: MarcaScalarFieldEnum[] | MarcaScalarFieldEnum
    having?: MarcaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaCountAggregateInputType | true
    _avg?: MarcaAvgAggregateInputType
    _sum?: MarcaSumAggregateInputType
    _min?: MarcaMinAggregateInputType
    _max?: MarcaMaxAggregateInputType
  }

  export type MarcaGroupByOutputType = {
    id: number
    nome: string
    _count: MarcaCountAggregateOutputType | null
    _avg: MarcaAvgAggregateOutputType | null
    _sum: MarcaSumAggregateOutputType | null
    _min: MarcaMinAggregateOutputType | null
    _max: MarcaMaxAggregateOutputType | null
  }

  type GetMarcaGroupByPayload<T extends MarcaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaGroupByOutputType[P]>
        }
      >
    >


  export type MarcaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    motobombas?: boolean | Marca$motobombasArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["marca"]>

  export type MarcaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type MarcaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["marca"]>
  export type MarcaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    motobombas?: boolean | Marca$motobombasArgs<ExtArgs>
    _count?: boolean | MarcaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarcaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarcaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarcaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marca"
    objects: {
      motobombas: Prisma.$MotobombaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["marca"]>
    composites: {}
  }

  type MarcaGetPayload<S extends boolean | null | undefined | MarcaDefaultArgs> = $Result.GetResult<Prisma.$MarcaPayload, S>

  type MarcaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaCountAggregateInputType | true
    }

  export interface MarcaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marca'], meta: { name: 'Marca' } }
    /**
     * Find zero or one Marca that matches the filter.
     * @param {MarcaFindUniqueArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaFindUniqueArgs>(args: SelectSubset<T, MarcaFindUniqueArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaFindUniqueOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaFindFirstArgs>(args?: SelectSubset<T, MarcaFindFirstArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindFirstOrThrowArgs} args - Arguments to find a Marca
     * @example
     * // Get one Marca
     * const marca = await prisma.marca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marca.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcaWithIdOnly = await prisma.marca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcaFindManyArgs>(args?: SelectSubset<T, MarcaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marca.
     * @param {MarcaCreateArgs} args - Arguments to create a Marca.
     * @example
     * // Create one Marca
     * const Marca = await prisma.marca.create({
     *   data: {
     *     // ... data to create a Marca
     *   }
     * })
     * 
     */
    create<T extends MarcaCreateArgs>(args: SelectSubset<T, MarcaCreateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {MarcaCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaCreateManyArgs>(args?: SelectSubset<T, MarcaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {MarcaCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marca = await prisma.marca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marca.
     * @param {MarcaDeleteArgs} args - Arguments to delete one Marca.
     * @example
     * // Delete one Marca
     * const Marca = await prisma.marca.delete({
     *   where: {
     *     // ... filter to delete one Marca
     *   }
     * })
     * 
     */
    delete<T extends MarcaDeleteArgs>(args: SelectSubset<T, MarcaDeleteArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marca.
     * @param {MarcaUpdateArgs} args - Arguments to update one Marca.
     * @example
     * // Update one Marca
     * const marca = await prisma.marca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaUpdateArgs>(args: SelectSubset<T, MarcaUpdateArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {MarcaDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaDeleteManyArgs>(args?: SelectSubset<T, MarcaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaUpdateManyArgs>(args: SelectSubset<T, MarcaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {MarcaUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marca = await prisma.marca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `id`
     * const marcaWithIdOnly = await prisma.marca.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarcaUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marca.
     * @param {MarcaUpsertArgs} args - Arguments to update or create a Marca.
     * @example
     * // Update or create a Marca
     * const marca = await prisma.marca.upsert({
     *   create: {
     *     // ... data to create a Marca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marca we want to update
     *   }
     * })
     */
    upsert<T extends MarcaUpsertArgs>(args: SelectSubset<T, MarcaUpsertArgs<ExtArgs>>): Prisma__MarcaClient<$Result.GetResult<Prisma.$MarcaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marca.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends MarcaCountArgs>(
      args?: Subset<T, MarcaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcaAggregateArgs>(args: Subset<T, MarcaAggregateArgs>): Prisma.PrismaPromise<GetMarcaAggregateType<T>>

    /**
     * Group by Marca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaGroupByArgs} args - Group by arguments.
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
      T extends MarcaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaGroupByArgs['orderBy'] }
        : { orderBy?: MarcaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marca model
   */
  readonly fields: MarcaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    motobombas<T extends Marca$motobombasArgs<ExtArgs> = {}>(args?: Subset<T, Marca$motobombasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotobombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marca model
   */
  interface MarcaFieldRefs {
    readonly id: FieldRef<"Marca", 'Int'>
    readonly nome: FieldRef<"Marca", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Marca findUnique
   */
  export type MarcaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findUniqueOrThrow
   */
  export type MarcaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca findFirst
   */
  export type MarcaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findFirstOrThrow
   */
  export type MarcaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marca to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcas.
     */
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca findMany
   */
  export type MarcaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter, which Marcas to fetch.
     */
    where?: MarcaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcas to fetch.
     */
    orderBy?: MarcaOrderByWithRelationInput | MarcaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marcas.
     */
    cursor?: MarcaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcas.
     */
    skip?: number
    distinct?: MarcaScalarFieldEnum | MarcaScalarFieldEnum[]
  }

  /**
   * Marca create
   */
  export type MarcaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to create a Marca.
     */
    data: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
  }

  /**
   * Marca createMany
   */
  export type MarcaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca createManyAndReturn
   */
  export type MarcaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to create many Marcas.
     */
    data: MarcaCreateManyInput | MarcaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marca update
   */
  export type MarcaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The data needed to update a Marca.
     */
    data: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
    /**
     * Choose, which Marca to update.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca updateMany
   */
  export type MarcaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca updateManyAndReturn
   */
  export type MarcaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * The data used to update Marcas.
     */
    data: XOR<MarcaUpdateManyMutationInput, MarcaUncheckedUpdateManyInput>
    /**
     * Filter which Marcas to update
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to update.
     */
    limit?: number
  }

  /**
   * Marca upsert
   */
  export type MarcaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * The filter to search for the Marca to update in case it exists.
     */
    where: MarcaWhereUniqueInput
    /**
     * In case the Marca found by the `where` argument doesn't exist, create a new Marca with this data.
     */
    create: XOR<MarcaCreateInput, MarcaUncheckedCreateInput>
    /**
     * In case the Marca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaUpdateInput, MarcaUncheckedUpdateInput>
  }

  /**
   * Marca delete
   */
  export type MarcaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
    /**
     * Filter which Marca to delete.
     */
    where: MarcaWhereUniqueInput
  }

  /**
   * Marca deleteMany
   */
  export type MarcaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcas to delete
     */
    where?: MarcaWhereInput
    /**
     * Limit how many Marcas to delete.
     */
    limit?: number
  }

  /**
   * Marca.motobombas
   */
  export type Marca$motobombasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motobomba
     */
    select?: MotobombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motobomba
     */
    omit?: MotobombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotobombaInclude<ExtArgs> | null
    where?: MotobombaWhereInput
    orderBy?: MotobombaOrderByWithRelationInput | MotobombaOrderByWithRelationInput[]
    cursor?: MotobombaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MotobombaScalarFieldEnum | MotobombaScalarFieldEnum[]
  }

  /**
   * Marca without action
   */
  export type MarcaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marca
     */
    select?: MarcaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marca
     */
    omit?: MarcaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    telefone: 'telefone',
    isAtivo: 'isAtivo',
    atualizadoEm: 'atualizadoEm',
    criadoEm: 'criadoEm'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    cidade: 'cidade',
    estado: 'estado',
    hectare: 'hectare',
    coordenadasGeograficas: 'coordenadasGeograficas',
    kmLojaCliente: 'kmLojaCliente',
    referencia: 'referencia',
    descricao: 'descricao',
    atualizadoEm: 'atualizadoEm',
    criadoEm: 'criadoEm'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    roleId: 'roleId',
    atualizadoEm: 'atualizadoEm',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    sigla: 'sigla'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const AnexoScalarFieldEnum: {
    id: 'id',
    historicoOsId: 'historicoOsId',
    tipoAnexoId: 'tipoAnexoId',
    url: 'url',
    descricao: 'descricao',
    criadoEm: 'criadoEm'
  };

  export type AnexoScalarFieldEnum = (typeof AnexoScalarFieldEnum)[keyof typeof AnexoScalarFieldEnum]


  export const EtapaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type EtapaScalarFieldEnum = (typeof EtapaScalarFieldEnum)[keyof typeof EtapaScalarFieldEnum]


  export const EtapaUsuarioScalarFieldEnum: {
    etapaId: 'etapaId',
    usuarioId: 'usuarioId'
  };

  export type EtapaUsuarioScalarFieldEnum = (typeof EtapaUsuarioScalarFieldEnum)[keyof typeof EtapaUsuarioScalarFieldEnum]


  export const OrdemServicoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    hasAutomacao: 'hasAutomacao',
    hasOrcamento_banco: 'hasOrcamento_banco',
    hasProjetoPlantio: 'hasProjetoPlantio',
    quantidadeSetores: 'quantidadeSetores',
    criadoEm: 'criadoEm'
  };

  export type OrdemServicoScalarFieldEnum = (typeof OrdemServicoScalarFieldEnum)[keyof typeof OrdemServicoScalarFieldEnum]


  export const AssistenciaScalarFieldEnum: {
    ordemServicoId: 'ordemServicoId',
    problema: 'problema',
    tipoEnergiaId: 'tipoEnergiaId',
    motobombaId: 'motobombaId',
    polegadasValvulasRegistro: 'polegadasValvulasRegistro',
    diametroAdutoraMestre: 'diametroAdutoraMestre',
    observacoes: 'observacoes',
    criadoEm: 'criadoEm'
  };

  export type AssistenciaScalarFieldEnum = (typeof AssistenciaScalarFieldEnum)[keyof typeof AssistenciaScalarFieldEnum]


  export const HistoricoOSScalarFieldEnum: {
    id: 'id',
    ordemServicoId: 'ordemServicoId',
    etapaId: 'etapaId',
    observacoes: 'observacoes',
    criadoEm: 'criadoEm'
  };

  export type HistoricoOSScalarFieldEnum = (typeof HistoricoOSScalarFieldEnum)[keyof typeof HistoricoOSScalarFieldEnum]


  export const AtribuicaoScalarFieldEnum: {
    historicoOsId: 'historicoOsId',
    usuarioId: 'usuarioId'
  };

  export type AtribuicaoScalarFieldEnum = (typeof AtribuicaoScalarFieldEnum)[keyof typeof AtribuicaoScalarFieldEnum]


  export const TipoAnexoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type TipoAnexoScalarFieldEnum = (typeof TipoAnexoScalarFieldEnum)[keyof typeof TipoAnexoScalarFieldEnum]


  export const TipoEnergiaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type TipoEnergiaScalarFieldEnum = (typeof TipoEnergiaScalarFieldEnum)[keyof typeof TipoEnergiaScalarFieldEnum]


  export const MotobombaScalarFieldEnum: {
    id: 'id',
    codigoIdentificacao: 'codigoIdentificacao',
    modelo: 'modelo',
    marcaId: 'marcaId',
    cv: 'cv',
    isAtivo: 'isAtivo',
    criadoEm: 'criadoEm'
  };

  export type MotobombaScalarFieldEnum = (typeof MotobombaScalarFieldEnum)[keyof typeof MotobombaScalarFieldEnum]


  export const MarcaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type MarcaScalarFieldEnum = (typeof MarcaScalarFieldEnum)[keyof typeof MarcaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    isAtivo?: BoolFilter<"Cliente"> | boolean
    atualizadoEm?: DateTimeFilter<"Cliente"> | Date | string
    criadoEm?: DateTimeFilter<"Cliente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    ordemServico?: OrdemServicoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isAtivo?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    ordemServico?: OrdemServicoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    isAtivo?: BoolFilter<"Cliente"> | boolean
    atualizadoEm?: DateTimeFilter<"Cliente"> | Date | string
    criadoEm?: DateTimeFilter<"Cliente"> | Date | string
    enderecos?: EnderecoListRelationFilter
    ordemServico?: OrdemServicoListRelationFilter
  }, "id" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isAtivo?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    isAtivo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    atualizadoEm?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    criadoEm?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: IntFilter<"Endereco"> | number
    clienteId?: IntFilter<"Endereco"> | number
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    hectare?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: StringNullableFilter<"Endereco"> | string | null
    kmLojaCliente?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"Endereco"> | string | null
    descricao?: StringNullableFilter<"Endereco"> | string | null
    atualizadoEm?: DateTimeFilter<"Endereco"> | Date | string
    criadoEm?: DateTimeFilter<"Endereco"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    hectare?: SortOrderInput | SortOrder
    coordenadasGeograficas?: SortOrderInput | SortOrder
    kmLojaCliente?: SortOrderInput | SortOrder
    referencia?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    clienteId?: IntFilter<"Endereco"> | number
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    hectare?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: StringNullableFilter<"Endereco"> | string | null
    kmLojaCliente?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"Endereco"> | string | null
    descricao?: StringNullableFilter<"Endereco"> | string | null
    atualizadoEm?: DateTimeFilter<"Endereco"> | Date | string
    criadoEm?: DateTimeFilter<"Endereco"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    hectare?: SortOrderInput | SortOrder
    coordenadasGeograficas?: SortOrderInput | SortOrder
    kmLojaCliente?: SortOrderInput | SortOrder
    referencia?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endereco"> | number
    clienteId?: IntWithAggregatesFilter<"Endereco"> | number
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    estado?: StringWithAggregatesFilter<"Endereco"> | string
    hectare?: DecimalNullableWithAggregatesFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    kmLojaCliente?: DecimalNullableWithAggregatesFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Endereco"> | Date | string
    criadoEm?: DateTimeWithAggregatesFilter<"Endereco"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    roleId?: IntFilter<"Usuario"> | number
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    etapaUsuario?: EtapaUsuarioListRelationFilter
    atribuicoes?: AtribuicaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    roleId?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    role?: RoleOrderByWithRelationInput
    etapaUsuario?: EtapaUsuarioOrderByRelationAggregateInput
    atribuicoes?: AtribuicaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    roleId?: IntFilter<"Usuario"> | number
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    etapaUsuario?: EtapaUsuarioListRelationFilter
    atribuicoes?: AtribuicaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    roleId?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    roleId?: IntWithAggregatesFilter<"Usuario"> | number
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    sigla?: StringFilter<"Role"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    sigla?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sigla?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    usuarios?: UsuarioListRelationFilter
  }, "id" | "sigla">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    sigla?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    sigla?: StringWithAggregatesFilter<"Role"> | string
  }

  export type AnexoWhereInput = {
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    id?: StringFilter<"Anexo"> | string
    historicoOsId?: StringFilter<"Anexo"> | string
    tipoAnexoId?: IntFilter<"Anexo"> | number
    url?: StringFilter<"Anexo"> | string
    descricao?: StringNullableFilter<"Anexo"> | string | null
    criadoEm?: DateTimeFilter<"Anexo"> | Date | string
    historicoOs?: XOR<HistoricoOSScalarRelationFilter, HistoricoOSWhereInput>
    tipoAnexo?: XOR<TipoAnexoScalarRelationFilter, TipoAnexoWhereInput>
  }

  export type AnexoOrderByWithRelationInput = {
    id?: SortOrder
    historicoOsId?: SortOrder
    tipoAnexoId?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    historicoOs?: HistoricoOSOrderByWithRelationInput
    tipoAnexo?: TipoAnexoOrderByWithRelationInput
  }

  export type AnexoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnexoWhereInput | AnexoWhereInput[]
    OR?: AnexoWhereInput[]
    NOT?: AnexoWhereInput | AnexoWhereInput[]
    historicoOsId?: StringFilter<"Anexo"> | string
    tipoAnexoId?: IntFilter<"Anexo"> | number
    url?: StringFilter<"Anexo"> | string
    descricao?: StringNullableFilter<"Anexo"> | string | null
    criadoEm?: DateTimeFilter<"Anexo"> | Date | string
    historicoOs?: XOR<HistoricoOSScalarRelationFilter, HistoricoOSWhereInput>
    tipoAnexo?: XOR<TipoAnexoScalarRelationFilter, TipoAnexoWhereInput>
  }, "id">

  export type AnexoOrderByWithAggregationInput = {
    id?: SortOrder
    historicoOsId?: SortOrder
    tipoAnexoId?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: AnexoCountOrderByAggregateInput
    _avg?: AnexoAvgOrderByAggregateInput
    _max?: AnexoMaxOrderByAggregateInput
    _min?: AnexoMinOrderByAggregateInput
    _sum?: AnexoSumOrderByAggregateInput
  }

  export type AnexoScalarWhereWithAggregatesInput = {
    AND?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    OR?: AnexoScalarWhereWithAggregatesInput[]
    NOT?: AnexoScalarWhereWithAggregatesInput | AnexoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Anexo"> | string
    historicoOsId?: StringWithAggregatesFilter<"Anexo"> | string
    tipoAnexoId?: IntWithAggregatesFilter<"Anexo"> | number
    url?: StringWithAggregatesFilter<"Anexo"> | string
    descricao?: StringNullableWithAggregatesFilter<"Anexo"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Anexo"> | Date | string
  }

  export type EtapaWhereInput = {
    AND?: EtapaWhereInput | EtapaWhereInput[]
    OR?: EtapaWhereInput[]
    NOT?: EtapaWhereInput | EtapaWhereInput[]
    id?: IntFilter<"Etapa"> | number
    descricao?: StringFilter<"Etapa"> | string
    etapaUsuario?: EtapaUsuarioListRelationFilter
    historicoOs?: HistoricoOSListRelationFilter
  }

  export type EtapaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    etapaUsuario?: EtapaUsuarioOrderByRelationAggregateInput
    historicoOs?: HistoricoOSOrderByRelationAggregateInput
  }

  export type EtapaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EtapaWhereInput | EtapaWhereInput[]
    OR?: EtapaWhereInput[]
    NOT?: EtapaWhereInput | EtapaWhereInput[]
    descricao?: StringFilter<"Etapa"> | string
    etapaUsuario?: EtapaUsuarioListRelationFilter
    historicoOs?: HistoricoOSListRelationFilter
  }, "id">

  export type EtapaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: EtapaCountOrderByAggregateInput
    _avg?: EtapaAvgOrderByAggregateInput
    _max?: EtapaMaxOrderByAggregateInput
    _min?: EtapaMinOrderByAggregateInput
    _sum?: EtapaSumOrderByAggregateInput
  }

  export type EtapaScalarWhereWithAggregatesInput = {
    AND?: EtapaScalarWhereWithAggregatesInput | EtapaScalarWhereWithAggregatesInput[]
    OR?: EtapaScalarWhereWithAggregatesInput[]
    NOT?: EtapaScalarWhereWithAggregatesInput | EtapaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etapa"> | number
    descricao?: StringWithAggregatesFilter<"Etapa"> | string
  }

  export type EtapaUsuarioWhereInput = {
    AND?: EtapaUsuarioWhereInput | EtapaUsuarioWhereInput[]
    OR?: EtapaUsuarioWhereInput[]
    NOT?: EtapaUsuarioWhereInput | EtapaUsuarioWhereInput[]
    etapaId?: IntFilter<"EtapaUsuario"> | number
    usuarioId?: IntFilter<"EtapaUsuario"> | number
    etapa?: XOR<EtapaScalarRelationFilter, EtapaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EtapaUsuarioOrderByWithRelationInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
    etapa?: EtapaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EtapaUsuarioWhereUniqueInput = Prisma.AtLeast<{
    etapaId_usuarioId?: EtapaUsuarioEtapaIdUsuarioIdCompoundUniqueInput
    AND?: EtapaUsuarioWhereInput | EtapaUsuarioWhereInput[]
    OR?: EtapaUsuarioWhereInput[]
    NOT?: EtapaUsuarioWhereInput | EtapaUsuarioWhereInput[]
    etapaId?: IntFilter<"EtapaUsuario"> | number
    usuarioId?: IntFilter<"EtapaUsuario"> | number
    etapa?: XOR<EtapaScalarRelationFilter, EtapaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "etapaId_usuarioId">

  export type EtapaUsuarioOrderByWithAggregationInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
    _count?: EtapaUsuarioCountOrderByAggregateInput
    _avg?: EtapaUsuarioAvgOrderByAggregateInput
    _max?: EtapaUsuarioMaxOrderByAggregateInput
    _min?: EtapaUsuarioMinOrderByAggregateInput
    _sum?: EtapaUsuarioSumOrderByAggregateInput
  }

  export type EtapaUsuarioScalarWhereWithAggregatesInput = {
    AND?: EtapaUsuarioScalarWhereWithAggregatesInput | EtapaUsuarioScalarWhereWithAggregatesInput[]
    OR?: EtapaUsuarioScalarWhereWithAggregatesInput[]
    NOT?: EtapaUsuarioScalarWhereWithAggregatesInput | EtapaUsuarioScalarWhereWithAggregatesInput[]
    etapaId?: IntWithAggregatesFilter<"EtapaUsuario"> | number
    usuarioId?: IntWithAggregatesFilter<"EtapaUsuario"> | number
  }

  export type OrdemServicoWhereInput = {
    AND?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    OR?: OrdemServicoWhereInput[]
    NOT?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    id?: StringFilter<"OrdemServico"> | string
    clienteId?: IntFilter<"OrdemServico"> | number
    hasAutomacao?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasOrcamento_banco?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasProjetoPlantio?: BoolNullableFilter<"OrdemServico"> | boolean | null
    quantidadeSetores?: IntNullableFilter<"OrdemServico"> | number | null
    criadoEm?: DateTimeFilter<"OrdemServico"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    assistencia?: XOR<AssistenciaNullableScalarRelationFilter, AssistenciaWhereInput> | null
    historicoOs?: HistoricoOSListRelationFilter
  }

  export type OrdemServicoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hasAutomacao?: SortOrderInput | SortOrder
    hasOrcamento_banco?: SortOrderInput | SortOrder
    hasProjetoPlantio?: SortOrderInput | SortOrder
    quantidadeSetores?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    assistencia?: AssistenciaOrderByWithRelationInput
    historicoOs?: HistoricoOSOrderByRelationAggregateInput
  }

  export type OrdemServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    OR?: OrdemServicoWhereInput[]
    NOT?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    clienteId?: IntFilter<"OrdemServico"> | number
    hasAutomacao?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasOrcamento_banco?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasProjetoPlantio?: BoolNullableFilter<"OrdemServico"> | boolean | null
    quantidadeSetores?: IntNullableFilter<"OrdemServico"> | number | null
    criadoEm?: DateTimeFilter<"OrdemServico"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    assistencia?: XOR<AssistenciaNullableScalarRelationFilter, AssistenciaWhereInput> | null
    historicoOs?: HistoricoOSListRelationFilter
  }, "id">

  export type OrdemServicoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hasAutomacao?: SortOrderInput | SortOrder
    hasOrcamento_banco?: SortOrderInput | SortOrder
    hasProjetoPlantio?: SortOrderInput | SortOrder
    quantidadeSetores?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: OrdemServicoCountOrderByAggregateInput
    _avg?: OrdemServicoAvgOrderByAggregateInput
    _max?: OrdemServicoMaxOrderByAggregateInput
    _min?: OrdemServicoMinOrderByAggregateInput
    _sum?: OrdemServicoSumOrderByAggregateInput
  }

  export type OrdemServicoScalarWhereWithAggregatesInput = {
    AND?: OrdemServicoScalarWhereWithAggregatesInput | OrdemServicoScalarWhereWithAggregatesInput[]
    OR?: OrdemServicoScalarWhereWithAggregatesInput[]
    NOT?: OrdemServicoScalarWhereWithAggregatesInput | OrdemServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrdemServico"> | string
    clienteId?: IntWithAggregatesFilter<"OrdemServico"> | number
    hasAutomacao?: BoolNullableWithAggregatesFilter<"OrdemServico"> | boolean | null
    hasOrcamento_banco?: BoolNullableWithAggregatesFilter<"OrdemServico"> | boolean | null
    hasProjetoPlantio?: BoolNullableWithAggregatesFilter<"OrdemServico"> | boolean | null
    quantidadeSetores?: IntNullableWithAggregatesFilter<"OrdemServico"> | number | null
    criadoEm?: DateTimeWithAggregatesFilter<"OrdemServico"> | Date | string
  }

  export type AssistenciaWhereInput = {
    AND?: AssistenciaWhereInput | AssistenciaWhereInput[]
    OR?: AssistenciaWhereInput[]
    NOT?: AssistenciaWhereInput | AssistenciaWhereInput[]
    ordemServicoId?: StringFilter<"Assistencia"> | string
    problema?: StringNullableFilter<"Assistencia"> | string | null
    tipoEnergiaId?: IntNullableFilter<"Assistencia"> | number | null
    motobombaId?: IntNullableFilter<"Assistencia"> | number | null
    polegadasValvulasRegistro?: IntNullableFilter<"Assistencia"> | number | null
    diametroAdutoraMestre?: StringNullableFilter<"Assistencia"> | string | null
    observacoes?: StringNullableFilter<"Assistencia"> | string | null
    criadoEm?: DateTimeFilter<"Assistencia"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    tipoEnergia?: XOR<TipoEnergiaNullableScalarRelationFilter, TipoEnergiaWhereInput> | null
    motobomba?: XOR<MotobombaNullableScalarRelationFilter, MotobombaWhereInput> | null
  }

  export type AssistenciaOrderByWithRelationInput = {
    ordemServicoId?: SortOrder
    problema?: SortOrderInput | SortOrder
    tipoEnergiaId?: SortOrderInput | SortOrder
    motobombaId?: SortOrderInput | SortOrder
    polegadasValvulasRegistro?: SortOrderInput | SortOrder
    diametroAdutoraMestre?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    ordemServico?: OrdemServicoOrderByWithRelationInput
    tipoEnergia?: TipoEnergiaOrderByWithRelationInput
    motobomba?: MotobombaOrderByWithRelationInput
  }

  export type AssistenciaWhereUniqueInput = Prisma.AtLeast<{
    ordemServicoId?: string
    AND?: AssistenciaWhereInput | AssistenciaWhereInput[]
    OR?: AssistenciaWhereInput[]
    NOT?: AssistenciaWhereInput | AssistenciaWhereInput[]
    problema?: StringNullableFilter<"Assistencia"> | string | null
    tipoEnergiaId?: IntNullableFilter<"Assistencia"> | number | null
    motobombaId?: IntNullableFilter<"Assistencia"> | number | null
    polegadasValvulasRegistro?: IntNullableFilter<"Assistencia"> | number | null
    diametroAdutoraMestre?: StringNullableFilter<"Assistencia"> | string | null
    observacoes?: StringNullableFilter<"Assistencia"> | string | null
    criadoEm?: DateTimeFilter<"Assistencia"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    tipoEnergia?: XOR<TipoEnergiaNullableScalarRelationFilter, TipoEnergiaWhereInput> | null
    motobomba?: XOR<MotobombaNullableScalarRelationFilter, MotobombaWhereInput> | null
  }, "ordemServicoId">

  export type AssistenciaOrderByWithAggregationInput = {
    ordemServicoId?: SortOrder
    problema?: SortOrderInput | SortOrder
    tipoEnergiaId?: SortOrderInput | SortOrder
    motobombaId?: SortOrderInput | SortOrder
    polegadasValvulasRegistro?: SortOrderInput | SortOrder
    diametroAdutoraMestre?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: AssistenciaCountOrderByAggregateInput
    _avg?: AssistenciaAvgOrderByAggregateInput
    _max?: AssistenciaMaxOrderByAggregateInput
    _min?: AssistenciaMinOrderByAggregateInput
    _sum?: AssistenciaSumOrderByAggregateInput
  }

  export type AssistenciaScalarWhereWithAggregatesInput = {
    AND?: AssistenciaScalarWhereWithAggregatesInput | AssistenciaScalarWhereWithAggregatesInput[]
    OR?: AssistenciaScalarWhereWithAggregatesInput[]
    NOT?: AssistenciaScalarWhereWithAggregatesInput | AssistenciaScalarWhereWithAggregatesInput[]
    ordemServicoId?: StringWithAggregatesFilter<"Assistencia"> | string
    problema?: StringNullableWithAggregatesFilter<"Assistencia"> | string | null
    tipoEnergiaId?: IntNullableWithAggregatesFilter<"Assistencia"> | number | null
    motobombaId?: IntNullableWithAggregatesFilter<"Assistencia"> | number | null
    polegadasValvulasRegistro?: IntNullableWithAggregatesFilter<"Assistencia"> | number | null
    diametroAdutoraMestre?: StringNullableWithAggregatesFilter<"Assistencia"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Assistencia"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Assistencia"> | Date | string
  }

  export type HistoricoOSWhereInput = {
    AND?: HistoricoOSWhereInput | HistoricoOSWhereInput[]
    OR?: HistoricoOSWhereInput[]
    NOT?: HistoricoOSWhereInput | HistoricoOSWhereInput[]
    id?: StringFilter<"HistoricoOS"> | string
    ordemServicoId?: StringFilter<"HistoricoOS"> | string
    etapaId?: IntFilter<"HistoricoOS"> | number
    observacoes?: StringNullableFilter<"HistoricoOS"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoOS"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    etapa?: XOR<EtapaScalarRelationFilter, EtapaWhereInput>
    anexos?: AnexoListRelationFilter
    atribuicoes?: AtribuicaoListRelationFilter
  }

  export type HistoricoOSOrderByWithRelationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    etapaId?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    ordemServico?: OrdemServicoOrderByWithRelationInput
    etapa?: EtapaOrderByWithRelationInput
    anexos?: AnexoOrderByRelationAggregateInput
    atribuicoes?: AtribuicaoOrderByRelationAggregateInput
  }

  export type HistoricoOSWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoOSWhereInput | HistoricoOSWhereInput[]
    OR?: HistoricoOSWhereInput[]
    NOT?: HistoricoOSWhereInput | HistoricoOSWhereInput[]
    ordemServicoId?: StringFilter<"HistoricoOS"> | string
    etapaId?: IntFilter<"HistoricoOS"> | number
    observacoes?: StringNullableFilter<"HistoricoOS"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoOS"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    etapa?: XOR<EtapaScalarRelationFilter, EtapaWhereInput>
    anexos?: AnexoListRelationFilter
    atribuicoes?: AtribuicaoListRelationFilter
  }, "id">

  export type HistoricoOSOrderByWithAggregationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    etapaId?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: HistoricoOSCountOrderByAggregateInput
    _avg?: HistoricoOSAvgOrderByAggregateInput
    _max?: HistoricoOSMaxOrderByAggregateInput
    _min?: HistoricoOSMinOrderByAggregateInput
    _sum?: HistoricoOSSumOrderByAggregateInput
  }

  export type HistoricoOSScalarWhereWithAggregatesInput = {
    AND?: HistoricoOSScalarWhereWithAggregatesInput | HistoricoOSScalarWhereWithAggregatesInput[]
    OR?: HistoricoOSScalarWhereWithAggregatesInput[]
    NOT?: HistoricoOSScalarWhereWithAggregatesInput | HistoricoOSScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoOS"> | string
    ordemServicoId?: StringWithAggregatesFilter<"HistoricoOS"> | string
    etapaId?: IntWithAggregatesFilter<"HistoricoOS"> | number
    observacoes?: StringNullableWithAggregatesFilter<"HistoricoOS"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"HistoricoOS"> | Date | string
  }

  export type AtribuicaoWhereInput = {
    AND?: AtribuicaoWhereInput | AtribuicaoWhereInput[]
    OR?: AtribuicaoWhereInput[]
    NOT?: AtribuicaoWhereInput | AtribuicaoWhereInput[]
    historicoOsId?: StringFilter<"Atribuicao"> | string
    usuarioId?: IntFilter<"Atribuicao"> | number
    historicoOs?: XOR<HistoricoOSScalarRelationFilter, HistoricoOSWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AtribuicaoOrderByWithRelationInput = {
    historicoOsId?: SortOrder
    usuarioId?: SortOrder
    historicoOs?: HistoricoOSOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AtribuicaoWhereUniqueInput = Prisma.AtLeast<{
    historicoOsId_usuarioId?: AtribuicaoHistoricoOsIdUsuarioIdCompoundUniqueInput
    AND?: AtribuicaoWhereInput | AtribuicaoWhereInput[]
    OR?: AtribuicaoWhereInput[]
    NOT?: AtribuicaoWhereInput | AtribuicaoWhereInput[]
    historicoOsId?: StringFilter<"Atribuicao"> | string
    usuarioId?: IntFilter<"Atribuicao"> | number
    historicoOs?: XOR<HistoricoOSScalarRelationFilter, HistoricoOSWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "historicoOsId_usuarioId">

  export type AtribuicaoOrderByWithAggregationInput = {
    historicoOsId?: SortOrder
    usuarioId?: SortOrder
    _count?: AtribuicaoCountOrderByAggregateInput
    _avg?: AtribuicaoAvgOrderByAggregateInput
    _max?: AtribuicaoMaxOrderByAggregateInput
    _min?: AtribuicaoMinOrderByAggregateInput
    _sum?: AtribuicaoSumOrderByAggregateInput
  }

  export type AtribuicaoScalarWhereWithAggregatesInput = {
    AND?: AtribuicaoScalarWhereWithAggregatesInput | AtribuicaoScalarWhereWithAggregatesInput[]
    OR?: AtribuicaoScalarWhereWithAggregatesInput[]
    NOT?: AtribuicaoScalarWhereWithAggregatesInput | AtribuicaoScalarWhereWithAggregatesInput[]
    historicoOsId?: StringWithAggregatesFilter<"Atribuicao"> | string
    usuarioId?: IntWithAggregatesFilter<"Atribuicao"> | number
  }

  export type TipoAnexoWhereInput = {
    AND?: TipoAnexoWhereInput | TipoAnexoWhereInput[]
    OR?: TipoAnexoWhereInput[]
    NOT?: TipoAnexoWhereInput | TipoAnexoWhereInput[]
    id?: IntFilter<"TipoAnexo"> | number
    descricao?: StringFilter<"TipoAnexo"> | string
    anexos?: AnexoListRelationFilter
  }

  export type TipoAnexoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    anexos?: AnexoOrderByRelationAggregateInput
  }

  export type TipoAnexoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoAnexoWhereInput | TipoAnexoWhereInput[]
    OR?: TipoAnexoWhereInput[]
    NOT?: TipoAnexoWhereInput | TipoAnexoWhereInput[]
    descricao?: StringFilter<"TipoAnexo"> | string
    anexos?: AnexoListRelationFilter
  }, "id">

  export type TipoAnexoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: TipoAnexoCountOrderByAggregateInput
    _avg?: TipoAnexoAvgOrderByAggregateInput
    _max?: TipoAnexoMaxOrderByAggregateInput
    _min?: TipoAnexoMinOrderByAggregateInput
    _sum?: TipoAnexoSumOrderByAggregateInput
  }

  export type TipoAnexoScalarWhereWithAggregatesInput = {
    AND?: TipoAnexoScalarWhereWithAggregatesInput | TipoAnexoScalarWhereWithAggregatesInput[]
    OR?: TipoAnexoScalarWhereWithAggregatesInput[]
    NOT?: TipoAnexoScalarWhereWithAggregatesInput | TipoAnexoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoAnexo"> | number
    descricao?: StringWithAggregatesFilter<"TipoAnexo"> | string
  }

  export type TipoEnergiaWhereInput = {
    AND?: TipoEnergiaWhereInput | TipoEnergiaWhereInput[]
    OR?: TipoEnergiaWhereInput[]
    NOT?: TipoEnergiaWhereInput | TipoEnergiaWhereInput[]
    id?: IntFilter<"TipoEnergia"> | number
    descricao?: StringFilter<"TipoEnergia"> | string
    assistencias?: AssistenciaListRelationFilter
  }

  export type TipoEnergiaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    assistencias?: AssistenciaOrderByRelationAggregateInput
  }

  export type TipoEnergiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoEnergiaWhereInput | TipoEnergiaWhereInput[]
    OR?: TipoEnergiaWhereInput[]
    NOT?: TipoEnergiaWhereInput | TipoEnergiaWhereInput[]
    descricao?: StringFilter<"TipoEnergia"> | string
    assistencias?: AssistenciaListRelationFilter
  }, "id">

  export type TipoEnergiaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: TipoEnergiaCountOrderByAggregateInput
    _avg?: TipoEnergiaAvgOrderByAggregateInput
    _max?: TipoEnergiaMaxOrderByAggregateInput
    _min?: TipoEnergiaMinOrderByAggregateInput
    _sum?: TipoEnergiaSumOrderByAggregateInput
  }

  export type TipoEnergiaScalarWhereWithAggregatesInput = {
    AND?: TipoEnergiaScalarWhereWithAggregatesInput | TipoEnergiaScalarWhereWithAggregatesInput[]
    OR?: TipoEnergiaScalarWhereWithAggregatesInput[]
    NOT?: TipoEnergiaScalarWhereWithAggregatesInput | TipoEnergiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoEnergia"> | number
    descricao?: StringWithAggregatesFilter<"TipoEnergia"> | string
  }

  export type MotobombaWhereInput = {
    AND?: MotobombaWhereInput | MotobombaWhereInput[]
    OR?: MotobombaWhereInput[]
    NOT?: MotobombaWhereInput | MotobombaWhereInput[]
    id?: IntFilter<"Motobomba"> | number
    codigoIdentificacao?: StringFilter<"Motobomba"> | string
    modelo?: StringFilter<"Motobomba"> | string
    marcaId?: IntFilter<"Motobomba"> | number
    cv?: StringFilter<"Motobomba"> | string
    isAtivo?: BoolFilter<"Motobomba"> | boolean
    criadoEm?: DateTimeFilter<"Motobomba"> | Date | string
    marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    assistencias?: AssistenciaListRelationFilter
  }

  export type MotobombaOrderByWithRelationInput = {
    id?: SortOrder
    codigoIdentificacao?: SortOrder
    modelo?: SortOrder
    marcaId?: SortOrder
    cv?: SortOrder
    isAtivo?: SortOrder
    criadoEm?: SortOrder
    marca?: MarcaOrderByWithRelationInput
    assistencias?: AssistenciaOrderByRelationAggregateInput
  }

  export type MotobombaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MotobombaWhereInput | MotobombaWhereInput[]
    OR?: MotobombaWhereInput[]
    NOT?: MotobombaWhereInput | MotobombaWhereInput[]
    codigoIdentificacao?: StringFilter<"Motobomba"> | string
    modelo?: StringFilter<"Motobomba"> | string
    marcaId?: IntFilter<"Motobomba"> | number
    cv?: StringFilter<"Motobomba"> | string
    isAtivo?: BoolFilter<"Motobomba"> | boolean
    criadoEm?: DateTimeFilter<"Motobomba"> | Date | string
    marca?: XOR<MarcaScalarRelationFilter, MarcaWhereInput>
    assistencias?: AssistenciaListRelationFilter
  }, "id">

  export type MotobombaOrderByWithAggregationInput = {
    id?: SortOrder
    codigoIdentificacao?: SortOrder
    modelo?: SortOrder
    marcaId?: SortOrder
    cv?: SortOrder
    isAtivo?: SortOrder
    criadoEm?: SortOrder
    _count?: MotobombaCountOrderByAggregateInput
    _avg?: MotobombaAvgOrderByAggregateInput
    _max?: MotobombaMaxOrderByAggregateInput
    _min?: MotobombaMinOrderByAggregateInput
    _sum?: MotobombaSumOrderByAggregateInput
  }

  export type MotobombaScalarWhereWithAggregatesInput = {
    AND?: MotobombaScalarWhereWithAggregatesInput | MotobombaScalarWhereWithAggregatesInput[]
    OR?: MotobombaScalarWhereWithAggregatesInput[]
    NOT?: MotobombaScalarWhereWithAggregatesInput | MotobombaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Motobomba"> | number
    codigoIdentificacao?: StringWithAggregatesFilter<"Motobomba"> | string
    modelo?: StringWithAggregatesFilter<"Motobomba"> | string
    marcaId?: IntWithAggregatesFilter<"Motobomba"> | number
    cv?: StringWithAggregatesFilter<"Motobomba"> | string
    isAtivo?: BoolWithAggregatesFilter<"Motobomba"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Motobomba"> | Date | string
  }

  export type MarcaWhereInput = {
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    id?: IntFilter<"Marca"> | number
    nome?: StringFilter<"Marca"> | string
    motobombas?: MotobombaListRelationFilter
  }

  export type MarcaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    motobombas?: MotobombaOrderByRelationAggregateInput
  }

  export type MarcaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarcaWhereInput | MarcaWhereInput[]
    OR?: MarcaWhereInput[]
    NOT?: MarcaWhereInput | MarcaWhereInput[]
    nome?: StringFilter<"Marca"> | string
    motobombas?: MotobombaListRelationFilter
  }, "id">

  export type MarcaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: MarcaCountOrderByAggregateInput
    _avg?: MarcaAvgOrderByAggregateInput
    _max?: MarcaMaxOrderByAggregateInput
    _min?: MarcaMinOrderByAggregateInput
    _sum?: MarcaSumOrderByAggregateInput
  }

  export type MarcaScalarWhereWithAggregatesInput = {
    AND?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    OR?: MarcaScalarWhereWithAggregatesInput[]
    NOT?: MarcaScalarWhereWithAggregatesInput | MarcaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marca"> | number
    nome?: StringWithAggregatesFilter<"Marca"> | string
  }

  export type ClienteCreateInput = {
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutClienteInput
    ordemServico?: OrdemServicoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutClienteInput
    ordemServico?: OrdemServicoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutClienteNestedInput
    ordemServico?: OrdemServicoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutClienteNestedInput
    ordemServico?: OrdemServicoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateInput = {
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
    cliente: ClienteCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    clienteId: number
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type EnderecoUpdateInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoCreateManyInput = {
    id?: number
    clienteId: number
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type EnderecoUpdateManyMutationInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
    role: RoleCreateNestedOneWithoutUsuariosInput
    etapaUsuario?: EtapaUsuarioCreateNestedManyWithoutUsuarioInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    roleId: number
    atualizadoEm: Date | string
    criadoEm?: Date | string
    etapaUsuario?: EtapaUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    etapaUsuario?: EtapaUsuarioUpdateManyWithoutUsuarioNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    etapaUsuario?: EtapaUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    roleId: number
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    sigla: string
    usuarios?: UsuarioCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    sigla: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    sigla: string
  }

  export type RoleUpdateManyMutationInput = {
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type AnexoCreateInput = {
    id?: string
    url: string
    descricao?: string | null
    criadoEm?: Date | string
    historicoOs: HistoricoOSCreateNestedOneWithoutAnexosInput
    tipoAnexo: TipoAnexoCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateInput = {
    id?: string
    historicoOsId: string
    tipoAnexoId: number
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AnexoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoOs?: HistoricoOSUpdateOneRequiredWithoutAnexosNestedInput
    tipoAnexo?: TipoAnexoUpdateOneRequiredWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    historicoOsId?: StringFieldUpdateOperationsInput | string
    tipoAnexoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoCreateManyInput = {
    id?: string
    historicoOsId: string
    tipoAnexoId: number
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AnexoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    historicoOsId?: StringFieldUpdateOperationsInput | string
    tipoAnexoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtapaCreateInput = {
    descricao: string
    etapaUsuario?: EtapaUsuarioCreateNestedManyWithoutEtapaInput
    historicoOs?: HistoricoOSCreateNestedManyWithoutEtapaInput
  }

  export type EtapaUncheckedCreateInput = {
    id?: number
    descricao: string
    etapaUsuario?: EtapaUsuarioUncheckedCreateNestedManyWithoutEtapaInput
    historicoOs?: HistoricoOSUncheckedCreateNestedManyWithoutEtapaInput
  }

  export type EtapaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    etapaUsuario?: EtapaUsuarioUpdateManyWithoutEtapaNestedInput
    historicoOs?: HistoricoOSUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    etapaUsuario?: EtapaUsuarioUncheckedUpdateManyWithoutEtapaNestedInput
    historicoOs?: HistoricoOSUncheckedUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaCreateManyInput = {
    id?: number
    descricao: string
  }

  export type EtapaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaUsuarioCreateInput = {
    etapa: EtapaCreateNestedOneWithoutEtapaUsuarioInput
    usuario: UsuarioCreateNestedOneWithoutEtapaUsuarioInput
  }

  export type EtapaUsuarioUncheckedCreateInput = {
    etapaId: number
    usuarioId: number
  }

  export type EtapaUsuarioUpdateInput = {
    etapa?: EtapaUpdateOneRequiredWithoutEtapaUsuarioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutEtapaUsuarioNestedInput
  }

  export type EtapaUsuarioUncheckedUpdateInput = {
    etapaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EtapaUsuarioCreateManyInput = {
    etapaId: number
    usuarioId: number
  }

  export type EtapaUsuarioUpdateManyMutationInput = {

  }

  export type EtapaUsuarioUncheckedUpdateManyInput = {
    etapaId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdemServicoCreateInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrdemServicoInput
    assistencia?: AssistenciaCreateNestedOneWithoutOrdemServicoInput
    historicoOs?: HistoricoOSCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUncheckedCreateInput = {
    id?: string
    clienteId: number
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    assistencia?: AssistenciaUncheckedCreateNestedOneWithoutOrdemServicoInput
    historicoOs?: HistoricoOSUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrdemServicoNestedInput
    assistencia?: AssistenciaUpdateOneWithoutOrdemServicoNestedInput
    historicoOs?: HistoricoOSUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencia?: AssistenciaUncheckedUpdateOneWithoutOrdemServicoNestedInput
    historicoOs?: HistoricoOSUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoCreateManyInput = {
    id?: string
    clienteId: number
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
  }

  export type OrdemServicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaCreateInput = {
    problema?: string | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutAssistenciaInput
    tipoEnergia?: TipoEnergiaCreateNestedOneWithoutAssistenciasInput
    motobomba?: MotobombaCreateNestedOneWithoutAssistenciasInput
  }

  export type AssistenciaUncheckedCreateInput = {
    ordemServicoId: string
    problema?: string | null
    tipoEnergiaId?: number | null
    motobombaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaUpdateInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutAssistenciaNestedInput
    tipoEnergia?: TipoEnergiaUpdateOneWithoutAssistenciasNestedInput
    motobomba?: MotobombaUpdateOneWithoutAssistenciasNestedInput
  }

  export type AssistenciaUncheckedUpdateInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnergiaId?: NullableIntFieldUpdateOperationsInput | number | null
    motobombaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaCreateManyInput = {
    ordemServicoId: string
    problema?: string | null
    tipoEnergiaId?: number | null
    motobombaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaUpdateManyMutationInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaUncheckedUpdateManyInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnergiaId?: NullableIntFieldUpdateOperationsInput | number | null
    motobombaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoOSCreateInput = {
    id?: string
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutHistoricoOsInput
    etapa: EtapaCreateNestedOneWithoutHistoricoOsInput
    anexos?: AnexoCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUncheckedCreateInput = {
    id?: string
    ordemServicoId: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutHistoricoOsNestedInput
    etapa?: EtapaUpdateOneRequiredWithoutHistoricoOsNestedInput
    anexos?: AnexoUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSCreateManyInput = {
    id?: string
    ordemServicoId: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoOSUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoOSUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtribuicaoCreateInput = {
    historicoOs: HistoricoOSCreateNestedOneWithoutAtribuicoesInput
    usuario: UsuarioCreateNestedOneWithoutAtribuicoesInput
  }

  export type AtribuicaoUncheckedCreateInput = {
    historicoOsId: string
    usuarioId: number
  }

  export type AtribuicaoUpdateInput = {
    historicoOs?: HistoricoOSUpdateOneRequiredWithoutAtribuicoesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutAtribuicoesNestedInput
  }

  export type AtribuicaoUncheckedUpdateInput = {
    historicoOsId?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AtribuicaoCreateManyInput = {
    historicoOsId: string
    usuarioId: number
  }

  export type AtribuicaoUpdateManyMutationInput = {

  }

  export type AtribuicaoUncheckedUpdateManyInput = {
    historicoOsId?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoAnexoCreateInput = {
    descricao: string
    anexos?: AnexoCreateNestedManyWithoutTipoAnexoInput
  }

  export type TipoAnexoUncheckedCreateInput = {
    id?: number
    descricao: string
    anexos?: AnexoUncheckedCreateNestedManyWithoutTipoAnexoInput
  }

  export type TipoAnexoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    anexos?: AnexoUpdateManyWithoutTipoAnexoNestedInput
  }

  export type TipoAnexoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    anexos?: AnexoUncheckedUpdateManyWithoutTipoAnexoNestedInput
  }

  export type TipoAnexoCreateManyInput = {
    id?: number
    descricao: string
  }

  export type TipoAnexoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoAnexoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoEnergiaCreateInput = {
    descricao: string
    assistencias?: AssistenciaCreateNestedManyWithoutTipoEnergiaInput
  }

  export type TipoEnergiaUncheckedCreateInput = {
    id?: number
    descricao: string
    assistencias?: AssistenciaUncheckedCreateNestedManyWithoutTipoEnergiaInput
  }

  export type TipoEnergiaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    assistencias?: AssistenciaUpdateManyWithoutTipoEnergiaNestedInput
  }

  export type TipoEnergiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    assistencias?: AssistenciaUncheckedUpdateManyWithoutTipoEnergiaNestedInput
  }

  export type TipoEnergiaCreateManyInput = {
    id?: number
    descricao: string
  }

  export type TipoEnergiaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoEnergiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type MotobombaCreateInput = {
    codigoIdentificacao: string
    modelo: string
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
    marca: MarcaCreateNestedOneWithoutMotobombasInput
    assistencias?: AssistenciaCreateNestedManyWithoutMotobombaInput
  }

  export type MotobombaUncheckedCreateInput = {
    id?: number
    codigoIdentificacao: string
    modelo: string
    marcaId: number
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
    assistencias?: AssistenciaUncheckedCreateNestedManyWithoutMotobombaInput
  }

  export type MotobombaUpdateInput = {
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: MarcaUpdateOneRequiredWithoutMotobombasNestedInput
    assistencias?: AssistenciaUpdateManyWithoutMotobombaNestedInput
  }

  export type MotobombaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencias?: AssistenciaUncheckedUpdateManyWithoutMotobombaNestedInput
  }

  export type MotobombaCreateManyInput = {
    id?: number
    codigoIdentificacao: string
    modelo: string
    marcaId: number
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
  }

  export type MotobombaUpdateManyMutationInput = {
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotobombaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcaCreateInput = {
    nome: string
    motobombas?: MotobombaCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUncheckedCreateInput = {
    id?: number
    nome: string
    motobombas?: MotobombaUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motobombas?: MotobombaUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    motobombas?: MotobombaUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaCreateManyInput = {
    id?: number
    nome: string
  }

  export type MarcaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type OrdemServicoListRelationFilter = {
    every?: OrdemServicoWhereInput
    some?: OrdemServicoWhereInput
    none?: OrdemServicoWhereInput
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdemServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isAtivo?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isAtivo?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    isAtivo?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    hectare?: SortOrder
    coordenadasGeograficas?: SortOrder
    kmLojaCliente?: SortOrder
    referencia?: SortOrder
    descricao?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hectare?: SortOrder
    kmLojaCliente?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    hectare?: SortOrder
    coordenadasGeograficas?: SortOrder
    kmLojaCliente?: SortOrder
    referencia?: SortOrder
    descricao?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    hectare?: SortOrder
    coordenadasGeograficas?: SortOrder
    kmLojaCliente?: SortOrder
    referencia?: SortOrder
    descricao?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hectare?: SortOrder
    kmLojaCliente?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type EtapaUsuarioListRelationFilter = {
    every?: EtapaUsuarioWhereInput
    some?: EtapaUsuarioWhereInput
    none?: EtapaUsuarioWhereInput
  }

  export type AtribuicaoListRelationFilter = {
    every?: AtribuicaoWhereInput
    some?: AtribuicaoWhereInput
    none?: AtribuicaoWhereInput
  }

  export type EtapaUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtribuicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    roleId?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    roleId?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    roleId?: SortOrder
    atualizadoEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistoricoOSScalarRelationFilter = {
    is?: HistoricoOSWhereInput
    isNot?: HistoricoOSWhereInput
  }

  export type TipoAnexoScalarRelationFilter = {
    is?: TipoAnexoWhereInput
    isNot?: TipoAnexoWhereInput
  }

  export type AnexoCountOrderByAggregateInput = {
    id?: SortOrder
    historicoOsId?: SortOrder
    tipoAnexoId?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
  }

  export type AnexoAvgOrderByAggregateInput = {
    tipoAnexoId?: SortOrder
  }

  export type AnexoMaxOrderByAggregateInput = {
    id?: SortOrder
    historicoOsId?: SortOrder
    tipoAnexoId?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
  }

  export type AnexoMinOrderByAggregateInput = {
    id?: SortOrder
    historicoOsId?: SortOrder
    tipoAnexoId?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
  }

  export type AnexoSumOrderByAggregateInput = {
    tipoAnexoId?: SortOrder
  }

  export type HistoricoOSListRelationFilter = {
    every?: HistoricoOSWhereInput
    some?: HistoricoOSWhereInput
    none?: HistoricoOSWhereInput
  }

  export type HistoricoOSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtapaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type EtapaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type EtapaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type EtapaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EtapaScalarRelationFilter = {
    is?: EtapaWhereInput
    isNot?: EtapaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EtapaUsuarioEtapaIdUsuarioIdCompoundUniqueInput = {
    etapaId: number
    usuarioId: number
  }

  export type EtapaUsuarioCountOrderByAggregateInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EtapaUsuarioAvgOrderByAggregateInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EtapaUsuarioMaxOrderByAggregateInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EtapaUsuarioMinOrderByAggregateInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EtapaUsuarioSumOrderByAggregateInput = {
    etapaId?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssistenciaNullableScalarRelationFilter = {
    is?: AssistenciaWhereInput | null
    isNot?: AssistenciaWhereInput | null
  }

  export type OrdemServicoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hasAutomacao?: SortOrder
    hasOrcamento_banco?: SortOrder
    hasProjetoPlantio?: SortOrder
    quantidadeSetores?: SortOrder
    criadoEm?: SortOrder
  }

  export type OrdemServicoAvgOrderByAggregateInput = {
    clienteId?: SortOrder
    quantidadeSetores?: SortOrder
  }

  export type OrdemServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hasAutomacao?: SortOrder
    hasOrcamento_banco?: SortOrder
    hasProjetoPlantio?: SortOrder
    quantidadeSetores?: SortOrder
    criadoEm?: SortOrder
  }

  export type OrdemServicoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    hasAutomacao?: SortOrder
    hasOrcamento_banco?: SortOrder
    hasProjetoPlantio?: SortOrder
    quantidadeSetores?: SortOrder
    criadoEm?: SortOrder
  }

  export type OrdemServicoSumOrderByAggregateInput = {
    clienteId?: SortOrder
    quantidadeSetores?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrdemServicoScalarRelationFilter = {
    is?: OrdemServicoWhereInput
    isNot?: OrdemServicoWhereInput
  }

  export type TipoEnergiaNullableScalarRelationFilter = {
    is?: TipoEnergiaWhereInput | null
    isNot?: TipoEnergiaWhereInput | null
  }

  export type MotobombaNullableScalarRelationFilter = {
    is?: MotobombaWhereInput | null
    isNot?: MotobombaWhereInput | null
  }

  export type AssistenciaCountOrderByAggregateInput = {
    ordemServicoId?: SortOrder
    problema?: SortOrder
    tipoEnergiaId?: SortOrder
    motobombaId?: SortOrder
    polegadasValvulasRegistro?: SortOrder
    diametroAdutoraMestre?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AssistenciaAvgOrderByAggregateInput = {
    tipoEnergiaId?: SortOrder
    motobombaId?: SortOrder
    polegadasValvulasRegistro?: SortOrder
  }

  export type AssistenciaMaxOrderByAggregateInput = {
    ordemServicoId?: SortOrder
    problema?: SortOrder
    tipoEnergiaId?: SortOrder
    motobombaId?: SortOrder
    polegadasValvulasRegistro?: SortOrder
    diametroAdutoraMestre?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AssistenciaMinOrderByAggregateInput = {
    ordemServicoId?: SortOrder
    problema?: SortOrder
    tipoEnergiaId?: SortOrder
    motobombaId?: SortOrder
    polegadasValvulasRegistro?: SortOrder
    diametroAdutoraMestre?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type AssistenciaSumOrderByAggregateInput = {
    tipoEnergiaId?: SortOrder
    motobombaId?: SortOrder
    polegadasValvulasRegistro?: SortOrder
  }

  export type AnexoListRelationFilter = {
    every?: AnexoWhereInput
    some?: AnexoWhereInput
    none?: AnexoWhereInput
  }

  export type AnexoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoOSCountOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    etapaId?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoOSAvgOrderByAggregateInput = {
    etapaId?: SortOrder
  }

  export type HistoricoOSMaxOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    etapaId?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoOSMinOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    etapaId?: SortOrder
    observacoes?: SortOrder
    criadoEm?: SortOrder
  }

  export type HistoricoOSSumOrderByAggregateInput = {
    etapaId?: SortOrder
  }

  export type AtribuicaoHistoricoOsIdUsuarioIdCompoundUniqueInput = {
    historicoOsId: string
    usuarioId: number
  }

  export type AtribuicaoCountOrderByAggregateInput = {
    historicoOsId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtribuicaoAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type AtribuicaoMaxOrderByAggregateInput = {
    historicoOsId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtribuicaoMinOrderByAggregateInput = {
    historicoOsId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtribuicaoSumOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type TipoAnexoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoAnexoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoAnexoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoAnexoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoAnexoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssistenciaListRelationFilter = {
    every?: AssistenciaWhereInput
    some?: AssistenciaWhereInput
    none?: AssistenciaWhereInput
  }

  export type AssistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoEnergiaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoEnergiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoEnergiaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoEnergiaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoEnergiaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarcaScalarRelationFilter = {
    is?: MarcaWhereInput
    isNot?: MarcaWhereInput
  }

  export type MotobombaCountOrderByAggregateInput = {
    id?: SortOrder
    codigoIdentificacao?: SortOrder
    modelo?: SortOrder
    marcaId?: SortOrder
    cv?: SortOrder
    isAtivo?: SortOrder
    criadoEm?: SortOrder
  }

  export type MotobombaAvgOrderByAggregateInput = {
    id?: SortOrder
    marcaId?: SortOrder
  }

  export type MotobombaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigoIdentificacao?: SortOrder
    modelo?: SortOrder
    marcaId?: SortOrder
    cv?: SortOrder
    isAtivo?: SortOrder
    criadoEm?: SortOrder
  }

  export type MotobombaMinOrderByAggregateInput = {
    id?: SortOrder
    codigoIdentificacao?: SortOrder
    modelo?: SortOrder
    marcaId?: SortOrder
    cv?: SortOrder
    isAtivo?: SortOrder
    criadoEm?: SortOrder
  }

  export type MotobombaSumOrderByAggregateInput = {
    id?: SortOrder
    marcaId?: SortOrder
  }

  export type MotobombaListRelationFilter = {
    every?: MotobombaWhereInput
    some?: MotobombaWhereInput
    none?: MotobombaWhereInput
  }

  export type MotobombaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarcaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type MarcaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarcaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type MarcaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type MarcaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnderecoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type OrdemServicoCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput> | OrdemServicoCreateWithoutClienteInput[] | OrdemServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutClienteInput | OrdemServicoCreateOrConnectWithoutClienteInput[]
    createMany?: OrdemServicoCreateManyClienteInputEnvelope
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type OrdemServicoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput> | OrdemServicoCreateWithoutClienteInput[] | OrdemServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutClienteInput | OrdemServicoCreateOrConnectWithoutClienteInput[]
    createMany?: OrdemServicoCreateManyClienteInputEnvelope
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnderecoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutClienteInput | EnderecoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutClienteInput | EnderecoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutClienteInput | EnderecoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type OrdemServicoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput> | OrdemServicoCreateWithoutClienteInput[] | OrdemServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutClienteInput | OrdemServicoCreateOrConnectWithoutClienteInput[]
    upsert?: OrdemServicoUpsertWithWhereUniqueWithoutClienteInput | OrdemServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrdemServicoCreateManyClienteInputEnvelope
    set?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    disconnect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    delete?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    update?: OrdemServicoUpdateWithWhereUniqueWithoutClienteInput | OrdemServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrdemServicoUpdateManyWithWhereWithoutClienteInput | OrdemServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnderecoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutClienteInput | EnderecoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutClienteInput | EnderecoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutClienteInput | EnderecoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type OrdemServicoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput> | OrdemServicoCreateWithoutClienteInput[] | OrdemServicoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutClienteInput | OrdemServicoCreateOrConnectWithoutClienteInput[]
    upsert?: OrdemServicoUpsertWithWhereUniqueWithoutClienteInput | OrdemServicoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrdemServicoCreateManyClienteInputEnvelope
    set?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    disconnect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    delete?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    update?: OrdemServicoUpdateWithWhereUniqueWithoutClienteInput | OrdemServicoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrdemServicoUpdateManyWithWhereWithoutClienteInput | OrdemServicoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEnderecosInput
    connect?: ClienteWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEnderecosInput
    upsert?: ClienteUpsertWithoutEnderecosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEnderecosInput, ClienteUpdateWithoutEnderecosInput>, ClienteUncheckedUpdateWithoutEnderecosInput>
  }

  export type RoleCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuariosInput
    connect?: RoleWhereUniqueInput
  }

  export type EtapaUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput> | EtapaUsuarioCreateWithoutUsuarioInput[] | EtapaUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutUsuarioInput | EtapaUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EtapaUsuarioCreateManyUsuarioInputEnvelope
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
  }

  export type AtribuicaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput> | AtribuicaoCreateWithoutUsuarioInput[] | AtribuicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutUsuarioInput | AtribuicaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtribuicaoCreateManyUsuarioInputEnvelope
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
  }

  export type EtapaUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput> | EtapaUsuarioCreateWithoutUsuarioInput[] | EtapaUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutUsuarioInput | EtapaUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EtapaUsuarioCreateManyUsuarioInputEnvelope
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
  }

  export type AtribuicaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput> | AtribuicaoCreateWithoutUsuarioInput[] | AtribuicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutUsuarioInput | AtribuicaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AtribuicaoCreateManyUsuarioInputEnvelope
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuariosInput
    upsert?: RoleUpsertWithoutUsuariosInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsuariosInput, RoleUpdateWithoutUsuariosInput>, RoleUncheckedUpdateWithoutUsuariosInput>
  }

  export type EtapaUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput> | EtapaUsuarioCreateWithoutUsuarioInput[] | EtapaUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutUsuarioInput | EtapaUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EtapaUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EtapaUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EtapaUsuarioCreateManyUsuarioInputEnvelope
    set?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    disconnect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    delete?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    update?: EtapaUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EtapaUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EtapaUsuarioUpdateManyWithWhereWithoutUsuarioInput | EtapaUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
  }

  export type AtribuicaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput> | AtribuicaoCreateWithoutUsuarioInput[] | AtribuicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutUsuarioInput | AtribuicaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtribuicaoUpsertWithWhereUniqueWithoutUsuarioInput | AtribuicaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtribuicaoCreateManyUsuarioInputEnvelope
    set?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    disconnect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    delete?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    update?: AtribuicaoUpdateWithWhereUniqueWithoutUsuarioInput | AtribuicaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtribuicaoUpdateManyWithWhereWithoutUsuarioInput | AtribuicaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
  }

  export type EtapaUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput> | EtapaUsuarioCreateWithoutUsuarioInput[] | EtapaUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutUsuarioInput | EtapaUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EtapaUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | EtapaUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EtapaUsuarioCreateManyUsuarioInputEnvelope
    set?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    disconnect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    delete?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    update?: EtapaUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | EtapaUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EtapaUsuarioUpdateManyWithWhereWithoutUsuarioInput | EtapaUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
  }

  export type AtribuicaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput> | AtribuicaoCreateWithoutUsuarioInput[] | AtribuicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutUsuarioInput | AtribuicaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AtribuicaoUpsertWithWhereUniqueWithoutUsuarioInput | AtribuicaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AtribuicaoCreateManyUsuarioInputEnvelope
    set?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    disconnect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    delete?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    update?: AtribuicaoUpdateWithWhereUniqueWithoutUsuarioInput | AtribuicaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AtribuicaoUpdateManyWithWhereWithoutUsuarioInput | AtribuicaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRoleInput | UsuarioUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRoleInput | UsuarioUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRoleInput | UsuarioUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRoleInput | UsuarioUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRoleInput | UsuarioUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRoleInput | UsuarioUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type HistoricoOSCreateNestedOneWithoutAnexosInput = {
    create?: XOR<HistoricoOSCreateWithoutAnexosInput, HistoricoOSUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutAnexosInput
    connect?: HistoricoOSWhereUniqueInput
  }

  export type TipoAnexoCreateNestedOneWithoutAnexosInput = {
    create?: XOR<TipoAnexoCreateWithoutAnexosInput, TipoAnexoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: TipoAnexoCreateOrConnectWithoutAnexosInput
    connect?: TipoAnexoWhereUniqueInput
  }

  export type HistoricoOSUpdateOneRequiredWithoutAnexosNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutAnexosInput, HistoricoOSUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutAnexosInput
    upsert?: HistoricoOSUpsertWithoutAnexosInput
    connect?: HistoricoOSWhereUniqueInput
    update?: XOR<XOR<HistoricoOSUpdateToOneWithWhereWithoutAnexosInput, HistoricoOSUpdateWithoutAnexosInput>, HistoricoOSUncheckedUpdateWithoutAnexosInput>
  }

  export type TipoAnexoUpdateOneRequiredWithoutAnexosNestedInput = {
    create?: XOR<TipoAnexoCreateWithoutAnexosInput, TipoAnexoUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: TipoAnexoCreateOrConnectWithoutAnexosInput
    upsert?: TipoAnexoUpsertWithoutAnexosInput
    connect?: TipoAnexoWhereUniqueInput
    update?: XOR<XOR<TipoAnexoUpdateToOneWithWhereWithoutAnexosInput, TipoAnexoUpdateWithoutAnexosInput>, TipoAnexoUncheckedUpdateWithoutAnexosInput>
  }

  export type EtapaUsuarioCreateNestedManyWithoutEtapaInput = {
    create?: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput> | EtapaUsuarioCreateWithoutEtapaInput[] | EtapaUsuarioUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutEtapaInput | EtapaUsuarioCreateOrConnectWithoutEtapaInput[]
    createMany?: EtapaUsuarioCreateManyEtapaInputEnvelope
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
  }

  export type HistoricoOSCreateNestedManyWithoutEtapaInput = {
    create?: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput> | HistoricoOSCreateWithoutEtapaInput[] | HistoricoOSUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutEtapaInput | HistoricoOSCreateOrConnectWithoutEtapaInput[]
    createMany?: HistoricoOSCreateManyEtapaInputEnvelope
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
  }

  export type EtapaUsuarioUncheckedCreateNestedManyWithoutEtapaInput = {
    create?: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput> | EtapaUsuarioCreateWithoutEtapaInput[] | EtapaUsuarioUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutEtapaInput | EtapaUsuarioCreateOrConnectWithoutEtapaInput[]
    createMany?: EtapaUsuarioCreateManyEtapaInputEnvelope
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
  }

  export type HistoricoOSUncheckedCreateNestedManyWithoutEtapaInput = {
    create?: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput> | HistoricoOSCreateWithoutEtapaInput[] | HistoricoOSUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutEtapaInput | HistoricoOSCreateOrConnectWithoutEtapaInput[]
    createMany?: HistoricoOSCreateManyEtapaInputEnvelope
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
  }

  export type EtapaUsuarioUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput> | EtapaUsuarioCreateWithoutEtapaInput[] | EtapaUsuarioUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutEtapaInput | EtapaUsuarioCreateOrConnectWithoutEtapaInput[]
    upsert?: EtapaUsuarioUpsertWithWhereUniqueWithoutEtapaInput | EtapaUsuarioUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: EtapaUsuarioCreateManyEtapaInputEnvelope
    set?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    disconnect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    delete?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    update?: EtapaUsuarioUpdateWithWhereUniqueWithoutEtapaInput | EtapaUsuarioUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: EtapaUsuarioUpdateManyWithWhereWithoutEtapaInput | EtapaUsuarioUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
  }

  export type HistoricoOSUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput> | HistoricoOSCreateWithoutEtapaInput[] | HistoricoOSUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutEtapaInput | HistoricoOSCreateOrConnectWithoutEtapaInput[]
    upsert?: HistoricoOSUpsertWithWhereUniqueWithoutEtapaInput | HistoricoOSUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: HistoricoOSCreateManyEtapaInputEnvelope
    set?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    disconnect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    delete?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    update?: HistoricoOSUpdateWithWhereUniqueWithoutEtapaInput | HistoricoOSUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: HistoricoOSUpdateManyWithWhereWithoutEtapaInput | HistoricoOSUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
  }

  export type EtapaUsuarioUncheckedUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput> | EtapaUsuarioCreateWithoutEtapaInput[] | EtapaUsuarioUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: EtapaUsuarioCreateOrConnectWithoutEtapaInput | EtapaUsuarioCreateOrConnectWithoutEtapaInput[]
    upsert?: EtapaUsuarioUpsertWithWhereUniqueWithoutEtapaInput | EtapaUsuarioUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: EtapaUsuarioCreateManyEtapaInputEnvelope
    set?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    disconnect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    delete?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    connect?: EtapaUsuarioWhereUniqueInput | EtapaUsuarioWhereUniqueInput[]
    update?: EtapaUsuarioUpdateWithWhereUniqueWithoutEtapaInput | EtapaUsuarioUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: EtapaUsuarioUpdateManyWithWhereWithoutEtapaInput | EtapaUsuarioUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
  }

  export type HistoricoOSUncheckedUpdateManyWithoutEtapaNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput> | HistoricoOSCreateWithoutEtapaInput[] | HistoricoOSUncheckedCreateWithoutEtapaInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutEtapaInput | HistoricoOSCreateOrConnectWithoutEtapaInput[]
    upsert?: HistoricoOSUpsertWithWhereUniqueWithoutEtapaInput | HistoricoOSUpsertWithWhereUniqueWithoutEtapaInput[]
    createMany?: HistoricoOSCreateManyEtapaInputEnvelope
    set?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    disconnect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    delete?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    update?: HistoricoOSUpdateWithWhereUniqueWithoutEtapaInput | HistoricoOSUpdateWithWhereUniqueWithoutEtapaInput[]
    updateMany?: HistoricoOSUpdateManyWithWhereWithoutEtapaInput | HistoricoOSUpdateManyWithWhereWithoutEtapaInput[]
    deleteMany?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
  }

  export type EtapaCreateNestedOneWithoutEtapaUsuarioInput = {
    create?: XOR<EtapaCreateWithoutEtapaUsuarioInput, EtapaUncheckedCreateWithoutEtapaUsuarioInput>
    connectOrCreate?: EtapaCreateOrConnectWithoutEtapaUsuarioInput
    connect?: EtapaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutEtapaUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutEtapaUsuarioInput, UsuarioUncheckedCreateWithoutEtapaUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEtapaUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EtapaUpdateOneRequiredWithoutEtapaUsuarioNestedInput = {
    create?: XOR<EtapaCreateWithoutEtapaUsuarioInput, EtapaUncheckedCreateWithoutEtapaUsuarioInput>
    connectOrCreate?: EtapaCreateOrConnectWithoutEtapaUsuarioInput
    upsert?: EtapaUpsertWithoutEtapaUsuarioInput
    connect?: EtapaWhereUniqueInput
    update?: XOR<XOR<EtapaUpdateToOneWithWhereWithoutEtapaUsuarioInput, EtapaUpdateWithoutEtapaUsuarioInput>, EtapaUncheckedUpdateWithoutEtapaUsuarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutEtapaUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutEtapaUsuarioInput, UsuarioUncheckedCreateWithoutEtapaUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEtapaUsuarioInput
    upsert?: UsuarioUpsertWithoutEtapaUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEtapaUsuarioInput, UsuarioUpdateWithoutEtapaUsuarioInput>, UsuarioUncheckedUpdateWithoutEtapaUsuarioInput>
  }

  export type ClienteCreateNestedOneWithoutOrdemServicoInput = {
    create?: XOR<ClienteCreateWithoutOrdemServicoInput, ClienteUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrdemServicoInput
    connect?: ClienteWhereUniqueInput
  }

  export type AssistenciaCreateNestedOneWithoutOrdemServicoInput = {
    create?: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: AssistenciaCreateOrConnectWithoutOrdemServicoInput
    connect?: AssistenciaWhereUniqueInput
  }

  export type HistoricoOSCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput> | HistoricoOSCreateWithoutOrdemServicoInput[] | HistoricoOSUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutOrdemServicoInput | HistoricoOSCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: HistoricoOSCreateManyOrdemServicoInputEnvelope
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
  }

  export type AssistenciaUncheckedCreateNestedOneWithoutOrdemServicoInput = {
    create?: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: AssistenciaCreateOrConnectWithoutOrdemServicoInput
    connect?: AssistenciaWhereUniqueInput
  }

  export type HistoricoOSUncheckedCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput> | HistoricoOSCreateWithoutOrdemServicoInput[] | HistoricoOSUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutOrdemServicoInput | HistoricoOSCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: HistoricoOSCreateManyOrdemServicoInputEnvelope
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutOrdemServicoNestedInput = {
    create?: XOR<ClienteCreateWithoutOrdemServicoInput, ClienteUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrdemServicoInput
    upsert?: ClienteUpsertWithoutOrdemServicoInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutOrdemServicoInput, ClienteUpdateWithoutOrdemServicoInput>, ClienteUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type AssistenciaUpdateOneWithoutOrdemServicoNestedInput = {
    create?: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: AssistenciaCreateOrConnectWithoutOrdemServicoInput
    upsert?: AssistenciaUpsertWithoutOrdemServicoInput
    disconnect?: AssistenciaWhereInput | boolean
    delete?: AssistenciaWhereInput | boolean
    connect?: AssistenciaWhereUniqueInput
    update?: XOR<XOR<AssistenciaUpdateToOneWithWhereWithoutOrdemServicoInput, AssistenciaUpdateWithoutOrdemServicoInput>, AssistenciaUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type HistoricoOSUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput> | HistoricoOSCreateWithoutOrdemServicoInput[] | HistoricoOSUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutOrdemServicoInput | HistoricoOSCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: HistoricoOSUpsertWithWhereUniqueWithoutOrdemServicoInput | HistoricoOSUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: HistoricoOSCreateManyOrdemServicoInputEnvelope
    set?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    disconnect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    delete?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    update?: HistoricoOSUpdateWithWhereUniqueWithoutOrdemServicoInput | HistoricoOSUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: HistoricoOSUpdateManyWithWhereWithoutOrdemServicoInput | HistoricoOSUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
  }

  export type AssistenciaUncheckedUpdateOneWithoutOrdemServicoNestedInput = {
    create?: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
    connectOrCreate?: AssistenciaCreateOrConnectWithoutOrdemServicoInput
    upsert?: AssistenciaUpsertWithoutOrdemServicoInput
    disconnect?: AssistenciaWhereInput | boolean
    delete?: AssistenciaWhereInput | boolean
    connect?: AssistenciaWhereUniqueInput
    update?: XOR<XOR<AssistenciaUpdateToOneWithWhereWithoutOrdemServicoInput, AssistenciaUpdateWithoutOrdemServicoInput>, AssistenciaUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type HistoricoOSUncheckedUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput> | HistoricoOSCreateWithoutOrdemServicoInput[] | HistoricoOSUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutOrdemServicoInput | HistoricoOSCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: HistoricoOSUpsertWithWhereUniqueWithoutOrdemServicoInput | HistoricoOSUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: HistoricoOSCreateManyOrdemServicoInputEnvelope
    set?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    disconnect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    delete?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    connect?: HistoricoOSWhereUniqueInput | HistoricoOSWhereUniqueInput[]
    update?: HistoricoOSUpdateWithWhereUniqueWithoutOrdemServicoInput | HistoricoOSUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: HistoricoOSUpdateManyWithWhereWithoutOrdemServicoInput | HistoricoOSUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
  }

  export type OrdemServicoCreateNestedOneWithoutAssistenciaInput = {
    create?: XOR<OrdemServicoCreateWithoutAssistenciaInput, OrdemServicoUncheckedCreateWithoutAssistenciaInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutAssistenciaInput
    connect?: OrdemServicoWhereUniqueInput
  }

  export type TipoEnergiaCreateNestedOneWithoutAssistenciasInput = {
    create?: XOR<TipoEnergiaCreateWithoutAssistenciasInput, TipoEnergiaUncheckedCreateWithoutAssistenciasInput>
    connectOrCreate?: TipoEnergiaCreateOrConnectWithoutAssistenciasInput
    connect?: TipoEnergiaWhereUniqueInput
  }

  export type MotobombaCreateNestedOneWithoutAssistenciasInput = {
    create?: XOR<MotobombaCreateWithoutAssistenciasInput, MotobombaUncheckedCreateWithoutAssistenciasInput>
    connectOrCreate?: MotobombaCreateOrConnectWithoutAssistenciasInput
    connect?: MotobombaWhereUniqueInput
  }

  export type OrdemServicoUpdateOneRequiredWithoutAssistenciaNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutAssistenciaInput, OrdemServicoUncheckedCreateWithoutAssistenciaInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutAssistenciaInput
    upsert?: OrdemServicoUpsertWithoutAssistenciaInput
    connect?: OrdemServicoWhereUniqueInput
    update?: XOR<XOR<OrdemServicoUpdateToOneWithWhereWithoutAssistenciaInput, OrdemServicoUpdateWithoutAssistenciaInput>, OrdemServicoUncheckedUpdateWithoutAssistenciaInput>
  }

  export type TipoEnergiaUpdateOneWithoutAssistenciasNestedInput = {
    create?: XOR<TipoEnergiaCreateWithoutAssistenciasInput, TipoEnergiaUncheckedCreateWithoutAssistenciasInput>
    connectOrCreate?: TipoEnergiaCreateOrConnectWithoutAssistenciasInput
    upsert?: TipoEnergiaUpsertWithoutAssistenciasInput
    disconnect?: TipoEnergiaWhereInput | boolean
    delete?: TipoEnergiaWhereInput | boolean
    connect?: TipoEnergiaWhereUniqueInput
    update?: XOR<XOR<TipoEnergiaUpdateToOneWithWhereWithoutAssistenciasInput, TipoEnergiaUpdateWithoutAssistenciasInput>, TipoEnergiaUncheckedUpdateWithoutAssistenciasInput>
  }

  export type MotobombaUpdateOneWithoutAssistenciasNestedInput = {
    create?: XOR<MotobombaCreateWithoutAssistenciasInput, MotobombaUncheckedCreateWithoutAssistenciasInput>
    connectOrCreate?: MotobombaCreateOrConnectWithoutAssistenciasInput
    upsert?: MotobombaUpsertWithoutAssistenciasInput
    disconnect?: MotobombaWhereInput | boolean
    delete?: MotobombaWhereInput | boolean
    connect?: MotobombaWhereUniqueInput
    update?: XOR<XOR<MotobombaUpdateToOneWithWhereWithoutAssistenciasInput, MotobombaUpdateWithoutAssistenciasInput>, MotobombaUncheckedUpdateWithoutAssistenciasInput>
  }

  export type OrdemServicoCreateNestedOneWithoutHistoricoOsInput = {
    create?: XOR<OrdemServicoCreateWithoutHistoricoOsInput, OrdemServicoUncheckedCreateWithoutHistoricoOsInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutHistoricoOsInput
    connect?: OrdemServicoWhereUniqueInput
  }

  export type EtapaCreateNestedOneWithoutHistoricoOsInput = {
    create?: XOR<EtapaCreateWithoutHistoricoOsInput, EtapaUncheckedCreateWithoutHistoricoOsInput>
    connectOrCreate?: EtapaCreateOrConnectWithoutHistoricoOsInput
    connect?: EtapaWhereUniqueInput
  }

  export type AnexoCreateNestedManyWithoutHistoricoOsInput = {
    create?: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput> | AnexoCreateWithoutHistoricoOsInput[] | AnexoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutHistoricoOsInput | AnexoCreateOrConnectWithoutHistoricoOsInput[]
    createMany?: AnexoCreateManyHistoricoOsInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type AtribuicaoCreateNestedManyWithoutHistoricoOsInput = {
    create?: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput> | AtribuicaoCreateWithoutHistoricoOsInput[] | AtribuicaoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutHistoricoOsInput | AtribuicaoCreateOrConnectWithoutHistoricoOsInput[]
    createMany?: AtribuicaoCreateManyHistoricoOsInputEnvelope
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
  }

  export type AnexoUncheckedCreateNestedManyWithoutHistoricoOsInput = {
    create?: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput> | AnexoCreateWithoutHistoricoOsInput[] | AnexoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutHistoricoOsInput | AnexoCreateOrConnectWithoutHistoricoOsInput[]
    createMany?: AnexoCreateManyHistoricoOsInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type AtribuicaoUncheckedCreateNestedManyWithoutHistoricoOsInput = {
    create?: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput> | AtribuicaoCreateWithoutHistoricoOsInput[] | AtribuicaoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutHistoricoOsInput | AtribuicaoCreateOrConnectWithoutHistoricoOsInput[]
    createMany?: AtribuicaoCreateManyHistoricoOsInputEnvelope
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
  }

  export type OrdemServicoUpdateOneRequiredWithoutHistoricoOsNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutHistoricoOsInput, OrdemServicoUncheckedCreateWithoutHistoricoOsInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutHistoricoOsInput
    upsert?: OrdemServicoUpsertWithoutHistoricoOsInput
    connect?: OrdemServicoWhereUniqueInput
    update?: XOR<XOR<OrdemServicoUpdateToOneWithWhereWithoutHistoricoOsInput, OrdemServicoUpdateWithoutHistoricoOsInput>, OrdemServicoUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type EtapaUpdateOneRequiredWithoutHistoricoOsNestedInput = {
    create?: XOR<EtapaCreateWithoutHistoricoOsInput, EtapaUncheckedCreateWithoutHistoricoOsInput>
    connectOrCreate?: EtapaCreateOrConnectWithoutHistoricoOsInput
    upsert?: EtapaUpsertWithoutHistoricoOsInput
    connect?: EtapaWhereUniqueInput
    update?: XOR<XOR<EtapaUpdateToOneWithWhereWithoutHistoricoOsInput, EtapaUpdateWithoutHistoricoOsInput>, EtapaUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type AnexoUpdateManyWithoutHistoricoOsNestedInput = {
    create?: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput> | AnexoCreateWithoutHistoricoOsInput[] | AnexoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutHistoricoOsInput | AnexoCreateOrConnectWithoutHistoricoOsInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutHistoricoOsInput | AnexoUpsertWithWhereUniqueWithoutHistoricoOsInput[]
    createMany?: AnexoCreateManyHistoricoOsInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutHistoricoOsInput | AnexoUpdateWithWhereUniqueWithoutHistoricoOsInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutHistoricoOsInput | AnexoUpdateManyWithWhereWithoutHistoricoOsInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type AtribuicaoUpdateManyWithoutHistoricoOsNestedInput = {
    create?: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput> | AtribuicaoCreateWithoutHistoricoOsInput[] | AtribuicaoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutHistoricoOsInput | AtribuicaoCreateOrConnectWithoutHistoricoOsInput[]
    upsert?: AtribuicaoUpsertWithWhereUniqueWithoutHistoricoOsInput | AtribuicaoUpsertWithWhereUniqueWithoutHistoricoOsInput[]
    createMany?: AtribuicaoCreateManyHistoricoOsInputEnvelope
    set?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    disconnect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    delete?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    update?: AtribuicaoUpdateWithWhereUniqueWithoutHistoricoOsInput | AtribuicaoUpdateWithWhereUniqueWithoutHistoricoOsInput[]
    updateMany?: AtribuicaoUpdateManyWithWhereWithoutHistoricoOsInput | AtribuicaoUpdateManyWithWhereWithoutHistoricoOsInput[]
    deleteMany?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
  }

  export type AnexoUncheckedUpdateManyWithoutHistoricoOsNestedInput = {
    create?: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput> | AnexoCreateWithoutHistoricoOsInput[] | AnexoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutHistoricoOsInput | AnexoCreateOrConnectWithoutHistoricoOsInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutHistoricoOsInput | AnexoUpsertWithWhereUniqueWithoutHistoricoOsInput[]
    createMany?: AnexoCreateManyHistoricoOsInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutHistoricoOsInput | AnexoUpdateWithWhereUniqueWithoutHistoricoOsInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutHistoricoOsInput | AnexoUpdateManyWithWhereWithoutHistoricoOsInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type AtribuicaoUncheckedUpdateManyWithoutHistoricoOsNestedInput = {
    create?: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput> | AtribuicaoCreateWithoutHistoricoOsInput[] | AtribuicaoUncheckedCreateWithoutHistoricoOsInput[]
    connectOrCreate?: AtribuicaoCreateOrConnectWithoutHistoricoOsInput | AtribuicaoCreateOrConnectWithoutHistoricoOsInput[]
    upsert?: AtribuicaoUpsertWithWhereUniqueWithoutHistoricoOsInput | AtribuicaoUpsertWithWhereUniqueWithoutHistoricoOsInput[]
    createMany?: AtribuicaoCreateManyHistoricoOsInputEnvelope
    set?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    disconnect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    delete?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    connect?: AtribuicaoWhereUniqueInput | AtribuicaoWhereUniqueInput[]
    update?: AtribuicaoUpdateWithWhereUniqueWithoutHistoricoOsInput | AtribuicaoUpdateWithWhereUniqueWithoutHistoricoOsInput[]
    updateMany?: AtribuicaoUpdateManyWithWhereWithoutHistoricoOsInput | AtribuicaoUpdateManyWithWhereWithoutHistoricoOsInput[]
    deleteMany?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
  }

  export type HistoricoOSCreateNestedOneWithoutAtribuicoesInput = {
    create?: XOR<HistoricoOSCreateWithoutAtribuicoesInput, HistoricoOSUncheckedCreateWithoutAtribuicoesInput>
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutAtribuicoesInput
    connect?: HistoricoOSWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtribuicoesInput = {
    create?: XOR<UsuarioCreateWithoutAtribuicoesInput, UsuarioUncheckedCreateWithoutAtribuicoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtribuicoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type HistoricoOSUpdateOneRequiredWithoutAtribuicoesNestedInput = {
    create?: XOR<HistoricoOSCreateWithoutAtribuicoesInput, HistoricoOSUncheckedCreateWithoutAtribuicoesInput>
    connectOrCreate?: HistoricoOSCreateOrConnectWithoutAtribuicoesInput
    upsert?: HistoricoOSUpsertWithoutAtribuicoesInput
    connect?: HistoricoOSWhereUniqueInput
    update?: XOR<XOR<HistoricoOSUpdateToOneWithWhereWithoutAtribuicoesInput, HistoricoOSUpdateWithoutAtribuicoesInput>, HistoricoOSUncheckedUpdateWithoutAtribuicoesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAtribuicoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtribuicoesInput, UsuarioUncheckedCreateWithoutAtribuicoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtribuicoesInput
    upsert?: UsuarioUpsertWithoutAtribuicoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtribuicoesInput, UsuarioUpdateWithoutAtribuicoesInput>, UsuarioUncheckedUpdateWithoutAtribuicoesInput>
  }

  export type AnexoCreateNestedManyWithoutTipoAnexoInput = {
    create?: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput> | AnexoCreateWithoutTipoAnexoInput[] | AnexoUncheckedCreateWithoutTipoAnexoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutTipoAnexoInput | AnexoCreateOrConnectWithoutTipoAnexoInput[]
    createMany?: AnexoCreateManyTipoAnexoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type AnexoUncheckedCreateNestedManyWithoutTipoAnexoInput = {
    create?: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput> | AnexoCreateWithoutTipoAnexoInput[] | AnexoUncheckedCreateWithoutTipoAnexoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutTipoAnexoInput | AnexoCreateOrConnectWithoutTipoAnexoInput[]
    createMany?: AnexoCreateManyTipoAnexoInputEnvelope
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
  }

  export type AnexoUpdateManyWithoutTipoAnexoNestedInput = {
    create?: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput> | AnexoCreateWithoutTipoAnexoInput[] | AnexoUncheckedCreateWithoutTipoAnexoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutTipoAnexoInput | AnexoCreateOrConnectWithoutTipoAnexoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutTipoAnexoInput | AnexoUpsertWithWhereUniqueWithoutTipoAnexoInput[]
    createMany?: AnexoCreateManyTipoAnexoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutTipoAnexoInput | AnexoUpdateWithWhereUniqueWithoutTipoAnexoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutTipoAnexoInput | AnexoUpdateManyWithWhereWithoutTipoAnexoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type AnexoUncheckedUpdateManyWithoutTipoAnexoNestedInput = {
    create?: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput> | AnexoCreateWithoutTipoAnexoInput[] | AnexoUncheckedCreateWithoutTipoAnexoInput[]
    connectOrCreate?: AnexoCreateOrConnectWithoutTipoAnexoInput | AnexoCreateOrConnectWithoutTipoAnexoInput[]
    upsert?: AnexoUpsertWithWhereUniqueWithoutTipoAnexoInput | AnexoUpsertWithWhereUniqueWithoutTipoAnexoInput[]
    createMany?: AnexoCreateManyTipoAnexoInputEnvelope
    set?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    disconnect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    delete?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    connect?: AnexoWhereUniqueInput | AnexoWhereUniqueInput[]
    update?: AnexoUpdateWithWhereUniqueWithoutTipoAnexoInput | AnexoUpdateWithWhereUniqueWithoutTipoAnexoInput[]
    updateMany?: AnexoUpdateManyWithWhereWithoutTipoAnexoInput | AnexoUpdateManyWithWhereWithoutTipoAnexoInput[]
    deleteMany?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
  }

  export type AssistenciaCreateNestedManyWithoutTipoEnergiaInput = {
    create?: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput> | AssistenciaCreateWithoutTipoEnergiaInput[] | AssistenciaUncheckedCreateWithoutTipoEnergiaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutTipoEnergiaInput | AssistenciaCreateOrConnectWithoutTipoEnergiaInput[]
    createMany?: AssistenciaCreateManyTipoEnergiaInputEnvelope
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
  }

  export type AssistenciaUncheckedCreateNestedManyWithoutTipoEnergiaInput = {
    create?: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput> | AssistenciaCreateWithoutTipoEnergiaInput[] | AssistenciaUncheckedCreateWithoutTipoEnergiaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutTipoEnergiaInput | AssistenciaCreateOrConnectWithoutTipoEnergiaInput[]
    createMany?: AssistenciaCreateManyTipoEnergiaInputEnvelope
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
  }

  export type AssistenciaUpdateManyWithoutTipoEnergiaNestedInput = {
    create?: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput> | AssistenciaCreateWithoutTipoEnergiaInput[] | AssistenciaUncheckedCreateWithoutTipoEnergiaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutTipoEnergiaInput | AssistenciaCreateOrConnectWithoutTipoEnergiaInput[]
    upsert?: AssistenciaUpsertWithWhereUniqueWithoutTipoEnergiaInput | AssistenciaUpsertWithWhereUniqueWithoutTipoEnergiaInput[]
    createMany?: AssistenciaCreateManyTipoEnergiaInputEnvelope
    set?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    disconnect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    delete?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    update?: AssistenciaUpdateWithWhereUniqueWithoutTipoEnergiaInput | AssistenciaUpdateWithWhereUniqueWithoutTipoEnergiaInput[]
    updateMany?: AssistenciaUpdateManyWithWhereWithoutTipoEnergiaInput | AssistenciaUpdateManyWithWhereWithoutTipoEnergiaInput[]
    deleteMany?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
  }

  export type AssistenciaUncheckedUpdateManyWithoutTipoEnergiaNestedInput = {
    create?: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput> | AssistenciaCreateWithoutTipoEnergiaInput[] | AssistenciaUncheckedCreateWithoutTipoEnergiaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutTipoEnergiaInput | AssistenciaCreateOrConnectWithoutTipoEnergiaInput[]
    upsert?: AssistenciaUpsertWithWhereUniqueWithoutTipoEnergiaInput | AssistenciaUpsertWithWhereUniqueWithoutTipoEnergiaInput[]
    createMany?: AssistenciaCreateManyTipoEnergiaInputEnvelope
    set?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    disconnect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    delete?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    update?: AssistenciaUpdateWithWhereUniqueWithoutTipoEnergiaInput | AssistenciaUpdateWithWhereUniqueWithoutTipoEnergiaInput[]
    updateMany?: AssistenciaUpdateManyWithWhereWithoutTipoEnergiaInput | AssistenciaUpdateManyWithWhereWithoutTipoEnergiaInput[]
    deleteMany?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
  }

  export type MarcaCreateNestedOneWithoutMotobombasInput = {
    create?: XOR<MarcaCreateWithoutMotobombasInput, MarcaUncheckedCreateWithoutMotobombasInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutMotobombasInput
    connect?: MarcaWhereUniqueInput
  }

  export type AssistenciaCreateNestedManyWithoutMotobombaInput = {
    create?: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput> | AssistenciaCreateWithoutMotobombaInput[] | AssistenciaUncheckedCreateWithoutMotobombaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutMotobombaInput | AssistenciaCreateOrConnectWithoutMotobombaInput[]
    createMany?: AssistenciaCreateManyMotobombaInputEnvelope
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
  }

  export type AssistenciaUncheckedCreateNestedManyWithoutMotobombaInput = {
    create?: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput> | AssistenciaCreateWithoutMotobombaInput[] | AssistenciaUncheckedCreateWithoutMotobombaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutMotobombaInput | AssistenciaCreateOrConnectWithoutMotobombaInput[]
    createMany?: AssistenciaCreateManyMotobombaInputEnvelope
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
  }

  export type MarcaUpdateOneRequiredWithoutMotobombasNestedInput = {
    create?: XOR<MarcaCreateWithoutMotobombasInput, MarcaUncheckedCreateWithoutMotobombasInput>
    connectOrCreate?: MarcaCreateOrConnectWithoutMotobombasInput
    upsert?: MarcaUpsertWithoutMotobombasInput
    connect?: MarcaWhereUniqueInput
    update?: XOR<XOR<MarcaUpdateToOneWithWhereWithoutMotobombasInput, MarcaUpdateWithoutMotobombasInput>, MarcaUncheckedUpdateWithoutMotobombasInput>
  }

  export type AssistenciaUpdateManyWithoutMotobombaNestedInput = {
    create?: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput> | AssistenciaCreateWithoutMotobombaInput[] | AssistenciaUncheckedCreateWithoutMotobombaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutMotobombaInput | AssistenciaCreateOrConnectWithoutMotobombaInput[]
    upsert?: AssistenciaUpsertWithWhereUniqueWithoutMotobombaInput | AssistenciaUpsertWithWhereUniqueWithoutMotobombaInput[]
    createMany?: AssistenciaCreateManyMotobombaInputEnvelope
    set?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    disconnect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    delete?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    update?: AssistenciaUpdateWithWhereUniqueWithoutMotobombaInput | AssistenciaUpdateWithWhereUniqueWithoutMotobombaInput[]
    updateMany?: AssistenciaUpdateManyWithWhereWithoutMotobombaInput | AssistenciaUpdateManyWithWhereWithoutMotobombaInput[]
    deleteMany?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
  }

  export type AssistenciaUncheckedUpdateManyWithoutMotobombaNestedInput = {
    create?: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput> | AssistenciaCreateWithoutMotobombaInput[] | AssistenciaUncheckedCreateWithoutMotobombaInput[]
    connectOrCreate?: AssistenciaCreateOrConnectWithoutMotobombaInput | AssistenciaCreateOrConnectWithoutMotobombaInput[]
    upsert?: AssistenciaUpsertWithWhereUniqueWithoutMotobombaInput | AssistenciaUpsertWithWhereUniqueWithoutMotobombaInput[]
    createMany?: AssistenciaCreateManyMotobombaInputEnvelope
    set?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    disconnect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    delete?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    connect?: AssistenciaWhereUniqueInput | AssistenciaWhereUniqueInput[]
    update?: AssistenciaUpdateWithWhereUniqueWithoutMotobombaInput | AssistenciaUpdateWithWhereUniqueWithoutMotobombaInput[]
    updateMany?: AssistenciaUpdateManyWithWhereWithoutMotobombaInput | AssistenciaUpdateManyWithWhereWithoutMotobombaInput[]
    deleteMany?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
  }

  export type MotobombaCreateNestedManyWithoutMarcaInput = {
    create?: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput> | MotobombaCreateWithoutMarcaInput[] | MotobombaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: MotobombaCreateOrConnectWithoutMarcaInput | MotobombaCreateOrConnectWithoutMarcaInput[]
    createMany?: MotobombaCreateManyMarcaInputEnvelope
    connect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
  }

  export type MotobombaUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput> | MotobombaCreateWithoutMarcaInput[] | MotobombaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: MotobombaCreateOrConnectWithoutMarcaInput | MotobombaCreateOrConnectWithoutMarcaInput[]
    createMany?: MotobombaCreateManyMarcaInputEnvelope
    connect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
  }

  export type MotobombaUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput> | MotobombaCreateWithoutMarcaInput[] | MotobombaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: MotobombaCreateOrConnectWithoutMarcaInput | MotobombaCreateOrConnectWithoutMarcaInput[]
    upsert?: MotobombaUpsertWithWhereUniqueWithoutMarcaInput | MotobombaUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: MotobombaCreateManyMarcaInputEnvelope
    set?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    disconnect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    delete?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    connect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    update?: MotobombaUpdateWithWhereUniqueWithoutMarcaInput | MotobombaUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: MotobombaUpdateManyWithWhereWithoutMarcaInput | MotobombaUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: MotobombaScalarWhereInput | MotobombaScalarWhereInput[]
  }

  export type MotobombaUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput> | MotobombaCreateWithoutMarcaInput[] | MotobombaUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: MotobombaCreateOrConnectWithoutMarcaInput | MotobombaCreateOrConnectWithoutMarcaInput[]
    upsert?: MotobombaUpsertWithWhereUniqueWithoutMarcaInput | MotobombaUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: MotobombaCreateManyMarcaInputEnvelope
    set?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    disconnect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    delete?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    connect?: MotobombaWhereUniqueInput | MotobombaWhereUniqueInput[]
    update?: MotobombaUpdateWithWhereUniqueWithoutMarcaInput | MotobombaUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: MotobombaUpdateManyWithWhereWithoutMarcaInput | MotobombaUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: MotobombaScalarWhereInput | MotobombaScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnderecoCreateWithoutClienteInput = {
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type EnderecoUncheckedCreateWithoutClienteInput = {
    id?: number
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type EnderecoCreateOrConnectWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type EnderecoCreateManyClienteInputEnvelope = {
    data: EnderecoCreateManyClienteInput | EnderecoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type OrdemServicoCreateWithoutClienteInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    assistencia?: AssistenciaCreateNestedOneWithoutOrdemServicoInput
    historicoOs?: HistoricoOSCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutClienteInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    assistencia?: AssistenciaUncheckedCreateNestedOneWithoutOrdemServicoInput
    historicoOs?: HistoricoOSUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutClienteInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput>
  }

  export type OrdemServicoCreateManyClienteInputEnvelope = {
    data: OrdemServicoCreateManyClienteInput | OrdemServicoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutClienteInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutClienteInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: IntFilter<"Endereco"> | number
    clienteId?: IntFilter<"Endereco"> | number
    cidade?: StringFilter<"Endereco"> | string
    estado?: StringFilter<"Endereco"> | string
    hectare?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: StringNullableFilter<"Endereco"> | string | null
    kmLojaCliente?: DecimalNullableFilter<"Endereco"> | Decimal | DecimalJsLike | number | string | null
    referencia?: StringNullableFilter<"Endereco"> | string | null
    descricao?: StringNullableFilter<"Endereco"> | string | null
    atualizadoEm?: DateTimeFilter<"Endereco"> | Date | string
    criadoEm?: DateTimeFilter<"Endereco"> | Date | string
  }

  export type OrdemServicoUpsertWithWhereUniqueWithoutClienteInput = {
    where: OrdemServicoWhereUniqueInput
    update: XOR<OrdemServicoUpdateWithoutClienteInput, OrdemServicoUncheckedUpdateWithoutClienteInput>
    create: XOR<OrdemServicoCreateWithoutClienteInput, OrdemServicoUncheckedCreateWithoutClienteInput>
  }

  export type OrdemServicoUpdateWithWhereUniqueWithoutClienteInput = {
    where: OrdemServicoWhereUniqueInput
    data: XOR<OrdemServicoUpdateWithoutClienteInput, OrdemServicoUncheckedUpdateWithoutClienteInput>
  }

  export type OrdemServicoUpdateManyWithWhereWithoutClienteInput = {
    where: OrdemServicoScalarWhereInput
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyWithoutClienteInput>
  }

  export type OrdemServicoScalarWhereInput = {
    AND?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
    OR?: OrdemServicoScalarWhereInput[]
    NOT?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
    id?: StringFilter<"OrdemServico"> | string
    clienteId?: IntFilter<"OrdemServico"> | number
    hasAutomacao?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasOrcamento_banco?: BoolNullableFilter<"OrdemServico"> | boolean | null
    hasProjetoPlantio?: BoolNullableFilter<"OrdemServico"> | boolean | null
    quantidadeSetores?: IntNullableFilter<"OrdemServico"> | number | null
    criadoEm?: DateTimeFilter<"OrdemServico"> | Date | string
  }

  export type ClienteCreateWithoutEnderecosInput = {
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    ordemServico?: OrdemServicoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEnderecosInput = {
    id?: number
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    ordemServico?: OrdemServicoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEnderecosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
  }

  export type ClienteUpsertWithoutEnderecosInput = {
    update: XOR<ClienteUpdateWithoutEnderecosInput, ClienteUncheckedUpdateWithoutEnderecosInput>
    create: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEnderecosInput, ClienteUncheckedUpdateWithoutEnderecosInput>
  }

  export type ClienteUpdateWithoutEnderecosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEnderecosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RoleCreateWithoutUsuariosInput = {
    sigla: string
  }

  export type RoleUncheckedCreateWithoutUsuariosInput = {
    id?: number
    sigla: string
  }

  export type RoleCreateOrConnectWithoutUsuariosInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
  }

  export type EtapaUsuarioCreateWithoutUsuarioInput = {
    etapa: EtapaCreateNestedOneWithoutEtapaUsuarioInput
  }

  export type EtapaUsuarioUncheckedCreateWithoutUsuarioInput = {
    etapaId: number
  }

  export type EtapaUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: EtapaUsuarioWhereUniqueInput
    create: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EtapaUsuarioCreateManyUsuarioInputEnvelope = {
    data: EtapaUsuarioCreateManyUsuarioInput | EtapaUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AtribuicaoCreateWithoutUsuarioInput = {
    historicoOs: HistoricoOSCreateNestedOneWithoutAtribuicoesInput
  }

  export type AtribuicaoUncheckedCreateWithoutUsuarioInput = {
    historicoOsId: string
  }

  export type AtribuicaoCreateOrConnectWithoutUsuarioInput = {
    where: AtribuicaoWhereUniqueInput
    create: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AtribuicaoCreateManyUsuarioInputEnvelope = {
    data: AtribuicaoCreateManyUsuarioInput | AtribuicaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsuariosInput = {
    update: XOR<RoleUpdateWithoutUsuariosInput, RoleUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsuariosInput, RoleUncheckedUpdateWithoutUsuariosInput>
  }

  export type RoleUpdateWithoutUsuariosInput = {
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EtapaUsuarioWhereUniqueInput
    update: XOR<EtapaUsuarioUpdateWithoutUsuarioInput, EtapaUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EtapaUsuarioCreateWithoutUsuarioInput, EtapaUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type EtapaUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EtapaUsuarioWhereUniqueInput
    data: XOR<EtapaUsuarioUpdateWithoutUsuarioInput, EtapaUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type EtapaUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: EtapaUsuarioScalarWhereInput
    data: XOR<EtapaUsuarioUpdateManyMutationInput, EtapaUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EtapaUsuarioScalarWhereInput = {
    AND?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
    OR?: EtapaUsuarioScalarWhereInput[]
    NOT?: EtapaUsuarioScalarWhereInput | EtapaUsuarioScalarWhereInput[]
    etapaId?: IntFilter<"EtapaUsuario"> | number
    usuarioId?: IntFilter<"EtapaUsuario"> | number
  }

  export type AtribuicaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AtribuicaoWhereUniqueInput
    update: XOR<AtribuicaoUpdateWithoutUsuarioInput, AtribuicaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AtribuicaoCreateWithoutUsuarioInput, AtribuicaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AtribuicaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AtribuicaoWhereUniqueInput
    data: XOR<AtribuicaoUpdateWithoutUsuarioInput, AtribuicaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AtribuicaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AtribuicaoScalarWhereInput
    data: XOR<AtribuicaoUpdateManyMutationInput, AtribuicaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AtribuicaoScalarWhereInput = {
    AND?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
    OR?: AtribuicaoScalarWhereInput[]
    NOT?: AtribuicaoScalarWhereInput | AtribuicaoScalarWhereInput[]
    historicoOsId?: StringFilter<"Atribuicao"> | string
    usuarioId?: IntFilter<"Atribuicao"> | number
  }

  export type UsuarioCreateWithoutRoleInput = {
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
    etapaUsuario?: EtapaUsuarioCreateNestedManyWithoutUsuarioInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRoleInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
    etapaUsuario?: EtapaUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput>
  }

  export type UsuarioCreateManyRoleInputEnvelope = {
    data: UsuarioCreateManyRoleInput | UsuarioCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRoleInput, UsuarioUncheckedUpdateWithoutRoleInput>
    create: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRoleInput, UsuarioUncheckedUpdateWithoutRoleInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRoleInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    roleId?: IntFilter<"Usuario"> | number
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type HistoricoOSCreateWithoutAnexosInput = {
    id?: string
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutHistoricoOsInput
    etapa: EtapaCreateNestedOneWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUncheckedCreateWithoutAnexosInput = {
    id?: string
    ordemServicoId: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSCreateOrConnectWithoutAnexosInput = {
    where: HistoricoOSWhereUniqueInput
    create: XOR<HistoricoOSCreateWithoutAnexosInput, HistoricoOSUncheckedCreateWithoutAnexosInput>
  }

  export type TipoAnexoCreateWithoutAnexosInput = {
    descricao: string
  }

  export type TipoAnexoUncheckedCreateWithoutAnexosInput = {
    id?: number
    descricao: string
  }

  export type TipoAnexoCreateOrConnectWithoutAnexosInput = {
    where: TipoAnexoWhereUniqueInput
    create: XOR<TipoAnexoCreateWithoutAnexosInput, TipoAnexoUncheckedCreateWithoutAnexosInput>
  }

  export type HistoricoOSUpsertWithoutAnexosInput = {
    update: XOR<HistoricoOSUpdateWithoutAnexosInput, HistoricoOSUncheckedUpdateWithoutAnexosInput>
    create: XOR<HistoricoOSCreateWithoutAnexosInput, HistoricoOSUncheckedCreateWithoutAnexosInput>
    where?: HistoricoOSWhereInput
  }

  export type HistoricoOSUpdateToOneWithWhereWithoutAnexosInput = {
    where?: HistoricoOSWhereInput
    data: XOR<HistoricoOSUpdateWithoutAnexosInput, HistoricoOSUncheckedUpdateWithoutAnexosInput>
  }

  export type HistoricoOSUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutHistoricoOsNestedInput
    etapa?: EtapaUpdateOneRequiredWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutHistoricoOsNestedInput
  }

  export type TipoAnexoUpsertWithoutAnexosInput = {
    update: XOR<TipoAnexoUpdateWithoutAnexosInput, TipoAnexoUncheckedUpdateWithoutAnexosInput>
    create: XOR<TipoAnexoCreateWithoutAnexosInput, TipoAnexoUncheckedCreateWithoutAnexosInput>
    where?: TipoAnexoWhereInput
  }

  export type TipoAnexoUpdateToOneWithWhereWithoutAnexosInput = {
    where?: TipoAnexoWhereInput
    data: XOR<TipoAnexoUpdateWithoutAnexosInput, TipoAnexoUncheckedUpdateWithoutAnexosInput>
  }

  export type TipoAnexoUpdateWithoutAnexosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoAnexoUncheckedUpdateWithoutAnexosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EtapaUsuarioCreateWithoutEtapaInput = {
    usuario: UsuarioCreateNestedOneWithoutEtapaUsuarioInput
  }

  export type EtapaUsuarioUncheckedCreateWithoutEtapaInput = {
    usuarioId: number
  }

  export type EtapaUsuarioCreateOrConnectWithoutEtapaInput = {
    where: EtapaUsuarioWhereUniqueInput
    create: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput>
  }

  export type EtapaUsuarioCreateManyEtapaInputEnvelope = {
    data: EtapaUsuarioCreateManyEtapaInput | EtapaUsuarioCreateManyEtapaInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoOSCreateWithoutEtapaInput = {
    id?: string
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutHistoricoOsInput
    anexos?: AnexoCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUncheckedCreateWithoutEtapaInput = {
    id?: string
    ordemServicoId: string
    observacoes?: string | null
    criadoEm?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSCreateOrConnectWithoutEtapaInput = {
    where: HistoricoOSWhereUniqueInput
    create: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput>
  }

  export type HistoricoOSCreateManyEtapaInputEnvelope = {
    data: HistoricoOSCreateManyEtapaInput | HistoricoOSCreateManyEtapaInput[]
    skipDuplicates?: boolean
  }

  export type EtapaUsuarioUpsertWithWhereUniqueWithoutEtapaInput = {
    where: EtapaUsuarioWhereUniqueInput
    update: XOR<EtapaUsuarioUpdateWithoutEtapaInput, EtapaUsuarioUncheckedUpdateWithoutEtapaInput>
    create: XOR<EtapaUsuarioCreateWithoutEtapaInput, EtapaUsuarioUncheckedCreateWithoutEtapaInput>
  }

  export type EtapaUsuarioUpdateWithWhereUniqueWithoutEtapaInput = {
    where: EtapaUsuarioWhereUniqueInput
    data: XOR<EtapaUsuarioUpdateWithoutEtapaInput, EtapaUsuarioUncheckedUpdateWithoutEtapaInput>
  }

  export type EtapaUsuarioUpdateManyWithWhereWithoutEtapaInput = {
    where: EtapaUsuarioScalarWhereInput
    data: XOR<EtapaUsuarioUpdateManyMutationInput, EtapaUsuarioUncheckedUpdateManyWithoutEtapaInput>
  }

  export type HistoricoOSUpsertWithWhereUniqueWithoutEtapaInput = {
    where: HistoricoOSWhereUniqueInput
    update: XOR<HistoricoOSUpdateWithoutEtapaInput, HistoricoOSUncheckedUpdateWithoutEtapaInput>
    create: XOR<HistoricoOSCreateWithoutEtapaInput, HistoricoOSUncheckedCreateWithoutEtapaInput>
  }

  export type HistoricoOSUpdateWithWhereUniqueWithoutEtapaInput = {
    where: HistoricoOSWhereUniqueInput
    data: XOR<HistoricoOSUpdateWithoutEtapaInput, HistoricoOSUncheckedUpdateWithoutEtapaInput>
  }

  export type HistoricoOSUpdateManyWithWhereWithoutEtapaInput = {
    where: HistoricoOSScalarWhereInput
    data: XOR<HistoricoOSUpdateManyMutationInput, HistoricoOSUncheckedUpdateManyWithoutEtapaInput>
  }

  export type HistoricoOSScalarWhereInput = {
    AND?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
    OR?: HistoricoOSScalarWhereInput[]
    NOT?: HistoricoOSScalarWhereInput | HistoricoOSScalarWhereInput[]
    id?: StringFilter<"HistoricoOS"> | string
    ordemServicoId?: StringFilter<"HistoricoOS"> | string
    etapaId?: IntFilter<"HistoricoOS"> | number
    observacoes?: StringNullableFilter<"HistoricoOS"> | string | null
    criadoEm?: DateTimeFilter<"HistoricoOS"> | Date | string
  }

  export type EtapaCreateWithoutEtapaUsuarioInput = {
    descricao: string
    historicoOs?: HistoricoOSCreateNestedManyWithoutEtapaInput
  }

  export type EtapaUncheckedCreateWithoutEtapaUsuarioInput = {
    id?: number
    descricao: string
    historicoOs?: HistoricoOSUncheckedCreateNestedManyWithoutEtapaInput
  }

  export type EtapaCreateOrConnectWithoutEtapaUsuarioInput = {
    where: EtapaWhereUniqueInput
    create: XOR<EtapaCreateWithoutEtapaUsuarioInput, EtapaUncheckedCreateWithoutEtapaUsuarioInput>
  }

  export type UsuarioCreateWithoutEtapaUsuarioInput = {
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
    role: RoleCreateNestedOneWithoutUsuariosInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEtapaUsuarioInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    roleId: number
    atualizadoEm: Date | string
    criadoEm?: Date | string
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEtapaUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEtapaUsuarioInput, UsuarioUncheckedCreateWithoutEtapaUsuarioInput>
  }

  export type EtapaUpsertWithoutEtapaUsuarioInput = {
    update: XOR<EtapaUpdateWithoutEtapaUsuarioInput, EtapaUncheckedUpdateWithoutEtapaUsuarioInput>
    create: XOR<EtapaCreateWithoutEtapaUsuarioInput, EtapaUncheckedCreateWithoutEtapaUsuarioInput>
    where?: EtapaWhereInput
  }

  export type EtapaUpdateToOneWithWhereWithoutEtapaUsuarioInput = {
    where?: EtapaWhereInput
    data: XOR<EtapaUpdateWithoutEtapaUsuarioInput, EtapaUncheckedUpdateWithoutEtapaUsuarioInput>
  }

  export type EtapaUpdateWithoutEtapaUsuarioInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    historicoOs?: HistoricoOSUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaUncheckedUpdateWithoutEtapaUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    historicoOs?: HistoricoOSUncheckedUpdateManyWithoutEtapaNestedInput
  }

  export type UsuarioUpsertWithoutEtapaUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutEtapaUsuarioInput, UsuarioUncheckedUpdateWithoutEtapaUsuarioInput>
    create: XOR<UsuarioCreateWithoutEtapaUsuarioInput, UsuarioUncheckedCreateWithoutEtapaUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEtapaUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEtapaUsuarioInput, UsuarioUncheckedUpdateWithoutEtapaUsuarioInput>
  }

  export type UsuarioUpdateWithoutEtapaUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEtapaUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ClienteCreateWithoutOrdemServicoInput = {
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    enderecos?: EnderecoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutOrdemServicoInput = {
    id?: number
    nome: string
    cpf: string
    telefone: string
    isAtivo?: boolean
    atualizadoEm?: Date | string
    criadoEm?: Date | string
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutOrdemServicoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutOrdemServicoInput, ClienteUncheckedCreateWithoutOrdemServicoInput>
  }

  export type AssistenciaCreateWithoutOrdemServicoInput = {
    problema?: string | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    tipoEnergia?: TipoEnergiaCreateNestedOneWithoutAssistenciasInput
    motobomba?: MotobombaCreateNestedOneWithoutAssistenciasInput
  }

  export type AssistenciaUncheckedCreateWithoutOrdemServicoInput = {
    problema?: string | null
    tipoEnergiaId?: number | null
    motobombaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaCreateOrConnectWithoutOrdemServicoInput = {
    where: AssistenciaWhereUniqueInput
    create: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
  }

  export type HistoricoOSCreateWithoutOrdemServicoInput = {
    id?: string
    observacoes?: string | null
    criadoEm?: Date | string
    etapa: EtapaCreateNestedOneWithoutHistoricoOsInput
    anexos?: AnexoCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUncheckedCreateWithoutOrdemServicoInput = {
    id?: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutHistoricoOsInput
    atribuicoes?: AtribuicaoUncheckedCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSCreateOrConnectWithoutOrdemServicoInput = {
    where: HistoricoOSWhereUniqueInput
    create: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput>
  }

  export type HistoricoOSCreateManyOrdemServicoInputEnvelope = {
    data: HistoricoOSCreateManyOrdemServicoInput | HistoricoOSCreateManyOrdemServicoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutOrdemServicoInput = {
    update: XOR<ClienteUpdateWithoutOrdemServicoInput, ClienteUncheckedUpdateWithoutOrdemServicoInput>
    create: XOR<ClienteCreateWithoutOrdemServicoInput, ClienteUncheckedCreateWithoutOrdemServicoInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutOrdemServicoInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutOrdemServicoInput, ClienteUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type ClienteUpdateWithoutOrdemServicoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutOrdemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: EnderecoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type AssistenciaUpsertWithoutOrdemServicoInput = {
    update: XOR<AssistenciaUpdateWithoutOrdemServicoInput, AssistenciaUncheckedUpdateWithoutOrdemServicoInput>
    create: XOR<AssistenciaCreateWithoutOrdemServicoInput, AssistenciaUncheckedCreateWithoutOrdemServicoInput>
    where?: AssistenciaWhereInput
  }

  export type AssistenciaUpdateToOneWithWhereWithoutOrdemServicoInput = {
    where?: AssistenciaWhereInput
    data: XOR<AssistenciaUpdateWithoutOrdemServicoInput, AssistenciaUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type AssistenciaUpdateWithoutOrdemServicoInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoEnergia?: TipoEnergiaUpdateOneWithoutAssistenciasNestedInput
    motobomba?: MotobombaUpdateOneWithoutAssistenciasNestedInput
  }

  export type AssistenciaUncheckedUpdateWithoutOrdemServicoInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnergiaId?: NullableIntFieldUpdateOperationsInput | number | null
    motobombaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoOSUpsertWithWhereUniqueWithoutOrdemServicoInput = {
    where: HistoricoOSWhereUniqueInput
    update: XOR<HistoricoOSUpdateWithoutOrdemServicoInput, HistoricoOSUncheckedUpdateWithoutOrdemServicoInput>
    create: XOR<HistoricoOSCreateWithoutOrdemServicoInput, HistoricoOSUncheckedCreateWithoutOrdemServicoInput>
  }

  export type HistoricoOSUpdateWithWhereUniqueWithoutOrdemServicoInput = {
    where: HistoricoOSWhereUniqueInput
    data: XOR<HistoricoOSUpdateWithoutOrdemServicoInput, HistoricoOSUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type HistoricoOSUpdateManyWithWhereWithoutOrdemServicoInput = {
    where: HistoricoOSScalarWhereInput
    data: XOR<HistoricoOSUpdateManyMutationInput, HistoricoOSUncheckedUpdateManyWithoutOrdemServicoInput>
  }

  export type OrdemServicoCreateWithoutAssistenciaInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrdemServicoInput
    historicoOs?: HistoricoOSCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutAssistenciaInput = {
    id?: string
    clienteId: number
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    historicoOs?: HistoricoOSUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutAssistenciaInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutAssistenciaInput, OrdemServicoUncheckedCreateWithoutAssistenciaInput>
  }

  export type TipoEnergiaCreateWithoutAssistenciasInput = {
    descricao: string
  }

  export type TipoEnergiaUncheckedCreateWithoutAssistenciasInput = {
    id?: number
    descricao: string
  }

  export type TipoEnergiaCreateOrConnectWithoutAssistenciasInput = {
    where: TipoEnergiaWhereUniqueInput
    create: XOR<TipoEnergiaCreateWithoutAssistenciasInput, TipoEnergiaUncheckedCreateWithoutAssistenciasInput>
  }

  export type MotobombaCreateWithoutAssistenciasInput = {
    codigoIdentificacao: string
    modelo: string
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
    marca: MarcaCreateNestedOneWithoutMotobombasInput
  }

  export type MotobombaUncheckedCreateWithoutAssistenciasInput = {
    id?: number
    codigoIdentificacao: string
    modelo: string
    marcaId: number
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
  }

  export type MotobombaCreateOrConnectWithoutAssistenciasInput = {
    where: MotobombaWhereUniqueInput
    create: XOR<MotobombaCreateWithoutAssistenciasInput, MotobombaUncheckedCreateWithoutAssistenciasInput>
  }

  export type OrdemServicoUpsertWithoutAssistenciaInput = {
    update: XOR<OrdemServicoUpdateWithoutAssistenciaInput, OrdemServicoUncheckedUpdateWithoutAssistenciaInput>
    create: XOR<OrdemServicoCreateWithoutAssistenciaInput, OrdemServicoUncheckedCreateWithoutAssistenciaInput>
    where?: OrdemServicoWhereInput
  }

  export type OrdemServicoUpdateToOneWithWhereWithoutAssistenciaInput = {
    where?: OrdemServicoWhereInput
    data: XOR<OrdemServicoUpdateWithoutAssistenciaInput, OrdemServicoUncheckedUpdateWithoutAssistenciaInput>
  }

  export type OrdemServicoUpdateWithoutAssistenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrdemServicoNestedInput
    historicoOs?: HistoricoOSUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutAssistenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoOs?: HistoricoOSUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type TipoEnergiaUpsertWithoutAssistenciasInput = {
    update: XOR<TipoEnergiaUpdateWithoutAssistenciasInput, TipoEnergiaUncheckedUpdateWithoutAssistenciasInput>
    create: XOR<TipoEnergiaCreateWithoutAssistenciasInput, TipoEnergiaUncheckedCreateWithoutAssistenciasInput>
    where?: TipoEnergiaWhereInput
  }

  export type TipoEnergiaUpdateToOneWithWhereWithoutAssistenciasInput = {
    where?: TipoEnergiaWhereInput
    data: XOR<TipoEnergiaUpdateWithoutAssistenciasInput, TipoEnergiaUncheckedUpdateWithoutAssistenciasInput>
  }

  export type TipoEnergiaUpdateWithoutAssistenciasInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoEnergiaUncheckedUpdateWithoutAssistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type MotobombaUpsertWithoutAssistenciasInput = {
    update: XOR<MotobombaUpdateWithoutAssistenciasInput, MotobombaUncheckedUpdateWithoutAssistenciasInput>
    create: XOR<MotobombaCreateWithoutAssistenciasInput, MotobombaUncheckedCreateWithoutAssistenciasInput>
    where?: MotobombaWhereInput
  }

  export type MotobombaUpdateToOneWithWhereWithoutAssistenciasInput = {
    where?: MotobombaWhereInput
    data: XOR<MotobombaUpdateWithoutAssistenciasInput, MotobombaUncheckedUpdateWithoutAssistenciasInput>
  }

  export type MotobombaUpdateWithoutAssistenciasInput = {
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    marca?: MarcaUpdateOneRequiredWithoutMotobombasNestedInput
  }

  export type MotobombaUncheckedUpdateWithoutAssistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoCreateWithoutHistoricoOsInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrdemServicoInput
    assistencia?: AssistenciaCreateNestedOneWithoutOrdemServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutHistoricoOsInput = {
    id?: string
    clienteId: number
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
    assistencia?: AssistenciaUncheckedCreateNestedOneWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutHistoricoOsInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutHistoricoOsInput, OrdemServicoUncheckedCreateWithoutHistoricoOsInput>
  }

  export type EtapaCreateWithoutHistoricoOsInput = {
    descricao: string
    etapaUsuario?: EtapaUsuarioCreateNestedManyWithoutEtapaInput
  }

  export type EtapaUncheckedCreateWithoutHistoricoOsInput = {
    id?: number
    descricao: string
    etapaUsuario?: EtapaUsuarioUncheckedCreateNestedManyWithoutEtapaInput
  }

  export type EtapaCreateOrConnectWithoutHistoricoOsInput = {
    where: EtapaWhereUniqueInput
    create: XOR<EtapaCreateWithoutHistoricoOsInput, EtapaUncheckedCreateWithoutHistoricoOsInput>
  }

  export type AnexoCreateWithoutHistoricoOsInput = {
    id?: string
    url: string
    descricao?: string | null
    criadoEm?: Date | string
    tipoAnexo: TipoAnexoCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateWithoutHistoricoOsInput = {
    id?: string
    tipoAnexoId: number
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AnexoCreateOrConnectWithoutHistoricoOsInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput>
  }

  export type AnexoCreateManyHistoricoOsInputEnvelope = {
    data: AnexoCreateManyHistoricoOsInput | AnexoCreateManyHistoricoOsInput[]
    skipDuplicates?: boolean
  }

  export type AtribuicaoCreateWithoutHistoricoOsInput = {
    usuario: UsuarioCreateNestedOneWithoutAtribuicoesInput
  }

  export type AtribuicaoUncheckedCreateWithoutHistoricoOsInput = {
    usuarioId: number
  }

  export type AtribuicaoCreateOrConnectWithoutHistoricoOsInput = {
    where: AtribuicaoWhereUniqueInput
    create: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput>
  }

  export type AtribuicaoCreateManyHistoricoOsInputEnvelope = {
    data: AtribuicaoCreateManyHistoricoOsInput | AtribuicaoCreateManyHistoricoOsInput[]
    skipDuplicates?: boolean
  }

  export type OrdemServicoUpsertWithoutHistoricoOsInput = {
    update: XOR<OrdemServicoUpdateWithoutHistoricoOsInput, OrdemServicoUncheckedUpdateWithoutHistoricoOsInput>
    create: XOR<OrdemServicoCreateWithoutHistoricoOsInput, OrdemServicoUncheckedCreateWithoutHistoricoOsInput>
    where?: OrdemServicoWhereInput
  }

  export type OrdemServicoUpdateToOneWithWhereWithoutHistoricoOsInput = {
    where?: OrdemServicoWhereInput
    data: XOR<OrdemServicoUpdateWithoutHistoricoOsInput, OrdemServicoUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type OrdemServicoUpdateWithoutHistoricoOsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrdemServicoNestedInput
    assistencia?: AssistenciaUpdateOneWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutHistoricoOsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencia?: AssistenciaUncheckedUpdateOneWithoutOrdemServicoNestedInput
  }

  export type EtapaUpsertWithoutHistoricoOsInput = {
    update: XOR<EtapaUpdateWithoutHistoricoOsInput, EtapaUncheckedUpdateWithoutHistoricoOsInput>
    create: XOR<EtapaCreateWithoutHistoricoOsInput, EtapaUncheckedCreateWithoutHistoricoOsInput>
    where?: EtapaWhereInput
  }

  export type EtapaUpdateToOneWithWhereWithoutHistoricoOsInput = {
    where?: EtapaWhereInput
    data: XOR<EtapaUpdateWithoutHistoricoOsInput, EtapaUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type EtapaUpdateWithoutHistoricoOsInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    etapaUsuario?: EtapaUsuarioUpdateManyWithoutEtapaNestedInput
  }

  export type EtapaUncheckedUpdateWithoutHistoricoOsInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    etapaUsuario?: EtapaUsuarioUncheckedUpdateManyWithoutEtapaNestedInput
  }

  export type AnexoUpsertWithWhereUniqueWithoutHistoricoOsInput = {
    where: AnexoWhereUniqueInput
    update: XOR<AnexoUpdateWithoutHistoricoOsInput, AnexoUncheckedUpdateWithoutHistoricoOsInput>
    create: XOR<AnexoCreateWithoutHistoricoOsInput, AnexoUncheckedCreateWithoutHistoricoOsInput>
  }

  export type AnexoUpdateWithWhereUniqueWithoutHistoricoOsInput = {
    where: AnexoWhereUniqueInput
    data: XOR<AnexoUpdateWithoutHistoricoOsInput, AnexoUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type AnexoUpdateManyWithWhereWithoutHistoricoOsInput = {
    where: AnexoScalarWhereInput
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyWithoutHistoricoOsInput>
  }

  export type AnexoScalarWhereInput = {
    AND?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
    OR?: AnexoScalarWhereInput[]
    NOT?: AnexoScalarWhereInput | AnexoScalarWhereInput[]
    id?: StringFilter<"Anexo"> | string
    historicoOsId?: StringFilter<"Anexo"> | string
    tipoAnexoId?: IntFilter<"Anexo"> | number
    url?: StringFilter<"Anexo"> | string
    descricao?: StringNullableFilter<"Anexo"> | string | null
    criadoEm?: DateTimeFilter<"Anexo"> | Date | string
  }

  export type AtribuicaoUpsertWithWhereUniqueWithoutHistoricoOsInput = {
    where: AtribuicaoWhereUniqueInput
    update: XOR<AtribuicaoUpdateWithoutHistoricoOsInput, AtribuicaoUncheckedUpdateWithoutHistoricoOsInput>
    create: XOR<AtribuicaoCreateWithoutHistoricoOsInput, AtribuicaoUncheckedCreateWithoutHistoricoOsInput>
  }

  export type AtribuicaoUpdateWithWhereUniqueWithoutHistoricoOsInput = {
    where: AtribuicaoWhereUniqueInput
    data: XOR<AtribuicaoUpdateWithoutHistoricoOsInput, AtribuicaoUncheckedUpdateWithoutHistoricoOsInput>
  }

  export type AtribuicaoUpdateManyWithWhereWithoutHistoricoOsInput = {
    where: AtribuicaoScalarWhereInput
    data: XOR<AtribuicaoUpdateManyMutationInput, AtribuicaoUncheckedUpdateManyWithoutHistoricoOsInput>
  }

  export type HistoricoOSCreateWithoutAtribuicoesInput = {
    id?: string
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutHistoricoOsInput
    etapa: EtapaCreateNestedOneWithoutHistoricoOsInput
    anexos?: AnexoCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSUncheckedCreateWithoutAtribuicoesInput = {
    id?: string
    ordemServicoId: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
    anexos?: AnexoUncheckedCreateNestedManyWithoutHistoricoOsInput
  }

  export type HistoricoOSCreateOrConnectWithoutAtribuicoesInput = {
    where: HistoricoOSWhereUniqueInput
    create: XOR<HistoricoOSCreateWithoutAtribuicoesInput, HistoricoOSUncheckedCreateWithoutAtribuicoesInput>
  }

  export type UsuarioCreateWithoutAtribuicoesInput = {
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
    role: RoleCreateNestedOneWithoutUsuariosInput
    etapaUsuario?: EtapaUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAtribuicoesInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    roleId: number
    atualizadoEm: Date | string
    criadoEm?: Date | string
    etapaUsuario?: EtapaUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAtribuicoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtribuicoesInput, UsuarioUncheckedCreateWithoutAtribuicoesInput>
  }

  export type HistoricoOSUpsertWithoutAtribuicoesInput = {
    update: XOR<HistoricoOSUpdateWithoutAtribuicoesInput, HistoricoOSUncheckedUpdateWithoutAtribuicoesInput>
    create: XOR<HistoricoOSCreateWithoutAtribuicoesInput, HistoricoOSUncheckedCreateWithoutAtribuicoesInput>
    where?: HistoricoOSWhereInput
  }

  export type HistoricoOSUpdateToOneWithWhereWithoutAtribuicoesInput = {
    where?: HistoricoOSWhereInput
    data: XOR<HistoricoOSUpdateWithoutAtribuicoesInput, HistoricoOSUncheckedUpdateWithoutAtribuicoesInput>
  }

  export type HistoricoOSUpdateWithoutAtribuicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutHistoricoOsNestedInput
    etapa?: EtapaUpdateOneRequiredWithoutHistoricoOsNestedInput
    anexos?: AnexoUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateWithoutAtribuicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutHistoricoOsNestedInput
  }

  export type UsuarioUpsertWithoutAtribuicoesInput = {
    update: XOR<UsuarioUpdateWithoutAtribuicoesInput, UsuarioUncheckedUpdateWithoutAtribuicoesInput>
    create: XOR<UsuarioCreateWithoutAtribuicoesInput, UsuarioUncheckedCreateWithoutAtribuicoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtribuicoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtribuicoesInput, UsuarioUncheckedUpdateWithoutAtribuicoesInput>
  }

  export type UsuarioUpdateWithoutAtribuicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    etapaUsuario?: EtapaUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtribuicoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    etapaUsuario?: EtapaUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AnexoCreateWithoutTipoAnexoInput = {
    id?: string
    url: string
    descricao?: string | null
    criadoEm?: Date | string
    historicoOs: HistoricoOSCreateNestedOneWithoutAnexosInput
  }

  export type AnexoUncheckedCreateWithoutTipoAnexoInput = {
    id?: string
    historicoOsId: string
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AnexoCreateOrConnectWithoutTipoAnexoInput = {
    where: AnexoWhereUniqueInput
    create: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput>
  }

  export type AnexoCreateManyTipoAnexoInputEnvelope = {
    data: AnexoCreateManyTipoAnexoInput | AnexoCreateManyTipoAnexoInput[]
    skipDuplicates?: boolean
  }

  export type AnexoUpsertWithWhereUniqueWithoutTipoAnexoInput = {
    where: AnexoWhereUniqueInput
    update: XOR<AnexoUpdateWithoutTipoAnexoInput, AnexoUncheckedUpdateWithoutTipoAnexoInput>
    create: XOR<AnexoCreateWithoutTipoAnexoInput, AnexoUncheckedCreateWithoutTipoAnexoInput>
  }

  export type AnexoUpdateWithWhereUniqueWithoutTipoAnexoInput = {
    where: AnexoWhereUniqueInput
    data: XOR<AnexoUpdateWithoutTipoAnexoInput, AnexoUncheckedUpdateWithoutTipoAnexoInput>
  }

  export type AnexoUpdateManyWithWhereWithoutTipoAnexoInput = {
    where: AnexoScalarWhereInput
    data: XOR<AnexoUpdateManyMutationInput, AnexoUncheckedUpdateManyWithoutTipoAnexoInput>
  }

  export type AssistenciaCreateWithoutTipoEnergiaInput = {
    problema?: string | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutAssistenciaInput
    motobomba?: MotobombaCreateNestedOneWithoutAssistenciasInput
  }

  export type AssistenciaUncheckedCreateWithoutTipoEnergiaInput = {
    ordemServicoId: string
    problema?: string | null
    motobombaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaCreateOrConnectWithoutTipoEnergiaInput = {
    where: AssistenciaWhereUniqueInput
    create: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput>
  }

  export type AssistenciaCreateManyTipoEnergiaInputEnvelope = {
    data: AssistenciaCreateManyTipoEnergiaInput | AssistenciaCreateManyTipoEnergiaInput[]
    skipDuplicates?: boolean
  }

  export type AssistenciaUpsertWithWhereUniqueWithoutTipoEnergiaInput = {
    where: AssistenciaWhereUniqueInput
    update: XOR<AssistenciaUpdateWithoutTipoEnergiaInput, AssistenciaUncheckedUpdateWithoutTipoEnergiaInput>
    create: XOR<AssistenciaCreateWithoutTipoEnergiaInput, AssistenciaUncheckedCreateWithoutTipoEnergiaInput>
  }

  export type AssistenciaUpdateWithWhereUniqueWithoutTipoEnergiaInput = {
    where: AssistenciaWhereUniqueInput
    data: XOR<AssistenciaUpdateWithoutTipoEnergiaInput, AssistenciaUncheckedUpdateWithoutTipoEnergiaInput>
  }

  export type AssistenciaUpdateManyWithWhereWithoutTipoEnergiaInput = {
    where: AssistenciaScalarWhereInput
    data: XOR<AssistenciaUpdateManyMutationInput, AssistenciaUncheckedUpdateManyWithoutTipoEnergiaInput>
  }

  export type AssistenciaScalarWhereInput = {
    AND?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
    OR?: AssistenciaScalarWhereInput[]
    NOT?: AssistenciaScalarWhereInput | AssistenciaScalarWhereInput[]
    ordemServicoId?: StringFilter<"Assistencia"> | string
    problema?: StringNullableFilter<"Assistencia"> | string | null
    tipoEnergiaId?: IntNullableFilter<"Assistencia"> | number | null
    motobombaId?: IntNullableFilter<"Assistencia"> | number | null
    polegadasValvulasRegistro?: IntNullableFilter<"Assistencia"> | number | null
    diametroAdutoraMestre?: StringNullableFilter<"Assistencia"> | string | null
    observacoes?: StringNullableFilter<"Assistencia"> | string | null
    criadoEm?: DateTimeFilter<"Assistencia"> | Date | string
  }

  export type MarcaCreateWithoutMotobombasInput = {
    nome: string
  }

  export type MarcaUncheckedCreateWithoutMotobombasInput = {
    id?: number
    nome: string
  }

  export type MarcaCreateOrConnectWithoutMotobombasInput = {
    where: MarcaWhereUniqueInput
    create: XOR<MarcaCreateWithoutMotobombasInput, MarcaUncheckedCreateWithoutMotobombasInput>
  }

  export type AssistenciaCreateWithoutMotobombaInput = {
    problema?: string | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutAssistenciaInput
    tipoEnergia?: TipoEnergiaCreateNestedOneWithoutAssistenciasInput
  }

  export type AssistenciaUncheckedCreateWithoutMotobombaInput = {
    ordemServicoId: string
    problema?: string | null
    tipoEnergiaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaCreateOrConnectWithoutMotobombaInput = {
    where: AssistenciaWhereUniqueInput
    create: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput>
  }

  export type AssistenciaCreateManyMotobombaInputEnvelope = {
    data: AssistenciaCreateManyMotobombaInput | AssistenciaCreateManyMotobombaInput[]
    skipDuplicates?: boolean
  }

  export type MarcaUpsertWithoutMotobombasInput = {
    update: XOR<MarcaUpdateWithoutMotobombasInput, MarcaUncheckedUpdateWithoutMotobombasInput>
    create: XOR<MarcaCreateWithoutMotobombasInput, MarcaUncheckedCreateWithoutMotobombasInput>
    where?: MarcaWhereInput
  }

  export type MarcaUpdateToOneWithWhereWithoutMotobombasInput = {
    where?: MarcaWhereInput
    data: XOR<MarcaUpdateWithoutMotobombasInput, MarcaUncheckedUpdateWithoutMotobombasInput>
  }

  export type MarcaUpdateWithoutMotobombasInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MarcaUncheckedUpdateWithoutMotobombasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AssistenciaUpsertWithWhereUniqueWithoutMotobombaInput = {
    where: AssistenciaWhereUniqueInput
    update: XOR<AssistenciaUpdateWithoutMotobombaInput, AssistenciaUncheckedUpdateWithoutMotobombaInput>
    create: XOR<AssistenciaCreateWithoutMotobombaInput, AssistenciaUncheckedCreateWithoutMotobombaInput>
  }

  export type AssistenciaUpdateWithWhereUniqueWithoutMotobombaInput = {
    where: AssistenciaWhereUniqueInput
    data: XOR<AssistenciaUpdateWithoutMotobombaInput, AssistenciaUncheckedUpdateWithoutMotobombaInput>
  }

  export type AssistenciaUpdateManyWithWhereWithoutMotobombaInput = {
    where: AssistenciaScalarWhereInput
    data: XOR<AssistenciaUpdateManyMutationInput, AssistenciaUncheckedUpdateManyWithoutMotobombaInput>
  }

  export type MotobombaCreateWithoutMarcaInput = {
    codigoIdentificacao: string
    modelo: string
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
    assistencias?: AssistenciaCreateNestedManyWithoutMotobombaInput
  }

  export type MotobombaUncheckedCreateWithoutMarcaInput = {
    id?: number
    codigoIdentificacao: string
    modelo: string
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
    assistencias?: AssistenciaUncheckedCreateNestedManyWithoutMotobombaInput
  }

  export type MotobombaCreateOrConnectWithoutMarcaInput = {
    where: MotobombaWhereUniqueInput
    create: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput>
  }

  export type MotobombaCreateManyMarcaInputEnvelope = {
    data: MotobombaCreateManyMarcaInput | MotobombaCreateManyMarcaInput[]
    skipDuplicates?: boolean
  }

  export type MotobombaUpsertWithWhereUniqueWithoutMarcaInput = {
    where: MotobombaWhereUniqueInput
    update: XOR<MotobombaUpdateWithoutMarcaInput, MotobombaUncheckedUpdateWithoutMarcaInput>
    create: XOR<MotobombaCreateWithoutMarcaInput, MotobombaUncheckedCreateWithoutMarcaInput>
  }

  export type MotobombaUpdateWithWhereUniqueWithoutMarcaInput = {
    where: MotobombaWhereUniqueInput
    data: XOR<MotobombaUpdateWithoutMarcaInput, MotobombaUncheckedUpdateWithoutMarcaInput>
  }

  export type MotobombaUpdateManyWithWhereWithoutMarcaInput = {
    where: MotobombaScalarWhereInput
    data: XOR<MotobombaUpdateManyMutationInput, MotobombaUncheckedUpdateManyWithoutMarcaInput>
  }

  export type MotobombaScalarWhereInput = {
    AND?: MotobombaScalarWhereInput | MotobombaScalarWhereInput[]
    OR?: MotobombaScalarWhereInput[]
    NOT?: MotobombaScalarWhereInput | MotobombaScalarWhereInput[]
    id?: IntFilter<"Motobomba"> | number
    codigoIdentificacao?: StringFilter<"Motobomba"> | string
    modelo?: StringFilter<"Motobomba"> | string
    marcaId?: IntFilter<"Motobomba"> | number
    cv?: StringFilter<"Motobomba"> | string
    isAtivo?: BoolFilter<"Motobomba"> | boolean
    criadoEm?: DateTimeFilter<"Motobomba"> | Date | string
  }

  export type EnderecoCreateManyClienteInput = {
    id?: number
    cidade: string
    estado: string
    hectare?: Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: string | null
    kmLojaCliente?: Decimal | DecimalJsLike | number | string | null
    referencia?: string | null
    descricao?: string | null
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type OrdemServicoCreateManyClienteInput = {
    id?: string
    hasAutomacao?: boolean | null
    hasOrcamento_banco?: boolean | null
    hasProjetoPlantio?: boolean | null
    quantidadeSetores?: number | null
    criadoEm?: Date | string
  }

  export type EnderecoUpdateWithoutClienteInput = {
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnderecoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    hectare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coordenadasGeograficas?: NullableStringFieldUpdateOperationsInput | string | null
    kmLojaCliente?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencia?: AssistenciaUpdateOneWithoutOrdemServicoNestedInput
    historicoOs?: HistoricoOSUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencia?: AssistenciaUncheckedUpdateOneWithoutOrdemServicoNestedInput
    historicoOs?: HistoricoOSUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    hasAutomacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasOrcamento_banco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasProjetoPlantio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantidadeSetores?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtapaUsuarioCreateManyUsuarioInput = {
    etapaId: number
  }

  export type AtribuicaoCreateManyUsuarioInput = {
    historicoOsId: string
  }

  export type EtapaUsuarioUpdateWithoutUsuarioInput = {
    etapa?: EtapaUpdateOneRequiredWithoutEtapaUsuarioNestedInput
  }

  export type EtapaUsuarioUncheckedUpdateWithoutUsuarioInput = {
    etapaId?: IntFieldUpdateOperationsInput | number
  }

  export type EtapaUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    etapaId?: IntFieldUpdateOperationsInput | number
  }

  export type AtribuicaoUpdateWithoutUsuarioInput = {
    historicoOs?: HistoricoOSUpdateOneRequiredWithoutAtribuicoesNestedInput
  }

  export type AtribuicaoUncheckedUpdateWithoutUsuarioInput = {
    historicoOsId?: StringFieldUpdateOperationsInput | string
  }

  export type AtribuicaoUncheckedUpdateManyWithoutUsuarioInput = {
    historicoOsId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyRoleInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    atualizadoEm: Date | string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateWithoutRoleInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    etapaUsuario?: EtapaUsuarioUpdateManyWithoutUsuarioNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    etapaUsuario?: EtapaUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtapaUsuarioCreateManyEtapaInput = {
    usuarioId: number
  }

  export type HistoricoOSCreateManyEtapaInput = {
    id?: string
    ordemServicoId: string
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type EtapaUsuarioUpdateWithoutEtapaInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutEtapaUsuarioNestedInput
  }

  export type EtapaUsuarioUncheckedUpdateWithoutEtapaInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EtapaUsuarioUncheckedUpdateManyWithoutEtapaInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoricoOSUpdateWithoutEtapaInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutHistoricoOsNestedInput
    anexos?: AnexoUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateWithoutEtapaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateManyWithoutEtapaInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoOSCreateManyOrdemServicoInput = {
    id?: string
    etapaId: number
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type HistoricoOSUpdateWithoutOrdemServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    etapa?: EtapaUpdateOneRequiredWithoutHistoricoOsNestedInput
    anexos?: AnexoUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateWithoutOrdemServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: AnexoUncheckedUpdateManyWithoutHistoricoOsNestedInput
    atribuicoes?: AtribuicaoUncheckedUpdateManyWithoutHistoricoOsNestedInput
  }

  export type HistoricoOSUncheckedUpdateManyWithoutOrdemServicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    etapaId?: IntFieldUpdateOperationsInput | number
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoCreateManyHistoricoOsInput = {
    id?: string
    tipoAnexoId: number
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AtribuicaoCreateManyHistoricoOsInput = {
    usuarioId: number
  }

  export type AnexoUpdateWithoutHistoricoOsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoAnexo?: TipoAnexoUpdateOneRequiredWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateWithoutHistoricoOsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAnexoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoUncheckedUpdateManyWithoutHistoricoOsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAnexoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtribuicaoUpdateWithoutHistoricoOsInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutAtribuicoesNestedInput
  }

  export type AtribuicaoUncheckedUpdateWithoutHistoricoOsInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AtribuicaoUncheckedUpdateManyWithoutHistoricoOsInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AnexoCreateManyTipoAnexoInput = {
    id?: string
    historicoOsId: string
    url: string
    descricao?: string | null
    criadoEm?: Date | string
  }

  export type AnexoUpdateWithoutTipoAnexoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    historicoOs?: HistoricoOSUpdateOneRequiredWithoutAnexosNestedInput
  }

  export type AnexoUncheckedUpdateWithoutTipoAnexoInput = {
    id?: StringFieldUpdateOperationsInput | string
    historicoOsId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnexoUncheckedUpdateManyWithoutTipoAnexoInput = {
    id?: StringFieldUpdateOperationsInput | string
    historicoOsId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaCreateManyTipoEnergiaInput = {
    ordemServicoId: string
    problema?: string | null
    motobombaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaUpdateWithoutTipoEnergiaInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutAssistenciaNestedInput
    motobomba?: MotobombaUpdateOneWithoutAssistenciasNestedInput
  }

  export type AssistenciaUncheckedUpdateWithoutTipoEnergiaInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    motobombaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaUncheckedUpdateManyWithoutTipoEnergiaInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    motobombaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaCreateManyMotobombaInput = {
    ordemServicoId: string
    problema?: string | null
    tipoEnergiaId?: number | null
    polegadasValvulasRegistro?: number | null
    diametroAdutoraMestre?: string | null
    observacoes?: string | null
    criadoEm?: Date | string
  }

  export type AssistenciaUpdateWithoutMotobombaInput = {
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutAssistenciaNestedInput
    tipoEnergia?: TipoEnergiaUpdateOneWithoutAssistenciasNestedInput
  }

  export type AssistenciaUncheckedUpdateWithoutMotobombaInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnergiaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssistenciaUncheckedUpdateManyWithoutMotobombaInput = {
    ordemServicoId?: StringFieldUpdateOperationsInput | string
    problema?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnergiaId?: NullableIntFieldUpdateOperationsInput | number | null
    polegadasValvulasRegistro?: NullableIntFieldUpdateOperationsInput | number | null
    diametroAdutoraMestre?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MotobombaCreateManyMarcaInput = {
    id?: number
    codigoIdentificacao: string
    modelo: string
    cv: string
    isAtivo?: boolean
    criadoEm?: Date | string
  }

  export type MotobombaUpdateWithoutMarcaInput = {
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencias?: AssistenciaUpdateManyWithoutMotobombaNestedInput
  }

  export type MotobombaUncheckedUpdateWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    assistencias?: AssistenciaUncheckedUpdateManyWithoutMotobombaNestedInput
  }

  export type MotobombaUncheckedUpdateManyWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigoIdentificacao?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    isAtivo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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