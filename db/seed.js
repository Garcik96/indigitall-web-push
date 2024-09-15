import { db, User } from 'astro:db';
import { v4 as UUID } from 'uuid';
import bcrypt from 'bcryptjs';

// https://astro.build/db/seed
export default async function seed() {
  const indigitallAdmin = {
    id: UUID(),
    name: 'Admin Indigitall',
    email: 'admin@indigitall.com',
    password: bcrypt.hashSync('admin'),
  };

  const ivanGarcia = {
    id: UUID(),
    name: 'Iván García Ballesteros',
    email: 'garcia.ballesteros96@gmail.com',
    password: bcrypt.hashSync('ivan'),
  };

  await db.insert(User).values([indigitallAdmin, ivanGarcia]);
}
