/* eslint-disable @typescript-eslint/no-explicit-any */

export default interface IChacheProvider {
  save(key: string, value: any): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
}
