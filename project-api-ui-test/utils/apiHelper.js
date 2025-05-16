import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function createUser(name, job) {
  const response = await axios.post(
    "https://reqres.in/api/users",
    {
      name,
      job,
    },
    {
      headers: {
        "x-api-key": process.env.REQRES_API_KEY,
      },
    }
  );
  return response.data;
}
