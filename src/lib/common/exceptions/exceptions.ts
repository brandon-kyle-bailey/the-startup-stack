import { ExceptionBase } from "@/lib/common/exceptions/exception.base";
import {
  ARGUMENT_INVALID,
  VALIDATION_FAILURE,
  ARGUMENT_NOT_PROVIDED,
  ARGUMENT_OUT_OF_RANGE,
  CONFLICT,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  ADAPTER_ERROR,
} from "@/lib/common/exceptions/exception.codes";

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ARGUMENT_INVALID;
}

/**
 * Used to indicate that some validation logic error has occured.
 *
 * @class ValidationFailureException
 * @extends {ExceptionBase}
 */
export class ValidationFailureException extends ExceptionBase {
  readonly code = VALIDATION_FAILURE;
}

/**
 * Used to indicate that an argument was not provided (is empty object/array, null of undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly code = ARGUMENT_NOT_PROVIDED;
}

/**
 * Used to indicate that an argument is out of allowed range
 * (for example: incorrect string/array length, number not in allowed min/max range etc)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ARGUMENT_OUT_OF_RANGE;
}

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */
export class ConflictException extends ExceptionBase {
  readonly code = CONFLICT;
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class NotFoundException extends ExceptionBase {
  static readonly message = "Not found";

  constructor(message = NotFoundException.message) {
    super(message);
  }

  readonly code = NOT_FOUND;
}

/**
 * Used to indicate an internal server error that does not fall under all other errors
 *
 * @class InternalServerErrorException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  static readonly message = "Internal server error";

  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly code = INTERNAL_SERVER_ERROR;
}

/**
 * Used to indicate an error originating from an adapter
 *
 * @class AdapterErrorException
 * @extends {ExceptionBase}
 */
export class AdapterErrorException extends ExceptionBase {
  static readonly message = "Adapter error";

  constructor(message = AdapterErrorException.message) {
    super(message);
  }

  readonly code = ADAPTER_ERROR;
}
