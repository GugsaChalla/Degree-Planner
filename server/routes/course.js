import express from 'express';
import { getCourseByName, getCourseData, getCoursesByDepartment, migrateApiData } from '../controllers/course';

const router = express.Router();

router.get('/migrate', migrateApiData);
router.get('/:id',getCourseData);
router.get('/dept/:dept', getCoursesByDepartment);
router.get('/name/:name', getCourseByName);

export default router;