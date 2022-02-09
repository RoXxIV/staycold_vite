module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '66038ae8e09e2f9ad837e56888e24707'),
  },
});
