import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { userId, email, priceId } = await req.json();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, email },
      mode: "subscription",
      success_url: `${process.env.HOST}/payment/gateway/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.HOST}/payment/gateway/stripe/cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ status: 200, sessionId: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
