import { toast } from "@/components/ui/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export async function handleStripeCheckout(price: string, isAnnual: boolean) {
  try {
    const { data } = await axios.post(`/api/payment/gateway/stripe/checkout`, {
      price,
      isAnnual,
    });

    if (data.sessionId) {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
      );

      const response = await stripe!.redirectToCheckout({
        sessionId: data.sessionId,
      });

      return response;
    } else {
      toast({ title: "Failed to create checkout session" });
      return;
    }
  } catch (error) {
    toast({ title: "Error during checkout", description: `${error}` });
    return;
  }
}
