import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    require: true,
    unique: true,
  },
  name: {
    require: true,
    unique: true,
  },
});

const User = models.User || model("user", userSchema);
export default User;
