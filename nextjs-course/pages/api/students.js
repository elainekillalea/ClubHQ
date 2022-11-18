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