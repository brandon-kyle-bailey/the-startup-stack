import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { price, isAnnual } = await req.json();
    const unit_amount = Number((Number(price) * 100).toFixed(2));
    let subscriptionModel: { [key: string]: any } = {
      price_data: {
        unit_amount_decimal: unit_amount,
        currency: "usd",
        tax_behavior: "exclusive",
        product_data: {
          name: `Subscription - ${isAnnual ? "Annually" : "Monthly"}`,
        },
      },
      quantity: 1,
    };
    if (unit_amount !== 0) {
      subscriptionModel.price_data.recurring = {
        interval: isAnnual ? "year" : "month",
        interval_count: 1,
      };
    }
    const session = await stripe.checkout.sessions.create({
      line_items: [subscriptionModel],
      mode: unit_amount === 0 ? "payment" : "subscription",
      success_url: `${process.env.HOST}/payment/gateway/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.HOST}/payment/gateway/stripe/cancel`,
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
