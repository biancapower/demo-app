import { faker } from '@faker-js/faker';

export const data = [];

// const Main = () => {
// export function createRandomUser() {
const CreateRandomUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  data.push(CreateRandomUser());
});