// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getStudents(req, res);
        }

        case 'POST': {
            return addStudent(req, res);
        }

        case 'PUT': {
            return updateStudent(req, res);
        }

        case 'DELETE': {
            return deleteStudent(req, res);
        }
    }
}

// Getting all posts.
async function getStudents(req, res) {
    try {
        let { db } = await connectToDatabase();
        let students = await db
            .collection('students')
            .find({})
            .sort({ published: -1 })
            .toArray();
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

// Adding a new post
async function addStudent(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('students').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Updating a post
async function updateStudent(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('students').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// deleting a post
async function deleteStudent(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('students').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}