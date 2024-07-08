import { SvelteKitAuth } from "@auth/sveltekit";
import { AUTH_SECRET } from "$env/static/private";

const auth = SvelteKitAuth({
  providers: [],
  session: {
    maxAge: 60 * 60 * 24 * 365,
    strategy: "jwt",
  },

  secret: AUTH_SECRET,
});

export const handle = auth.handle;