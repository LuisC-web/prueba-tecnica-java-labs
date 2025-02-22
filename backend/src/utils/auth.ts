import bcrypt from "bcrypt";
export const hashPassword = async (password: string, hash: number) => {
  const salt = await bcrypt.genSalt(hash);
  return await bcrypt.hash(password, salt);
};
export const checkPassword = async (password: string, passwordHash: string) => {
  return await bcrypt.compare(password, passwordHash);
};
