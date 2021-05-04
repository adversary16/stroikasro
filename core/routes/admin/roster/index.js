const express = require('express');
const company = require('../../../models/company');
const {createOrUpdateCompany} = require('../../../modules/companies');
const router = express.Router();

router.put('/', async (req, res) => {
  const company = req.body;
  try {
    await createOrUpdateCompany({company});
    return res.status(200).json({});
  } catch (e) {
    return res.status(400).json({error: e});
  }
});

router.get('/', async (req, res) => {
  const companies = await company.find({});
  return res.status(200).json({companies});
});


module.exports = router;
