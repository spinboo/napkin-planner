const schema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            unique: true,
            minimum: 1
          },
          firstName: {
            type: "string",
            faker: "name.findName"
          },
          lastName: {
            type: "string",
            faker: "name.findName"
          },
          email: {
            type: "string",
            format: "email",
            faker: "internet.email"
          },
          salary: {
            type: "integer",
            minimum: 15000,
            maximum: 50000
          }
        },
        required: ["id", "firstName", "lastName", "email", "salary"]
      }
    }
  },
  required: ["users"]
};

module.exports = schema;
