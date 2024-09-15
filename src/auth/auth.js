export const userSignIn = async (email, password) => {
  const { signIn } = await import('auth-astro/client');

  const response = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (response) {
    throw new Error('Invalid login');
  }

  return true;
};

export const userSignOut = async () => {
  const { signOut } = await import('auth-astro/client');
  await signOut();
  return true;
};
