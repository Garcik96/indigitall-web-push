/// <reference path="../.astro/types.d.ts" />
/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface User {
  name: string | null;
  email: string | null;
  // TODO:
}

declare namespace App {
  interface Locals {
    isLoggedIn: boolean;
    user: User;
  }
}
