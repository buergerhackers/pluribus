var dotenv = require('dotenv');

// For local development, make sure a file named `.env` containing your AUTH0_CLIENT_SECRET,
// AUTH0_CLIENT_ID, and AUTH0_DOMAIN is in your project root directory (but don't commit it to git,
// it should be gitignored). Run your node server from your project root directory.

if (!process.env.NODE_ENV) {
  dotenv.load();
}

