import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SupabaseAdapter } from "@/lib/infrastructure/adapters/supabase/supabase.adapter";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export class AuthAdapter {
  constructor(private readonly logManager: ILogManager) {}

  async signinWithPassword(input: SigninRequestDto) {
    this.logManager.debug("AuthAdapter.signinWithPassword invoked:", input);
    return await AuthAdapter.SigninWithPassword(input);
  }

  async signup(input: SignupRequestDto) {
    this.logManager.debug("AuthAdapter.signup invoked:", input);
    return await AuthAdapter.Signup(input);
  }

  async signout() {
    this.logManager.debug("AuthAdapter.signout invoked");
    return await AuthAdapter.Signout();
  }

  static async Signup(input: SignupRequestDto) {
    const client = SupabaseAdapter.ServerClient();
    return await client.auth.signUp({
      ...input,
      options: { emailRedirectTo: container.auth.emailRedirectTo },
    });
  }

  static async ResetPasswordForEmail(email: string) {
    const client = SupabaseAdapter.ServerClient();
    await client.auth.resetPasswordForEmail(email, {
      redirectTo: container.auth.updatePasswordRedirectTo,
    });
  }

  static async UpdateUserPassword(password_hash: string) {
    const client = SupabaseAdapter.ServerClient();
    return await client.auth.updateUser({ password: password_hash });
  }

  static async SigninWithPassword(input: SigninRequestDto) {
    const client = SupabaseAdapter.ServerClient();
    return await client.auth.signInWithPassword(input);
  }

  static async Signout() {
    const client = SupabaseAdapter.ServerClient();
    return await client.auth.signOut();
  }

  static async GetUserSession(client: SupabaseClient) {
    return await client.auth.getUser();
  }
}
