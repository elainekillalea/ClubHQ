/* 
 *   https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
 *   - Rose Waitherero
 *   The tutorial above highly influenced the following code
 */
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      if (req.query.email) {
        return getSingleStudent(req, res);
      } else {
        return getStudents(req, res);
      }
    }

    case "POST": {
      return addStudent(req, res);
    }

    case "PUT": {
      console.log("put");
      return updateStudent(req, res);
    }

    case "DELETE": {
      return deleteStudent(req, res);
    }
  }
}

// Getting a single student
async function getSingleStudent(req, res) {
  try {
    let { db } = await connectToDatabase();
    let student = await db
      .collection("students")
      .findOne({ email: req.query.email });
    return res.json({
      message: JSON.parse(JSON.stringify(student)),
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
async function getStudents(req, res) {
  try {
    let { db } = await connectToDatabase();
    let students = await db.collection("students").find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(students)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Adding a new student
async function addStudent(req, res) {
  try {
    let { db } = await connectToDatabase();
    await db.collection("students").insertOne(JSON.parse(req.body));
    return res.json({
      message: "Student added successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function updateStudent(req, res) {
  try {
    console.log("update");
    let { db } = await connectToDatabase();
    const { _id, name, birthday, address, phone, emergencyContact, grade, email, studentID } = req.body;
    await db.collection("students").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name,
          birthday,
          address,
          phone,
          emergencyContact,
          grade,
          email,
          studentID,
        },
      }
    );
    return res.json({
      message: "Student updated successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function deleteStudent(req, res) {
  try {
    let { db } = await connectToDatabase();
    await db.collection("students").deleteOne({
      studentID: req.body.studentID,
    });
    return res.json({
      message: "Student deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

