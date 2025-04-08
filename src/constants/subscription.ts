const SUBSCRIPTION_PLANS = {
  PRO: {
    id: "prod_PZ555555555555",
    name: "Pro",
  },
  ENTERPRISE: {
    id: "prod_PZ555555555555",
    name: "Enterprise",
  },
};

export function isSubscriptionAllowed(plan: string) {
  return Object.keys(SUBSCRIPTION_PLANS).includes(plan);
}

export function getSubscriptionPlan(plan: string) {
  return SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS];
}
