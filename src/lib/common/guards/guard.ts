import { LogManager } from "@/lib/common/port/log/log-manager.port";
import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class Guard {
  static logManager = new LogManager({ debug: true });
  /**
   * Checks if value is empty. Accepts strings, numbers, booleans, objects and arrays.
   */
  static isEmpty(value: unknown): boolean {
    if (typeof value === "number" || typeof value === "boolean") {
      return false;
    }
    if (typeof value === "undefined" || value === null) {
      return true;
    }
    if (value instanceof Date) {
      return false;
    }
    if (value instanceof Object && !Object.keys(value).length) {
      return true;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true;
      }
      if (value.every((item) => Guard.isEmpty(item))) {
        return true;
      }
    }
    if (value === "") {
      return true;
    }

    return false;
  }

  /**
   * Checks length range of a provided number/string/array
   */
  static lengthIsBetween(
    value: number | string | Array<unknown>,
    min: number,
    max: number,
  ): boolean {
    if (Guard.isEmpty(value)) {
      throw new Error(
        "Cannot check length of a value. Provided value is empty",
      );
    }
    const valueLength =
      typeof value === "number"
        ? Number(value).toString().length
        : value.length;
    if (valueLength >= min && valueLength <= max) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param dto Data transfer object with class-validator decorators
   * @param obj Instance of the class
   * @returns boolean
   */
  static async responseIsValid<T extends ClassConstructor<any>>(
    dto: T,
    obj: object,
  ) {
    const objInstance = plainToClass(dto, obj);
    const errors = await validate(objInstance);
    if (errors.length > 0) {
      this.logManager.info(
        "Validation failed. Errors: ",
        JSON.stringify(errors, null, 2),
      );
      return false;
    }
    return true;
  }

  /**
   *
   * @param dto Data transfer object with class-validator decorators
   * @param response Array of objects to be validated
   * @returns Array of objects that are valid
   */
  static async filterValidResponses(dto: any, response: any) {
    const validationPromises = response.map(async (record: any) => {
      const isValid = await this.responseIsValid(dto, record);
      return { record, isValid };
    });

    const validatedResults = await Promise.all(validationPromises);

    const filteredResults = validatedResults
      .filter(({ isValid }) => isValid)
      .map(({ record }) => record);

    return filteredResults;
  }
}
