import { ValueObject } from "@/lib/common/ddd/value-object.base";
import { compareSync, hashSync } from "bcryptjs";

export interface PasswordValueObjectProps {
  password: string;
}

export class PasswordValueObject extends ValueObject<PasswordValueObjectProps> {
  static create(props: PasswordValueObjectProps): PasswordValueObject {
    const hashedPassword = hashSync(props.password, 10);
    const entity = new PasswordValueObject({
      password: hashedPassword,
    });
    return entity;
  }
  public validate() {}

  password(): string {
    return this.props.password;
  }

  compare(plainTextPassword: string): boolean {
    return compareSync(plainTextPassword, this.password());
  }
}
