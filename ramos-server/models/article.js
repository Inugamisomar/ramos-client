const mongoose = require(
  "mongoose"
);

const articleSchema =
  new mongoose.Schema(
    {
      title: String,

      slug: String,

      preview: String,

      content: [String],

      image: String,

      status: {
        type: String,
        default: "Active",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Article",
    articleSchema
  );