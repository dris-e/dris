// import Stripe from "stripe";
// import { NextRequest, NextResponse } from "next/server";
// import { User } from "@clerk/nextjs/server";

// export async function createUser(user: User) {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

//   console.log("Getting user metadata");
//   const metadata = await clerk.users.getUser(user.id);
//   if (metadata.unsafeMetadata.stripeCustomerId) {
//     return;
//   }

//   console.log("Creating customer in Stripe");

//   const existingCustomers = await stripe.customers.list({
//     email: user.emailAddresses[0].emailAddress,
//     limit: 1,
//   });

//   console.log("Existing customers:", existingCustomers);

//   let customerId;
//   if (existingCustomers.data.length > 0) {
//     console.log("Customer found in Stripe");
//     customerId = existingCustomers.data[0].id;
//   } else {
//     console.log("Creating new customer in Stripe");
//     const newCustomer = await stripe.customers.create({
//       email: user.emailAddresses[0].emailAddress,
//       name: `${user.firstName} ${user.lastName}`,
//     });
//     customerId = newCustomer.id;
//   }

//   console.log("Updating user in Clerk");

//   await clerk.users.updateUserMetadata(user.id, {
//     unsafeMetadata: {
//       stripeCustomerId: customerId,
//     },
//     publicMetadata: {
//       isActive: false,
//       subscriptionID: null,
//       interval: null,
//       plan: null,
//     },
//   });

//   console.log(`User ${user.id} linked with Stripe customer ${customerId}`);
// }

// export async function deleteUser(userId: string) {
//   try {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

//     const user = await clerk.users.getUser(userId);
//     if (!user) return NextResponse.json({ error: "User not found!" }, { status: 404 });
//     const stripeCustomerId = user.unsafeMetadata.stripeCustomerId as string;

//     if (stripeCustomerId) {
//       await stripe.customers.del(stripeCustomerId);
//     }

//     console.log(`User ${userId} deleted from Stripe`);
//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return NextResponse.json({ error: error }, { status: 500 });
//   }
// }
