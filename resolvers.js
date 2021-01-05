const user = {
  _id: "1",
  name: "Paola Garay",
  email: "garay.angela@gmail.com",
  picture: "https://cloudinary.com/asddf"
}

module.exports = {
  Query: {
    me: () => user
  },
};
