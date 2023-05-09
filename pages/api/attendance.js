/* 
 *   https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
 *   - Rose Waitherero
 *   The tutorial above influenced the following code
 */

const { connectToDatabase } = require("../../lib/mongodb");

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.studentID) {
      return getClassesAttended(req, res);
    } else {
      return getAttendance(req, res);
    }
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
}

// Getting a single student
async function getClassesAttended(req, res) {
  try {
    let { db } = await connectToDatabase();
    let classAttended = await db
      .collection("attendance")
      .find({ studentIDs: { $in: [parseInt(req.query.studentID)] } })
      .toArray();
    return res.json({
      message: classAttended,
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Getting all students.
async function getAttendance(req, res) {
  try {
    let { db } = await connectToDatabase();
    let attendance = await db.collection("attendance").find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(attendance)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
