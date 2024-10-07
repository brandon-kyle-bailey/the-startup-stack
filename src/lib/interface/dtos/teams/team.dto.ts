export interface TeamDto {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  stripe_product_id?: string;
  plan_name?: string;
  subscription_status?: string;
}
