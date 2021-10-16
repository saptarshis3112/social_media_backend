const { userController } = require("../controllers");
const { headerValidation } = require("../validations");

const tags = ["api", "user"];

module.exports = {

  name: "user",
  register: (server, options) => {

    const routes = [
      {
        method: "GET",
        path: "/user/details",
        config: {
          auth: "default",
          description: "User Details Route",
          tags,
          handler: userController.getUserDetails,
          validate: {
            headers: headerValidation,
          }
        }
      },
    ];

    server.route(routes);

  },

};
