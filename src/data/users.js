import { faker } from '@faker-js/faker';

export const data = [
  // add one user for testing purposes
  {
    userId: faker.datatype.uuid(),
    username: "test",
    email: "test@test.com",
    avatar: faker.image.avatar(),
    password: "123456",
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
  }
];

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