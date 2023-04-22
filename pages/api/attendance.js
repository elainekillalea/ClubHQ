// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      if (req.query.studentIDs) {
        console.log("get CA");
        return getClassesAttended(req, res);
      } else {
        console.log("Get attendance");
        return getAttendance(req, res);
      }
    }

    case "POST": {
      return addAttendance(req, res);
    }

    case "PUT": {
      return updateAttendance(req, res);
    }

    case "DELETE": {
      return deleteAttendance(req, res);
    }
  }
}

// Getting a single student
async function getClassesAttended(req, res) {
  try {
    let { db } = await connectToDatabase();
    console.log(req.query.studentIDs);
    let classAttended = await db
      .collection("attendance")
      .find({ studentIDs: req.query.studentIDs })  // req.query.studentIDs
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(classAttended)),
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
    console.log("Att db: " + attendance);
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

async function addAttendance(req, res) {
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

async function updateAttendance(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("students").updateOne(
      {
        _id: new ObjectId(req.body),
      },
      { $set: { published: true } }
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

async function deleteAttendance(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("students").deleteOne({
      _id: new ObjectId(req.body),
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
