import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const stripe_signature = req.headers.get("stripe-signature")! as string;
    const text = await req.text();
    const event = await stripe.webhooks.constructEventAsync(
      text,
      stripe_signature!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    console.log("received event", event.type);
    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        break;
      case "checkout.session.expired":
        const checkoutSessionExpired = event.data.object;
        // Then define and call a function to handle the event checkout.session.expired
        break;
      case "customer.created":
        const customerCreated = event.data.object;
        // Then define and call a function to handle the event customer.created
        break;
      case "customer.deleted":
        const customerDeleted = event.data.object;
        // Then define and call a function to handle the event customer.deleted
        break;
      case "customer.updated":
        const customerUpdated = event.data.object;
        // Then define and call a function to handle the event customer.updated
        break;
      case "customer.discount.created":
        const customerDiscountCreated = event.data.object;
        // Then define and call a function to handle the event customer.discount.created
        break;
      case "customer.discount.deleted":
        const customerDiscountDeleted = event.data.object;
        // Then define and call a function to handle the event customer.discount.deleted
        break;
      case "customer.discount.updated":
        const customerDiscountUpdated = event.data.object;
        // Then define and call a function to handle the event customer.discount.updated
        break;
      case "customer.source.created":
        const customerSourceCreated = event.data.object;
        // Then define and call a function to handle the event customer.source.created
        break;
      case "customer.source.deleted":
        const customerSourceDeleted = event.data.object;
        // Then define and call a function to handle the event customer.source.deleted
        break;
      case "customer.source.expiring":
        const customerSourceExpiring = event.data.object;
        // Then define and call a function to handle the event customer.source.expiring
        break;
      case "customer.source.updated":
        const customerSourceUpdated = event.data.object;
        // Then define and call a function to handle the event customer.source.updated
        break;
      case "customer.subscription.created":
        const customerSubscriptionCreated = event.data.object;
        // Then define and call a function to handle the event customer.subscription.created
        break;
      case "customer.subscription.deleted":
        const customerSubscriptionDeleted = event.data.object;
        // Then define and call a function to handle the event customer.subscription.deleted
        break;
      case "customer.subscription.paused":
        const customerSubscriptionPaused = event.data.object;
        // Then define and call a function to handle the event customer.subscription.paused
        break;
      case "customer.subscription.pending_update_applied":
        const customerSubscriptionPendingUpdateApplied = event.data.object;
        // Then define and call a function to handle the event customer.subscription.pending_update_applied
        break;
      case "customer.subscription.pending_update_expired":
        const customerSubscriptionPendingUpdateExpired = event.data.object;
        // Then define and call a function to handle the event customer.subscription.pending_update_expired
        break;
      case "customer.subscription.resumed":
        const customerSubscriptionResumed = event.data.object;
        // Then define and call a function to handle the event customer.subscription.resumed
        break;
      case "customer.subscription.trial_will_end":
        const customerSubscriptionTrialWillEnd = event.data.object;
        // Then define and call a function to handle the event customer.subscription.trial_will_end
        break;
      case "customer.subscription.updated":
        const customerSubscriptionUpdated = event.data.object;
        // Then define and call a function to handle the event customer.subscription.updated
        break;
      case "customer.tax_id.created":
        const customerTaxIdCreated = event.data.object;
        // Then define and call a function to handle the event customer.tax_id.created
        break;
      case "customer.tax_id.deleted":
        const customerTaxIdDeleted = event.data.object;
        // Then define and call a function to handle the event customer.tax_id.deleted
        break;
      case "customer.tax_id.updated":
        const customerTaxIdUpdated = event.data.object;
        // Then define and call a function to handle the event customer.tax_id.updated
        break;
      case "invoice.created":
        const invoiceCreated = event.data.object;
        // Then define and call a function to handle the event invoice.created
        break;
      case "invoice.deleted":
        const invoiceDeleted = event.data.object;
        // Then define and call a function to handle the event invoice.deleted
        break;
      case "invoice.finalization_failed":
        const invoiceFinalizationFailed = event.data.object;
        // Then define and call a function to handle the event invoice.finalization_failed
        break;
      case "invoice.finalized":
        const invoiceFinalized = event.data.object;
        // Then define and call a function to handle the event invoice.finalized
        break;
      case "invoice.marked_uncollectible":
        const invoiceMarkedUncollectible = event.data.object;
        // Then define and call a function to handle the event invoice.marked_uncollectible
        break;
      case "invoice.overdue":
        const invoiceOverdue = event.data.object;
        // Then define and call a function to handle the event invoice.overdue
        break;
      case "invoice.paid":
        const invoicePaid = event.data.object;
        // Then define and call a function to handle the event invoice.paid
        break;
      case "invoice.payment_action_required":
        const invoicePaymentActionRequired = event.data.object;
        // Then define and call a function to handle the event invoice.payment_action_required
        break;
      case "invoice.payment_failed":
        const invoicePaymentFailed = event.data.object;
        // Then define and call a function to handle the event invoice.payment_failed
        break;
      case "invoice.payment_succeeded":
        const invoicePaymentSucceeded = event.data.object;
        // Then define and call a function to handle the event invoice.payment_succeeded
        break;
      case "invoice.sent":
        const invoiceSent = event.data.object;
        // Then define and call a function to handle the event invoice.sent
        break;
      case "invoice.upcoming":
        const invoiceUpcoming = event.data.object;
        // Then define and call a function to handle the event invoice.upcoming
        break;
      case "invoice.updated":
        const invoiceUpdated = event.data.object;
        // Then define and call a function to handle the event invoice.updated
        break;
      case "invoice.voided":
        const invoiceVoided = event.data.object;
        // Then define and call a function to handle the event invoice.voided
        break;
      case "invoice.will_be_due":
        const invoiceWillBeDue = event.data.object;
        // Then define and call a function to handle the event invoice.will_be_due
        break;
      case "refund.created":
        const refundCreated = event.data.object;
        // Then define and call a function to handle the event refund.created
        break;
      case "refund.updated":
        const refundUpdated = event.data.object;
        // Then define and call a function to handle the event refund.updated
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({
      status: 200,
      message: `${event.type} received received successfully`,
    });
  } catch (error) {
    console.error("Stripe webhook handler experienced an error", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
