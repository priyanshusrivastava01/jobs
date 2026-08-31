import express from 'express';

const router = express.Router();

// In-memory store (replace with database later)
const applications = [];

// POST /api/applications — Submit a new application
router.post('/', (req, res) => {
  try {
    const application = {
      id: `APP-${Date.now()}`,
      ...req.body,
      submittedAt: new Date().toISOString(),
      status: 'received',
    };

    applications.push(application);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: { id: application.id },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit application',
    });
  }
});

// GET /api/applications — List all applications (for admin use later)
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: applications.length,
    data: applications,
  });
});

export default router;
